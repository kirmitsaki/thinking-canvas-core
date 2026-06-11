import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { PageHeader, PageRule, PageShell } from "@/components/PageShell";
import { essays } from "@/content/essays";
import { essayMeta, type EssayMeta } from "@/content/essayMeta";

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

const bodyClass =
  "mb-6 text-[17px] md:text-[18px] leading-[1.7] text-[hsl(var(--ink-body))]";

const PullQuote = ({ children }: { children: React.ReactNode }) => (
  <blockquote
    className="my-12 md:my-16 border-l-[3px] border-[hsl(var(--accent-stone))] pl-6 font-editorial italic text-[25px] md:text-[27px] leading-[1.4] text-[hsl(var(--accent-stone))]"
  >
    {children}
  </blockquote>
);

// Render a body paragraph, applying small-caps to the first matching prefix.
function renderBodyText(text: string, prefixes: string[]) {
  const lower = text.toLowerCase();
  let match: { start: number; end: number } | null = null;
  for (const p of prefixes) {
    const i = lower.indexOf(p.toLowerCase());
    if (i !== -1) {
      match = { start: i, end: i + p.length };
      break;
    }
  }
  if (!match) return text;
  return (
    <>
      {text.slice(0, match.start)}
      <span
        style={{ fontVariant: "small-caps", letterSpacing: "0.05em" }}
      >
        {text.slice(match.start, match.end)}
      </span>
      {text.slice(match.end)}
    </>
  );
}

function renderParagraph(
  text: string,
  key: string | number,
  meta: EssayMeta,
  opts: { dropCap?: boolean } = {}
) {
  // Split out pull quote if it lives inside this paragraph.
  if (meta.pullQuote && text.includes(meta.pullQuote)) {
    const idx = text.indexOf(meta.pullQuote);
    const pre = text.slice(0, idx).trim();
    const post = text.slice(idx + meta.pullQuote.length).trim();
    return (
      <Fragment key={key}>
        {pre && (
          <p className={bodyClass}>
            {renderBodyText(pre, meta.smallCapsPrefixes)}
          </p>
        )}
        <PullQuote>{meta.pullQuote}</PullQuote>
        {post && (
          <p className={bodyClass}>
            {renderBodyText(post, meta.smallCapsPrefixes)}
          </p>
        )}
      </Fragment>
    );
  }

  if (opts.dropCap && text.length > 0) {
    const first = text.charAt(0);
    const remainder = text.slice(1);
    return (
      <p key={key} className={bodyClass}>
        <span
          aria-hidden="true"
          className="float-left font-editorial text-[hsl(var(--accent-stone))] mr-3 mt-[6px]"
          style={{ fontSize: "64px", lineHeight: "0.85" }}
        >
          {first}
        </span>
        {renderBodyText(remainder, meta.smallCapsPrefixes)}
      </p>
    );
  }

  return (
    <p key={key} className={bodyClass}>
      {renderBodyText(text, meta.smallCapsPrefixes)}
    </p>
  );
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

  const meta: EssayMeta =
    (slug && essayMeta[slug]) || { smallCapsPrefixes: [], pullQuote: "" };

  const paragraphs = essay.paragraphs;
  const hook = paragraphs[0];
  const closing = paragraphs.length > 1 ? paragraphs[paragraphs.length - 1] : "";
  const dropCapPara = paragraphs.length > 2 ? paragraphs[1] : "";
  const middle =
    paragraphs.length > 3 ? paragraphs.slice(2, paragraphs.length - 1) : [];

  return (
    <PageShell>
      <div className="pt-10 md:pt-14">
        <BackToWriting />
      </div>

      <PageHeader title={essay.title} size="essay" />

      <PageRule />

      <article className="py-14 md:py-20 max-w-[680px]">
        {hook && (
          <p className="font-editorial italic text-[26px] md:text-[31px] leading-[1.35] text-[hsl(var(--accent-stone))] mb-16 md:mb-20">
            {hook}
          </p>
        )}

        {dropCapPara && renderParagraph(dropCapPara, "drop", meta, { dropCap: true })}

        {/* Clear the float introduced by the drop cap before subsequent paragraphs. */}
        <div className="clear-both" />

        {middle.map((p, i) => renderParagraph(p, i, meta))}

        {closing && (
          <p className="text-center italic text-[19px] md:text-[21px] leading-[1.6] text-[hsl(var(--ink-body))] mt-16 md:mt-20">
            {closing}
          </p>
        )}

        <BackToWriting className="mt-20 block text-center" />
      </article>
    </PageShell>
  );
}
