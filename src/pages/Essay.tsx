import { Link, useParams } from "react-router-dom";
import { PageHeader, PageRule, PageShell } from "@/components/PageShell";
import { essays, type EssayParagraph } from "@/content/essays";

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
              textTransform: "lowercase",
              fontVariant: "small-caps",
              letterSpacing: "0.06em",
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

  return (
    <PageShell>
      <div className="pt-10 md:pt-14">
        <BackToWriting />
      </div>

      <PageHeader title={essay.title} size="essay" />

      <PageRule />

      <article className="py-14 md:py-20" style={{ maxWidth: "640px" }}>
        {essay.paragraphs.map((p, i) => renderParagraph(p, i))}

        <BackToWriting className="mt-20" />
      </article>
    </PageShell>
  );
}
