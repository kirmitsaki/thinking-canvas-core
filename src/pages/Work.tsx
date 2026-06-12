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

      <div className="pt-8 md:pt-16 pb-24 md:pb-40">
        {caseStudies.map((c) => (
          <article
            key={c.company}
            className="group/case relative py-20 md:py-32 first:pt-12 md:first:pt-20"
          >
            {/* Year marker — quieter, ~half size of previous numerals */}
            <span
              aria-hidden
              className="pointer-events-none select-none absolute -top-4 md:-top-8 right-0 font-editorial font-light tabular-nums leading-none text-[hsl(var(--ink-strong))] opacity-[0.06] md:opacity-[0.08] group-hover/case:text-[hsl(var(--accent-stone))] group-hover/case:opacity-[0.18] transition-colors duration-500 text-[70px] sm:text-[110px] md:text-[160px]"
            >
              {c.year}
            </span>

            <header className="relative">
              <h2 className="font-editorial text-[40px] sm:text-[56px] md:text-[88px] leading-[0.98] tracking-[-0.025em] text-[hsl(var(--ink-strong))]">
                {c.title}
              </h2>
              <p className="mt-5 md:mt-6 text-[15px] md:text-[17px] text-[hsl(var(--ink-body))]">
                {c.dates}
              </p>
              <p className="mt-1 text-[13px] md:text-[14px] font-light text-[hsl(var(--meta-ink))]">
                {c.company} · {c.domain} · {c.location}
              </p>
            </header>

            <div className="relative mt-12 md:mt-16 prose-body">
              {c.paragraphs.map((p, pIdx) => (
                <p
                  key={pIdx}
                  className="mb-10 md:mb-12 last:mb-0 text-[17px] leading-[1.8] text-[hsl(var(--ink-body))]"
                >
                  {p}
                </p>
              ))}
            </div>
          </article>
        ))}

        {/* Earlier section */}
        <section className="relative pt-16 md:pt-24 mt-8 md:mt-12 border-t border-[hsl(var(--hairline))]">
          <p className="text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-light text-[hsl(var(--meta-ink))]">
            Earlier
          </p>
          <div className="mt-6 md:mt-8 prose-body">
            <p className="text-[15px] md:text-[16px] leading-[1.75] font-light text-[hsl(var(--muted-ink))]">
              Before these roles, I worked as a UX/UI Designer at Elemental Concept (2017–2018), Web Designer at PawSquad (2015–2017), and UX Engineer at Migreat (2014–2015), where I designed and built interfaces from concept to coded prototypes. That last role is where the habit of thinking in systems before thinking in screens started.
            </p>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
