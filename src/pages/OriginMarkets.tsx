import type React from "react";
import SiteNav from "@/components/SiteNav";
import ChapterTransition from "@/components/ChapterTransition";
import {
  Container,
  H1,
  Body,
  Highlight,
  SectionLabel,
  BackLink,
  ActH2,
  ActBody,
} from "@/components/editorial";

/* ============================================================
   ORIGIN MARKETS
   Editorial documentation of operational structure emerging
   inside a complex financial environment.
   ============================================================ */

/* ---------- Atoms ---------- */

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[10px] tracking-[0.32em] uppercase text-meta-ink/60 font-mono">
    {children}
  </p>
);

const SectionMark = ({
  numeral,
  label,
}: {
  numeral: string;
  label: string;
}) => (
  <div className="col-span-12 md:col-span-2 md:col-start-1 mb-10 md:mb-0 flex md:flex-col gap-3 md:gap-2 items-baseline">
    <Eyebrow>{numeral}</Eyebrow>
    <span className="text-[10px] tracking-[0.28em] uppercase text-meta-ink/55 font-mono">
      {label}
    </span>
  </div>
);

const FigCaption = ({
  index,
  title,
}: {
  index: string;
  title: string;
}) => (
  <div className="flex items-baseline justify-between mt-6 pt-4 border-t border-hairline">
    <p className="text-[10px] tracking-[0.28em] uppercase text-meta-ink/55 font-mono">
      {index}
    </p>
    <p className="text-[10px] tracking-[0.28em] uppercase text-meta-ink/55 font-mono">
      {title}
    </p>
  </div>
);

const darkFigStyle: React.CSSProperties = {
  ["--ink-strong" as any]: "0 0% 97%",
  ["--ink-body" as any]: "0 0% 84%",
  ["--muted-ink" as any]: "0 0% 70%",
  ["--meta-ink" as any]: "0 0% 66%",
  ["--hairline" as any]: "0 0% 20%",
  ["--background" as any]: "0 0% 7%",
  ["--foreground" as any]: "0 0% 97%",
  backgroundColor: "hsl(0 0% 7%)",
  color: "hsl(0 0% 97%)",
};

/* ---------- Dark figure spread wrapper ----------
   Operational composition with large breathing space, followed
   by an editorial plate reference aligned at the bottom edge. */
const DarkSpread = ({
  fig,
  caption,
  children,
}: {
  fig: string;
  caption: string;
  children: React.ReactNode;
}) => (
  <div className="pt-28 md:pt-40 pb-20 md:pb-28" style={darkFigStyle}>
    <div className="mx-auto max-w-[1200px] px-8 md:px-12">
      {children}
      <div className="mt-36 md:mt-52 pt-5 border-t border-hairline/70">
        <p className="text-[10px] md:text-[11px] tracking-[0.32em] uppercase text-meta-ink/55 font-mono">
          <span className="tabular-nums">{fig.toUpperCase()}</span>
          <span className="mx-3 text-meta-ink/35" aria-hidden>—</span>
          <span>{caption}</span>
        </p>
      </div>
    </div>
  </div>
);

/* ---------- FIGURE 01 — Operational lifecycle ----------
   Five stages held between two hairline rules, with a vast
   faint "LIFECYCLE" wordmark drifting behind. Continuous,
   interdependent — not isolated labels. */
