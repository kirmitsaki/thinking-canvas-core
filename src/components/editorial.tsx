import { Link, useNavigate } from "react-router-dom";
import type { ReactNode } from "react";

/**
 * Editorial design system primitives.
 * Unified across Home, Case Studies, Design Practice, and About.
 *
 * Spacing scale (px): 8 / 16 / 24 / 32 / 48 / 64 / 80 / 120
 * Typography:
 *   - H1 (Hero):        text-[44px] md:text-[64px] lg:text-[72px], leading-[1.05], max-w-[20ch]
 *   - H2 (Section):     text-[28px] md:text-[32px], font-semibold
 *   - H3 (Subsection):  text-[18px] md:text-[20px], font-semibold
 *   - Body:             text-[15px] md:text-[16px], leading-[1.6], max-w-[62ch]
 *   - Metadata/Label:   text-[12px] tracking-[0.14em] uppercase
 */

/* ---------- Container ---------- */

export const Container = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={`mx-auto max-w-[1200px] px-8 md:px-12 ${className}`}>
    {children}
  </div>
);

/* ---------- Labels ---------- */

export const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-meta-ink/55 font-mono leading-[1.4]">
    {children}
  </p>
);

export const MetaLine = ({ children }: { children: ReactNode }) => (
  <p className="text-[11px] tracking-[0.18em] uppercase text-meta-ink font-mono">
    {children}
  </p>
);

export const SubLabel = ({ children }: { children: ReactNode }) => (
  <h4 className="text-[11px] font-semibold tracking-[0.18em] uppercase text-meta-ink mb-4 font-mono">
    {children}
  </h4>
);

/* ---------- Headings ---------- */

export const H1 = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <h1
    className={`text-[44px] md:text-[64px] lg:text-[72px] font-semibold tracking-[-0.025em] leading-[1.02] text-ink-strong max-w-[20ch] ${className}`}
  >
    {children}
  </h1>
);

export const H2 = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <h2
    className={`text-[28px] md:text-[34px] font-semibold tracking-[-0.018em] text-ink-strong leading-[1.12] ${className}`}
  >
    {children}
  </h2>
);

export const H3 = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <h3
    className={`text-[18px] md:text-[20px] font-semibold tracking-[-0.012em] text-ink-strong leading-[1.3] ${className}`}
  >
    {children}
  </h3>
);

/* ---------- Display / page-level headings (cross-page primitives) ---------- */

/** Cover-plate display name, dark backgrounds. Used on Index hero. */
export const Display = ({
  children,
  className = "",
  tone = "inverse",
}: {
  children: ReactNode;
  className?: string;
  tone?: "ink" | "inverse";
}) => (
  <h1
    className={`text-[56px] md:text-[96px] lg:text-[120px] font-medium tracking-[-0.04em] leading-[0.95] ${
      tone === "inverse" ? "text-background" : "text-ink-strong"
    } ${className}`}
  >
    {children}
  </h1>
);

/** Standfirst / lede sentence at the top of Work and About. */
export const PageLede = ({
  children,
  className = "",
  as: As = "h1",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "p";
}) => (
  <As
    className={`text-[28px] md:text-[36px] font-semibold tracking-[-0.01em] leading-[1.25] text-ink-strong max-w-[30ch] ${className}`}
  >
    {children}
  </As>
);

/** Featured chapter title — large editorial heading on dark canvases. */
export const FeatureTitle = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <h2
    className={`text-[34px] md:text-[46px] lg:text-[56px] font-semibold tracking-[-0.025em] leading-[1.02] text-ink-strong ${className}`}
  >
    {children}
  </h2>
);

/** List-item / card title used in fragments and grids. */
export const CardTitle = ({
  children,
  className = "",
  as: As = "h3",
}: {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3" | "p";
}) => (
  <As
    className={`text-[22px] md:text-[26px] font-semibold tracking-tight text-ink-strong leading-[1.25] ${className}`}
  >
    {children}
  </As>
);

/** Italic serif lede paragraph (subtitle under a FeatureTitle). */
export const LedeItalic = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <p
    className={`font-editorial italic text-[20px] md:text-[24px] leading-[1.35] text-ink-strong/75 max-w-[34ch] ${className}`}
  >
    {children}
  </p>
);

/** Canonical mono meta label — 10px/0.28em uppercase. Tone-aware. */
export const MetaMono = ({
  children,
  className = "",
  tone = "ink",
}: {
  children: ReactNode;
  className?: string;
  tone?: "ink" | "inverse";
}) => (
  <p
    className={`text-[10px] tracking-[0.28em] uppercase font-mono ${
      tone === "inverse" ? "text-background/60" : "text-meta-ink"
    } ${className}`}
  >
    {children}
  </p>
);

