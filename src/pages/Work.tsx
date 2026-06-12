import { PageHeader, PageRule, PageShell } from "@/components/PageShell";

type CaseStudy = {
  title: string;
  company: string;
  domain: string;
  ghostDates: string;
  paragraphs: string[];
};


const caseStudies: CaseStudy[] = [
  {
    title: "Head of Product Design",
    company: "Secure Code Warrior",
    domain: "AI-driven developer risk platform · London, EMEA/APAC",
    ghostDates: "2023 – Present",
    paragraphs: [
      "When I joined, design was present but peripheral. There was a team, technically, but it operated like a contractor pool. After an internal restructure I was asked to build the function properly across two regions from the ground up.",
      "I built the team, established how we worked, and moved design from delivery support to something that actually shaped where the product was going. The most significant moment was when the CPTO asked me to rethink the product from scratch. Not iterate. Start over. We ran workshops, built a vision that unified the company around a common direction for the first time, and that work repositioned the company from a learning platform to a holistic developer risk solution.",
      "Along the way: the platform's first design system, the first accessibility audit it had ever had, and AI-enabled workflows that cut idea-to-validated-concept time to under four weeks.",
    ],
  },
  {
    title: "Lead Product Designer",
    company: "Origin Markets",
    domain: "Fintech platform for debt capital markets · London",
    ghostDates: "2020 – 2023",
    paragraphs: [
      "I was the first designer. No function, no system, no foundation. Just a product that had been growing faster than its structure and founders who needed someone to help figure out what it should become.",
      "I worked with the founding team to define product strategy and translate an ambitious vision for debt capital markets into something real institutions could use and trust. I built Morpho, the design system that became the foundation for everything the team built after. The product won consecutive GlobalCapital Bond Awards for Best Fintech.",
      "The thing I learned most at Origin Markets was that the interface is rarely the interesting problem. The interesting problem is usually what the product is actually for.",
    ],
  },
  {
    title: "Senior UX/UI Designer",
    company: "Mendeley (Elsevier)",
    domain: "Academic reference management platform · London",
    ghostDates: "2019 – 2020",
    paragraphs: [
      "Mendeley is where I learned what it means to design for expert users doing genuinely complex work. Over 120,000 researchers, more than a million references, a product that had to work across web and desktop without falling apart.",
      "I led design across Library, Reader, and Citation, contributed to the cross-platform design system, and embedded continuous research into how the team worked. It was also my first experience inside a large organisation with multiple products pulling in different directions. That's where systems thinking stopped being an instinct and started becoming something I could actually articulate.",
    ],
  },
];


export default function Work() {
  return (
    <PageShell>
      <PageHeader title="Work" />

      <PageRule />

      <ul className="pt-10 md:pt-16">
        {caseStudies.map((c) => (
          <li
            key={c.company}
            className="border-b border-[hsl(var(--hairline))]"
          >
            <article className="grid grid-cols-12 gap-4 md:gap-8 items-start py-14 md:py-24">
              <div className="col-span-3 md:col-span-2">
                <span
                  aria-hidden
                  className="block text-right pr-2 md:pr-4 pt-3 font-editorial font-light tabular-nums text-[18px] sm:text-[22px] md:text-[28px] leading-[1.1] tracking-[-0.01em] text-[hsl(var(--meta-ink))]"
                >
                  {c.ghostDates}
                </span>
              </div>
              <div className="col-span-9 md:col-span-10">
                <header>
                  <p className="text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-light text-[hsl(var(--meta-ink))]">
                    {c.title}
                  </p>
                  <h2 className="mt-3 font-editorial italic text-[32px] md:text-[52px] leading-[1.02] tracking-[-0.02em] text-[hsl(var(--ink-strong))]">
                    {c.company}
                  </h2>
                  <p className="mt-4 text-[13px] md:text-[14px] font-light text-[hsl(var(--meta-ink))]">
                    {c.domain}
                  </p>
                </header>

                <div className="mt-12 md:mt-16 prose-body">
                  {c.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className={
                        pIdx === 0
                          ? "mb-10 md:mb-12 font-editorial text-[22px] md:text-[26px] leading-[1.4] tracking-[-0.005em] text-[hsl(var(--ink-strong))]"
                          : "mb-10 md:mb-12 last:mb-0 text-[17px] leading-[1.8] text-[hsl(var(--ink-body))]"
                      }
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

      {/* Earlier section */}
      <section className="relative pt-16 md:pt-24 pb-24 md:pb-40">
        <p className="text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-light text-[hsl(var(--meta-ink))]">
          Earlier
        </p>
        <div className="mt-12 md:mt-16 prose-body">
          <p className="mb-10 md:mb-12 text-[17px] leading-[1.8] text-[hsl(var(--ink-body))]">
            Before these roles, I worked as a <strong>UX/UI Designer</strong> at Elemental Concept (2017–2018), <strong>Web Designer</strong> at PawSquad (2015–2017), and <strong>UX Engineer</strong> at Migreat (2014–2015), where I designed and built interfaces from concept to coded prototypes. That last role is where the habit of thinking in systems before thinking in screens started.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
