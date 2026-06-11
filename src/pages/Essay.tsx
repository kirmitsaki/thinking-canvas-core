import type React from "react";
import { Link, useParams } from "react-router-dom";
import { PageHeader, PageRule, PageShell } from "@/components/PageShell";
import { essays, essayOrder, type EssayParagraph } from "@/content/essays";

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

const romans = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"];

function renderParagraph(p: EssayParagraph, i: number) {
  if (typeof p === "string") {
    return (
      <p
        key={i}
        className="mb-7 text-[17px] leading-[1.8] text-[hsl(var(--ink-body))]"
      >
        {p}
      </p>
    );
  }
  switch (p.type) {
    case "hook":
      return (
        <p
          key={i}
          className="hook mb-12 font-editorial italic text-[20px] leading-[1.4] tracking-[-0.005em] text-[hsl(var(--accent-stone))]"
        >
          {p.text}
        </p>
      );
    case "smallcaps":
      return (
        <p
          key={i}
          className="mb-7 text-[17px] leading-[1.8] text-[hsl(var(--ink-body))]"
        >
          <span className="smallcaps">{p.prefix}</span>
          {p.text}
        </p>
      );
    case "pull":
      return (
        <p
          key={i}
          className="my-14 max-w-[540px] font-editorial italic text-[20px] leading-[1.45] tracking-[-0.005em] text-[hsl(var(--accent-stone))]"
        >
          {p.text}
        </p>
      );
    case "closing":
      return (
        <p
          key={i}
          className="mt-14 mb-8 font-editorial italic text-[18px] md:text-[20px] leading-[1.5] text-[hsl(var(--ink-body))]"
        >
          {p.text}
        </p>
      );
    case "body":
    default:
      return (
        <p
          key={i}
          className="mb-7 text-[17px] leading-[1.8] text-[hsl(var(--ink-body))]"
        >
          {p.text}
        </p>
      );
  }
}

export default function Essay() {
  const { slug } = useParams();
  const essay = slug ? essays[slug] : undefined;

  if (!essay) {
    return (
      <PageShell>
        <PageHeader
          title="Not found"
          size="essay"
          preTitle={<BackToWriting className="mb-4" />}
        />
      </PageShell>
    );
  }

  const currentIndex = essayOrder.indexOf(slug!);
  const prevIndex = (currentIndex - 1 + essayOrder.length) % essayOrder.length;
  const nextIndex = (currentIndex + 1) % essayOrder.length;
  const prevSlug = essayOrder[prevIndex];
  const nextSlug = essayOrder[nextIndex];
  const prevEssay = essays[prevSlug];
  const nextEssay = essays[nextSlug];

  return (
    <PageShell>
      <PageHeader
        title={essay.title}
        size="essay"
        preTitle={<BackToWriting className="mb-4" />}
      />

      <PageRule />

      <article className="py-14 md:py-20 prose-body">
        {essay.paragraphs.map((p, i) => renderParagraph(p, i))}

        <nav className="border-t border-[hsl(var(--hairline))] mt-20 pt-12 md:pt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          <Link to={`/essays/${prevSlug}`} className="group">
            <span className="block font-editorial font-light text-[22px] md:text-[28px] leading-[1.1] tracking-[-0.01em] text-[hsl(var(--meta-ink))] group-hover:text-[hsl(var(--accent-stone))] transition-colors duration-300">
              {romans[prevIndex]}
            </span>
            <span className="block mt-2 font-editorial text-[17px] md:text-[19px] leading-[1.35] text-[hsl(var(--ink-body))] group-hover:italic transition-[font-style]">
              <span className="mr-2 text-[hsl(var(--meta-ink))] group-hover:text-[hsl(var(--accent-stone))] inline-block group-hover:-translate-x-1 transition-all duration-300">
                ←
              </span>
              {prevEssay.title}
            </span>
          </Link>

          <Link to={`/essays/${nextSlug}`} className="group md:text-right">
            <span className="block font-editorial font-light text-[22px] md:text-[28px] leading-[1.1] tracking-[-0.01em] text-[hsl(var(--meta-ink))] group-hover:text-[hsl(var(--accent-stone))] transition-colors duration-300">
              {romans[nextIndex]}
            </span>
            <span className="block mt-2 font-editorial text-[17px] md:text-[19px] leading-[1.35] text-[hsl(var(--ink-body))] group-hover:italic transition-[font-style]">
              {nextEssay.title}
              <span className="ml-2 text-[hsl(var(--meta-ink))] group-hover:text-[hsl(var(--accent-stone))] inline-block group-hover:translate-x-1 transition-all duration-300">
                →
              </span>
            </span>
          </Link>
        </nav>
      </article>
    </PageShell>
  );
}
