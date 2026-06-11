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

      <article className="py-14 md:py-20 max-w-[620px] mx-auto">
        {lede && (
          <p className="font-editorial text-[22px] md:text-[23.4px] leading-[1.75] text-[hsl(var(--ink-strong))] mb-[2em]">
            {lede}
          </p>
        )}
        {body.map((p, i) => {
          const isLast = i === body.length - 1;
          const isPullQuote = !p.includes("\n") && p.length <= 120 && (p.match(/\./g) || []).length <= 2;
          const spacing = isPullQuote || isLast ? "my-[1.8em]" : "mb-[1.4em]";
          return (
            <p
              key={i}
              className={`text-[17px] md:text-[18px] leading-[1.75] text-[hsl(var(--ink-body))] ${spacing}`}
            >
              {p}
            </p>
          );
        })}

        <BackToWriting className="mt-20 block" />
      </article>
    </PageShell>
  );
}
