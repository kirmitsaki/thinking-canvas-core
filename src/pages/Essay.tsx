import { Link, useParams } from "react-router-dom";
import { PageHeader, PageRule, PageShell } from "@/components/PageShell";
import { essays } from "@/content/essays";

const BackToWriting = ({ className = "" }: { className?: string }) => (
  <Link
    to="/writing"
    className={
      "inline-block text-[12px] uppercase tracking-[0.22em] text-[hsl(var(--meta-ink))] hover:text-[hsl(var(--ink-strong))] transition-colors " +
      className
    }
  >
    ← Writing
  </Link>
);

export default function Essay() {
  const { slug } = useParams();
  const essay = slug ? essays[slug] : undefined;

  if (!essay) {
    return (
      <PageShell>
        <section className="py-32 max-w-[900px]">
          <p className="font-editorial text-3xl text-[hsl(var(--ink-strong))]">
            Not found.
          </p>
          <BackToWriting className="mt-6" />
        </section>
      </PageShell>
    );
  }

  const [lede, ...body] = essay.paragraphs;

  return (
    <PageShell>
      <div className="pt-10 md:pt-14">
        <BackToWriting />
      </div>

      <PageHeader title={essay.title} size="essay" />

      <PageRule />

      <article className="py-14 md:py-20 max-w-[680px]">
        {lede && (
          <p className="font-editorial text-[24px] md:text-[32px] leading-[1.3] tracking-[-0.005em] text-[hsl(var(--ink-strong))] mb-12">
            {lede}
          </p>
        )}
        {body.map((p, i) => (
          <p
            key={i}
            className="mb-6 text-[17px] md:text-[18px] leading-[1.7] text-[hsl(var(--ink-body))]"
          >
            {p}
          </p>
        ))}

        <BackToWriting className="mt-20" />
      </article>
    </PageShell>
  );
}
