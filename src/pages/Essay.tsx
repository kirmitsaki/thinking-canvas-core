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

const ACCENT = "#8B2500";

const bodyParagraphStyle: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: 1.8,
  marginBottom: "1.6rem",
};

function renderParagraph(p: EssayParagraph, i: number) {
  if (typeof p === "string") {
    return (
      <p
        key={i}
        className="text-[hsl(var(--ink-body))]"
        style={bodyParagraphStyle}
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
          className="font-serif italic"
          style={{
            fontSize: "1.6rem",
            lineHeight: 1.4,
            color: ACCENT,
            marginBottom: "3rem",
            textAlign: "left",
          }}
        >
          {p.text}
        </p>
      );
    case "smallcaps":
      return (
        <p
          key={i}
          className="text-[hsl(var(--ink-body))]"
          style={bodyParagraphStyle}
        >
          <span
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              fontSize: "0.82em",
              fontWeight: 600,
            }}
          >
            {p.prefix}
          </span>
          {p.text}
        </p>
      );
    case "pull":
      return (
        <p
          key={i}
          className="font-serif italic"
          style={{
            fontSize: "1.45rem",
            lineHeight: 1.5,
            color: ACCENT,
            marginTop: "3.5rem",
            marginBottom: "3.5rem",
            maxWidth: "540px",
            textAlign: "left",
          }}
        >
          {p.text}
        </p>
      );
    case "closing":
      return (
        <p
          key={i}
          className="font-serif italic text-[hsl(var(--ink-body))]"
          style={{
            fontSize: "1.1rem",
            marginTop: "3.5rem",
            marginBottom: "2rem",
            textAlign: "left",
          }}
        >
          {p.text}
        </p>
      );
    case "body":
    default:
      return (
        <p
          key={i}
          className="text-[hsl(var(--ink-body))]"
          style={bodyParagraphStyle}
        >
          {p.text}
        </p>
      );
  }
}

const romans = ["I","II","III","IV","V","VI","VII","VIII","IX","X","XI"];

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

  const currentIndex = essayOrder.indexOf(slug);
  const prevIndex = (currentIndex - 1 + essayOrder.length) % essayOrder.length;
  const nextIndex = (currentIndex + 1) % essayOrder.length;
  const prevSlug = essayOrder[prevIndex];
  const nextSlug = essayOrder[nextIndex];
  const prevEssay = essays[prevSlug];
  const nextEssay = essays[nextSlug];

  return (
    <PageShell>
      <PageHeader title={essay.title} size="essay" preTitle={<BackToWriting className="mb-4" />} />

      <PageRule />

      <article className="py-14 md:py-20" style={{ maxWidth: "640px" }}>
        {essay.paragraphs.map((p, i) => renderParagraph(p, i))}

        <nav className="border-t border-[hsl(var(--hairline))] mt-20 pt-12 md:pt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          <Link to={`/essays/${prevSlug}`} className="group">
            <span className="block font-editorial font-light text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.01em] text-[hsl(var(--ink-strong))] opacity-20 group-hover:opacity-60 transition-opacity duration-300">
              {romans[prevIndex]}
            </span>
            <span className="block mt-2 font-editorial text-[17px] md:text-[19px] leading-[1.35] text-[hsl(var(--ink-body))] group-hover:italic transition-[font-style]">
              <span className="mr-2 text-[hsl(var(--meta-ink))]">←</span>
              {prevEssay.title}
            </span>
          </Link>

          <Link to={`/essays/${nextSlug}`} className="group md:text-right">
            <span className="block font-editorial font-light text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.01em] text-[hsl(var(--ink-strong))] opacity-20 group-hover:opacity-60 transition-opacity duration-300">
              {romans[nextIndex]}
            </span>
            <span className="block mt-2 font-editorial text-[17px] md:text-[19px] leading-[1.35] text-[hsl(var(--ink-body))] group-hover:italic transition-[font-style]">
              {nextEssay.title}
              <span className="ml-2 text-[hsl(var(--meta-ink))]">→</span>
            </span>
          </Link>
        </nav>
      </article>
    </PageShell>
  );
}