/* ---------- Act section primitives (case study chapters) ----------
   Canonical pieces shared across SecureCodeWarrior, OriginMarkets, Mendeley.
   Use these instead of hand-rolling the same Tailwind strings. */

export const ActLabel = ({
  numeral,
  label,
}: {
  numeral: string;
  label: string;
}) => (
  <div className="col-span-12 md:col-span-1">
    <p className="text-[10px] tracking-[0.32em] uppercase text-meta-ink/60 font-mono">
      {numeral}
    </p>
    <p className="mt-2 text-[10px] tracking-[0.28em] uppercase text-meta-ink/55 font-mono">
      {label}
    </p>
  </div>
);

export const ActH2 = ({
  children,
  tail,
  className = "",
}: {
  children: ReactNode;
  tail?: ReactNode;
  className?: string;
}) => (
  <h2
    className={`text-[28px] md:text-[42px] lg:text-[54px] leading-[1.08] tracking-[-0.02em] text-ink-strong font-medium ${className}`}
  >
    {children}
    {tail ? <span className="text-meta-ink/45"> {tail}</span> : null}
  </h2>
);

export const ActBody = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <p
    className={`text-[15px] md:text-[17px] leading-[1.7] text-ink-body/85 max-w-[58ch] ${className}`}
  >
    {children}
  </p>
);

/* ---------- Body ---------- */

export const Body = ({
  children,
  className = "",
  muted = false,
}: {
  children: ReactNode;
  className?: string;
  muted?: boolean;
}) => (
  <p
    className={`text-[15px] md:text-[16px] leading-[1.65] tracking-[-0.003em] max-w-[62ch] ${
      muted ? "text-muted-ink" : "text-ink-body"
    } ${className}`}
  >
    {children}
  </p>
);

export const Lead = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <p
    className={`font-editorial italic text-[22px] md:text-[28px] leading-[1.35] text-ink-strong max-w-[34ch] ${className}`}
  >
    {children}
  </p>
);

/* ---------- Highlighted statement (sparingly) ---------- */

export const Highlight = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <p
    className={`pl-6 border-l border-ink-strong/80 text-[18px] md:text-[20px] leading-[1.5] text-ink-strong font-medium tracking-[-0.012em] max-w-[44ch] ${className}`}
  >
    {children}
  </p>
);

/* ---------- Bullets ---------- */

/**
 * Editorial bullet: a thin hairline rule above each item, no glyphs.
 * Creates a quiet, publication-style list rhythm.
 */
export const Bullet = ({
  children,
  tight = false,
}: {
  children: ReactNode;
  tight?: boolean;
}) => (
  <li
    className={`${
      tight
        ? "text-[14px] md:text-[15px] leading-[1.6] text-ink-body/85 py-3"
        : "text-[15px] md:text-[16px] leading-[1.65] text-ink-body py-4"
    } border-t border-hairline first:border-t-0 first:pt-0`}
  >
    {children}
  </li>
);

/* ---------- Section (label + content, 2-col grid) ---------- */

export const Section = ({
  label,
  heading,
  children,
  className = "",
}: {
  label?: ReactNode;
  heading?: string;
  children: ReactNode;
  className?: string;
}) => (
  <section
    className={`mx-auto max-w-[1200px] px-8 md:px-12 py-[80px] md:py-[120px] ${className}`}
  >
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-2 md:col-start-2 mb-6 md:mb-0 md:pt-2">
        {label && <SectionLabel>{label}</SectionLabel>}
      </div>
      <div className="col-span-12 md:col-span-7 max-w-[680px]">
        {heading && <H2 className="mb-8">{heading}</H2>}
        {children}
      </div>
    </div>
  </section>
);

/* ---------- Divider ---------- */

export const Divider = () => (
  <Container>
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-10 md:col-start-2">
        <div className="border-t border-hairline" />
      </div>
    </div>
  </Container>
);

/* ============================================================
   Publication chrome — shared across Home, Work, About
   ============================================================ */


/** Hairline rule + mono label (vertical stack) */
export const RuleLabel = ({
  children,
  tone = "ink",
  className = "",
}: {
  children: ReactNode;
  tone?: "ink" | "inverse";
  className?: string;
}) => (
  <div className={className}>
    <span
      className={`block h-px w-10 mb-4 ${
        tone === "inverse" ? "bg-background/35" : "bg-meta-ink/55"
      }`}
    />
    <p
      className={`text-[11px] font-medium tracking-[0.22em] uppercase font-mono ${
        tone === "inverse" ? "text-background/75" : "text-meta-ink/55"
      }`}
    >
      {children}
    </p>
  </div>
);