const Figure01 = () => {
  const stages = [
    { n: "01", label: "Origination" },
    { n: "02", label: "Pricing" },
    { n: "03", label: "Coordination" },
    { n: "04", label: "Documentation" },
    { n: "05", label: "Settlement" },
  ];
  return (
    <figure>
      <div className="relative py-24 md:py-36 overflow-hidden">
        {/* Vast faint wordmark — environmental only */}
        <p
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-medium leading-[0.8] tracking-[-0.06em] text-ink-strong/[0.014] select-none whitespace-nowrap"
          style={{ fontSize: "clamp(140px, 22vw, 360px)" }}
        >
          LIFECYCLE
        </p>

        {/* Operational corridor — equal margin from labels to each rule */}
        <div className="relative">
          <div className="absolute inset-x-0 top-0 h-px bg-ink-strong/35" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-ink-strong/35" />
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-ink-strong/12" />

          <div className="relative grid grid-cols-5 px-2 md:px-6 py-16 md:py-24">
            {stages.map((s, i) => (
              <div key={s.label} className="relative flex flex-col items-center text-center">
                {/* tick descending from upper rule — flush */}
                <span aria-hidden className="absolute -top-16 md:-top-24 left-1/2 -translate-x-1/2 w-px h-6 bg-ink-strong/40" />
                <p className="text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-meta-ink/70 font-mono tabular-nums">
                  {s.n}
                </p>
                <p className="mt-5 text-[12px] md:text-[15px] tracking-[-0.01em] text-ink-strong font-medium leading-[1.15]">
                  {s.label}
                </p>
                {/* baseline node rising toward lower rule — equal spacing */}
                <span aria-hidden className="absolute -bottom-16 md:-bottom-24 left-1/2 -translate-x-1/2 w-px h-6 bg-ink-strong/40" />
                <span
                  aria-hidden
                  className="absolute -bottom-[3.5px] left-1/2 -translate-x-1/2 w-[7px] h-[7px] rounded-full bg-ink-strong"
                  style={{ animation: `lifeNode 5.2s ease-in-out ${i * 0.35}s infinite` }}
                />
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes lifeNode {
            0%, 100% { opacity: 0.45; }
            50%      { opacity: 0.95; }
          }
        `}</style>

        <div className="mt-16 md:mt-24 flex items-center justify-between text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-meta-ink/65 font-mono">
          <span>continuous</span>
          <span className="hidden md:inline">five stages · one corridor</span>
          <span>interdependent</span>
        </div>
      </div>
    </figure>
  );
};

/* ---------- FIGURE 02 — Fragmented → Shared operational layer ----------
   Upper field: abstracted fragments — tables, inboxes, disconnected records,
   subtly misaligned. Lower field: a single, continuous operational layer
   spanning Origination / Pricing / Coordination / Settlement / Compliance. */
const Figure02 = () => {
  // Abstracted fragment glyphs — purposely off-grid, low contrast
  const fragments = [
    { kind: "table",   col: "md:col-start-1 md:col-span-4", rot: -1.2, top: "0%"  },
    { kind: "inbox",   col: "md:col-start-6 md:col-span-3", rot:  0.8, top: "12%" },
    { kind: "record",  col: "md:col-start-10 md:col-span-3", rot: -0.5, top: "4%" },
    { kind: "table",   col: "md:col-start-2 md:col-span-3", rot:  1.4, top: "55%" },
    { kind: "record",  col: "md:col-start-6 md:col-span-3", rot: -0.9, top: "62%" },
    { kind: "inbox",   col: "md:col-start-10 md:col-span-3", rot:  0.4, top: "48%" },
  ];

  const renderGlyph = (kind: string) => {
    if (kind === "table") {
      return (
        <div className="border border-ink-strong/40">
          <div className="grid grid-cols-4 border-b border-ink-strong/40">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="h-2 border-l first:border-l-0 border-ink-strong/40 bg-ink-strong/15" />
            ))}
          </div>
          {Array.from({ length: 5 }).map((_, r) => (
            <div key={r} className="grid grid-cols-4 border-b last:border-b-0 border-ink-strong/30">
              {Array.from({ length: 4 }).map((__, c) => (
                <span
                  key={c}
                  className="h-2 border-l first:border-l-0 border-ink-strong/25"
                  style={{ background: (r + c) % 3 === 0 ? "hsl(var(--ink-strong) / 0.18)" : "transparent" }}
                />
              ))}
            </div>
          ))}
        </div>
      );
    }
    if (kind === "inbox") {
      return (
        <div className="border border-ink-strong/40 divide-y divide-ink-strong/30">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2 px-2 py-1.5">
              <span className="w-1 h-1 rounded-full bg-ink-strong/65" />
              <span className="h-[2px] bg-ink-strong/45" style={{ width: `${30 + ((i * 17) % 50)}%` }} />
              <span className="ml-auto h-[2px] w-6 bg-ink-strong/35" />
            </div>
          ))}
        </div>
      );
    }
    return (
      <div className="border border-ink-strong/40 divide-y divide-ink-strong/30">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="grid grid-cols-[1fr_1.4fr]">
            <span className="px-2 py-1.5 bg-ink-strong/10"><span className="block h-[2px] w-10 bg-ink-strong/55" /></span>
            <span className="px-2 py-1.5"><span className="block h-[2px] bg-ink-strong/45" style={{ width: `${40 + ((i * 23) % 45)}%` }} /></span>
          </div>
        ))}
      </div>
    );
  };

  const layer = [
    { n: "01", label: "Origination" },
    { n: "02", label: "Pricing" },
    { n: "03", label: "Coordination" },
    { n: "04", label: "Settlement" },
    { n: "05", label: "Compliance" },
  ];

  return (
    <figure className="relative">
      {/* ── UPPER · FRAGMENTED FIELD ─────────────────────────
           Secondary tier — purposely lower contrast so the
           unified operational layer below reads as primary. */}
      <div className="relative">
        <div className="flex items-baseline justify-between mb-6 text-[9px] tracking-[0.28em] uppercase text-meta-ink/45 font-mono">
          <span>before</span>
          <span className="hidden md:inline">disconnected records · inboxes · tables</span>
          <span>fragmented</span>
        </div>
        <div className="relative grid grid-cols-12 gap-x-6 gap-y-8 md:gap-x-8 min-h-[200px] md:min-h-[260px] pb-10">
          {fragments.map((f, i) => (
            <div
              key={i}
              className={`col-span-12 ${f.col} relative`}
              style={{
                transform: `rotate(${f.rot}deg) scale(0.88)`,
                transformOrigin: "left top",
                marginTop: f.top.startsWith("-") ? f.top : undefined,
              }}
            >
              {renderGlyph(f.kind)}
              <span className="block mt-2 text-[9px] tracking-[0.28em] uppercase text-meta-ink/70 font-mono">
                {f.kind} · {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── BRIDGE ─────────────────────────────────────────── */}
      <div className="relative my-10 md:my-14">
        <div className="h-px bg-ink-strong/30" />
        <div className="flex items-center justify-center -mt-2">
          <span className="bg-background px-3 text-[9px] tracking-[0.32em] uppercase text-meta-ink/65 font-mono">
            resolves into ↓
          </span>
        </div>
      </div>

      {/* ── LOWER · UNIFIED OPERATIONAL LAYER ──────────────── */}
      <div className="relative">
        <div className="flex items-baseline justify-between mb-6 text-[9px] tracking-[0.28em] uppercase text-meta-ink/55 font-mono">
          <span>after</span>
          <span className="hidden md:inline">one continuous operational layer</span>
          <span>unified</span>
        </div>
        <div className="border-t border-b border-ink-strong/45">
          <div className="grid grid-cols-2 md:grid-cols-5">
            {layer.map((s, i) => (
              <div
                key={s.label}
                className={`px-4 md:px-6 py-10 md:py-14 ${
                  i > 0 ? "md:border-l border-hairline" : ""
                } ${i % 5 !== 0 && i % 2 !== 0 ? "border-l md:border-l border-hairline" : ""}`}
              >
                <p className="text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-meta-ink/70 font-mono tabular-nums">
                  {s.n}
                </p>
                <p className="mt-5 text-[13px] md:text-[16px] tracking-[-0.01em] text-ink-strong font-medium leading-[1.15]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
};


/* ---------- FIGURE 03 — Four lenses ----------
   Four anchored nodes — Operating model, Workflow architecture,
   Shared systems, Feedback loops — arranged with diagonal tension.
   Thin relational lines connect them; tiny ambient pulses. */
const Figure03 = () => {
  const nodes = [
    { id: "01", title: "Operating model",       body: "Cadence between design, product, and engineering." },
    { id: "02", title: "Workflow architecture", body: "Issuance mapped end-to-end across participants." },
    { id: "03", title: "Shared systems",        body: "Operational primitives, tokens, and patterns." },
    { id: "04", title: "Feedback loops",        body: "Signal returning into product evolution." },
  ];

  return (
    <div className="relative">
      <div className="flex items-center justify-between border-b border-hairline px-4 md:px-6 py-2.5 text-[10px] tracking-[0.24em] uppercase text-meta-ink/55 font-mono">
        <span>OM ▸ operational framework</span>
        <span className="hidden md:inline">four lenses · one field</span>
        <span>rev. 12.4</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-hairline">
        {nodes.map((n, i) => (
          <div
            key={n.id}
            className={`relative px-6 md:px-10 py-12 md:py-16 border-hairline ${
              i % 2 === 1 ? "md:border-l" : ""
            } ${i >= 2 ? "border-t" : "border-t md:border-t-0"} ${i === 0 ? "border-t-0" : ""}`}
          >
            <div className="flex items-baseline gap-3 mb-4">
              <span
                aria-hidden
                className="w-2 h-2 rounded-full bg-ink-strong"
                style={{ animation: `nodePulse 4.6s ease-in-out ${i * 0.7}s infinite` }}
              />
              <span className="text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-meta-ink/70 font-mono tabular-nums">
                {n.id}
              </span>
            </div>
            <p className="text-[18px] md:text-[22px] leading-[1.15] tracking-[-0.018em] text-ink-strong font-medium">
              {n.title}
            </p>
            <p className="mt-3 text-[13px] md:text-[14px] leading-[1.55] text-ink-body/80 max-w-[34ch]">
              {n.body}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes nodePulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%      { opacity: 1;   transform: scale(1.25); }
        }
      `}</style>

      <div className="flex items-baseline justify-between px-4 md:px-6 py-3 text-[9px] tracking-[0.28em] uppercase text-meta-ink/55 font-mono">
        <span>operating model · workflow architecture</span>
        <span className="hidden md:inline">shared systems · feedback loops</span>
        <span>↔</span>
      </div>
    </div>
  );
};


/* ---------- Page ---------- */

const OriginMarkets = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <BackLink to="/work" />
      

      {/* HERO */}
      <Container className="pt-[64px] pb-[120px]">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <div className="mb-6">
              <SectionLabel>Chapter 2: Building design from 0→1</SectionLabel>
            </div>
            <H1>Origin Markets</H1>
            <Highlight className="mt-16">
              Building operational clarity across fragmented financial workflows within global debt issuance.
            </Highlight>
            <div className="mt-16 space-y-6">
              <Body muted>
                Origin Markets began as a fragmented operational environment spanning spreadsheets, inboxes, disconnected workflows, and highly manual coordination across borrowers and investment banks.
              </Body>
              <Body muted>
                The work focused on transforming those fragmented operational processes into a connected digital platform capable of supporting increasingly complex financial operations over time.
              </Body>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative overflow-hidden">
        {/* environmental wordmark */}
        <p
          aria-hidden
          className="pointer-events-none hidden md:block absolute left-[-2vw] top-[6%] text-[13vw] leading-[0.8] tracking-[-0.06em] text-ink-strong/[0.014] font-medium select-none whitespace-nowrap"
        >
          issuance
        </p>

        {/* ── SECTION 01 ─────────────────────────────────────────── */}
        <section className="relative border-t border-hairline">
          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pt-28 md:pt-44 pb-24 md:pb-40">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
              <SectionMark numeral="I" label="Complexity landscape" />
              <div className="col-span-12 md:col-span-9 md:col-start-3">
                <ActH2 className="max-w-[24ch]">
                  Built for the operational complexity
                  <span className="text-meta-ink/45"> of debt issuance.</span>
                </ActH2>
                <div className="mt-16 md:mt-24 space-y-5 max-w-[58ch]">
                  <Body muted>
                    Debt issuance involves coordination across multiple institutions, stakeholders, workflows, and regulatory requirements, often operating through disconnected operational processes.
                  </Body>
                  <Body muted>
                    The challenge was not simply digitising workflows, but creating enough structure for the operational system itself to evolve coherently over time.
                  </Body>
                </div>
              </div>
            </div>
          </div>
          <DarkSpread fig="Fig. 01" caption="Operational landscape — debt issuance">
            <Figure01 />
          </DarkSpread>
        </section>

        {/* ── SECTION 02 ─────────────────────────────────────────── */}
        <section className="relative">
          <p
            aria-hidden
            className="pointer-events-none hidden md:block absolute right-[-3vw] top-[20%] text-[15vw] leading-[0.8] tracking-[-0.06em] text-ink-strong/[0.018] font-medium select-none"
          >
            02
          </p>
          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pt-28 md:pt-44 pb-24 md:pb-40">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
              <SectionMark numeral="II" label="Fragmented workflows" />
              <div className="col-span-12 md:col-span-9 md:col-start-3">
                <ActH2 className="max-w-[26ch]">
                  Fragmented financial workflows
                  <span className="text-meta-ink/45"> brought into a shared operational system.</span>
                </ActH2>
                <div className="mt-16 md:mt-24 space-y-5 max-w-[58ch]">
                  <Body muted>
                    Before the platform existed, large parts of the operational process relied on disconnected spreadsheets, manual coordination, inbox-driven communication, and fragmented ownership across institutions.
                  </Body>
                  <Body muted>
                    The work focused on gradually connecting those operational layers into a more coherent product structure.
                  </Body>
                </div>
              </div>
            </div>
          </div>
          <DarkSpread fig="Fig. 02" caption="Operational convergence">
            <Figure02 />
          </DarkSpread>
        </section>

        {/* ── SECTION 03 ─────────────────────────────────────────── */}
        <section className="relative">
          <p
            aria-hidden
            className="pointer-events-none hidden md:block absolute left-[-2vw] top-[10%] text-[11vw] leading-[0.8] tracking-[-0.06em] text-ink-strong/[0.014] font-medium select-none whitespace-nowrap"
          >
            framework
          </p>
          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pt-28 md:pt-44 pb-24 md:pb-40">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
              <SectionMark numeral="III" label="Operational framework" />
              <div className="col-span-12 md:col-span-9 md:col-start-3">
                <ActH2 className="max-w-[26ch]">
                  One operational framework
                  <span className="text-meta-ink/45"> viewed through four lenses.</span>
                </ActH2>
                <div className="mt-16 md:mt-24 space-y-5 max-w-[58ch]">
                  <Body muted>
                    The platform evolved through four interconnected layers: operating model, workflow architecture, shared foundations, and feedback systems.
                  </Body>
                  <Body muted>
                    Together, these layers helped create enough operational consistency for the product and organisation to scale coherently over time.
                  </Body>
                </div>
              </div>
            </div>
          </div>
          <DarkSpread fig="Fig. 03" caption="Operational architecture — one field, four lenses">
            <Figure03 />
          </DarkSpread>
        </section>

        {/* ── SECTION 04 — MORPHO ────────────────────────────────── */}
        <section className="relative">
          <p
            aria-hidden
            className="pointer-events-none hidden md:block absolute right-[-1vw] top-[-2vw] text-[13vw] leading-[0.8] tracking-[-0.06em] text-ink-strong/[0.018] font-medium select-none"
          >
            morpho
          </p>
          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pt-24 md:pt-36 pb-20 md:pb-28">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
              <SectionMark numeral="IV" label="Morpho" />
              <div className="col-span-12 md:col-span-9 md:col-start-3">
                <ActH2 className="max-w-[24ch]">
                  Morpho.
                  <span className="text-meta-ink/45"> Shared operational foundations for a growing platform.</span>
                </ActH2>
                <div className="mt-16 md:mt-24 max-w-[58ch] space-y-5">
                  <Body muted>
                    Morpho created a shared operational language across the platform through components, accessibility standards, interaction patterns, spacing systems, and product behaviours.
                  </Body>
                  <Body muted>
                    The goal was not visual consistency alone, but creating enough shared structure for the product to evolve coherently across multiple workflows and surfaces.
                  </Body>
                </div>
              </div>
            </div>

            {/* Curated artefact spread — one hero cluster, two secondary, supporting fragments. */}
            <div className="mt-14 md:mt-20 relative border-t border-b border-hairline">
              {/* archive index strip */}
              <div className="flex items-center justify-between border-b border-hairline px-4 md:px-6 py-2.5 text-[10px] tracking-[0.24em] uppercase text-meta-ink/55 font-mono">
                <span>OM ▸ morpho · selected plates</span>
                <span className="hidden md:inline">shared operational foundations</span>
                <span>rev. 12.4</span>
              </div>

              {/* Reference-sheet annotation strip — embedded operational primitives */}
              <div className="hidden md:grid grid-cols-5 border-b border-hairline divide-x divide-hairline">
                {[
                  { k: "α", v: "Shared primitives" },
                  { k: "β", v: "Navigation structure" },
                  { k: "γ", v: "Cross-platform consistency" },
                  { k: "δ", v: "Operational taxonomy" },
                  { k: "ε", v: "Surface hierarchy" },
                ].map((a) => (
                  <div key={a.k} className="px-4 py-3 flex items-baseline gap-3">
                    <span className="text-[9px] tracking-[0.28em] uppercase text-meta-ink/45 font-mono">{a.k}</span>
                    <span className="text-[10px] tracking-[0.16em] uppercase text-ink-strong/75 font-mono leading-[1.3]">
                      {a.v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 05 — Reflection (full-bleed dark) ──────────── */}
        <section className="relative bg-ink-strong text-background overflow-hidden">
          {/* environmental typography — atmospheric only */}
          <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block select-none">
            <p className="absolute left-[-2vw] top-[6%] text-[16vw] leading-[0.8] tracking-[-0.06em] text-background/[0.014] font-medium whitespace-nowrap">
              issuance
            </p>
            <p className="absolute right-[-3vw] top-[34%] text-[12vw] leading-[0.8] tracking-[-0.06em] text-background/[0.012] font-medium whitespace-nowrap">
              workflow
            </p>
            <p className="absolute left-[10%] top-[58%] text-[14vw] leading-[0.8] tracking-[-0.06em] text-background/[0.012] font-medium whitespace-nowrap">
              coordination
            </p>
            <p className="absolute right-[-1vw] bottom-[4%] text-[18vw] leading-[0.8] tracking-[-0.06em] text-background/[0.014] font-medium whitespace-nowrap">
              infrastructure
            </p>
          </div>

          <div className="mx-auto max-w-[1200px] px-8 md:px-12 py-48 md:py-80 relative">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
              <div className="col-span-12 md:col-span-2 md:col-start-1 mb-10 md:mb-0">
                <p className="text-[10px] tracking-[0.32em] uppercase text-background/40 font-mono">
                  V
                </p>
                <p className="mt-2 text-[10px] tracking-[0.32em] uppercase text-background/40 font-mono">
                  Reflection
                </p>
              </div>
              <div className="col-span-12 md:col-span-9 md:col-start-3">
                <p className="text-[24px] md:text-[40px] lg:text-[52px] leading-[1.2] tracking-[-0.02em] font-medium text-background/95 max-w-[28ch]">
                  Complex operational systems rarely become easier
                  <span className="block text-background/55"> through simplification alone.</span>
                </p>
                <p className="mt-16 md:mt-24 text-[16px] md:text-[20px] leading-[1.55] text-background/55 max-w-[46ch]">
                  The work often involves creating enough structure for products, workflows, and teams to evolve coherently over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 06 — Outcomes ──────────────────────────────── */}
        <section className="relative">
          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pt-28 md:pt-44 pb-24 md:pb-40">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 mb-16 md:mb-24">
              <SectionMark numeral="VI" label="Enabled" />
              <div className="col-span-12 md:col-span-9 md:col-start-3">
                <ActH2 className="max-w-[24ch]">
                  What the foundations
                  <span className="text-meta-ink/45"> enabled.</span>
                </ActH2>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 gap-y-12 md:gap-y-16">
              {[
                { k: "Workflows", v: "Connected operational workflows across previously fragmented financial processes." },
                { k: "Foundations", v: "Shared product foundations supporting consistency across product surfaces and workflows." },
                { k: "Coordination", v: "Improved coordination across borrowers, banks, and internal operational teams." },
                { k: "Platform", v: "A platform structure capable of evolving alongside increasing operational complexity." },
              ].map((row, i) => {
                const placement = [
                  "md:col-start-3 md:col-span-5",
                  "md:col-start-8 md:col-span-5",
                  "md:col-start-3 md:col-span-5",
                  "md:col-start-8 md:col-span-5",
                ][i];
                return (
                  <div key={row.k} className={`col-span-12 ${placement}`}>
                    <div className="flex items-baseline gap-6 mb-5 border-t border-ink-strong pt-5">
                      <span className="text-[10px] tracking-[0.28em] uppercase text-meta-ink/55 font-mono tabular-nums">
                        № {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[12px] tracking-[0.24em] uppercase text-ink-strong font-mono">
                        {row.k}
                      </span>
                    </div>
                    <p className="text-[17px] md:text-[20px] lg:text-[22px] leading-[1.4] tracking-[-0.01em] text-ink-strong font-medium max-w-[32ch]">
                      {row.v}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CODA ───────────────────────────────────────────────── */}
        <section className="relative">
          <p
            aria-hidden
            className="pointer-events-none hidden md:block absolute right-[-3vw] bottom-[-6vw] text-[19vw] leading-[0.8] tracking-[-0.06em] text-ink-strong/[0.018] font-medium select-none"
          >
            07
          </p>
          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pt-32 md:pt-52 pb-[140px] md:pb-[220px] relative">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
              <div className="col-span-12 md:col-span-2">
                <p className="text-[10px] tracking-[0.28em] uppercase text-meta-ink/55 font-mono">
                  Coda
                </p>
              </div>
              <div className="col-span-12 md:col-span-8 md:col-start-4">
                <p className="text-[22px] md:text-[30px] lg:text-[40px] leading-[1.3] tracking-[-0.02em] text-ink-strong/90 font-medium max-w-[36ch]">
                  Operational complexity
                  <span className="block text-ink-strong/75">rarely disappears.</span>
                  <span className="block text-meta-ink/55">The work is often about creating the structures</span>
                  <span className="block text-meta-ink/40">that allow products, workflows, and teams to evolve coherently over time.</span>
                </p>
                <div className="mt-24 md:mt-36 flex items-center gap-6 max-w-[60%]">
                  <div className="h-px w-16 md:w-24 bg-ink-strong/45" />
                  <div className="h-px flex-1 bg-gradient-to-r from-ink-strong/25 to-transparent" />
                </div>
                <p className="mt-10 text-[10px] tracking-[0.28em] uppercase text-meta-ink/35 font-mono">
                  end of essay · origin markets
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ChapterTransition current={2} />
    </main>
  );
};

export default OriginMarkets;
