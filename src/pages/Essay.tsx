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
          className="my-14 max-w-[540px] font-editorial italic text-[21px] leading-[1.45] tracking-[-0.005em] text-[hsl(var(--accent-stone))]"
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

/* ===== Essay 1 — "Building and leading design organisations" custom layout ===== */
const BRICK = "#8B2500";
const bodyStyle: React.CSSProperties = {
  fontSize: "17px",
  lineHeight: 1.8,
  marginBottom: "1.6rem",
  textAlign: "left",
};
const scStyle: React.CSSProperties = {
  fontVariant: "small-caps",
  fontVariantCaps: "all-small-caps",
  fontFeatureSettings: '"smcp" 1, "c2sc" 1',
  fontSynthesis: "small-caps",
  fontSize: "0.9em",
  letterSpacing: "0.05em",
  fontWeight: 600,
};

function SC({ children }: { children: React.ReactNode }) {
  return <span style={scStyle}>{children}</span>;
}

function renderEssay1(paragraphs: EssayParagraph[]) {
  // Find each paragraph by its content and render with bespoke styling.
  const find = (needle: string) => {
    const p = paragraphs.find(
      (x) =>
        (typeof x === "string" ? x : x.type === "smallcaps" ? x.prefix + x.text : x.text).includes(
          needle,
        ),
    );
    if (!p) return "";
    return typeof p === "string"
      ? p
      : p.type === "smallcaps"
      ? p.prefix + p.text
      : p.text;
  };

  const hook = find("Design leadership isn't about design");
  const opening = find("I didn't arrive at that cleanly");
  const firstMoveFull = find("wasn't a strategy deck");
  // Split at "and I listened." | "What's frustrating you?"
  const splitIdx = firstMoveFull.indexOf("What's frustrating you?");
  const firstMoveA = firstMoveFull.slice(0, splitIdx).trimEnd();
  const firstMoveB = firstMoveFull.slice(splitIdx);
  // strip "The first move" prefix for first part
  const firstMoveARest = firstMoveA.replace(/^The first move/, "").trimStart();

  const harderFull = find("was cultural");
  const harderRest = harderFull.replace(/^The harder work/, "").trimStart();

  const cultureFit = find("Getting that mix wrong");
  const unlearning = find("I've also had to unlearn");
  const pull = find("Clarity builds trust");

  const momentFull = find("becomes strategic isn't");
  const momentRest = momentFull.replace(/^The moment design/, "").trimStart();

  const building = find("That's what I'm building every time");
  const closing = find("At the end of the day, it's just pixels");

  return (
    <div style={{ maxWidth: 640, margin: "0 auto" }}>
      {/* Hook */}
      <p
        style={{
          fontSize: "1.8rem",
          fontStyle: "italic",
          color: BRICK,
          maxWidth: 700,
          marginTop: "2.5rem",
          marginBottom: "3rem",
          lineHeight: 1.35,
          textAlign: "left",
        }}
      >
        {hook}
      </p>

      {/* Opening */}
      <p style={{ ...bodyStyle, marginBottom: "2.5rem" }}>{opening}</p>

      {/* The first move */}
      <p style={bodyStyle}>
        <SC>The first move</SC>
        {firstMoveARest ? " " + firstMoveARest : ""}
        <span style={{ display: "block", marginTop: "1rem" }}>{firstMoveB}</span>
      </p>

      {/* Harder work — tighter pair */}
      <p style={{ ...bodyStyle, marginBottom: "1rem" }}>
        <SC>The harder work</SC> {harderRest}
      </p>
      <p style={bodyStyle}>{cultureFit}</p>

      {/* Unlearning — maximum breathing room */}
      <p style={{ ...bodyStyle, marginTop: "3rem", marginBottom: "3rem" }}>
        {unlearning}
      </p>

      {/* Pull quote */}
      <p
        className="font-editorial"
        style={{
          fontSize: "1.5rem",
          fontStyle: "italic",
          color: BRICK,
          maxWidth: 640,
          marginTop: "3.5rem",
          marginBottom: "3.5rem",
          lineHeight: 1.5,
          textAlign: "left",
        }}
      >
        {pull}
      </p>


      {/* The moment design */}
      <p style={{ ...bodyStyle, marginTop: "3rem" }}>
        <SC>The moment design becomes</SC>
        {momentRest.replace(/^becomes/, "")}
      </p>
      <p style={bodyStyle}>{building}</p>

      {/* Closing */}
      <p
        style={{
          fontStyle: "italic",
          fontSize: "1.15rem",
          fontFamily: "var(--font-editorial, Georgia, serif)",
          textAlign: "left",
          marginTop: "4rem",
          marginBottom: "2rem",
          color: "hsl(var(--ink-body))",
          lineHeight: 1.5,
        }}
      >
        {closing}
      </p>
    </div>
  );
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

      <article className={"py-14 md:py-20" + (slug === "building-and-leading-design-organisations" ? "" : " prose-body")}>
        {slug === "building-and-leading-design-organisations"
          ? renderEssay1(essay.paragraphs)
          : essay.paragraphs.map((p, i) => renderParagraph(p, i))}



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
