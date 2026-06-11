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

const ACCENT = "hsl(var(--accent-stone))";

function renderParagraph(p: EssayParagraph, i: number) {
  if (typeof p === "string") {
    return (
      <p
        key={i}
        className="mb-6 text-[17px] md:text-[18px] leading-[1.7] text-[hsl(var(--ink-body))]"
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
          className="font-serif italic leading-[1.4]"
          style={{
            fontSize: "1.6rem",
            color: ACCENT,
            marginBottom: "3rem",
          }}
        >
          {p.text}
        </p>
      );
    case "example":
      return (
        <p
          key={i}
          className="text-[17px] md:text-[18px] leading-[1.7] text-[hsl(var(--ink-body))]"
          style={{
            borderLeft: `3px solid ${ACCENT}`,
            paddingLeft: "20px",
            marginTop: "1.8rem",
            marginBottom: "1.8rem",
          }}
        >
          {p.text}
        </p>
      );
    case "smallcaps":
      return (
        <p
          key={i}
          className="mb-6 text-[17px] md:text-[18px] leading-[1.7] text-[hsl(var(--ink-body))]"
        >
          <span
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              fontSize: "0.82em",
              fontWeight: 600,
              color: "hsl(var(--ink-strong))",
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
            color: ACCENT,
            textAlign: "center",
            marginTop: "3.5rem",
            marginBottom: "3.5rem",
            lineHeight: 1.5,
            maxWidth: "500px",
            marginLeft: "auto",
            marginRight: "auto",
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
            textAlign: "center",
            fontSize: "1.1rem",
            marginTop: "3.5rem",
            marginBottom: "2rem",
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
          className="mb-6 text-[17px] md:text-[18px] leading-[1.7] text-[hsl(var(--ink-body))]"
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

  // If first paragraph is a plain string, treat it as a large lede (legacy style).
  // If it's a typed object (e.g. hook), render via renderParagraph.
  const first = essay.paragraphs[0];
  const firstIsLegacyLede = typeof first === "string";
  const lede = firstIsLegacyLede ? (first as string) : null;
  const body = firstIsLegacyLede ? essay.paragraphs.slice(1) : essay.paragraphs;

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
        {body.map((p, i) => renderParagraph(p, i))}

        <BackToWriting className="mt-20" />
      </article>
    </PageShell>
  );
}