/** Oversized tabular numeral used as section opener */
export const ChapterMarker = ({
  n,
  tone = "ink",
  className = "",
}: {
  n: string;
  tone?: "ink" | "inverse";
  className?: string;
}) => (
  <p
    aria-hidden="true"
    className={`font-semibold tabular-nums tracking-[-0.04em] leading-[0.85] select-none text-[88px] md:text-[96px] lg:text-[140px] xl:text-[180px] ${
      tone === "inverse" ? "text-background/[0.03]" : "text-ink-strong/15"
    } ${className}`}
  >
    {n}
  </p>
);

/** Margin annotation — small mono note tied to a paragraph */
export const Annotation = ({
  children,
  tone = "ink",
  className = "",
}: {
  children: ReactNode;
  tone?: "ink" | "inverse";
  className?: string;
}) => (
  <p
    className={`text-[10px] tracking-[0.22em] uppercase font-mono leading-[1.7] ${
      tone === "inverse" ? "text-background/55" : "text-meta-ink"
    } ${className}`}
  >
    {children}
  </p>
);

/** Vertical rail of metadata items */
export const MetaRail = ({
  items,
  tone = "ink",
  className = "",
}: {
  items: { k: string; v: string }[];
  tone?: "ink" | "inverse";
  className?: string;
}) => (
  <dl className={`space-y-3 ${className}`}>
    {items.map((it) => (
      <div key={it.k}>
        <dt
          className={`text-[9px] tracking-[0.28em] uppercase font-mono ${
            tone === "inverse" ? "text-background/45" : "text-meta-ink/70"
          }`}
        >
          {it.k}
        </dt>
        <dd
          className={`mt-1 text-[12px] tracking-[-0.005em] font-mono ${
            tone === "inverse" ? "text-background/85" : "text-ink-strong/85"
          }`}
        >
          {it.v}
        </dd>
      </div>
    ))}
  </dl>
);

/** Editorial pull quote — italic serif, hairline rules above and below */
export const PullQuote = ({
  children,
  cite,
  tone = "ink",
  className = "",
}: {
  children: ReactNode;
  cite?: string;
  tone?: "ink" | "inverse";
  className?: string;
}) => (
  <figure className={className}>
    <span
      className={`block h-px w-full ${
        tone === "inverse" ? "bg-background/25" : "bg-ink-strong/20"
      }`}
    />
    <blockquote
      className={`font-editorial italic text-[26px] md:text-[34px] lg:text-[40px] leading-[1.25] tracking-[-0.012em] py-10 md:py-14 max-w-[28ch] ${
        tone === "inverse" ? "text-background" : "text-ink-strong"
      }`}
    >
      {children}
    </blockquote>
    <span
      className={`block h-px w-full ${
        tone === "inverse" ? "bg-background/25" : "bg-ink-strong/20"
      }`}
    />
    {cite && (
      <figcaption
        className={`mt-4 text-[10px] tracking-[0.28em] uppercase font-mono ${
          tone === "inverse" ? "text-background/55" : "text-meta-ink"
        }`}
      >
        {cite}
      </figcaption>
    )}
  </figure>
);

/** Full-bleed hairline divider with section code */
export const SectionBreak = ({
  code,
  tone = "ink",
}: {
  code: string;
  tone?: "ink" | "inverse";
}) => (
  <div className="mx-auto max-w-[1200px] px-8 md:px-12 py-16 md:py-24">
    <div className="flex items-center gap-6">
      <span
        className={`h-px flex-1 ${
          tone === "inverse" ? "bg-background/20" : "bg-ink-strong/15"
        }`}
      />
      <span
        className={`text-[10px] tracking-[0.32em] uppercase font-mono ${
          tone === "inverse" ? "text-background/55" : "text-meta-ink"
        }`}
      >
        — {code} —
      </span>
      <span
        className={`h-px flex-1 ${
          tone === "inverse" ? "bg-background/20" : "bg-ink-strong/15"
        }`}
      />
    </div>
  </div>
);

/* ---------- Image placeholder ---------- */

export const ImagePlaceholder = ({
  label,
  src,
  alt,
}: {
  label: string;
  src?: string;
  alt?: string;
}) => (
  <Container className="py-[64px] md:py-[80px]">
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-10 md:col-start-2">
        <figure>
          {src ? (
            <img
              src={src}
              alt={alt ?? label}
              loading="lazy"
              className="w-full h-auto border border-hairline"
            />
          ) : (
            <div className="aspect-[16/9] w-full bg-muted/60 border border-hairline flex items-center justify-center">
              <span className="text-[12px] tracking-[0.14em] uppercase text-meta-ink/60 font-mono px-6 text-center">
                {label}
              </span>
            </div>
          )}
        </figure>
      </div>
    </div>
  </Container>
);

/* ---------- Back link ---------- */

