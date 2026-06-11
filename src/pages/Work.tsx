import { PageHeader, PageRule, PageShell } from "@/components/PageShell";

type CaseStudy = {
  company: string;
  role: string;
  dates: string;
  location: string;
  domain: string;
  paragraphs: string[];
};

const caseStudies: CaseStudy[] = [
  {
    company: "Secure Code Warrior",
    role: "Head of Product Design",
    dates: "2023 – Present",
    location: "London, EMEA/APAC",
    domain: "AI-driven developer risk platform",
    paragraphs: [
      "When I joined, design was present but peripheral. There was a team, technically, but it was operating like a contractor pool, plugged in for delivery and not much else. After an internal restructure I was asked to build the function properly, across two regions, from the ground up.",
      "I built the team, established how we worked, and moved design from a delivery function to something that actually contributed to where the product was going. The most significant moment was when the CPTO asked me to rethink the product from scratch. Not iterate. Start over. We ran workshops, built a vision that unified the company around a common direction for the first time, and that work has been the foundation of everything since. This year it extended into AI and a full repositioning of the company in the market.",
      "Along the way: the platform's first design system, built from a simple shared file into something every engineering team now uses without thinking about it. The first accessibility audit the platform had ever had. And AI-enabled workflows that cut idea-to-validated-concept time to under four weeks.",
    ],
  },
  {
    company: "Origin Markets",
    role: "Lead Product Designer",
    dates: "2020 – 2023",
    location: "London",
    domain: "Fintech platform for debt capital markets",
    paragraphs: [
      "I was the first designer. No function, no system, no foundation. Just a product that had been growing faster than its structure and founders who needed someone to help them figure out what it should become.",
      "I worked closely with the founding team to define product strategy and translate a genuinely ambitious vision into something real institutions could use and trust. I built Morpho, the design system that became the foundation for everything the team built after. The product won consecutive GlobalCapital Bond Awards for Best Fintech, which was a nice acknowledgement that the work had landed.",
      "The thing I learned most at Origin Markets was that the interface is rarely the interesting problem. The interesting problem is usually what the product is actually for, and who it's really serving.",
    ],
  },
  {
    company: "Mendeley (Elsevier)",
    role: "Senior UX/UI Designer",
    dates: "2019 – 2020",
    location: "London",
    domain: "Academic reference management platform",
    paragraphs: [
      "Mendeley is where I learned what it means to design for expert users doing genuinely complex work. Over 120,000 researchers, more than a million references, a product that had to work across web and desktop without falling apart.",
      "I led design across the core product areas, Library, Reader, and Citation, contributed to the cross-platform design system, and embedded continuous research into how the team worked. Not as an occasional exercise but as a regular part of how decisions got made.",
      "It was also my first experience inside a large organisation with multiple products and teams pulling in different directions. That's where systems thinking stopped being an instinct and started becoming something I could actually articulate.",
    ],
  },
];

export default function Work() {
  return (
    <PageShell>
      <PageHeader
        title="Work"
        lede="Three companies. All complex. All situations where design either had to earn its place or build it from scratch."
      />

      <PageRule />

      <div className="pt-8 md:pt-16 pb-24 md:pb-40">
        {caseStudies.map((c, idx) => {
          const n = ["I", "II", "III"][idx];
          return (
            <article
              key={c.company}
              className="group/case relative py-20 md:py-32 first:pt-12 md:first:pt-20"
            >
              {/* Large, very light background numeral */}
              <span
                aria-hidden
                className="pointer-events-none select-none absolute -top-4 md:-top-8 right-0 font-editorial font-light tabular-nums leading-none text-[hsl(var(--ink-strong))] opacity-[0.06] md:opacity-[0.08] group-hover/case:text-[hsl(var(--accent-stone))] group-hover/case:opacity-[0.18] transition-colors duration-500 text-[140px] sm:text-[220px] md:text-[320px]"
              >
                {n}
              </span>

              <header className="relative">
                <h2 className="font-editorial text-[40px] sm:text-[56px] md:text-[88px] leading-[0.98] tracking-[-0.025em] text-[hsl(var(--ink-strong))]">
                  {c.company}
                </h2>
                <p className="mt-5 md:mt-6 text-[15px] md:text-[17px] text-[hsl(var(--ink-body))]">
                  {c.role} · {c.dates}
                </p>
                <p className="mt-1 text-[13px] md:text-[14px] font-light text-[hsl(var(--meta-ink))]">
                  {c.location} · {c.domain}
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
          );
        })}
      </div>
    </PageShell>
  );
}
