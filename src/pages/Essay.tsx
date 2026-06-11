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

      <article className="py-14 md:py-20 max-w-[640px]">
        {lede && (
          <p className="font-editorial text-[20px] md:text-[22px] leading-[1.85] text-[hsl(var(--ink-strong))] mb-12">
            {lede}
          </p>
        )}
        {body.map((p, i) => {
          const isPullQuote = p.length <= 160;
          const isSectionBreak = /^(The first move|The harder work|The moment design becomes)/i.test(
            p
          );
          const classes = [
            "text-[17px] md:text-[18px] leading-[1.85] text-[hsl(var(--ink-body))]",
            isPullQuote ? "my-24" : "mb-12",
            !isPullQuote && isSectionBreak ? "mt-[4.5rem]" : "",
          ]
            .filter(Boolean)
            .join(" ");
          return (
            <p key={i} className={classes}>
              {p}
            </p>
          );
        })}

        <BackToWriting className="mt-20 block" />
      </article>
    </PageShell>
  );
}