export const BackLink = ({ to = "/" }: { to?: string }) => {
  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (window.history.length > 1) {
      e.preventDefault();
      navigate(-1);
    }
  };
  return (
    <Container className="pt-8">
      <Link
        to={to}
        onClick={handleClick}
        className="text-[13px] tracking-tight text-muted-ink hover:text-ink-strong transition-colors"
      >
        ← Back
      </Link>
    </Container>
  );
};

/* ---------- Caption ---------- */

export const Caption = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <figcaption
    className={`mt-6 text-[12px] leading-[1.55] tracking-[-0.003em] text-meta-ink max-w-[62ch] ${className}`}
  >
    {children}
  </figcaption>
);

/* ---------- Case study hero (Design Practice detail pages) ---------- */

export const CaseHero = ({
  eyebrow,
  title,
  subtitle,
  intro,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
}) => (
  <>
    <Container className="pt-[80px] md:pt-[120px] pb-[80px]">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-10 md:col-start-2">
          <SectionLabel>{eyebrow}</SectionLabel>
          <H1 className="mt-12">{title}</H1>
          <Body muted className="mt-12">
            {subtitle}
          </Body>
        </div>
      </div>
    </Container>

    <Container className="pb-[40px]">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-10 md:col-start-2">
          <Highlight>{intro}</Highlight>
        </div>
      </div>
    </Container>
  </>
);

/* ---------- Focus list (title + body pairs) ---------- */

export const FocusList = ({
  items,
}: {
  items: { title: string; body: string }[];
}) => (
  <ul className="divide-y divide-hairline">
    {items.map((f) => (
      <li key={f.title} className="py-10 first:pt-0">
        <H3>{f.title}</H3>
        <Body className="mt-4">{f.body}</Body>
      </li>
    ))}
  </ul>
);

/* ---------- Enabled list (numbered editorial outcomes) ---------- */

export const EnabledList = ({ items }: { items: ReactNode[] }) => (
  <ul className="divide-y divide-hairline">
    {items.map((item, i) => (
      <li key={i} className="flex items-baseline gap-8 py-8 first:pt-0">
        <span className="text-[10px] tracking-[0.28em] uppercase text-meta-ink font-mono shrink-0 w-8 tabular-nums">
          {String(i + 1).padStart(2, "0")}
        </span>
        <div className="text-[15px] md:text-[16px] leading-[1.65] text-ink-body max-w-[62ch]">
          {item}
        </div>
      </li>
    ))}
  </ul>
);

/* ---------- Outcome list (emphasised single-line statements) ---------- */

export const OutcomeList = ({ items }: { items: string[] }) => (
  <ul className="divide-y divide-hairline">
    {items.map((o) => (
      <li
        key={o}
        className="py-7 text-[19px] md:text-[22px] leading-[1.4] tracking-[-0.012em] text-ink-strong font-medium first:pt-0"
      >
        {o}
      </li>
    ))}
  </ul>
);

/* ============================================================
   Page-level layout primitives
   ============================================================ */

/** Standard Work/About page header: rule label + page-lede sentence. */
export const PageHeader = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => (
  <>
    <Container className="pt-[100px] md:pt-[140px] pb-[40px]">
      <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
        <div className="col-span-6 md:col-span-5 md:col-start-2">
          <RuleLabel>{label}</RuleLabel>
        </div>
      </div>
    </Container>
    <Container className="pb-[80px]">
      <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
        <div className="col-span-12 md:col-span-8 md:col-start-2">
          <PageLede>{children}</PageLede>
        </div>
      </div>
    </Container>
  </>
);

/**
 * Inverse-canvas section: dark background with editorial tokens flipped,
 * so child components themed via semantic tokens read correctly on dark.
 */
export const DarkPanel = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <section
    className={`bg-[hsl(0_0%_7%)] text-[hsl(0_0%_96%)] [--ink-strong:0_0%_96%] [--ink-body:0_0%_82%] [--muted-ink:0_0%_68%] [--meta-ink:0_0%_60%] [--hairline:0_0%_18%] ${className}`}
  >
    {children}
  </section>
);

/**
 * Standard 3-act layout for the smaller design-practice case studies.
 * Replaces 5 near-identical page templates with a single component.
 */
export const PracticeCaseTemplate = ({
  eyebrow,
  title,
  subtitle,
  intro,
  context,
  imageLabel,
  outcomes,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  context: ReactNode;
  imageLabel: string;
  outcomes: ReactNode[];
}) => (
  <>
    <CaseHero eyebrow={eyebrow} title={title} subtitle={subtitle} intro={intro} />
    <Section label="Context">
      <Body>{context}</Body>
    </Section>
    <ImagePlaceholder label={imageLabel} />
    <Section label="Outcomes">
      <EnabledList items={outcomes} />
    </Section>
  </>
);


