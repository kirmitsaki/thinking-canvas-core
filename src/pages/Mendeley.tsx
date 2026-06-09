import SiteNav from "@/components/SiteNav";
import ChapterTransition from "@/components/ChapterTransition";
import {
  Container,
  H1,
  Body,
  Highlight,
  SectionLabel,
  BackLink,
  ActLabel,
  ActH2,
  ActBody,
} from "@/components/editorial";
import mendeley1 from "@/assets/mendeley-1.png";
import mendeley2 from "@/assets/mendeley-2.png";
import mendeley3 from "@/assets/mendeley-3.png";
import mendeleyPatternLibraryCover from "@/assets/mendeley-pattern-library-cover.png";

/* ============================================================
   MENDELEY (ELSEVIER)
   Editorial systems narrative, in a quieter register than
   Origin Markets: gentler asymmetry, no marquee, no oversized
   environmental glyphs. Spine + acts + restrained pacing.
   Copy is preserved verbatim.
   ============================================================ */

const Mendeley = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <BackLink to="/work" />
      

      {/* HERO */}
      <Container className="pt-[64px] pb-[120px]">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <div className="mb-6">
              <SectionLabel>Chapter 1: Designing systems for research at scale</SectionLabel>
            </div>
            <H1>Mendeley (Elsevier)</H1>
            <Highlight className="mt-16">
              Supporting 120K+ researchers managing over 1M references and annotations across web and desktop.
            </Highlight>
            <div className="mt-16 space-y-6">
              <Body muted>
                Designing for research is less about simplicity and more about supporting continuity. Work builds over time, across sessions, papers, and ideas. The challenge was designing within complexity at scale while working inside an established system rather than defining one from scratch.
              </Body>
            </div>
          </div>
        </div>
      </Container>

      {/* ============================================================
          ONE CONTINUOUS NARRATIVE — quieter than Origin Markets
          ============================================================ */}
      <div className="relative overflow-hidden">

        {/* Architectural spine — single anchor line, very faint. */}
        <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
          <div className="mx-auto max-w-[1200px] h-full px-8 md:px-12 relative">
            <div className="absolute inset-y-0 left-[8.333%] w-px bg-hairline/60" />
            <div className="absolute inset-y-0 right-[8.333%] w-px bg-hairline/30" />
          </div>
        </div>

        {/* ── ACT I · CONTEXT ───────────────────────────────────────── */}
        <section className="relative border-t border-hairline">
          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pt-28 md:pt-44 pb-16 md:pb-28">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
              <ActLabel numeral="I" label="Context" />
              <div className="col-span-12 md:col-span-9 md:col-start-3">
                <ActH2 className="max-w-[26ch]">
                  A research environment
                  <span className="text-meta-ink/35 text-[24px] md:text-[36px] lg:text-[44px]"> spanning web and desktop, supporting long-term academic workflows across reading, organisation, and writing.</span>
                </ActH2>
              </div>
            </div>

            <div className="mt-16 md:mt-24 grid grid-cols-12 gap-x-6 md:gap-x-10">
              <div className="col-span-12 md:col-span-7 md:col-start-3 space-y-7 md:space-y-8 border-t border-hairline pt-8 md:pt-10">
                <ActBody>
                  Mendeley Reference Manager is a cross-platform research environment designed around how researchers collect, organise, and engage with knowledge over time.
                </ActBody>
                <ActBody>
                  The product spans web and desktop, holding together the slow, recursive work of reading, annotating, and writing.
                </ActBody>
                <ActBody>
                  Designing inside it meant building enough structure for individual practice to remain coherent as it evolves.
                </ActBody>
              </div>
            </div>
          </div>

          {/* full-bleed primary image, with a quiet caption rail */}
          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pb-20 md:pb-32">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
              <div className="col-span-12 md:col-span-10 md:col-start-2">
                <figure className="relative">
                  <img
                    src={mendeley1}
                    alt="Mendeley Library and Reader product overview"
                    loading="lazy"
                    className="w-full h-auto border border-hairline"
                  />
                  <figcaption className="mt-5 flex items-baseline gap-6 text-[11px] tracking-[0.24em] uppercase text-meta-ink/55 font-mono">
                    <span>fig. 01</span>
                    <span className="text-meta-ink/70">Library and Reader. One continuous research environment</span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* ── ACT II · THE CHALLENGE ────────────────────────────────── */}
        <section className="relative">
          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pt-28 md:pt-44 pb-24 md:pb-40">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
              <ActLabel numeral="II" label="Challenge" />
              <div className="col-span-12 md:col-span-8 md:col-start-3">
                <ActH2 className="max-w-[28ch]">
                  Research systems rarely reset.
                  <span className="text-meta-ink/45"> They accumulate structure over time.</span>
                </ActH2>
              </div>
            </div>

            {/* Three connected ideas — shared baseline, single column,
                hairline-separated rows, last row in ink for emphasis. */}
            <div className="mt-16 md:mt-24 grid grid-cols-12 gap-x-6 md:gap-x-10">
              <div className="col-span-12 md:col-span-9 md:col-start-3 border-t border-ink-strong">
                {[
                  {
                    n: "01",
                    label: "Scale",
                    body: "Research libraries grow slowly over time, often becoming deeply personal working environments.",
                    emphasis: false,
                  },
                  {
                    n: "02",
                    label: "Practice",
                    body: "Researchers move continuously between collecting, reading, annotating, organising, and writing.",
                    emphasis: false,
                  },
                  {
                    n: "03",
                    label: "Continuity",
                    body: "The challenge was maintaining clarity and consistency across workflows that evolve over months or years.",
                    emphasis: true,
                  },
                ].map((row) => (
                  <div
                    key={row.n}
                    className="grid grid-cols-12 gap-x-6 md:gap-x-10 py-8 md:py-10 border-b border-hairline"
                  >
                    <div className="col-span-12 md:col-span-3">
                      <p className="text-[10px] tracking-[0.28em] uppercase text-meta-ink/60 font-mono tabular-nums">
                        {row.n} / {row.label}
                      </p>
                    </div>
                    <div className="col-span-12 md:col-span-9 mt-3 md:mt-0">
                      <p
                        className={`text-[15px] md:text-[17px] leading-[1.65] max-w-[56ch] ${
                          row.emphasis
                            ? "text-ink-strong font-medium"
                            : "text-ink-body/80"
                        }`}
                      >
                        {row.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── ACT III · ROLE ────────────────────────────────────────── */}
        <section className="relative">
          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pt-28 md:pt-44 pb-24 md:pb-40">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
              <ActLabel numeral="III" label="Role" />
              <div className="col-span-12 md:col-span-7 md:col-start-3">
                <p className="text-[20px] md:text-[26px] lg:text-[30px] leading-[1.35] tracking-[-0.015em] text-ink-strong font-medium max-w-[34ch]">
                  Design lead across key product areas including Library, Reader, and Citation.
                </p>
                <p className="mt-8 text-[15px] md:text-[16px] leading-[1.65] text-ink-body/75 max-w-[52ch]">
                  Worked closely with Product, Engineering, and Design teams across a large organisation, contributing to workflow design, system consistency, and cross-platform alignment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── ACT IV · APPROACH — four lenses on a single spine ────── */}
        <section className="relative">
          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pt-28 md:pt-44 pb-24 md:pb-40">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 mb-20 md:mb-32">
              <ActLabel numeral="IV" label="Approach" />
              <div className="col-span-12 md:col-span-9 md:col-start-3">
                <ActH2 className="max-w-[28ch]">
                  Four practices
                  <span className="text-meta-ink/45"> sustaining the system over time.</span>
                </ActH2>
              </div>
            </div>

            <div className="relative">
              {/* central spine */}
              <div aria-hidden className="absolute left-1/2 top-0 bottom-0 w-px bg-ink-strong/25 hidden md:block" />
              <div aria-hidden className="absolute left-1/2 -top-1 -translate-x-1/2 w-1.5 h-1.5 bg-ink-strong rounded-full hidden md:block" />
              <div aria-hidden className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-1.5 h-1.5 bg-ink-strong rounded-full hidden md:block" />

              <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 gap-y-16 md:gap-y-20 relative">
                {[
                  {
                    n: "01",
                    glyph: "continuity",
                    title: "Designing for continuity",
                    body: "Structured workflows to support how users organise, read, annotate, and cite research across sessions and contexts.",
                    side: "left",
                    span: "md:col-start-1 md:col-span-5",
                    shift: "",
                  },
                  {
                    n: "02",
                    glyph: "research",
                    title: "Embedding research into the process",
                    body: "Ran continuous user research and usability testing, using insights to guide decisions and refine workflows over time.",
                    side: "right",
                    span: "md:col-start-8 md:col-span-5",
                    shift: "",
                  },
                  {
                    n: "03",
                    glyph: "scale",
                    title: "Supporting scale through documentation",
                    body: "Maintained detailed documentation to ensure consistency and coordination across teams.",
                    side: "left",
                    span: "md:col-start-1 md:col-span-5",
                    shift: "",
                  },
                  {
                    n: "04",
                    glyph: "consistency",
                    title: "Maintaining consistency",
                    body: "Contributed to a shared design system, improving alignment across web and desktop and reducing fragmentation.",
                    side: "right",
                    span: "md:col-start-8 md:col-span-5",
                    shift: "",
                  },
                ].map((layer) => (
                  <div
                    key={layer.n}
                    className={`relative col-span-12 ${layer.span} ${layer.shift}`}
                  >
                    <div
                      aria-hidden
                      className="hidden md:block absolute top-7 h-px bg-ink-strong/25"
                      style={
                        layer.side === "left"
                          ? { right: "-14%", width: "14%" }
                          : { left: "-14%", width: "14%" }
                      }
                    />
                    <div className="border-t border-ink-strong/70 pt-5">
                      <div className="flex items-baseline justify-between mb-5">
                        <span className="text-[10px] tracking-[0.28em] uppercase text-meta-ink/65 font-mono tabular-nums">
                          {layer.n} / {layer.glyph}
                        </span>
                      </div>
                      <h3 className="text-[20px] md:text-[24px] lg:text-[28px] leading-[1.15] tracking-[-0.012em] text-ink-strong font-medium mb-4">
                        {layer.title}
                      </h3>
                      <p className="text-[14px] md:text-[15px] leading-[1.65] text-ink-body/75 max-w-[40ch]">
                        {layer.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── ACT V · PATTERN LIBRARY — quiet evidence spread ─────── */}
        <section className="relative">
          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pt-12 md:pt-20 pb-24 md:pb-40">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 mb-12 md:mb-16">
              <ActLabel numeral="V" label="System" />
              <div className="col-span-12 md:col-span-8 md:col-start-3">
                <ActH2 className="max-w-[28ch]">
                  A shared system
                  <span className="text-meta-ink/45"> supporting consistency across platforms and product areas.</span>
                </ActH2>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
              <div className="col-span-12 md:col-span-9 md:col-start-2">
                <figure className="relative">
                  <img
                    src={mendeleyPatternLibraryCover}
                    alt="Mendeley UI Pattern Library across platforms"
                    loading="lazy"
                    className="w-full h-auto border border-hairline"
                  />
                  <figcaption className="mt-5 flex items-baseline gap-6 text-[11px] tracking-[0.24em] uppercase text-meta-ink/55 font-mono">
                    <span>fig. 02</span>
                    <span className="text-meta-ink/70">UI Pattern Library. Shared foundations across web and desktop</span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* ── ACT VI · IMPACT — editorial metadata index ──────────── */}
        <section className="relative">
          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pt-28 md:pt-44 pb-24 md:pb-40">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 mb-16 md:mb-24">
              <ActLabel numeral="VI" label="Impact" />
              <div className="col-span-12 md:col-span-8 md:col-start-3">
                <ActH2 className="max-w-[24ch]">
                  What the system
                  <span className="text-meta-ink/45"> enabled.</span>
                </ActH2>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 gap-y-12 md:gap-y-16">
              {[
                {
                  k: "Product",
                  v: "Supported long-term organisation across increasingly large research libraries.",
                },
                {
                  k: "Scale",
                  v: "Held continuity for 120K+ researchers managing over 1M references and annotations.",
                },
                {
                  k: "System",
                  v: "Carried shared patterns across web and desktop as workflows and product surfaces evolved.",
                },
              ].map((row, i) => {
                const placement = [
                  "md:col-start-3 md:col-span-5",
                  "md:col-start-8 md:col-span-5",
                  "md:col-start-3 md:col-span-5",
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
                    <p className="text-[17px] md:text-[20px] lg:text-[22px] leading-[1.4] tracking-[-0.01em] text-ink-strong font-medium max-w-[34ch]">
                      {row.v}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── ACT VII · LIBRARY & READER — the system in practice ── */}
        <section className="relative">
          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pt-28 md:pt-44 pb-24 md:pb-40">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 mb-16 md:mb-24">
              <ActLabel numeral="VII" label="In practice" />
              <div className="col-span-12 md:col-span-8 md:col-start-3">
                <ActH2 className="max-w-[24ch]">
                  Library and Reader.
                  <span className="text-meta-ink/45"> Two surfaces, one continuous practice.</span>
                </ActH2>
              </div>
            </div>

            {/* Cohesive editorial intro — single stacked block */}
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 mb-24 md:mb-36">
              <div className="col-span-12 md:col-span-7 md:col-start-3 space-y-7 md:space-y-8 border-t border-hairline pt-8 md:pt-10">
                <ActBody>
                  Two core surfaces supporting how researchers manage and engage with their work.
                </ActBody>
                <ActBody>
                  The Library enables organisation and retrieval at scale, while the Reader supports deep focus, annotation, and insight capture.
                </ActBody>
              </div>
            </div>

            {/* Two figures, one per row — sequential editorial pacing */}
            <div className="space-y-32 md:space-y-52">
              <figure className="grid grid-cols-12 gap-x-6 md:gap-x-10">
                <div className="col-span-12 md:col-span-11 md:col-start-2">
                  <img
                    src={mendeley3}
                    alt="Workflow continuity between Library and Reader"
                    loading="lazy"
                    className="w-full h-auto border border-hairline"
                  />
                  <figcaption className="mt-6 grid grid-cols-12 gap-x-6 md:gap-x-10">
                    <span className="col-span-12 md:col-span-2 text-[11px] tracking-[0.24em] uppercase text-meta-ink/55 font-mono">
                      fig. 03
                    </span>
                    <span className="col-span-12 md:col-span-7 mt-2 md:mt-0 text-[14px] md:text-[15px] leading-[1.6] text-ink-body/75 max-w-[58ch]">
                      Organising large volumes of research into a structure that remains navigable over time.
                    </span>
                  </figcaption>
                </div>
              </figure>

              <figure className="grid grid-cols-12 gap-x-6 md:gap-x-10">
                <div className="col-span-12 md:col-span-11 md:col-start-2">
                  <img
                    src={mendeley2}
                    alt="Mendeley Reader with annotations"
                    loading="lazy"
                    className="w-full h-auto border border-hairline"
                  />
                  <figcaption className="mt-6 grid grid-cols-12 gap-x-6 md:gap-x-10">
                    <span className="col-span-12 md:col-span-2 text-[11px] tracking-[0.24em] uppercase text-meta-ink/55 font-mono">
                      fig. 04
                    </span>
                    <span className="col-span-12 md:col-span-7 mt-2 md:mt-0 text-[14px] md:text-[15px] leading-[1.6] text-ink-body/75 max-w-[58ch]">
                      Research is not a single interaction. It is an ongoing process of reading, annotating, and returning to work over time.
                    </span>
                  </figcaption>
                </div>
              </figure>
            </div>
          </div>
        </section>

        {/* ── ACT VIII · KEY LEARNING — cinematic pause ───────────── */}
        <section className="relative bg-ink-strong text-background mt-28 md:mt-40">
          <div className="mx-auto max-w-[1200px] px-8 md:px-12 py-36 md:py-56 relative">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
              <div className="col-span-12 md:col-span-1">
                <p className="text-[10px] tracking-[0.32em] uppercase text-background/40 font-mono">
                  VIII
                </p>
                <p className="mt-2 text-[10px] tracking-[0.32em] uppercase text-background/40 font-mono">
                  Coda
                </p>
              </div>
              <div className="col-span-12 md:col-span-7 md:col-start-5">
                <p className="text-[24px] md:text-[34px] lg:text-[42px] leading-[1.25] tracking-[-0.02em] font-medium text-background/90 max-w-[28ch]">
                  Designing at scale is not about removing complexity.
                  <span className="block text-background/55"> It is about creating enough structure for complexity to remain usable over time.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CODA — quiet final spread ───────────────────────────── */}
        <section className="relative">
          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pt-32 md:pt-52 pb-[140px] md:pb-[220px]">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
              <div className="col-span-12 md:col-span-1" />
              <div className="col-span-12 md:col-span-7 md:col-start-5">
                <div className="flex items-center gap-6 max-w-[60%]">
                  <div className="h-px w-16 md:w-24 bg-ink-strong/40" />
                  <div className="h-px flex-1 bg-gradient-to-r from-ink-strong/20 to-transparent" />
                </div>
                <p className="mt-10 text-[10px] tracking-[0.28em] uppercase text-meta-ink/35 font-mono">
                  end of essay · mendeley (elsevier)
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ChapterTransition current={1} />
    </main>
  );
};

export default Mendeley;
