import { PageHeader, PageRule, PageShell } from "@/components/PageShell";

type CaseStudy = {
  context: string;
  title: string;
  meta: string;
  descriptor: string;
  paragraphs: string[];
};

const caseStudies: CaseStudy[] = [
  {
    context: "Secure Code Warrior",
    title: "Head of Product Design",
    meta: "2023 – Present",
    descriptor: "AI-driven developer risk platform · London, EMEA/APAC",
    paragraphs: [
      "When I joined, design was present but peripheral. There was a team, technically, but it was operating like a contractor pool, plugged in for delivery and not much else. After an internal restructure I was asked to build the function properly, across two regions, from the ground up.",
      "I built the team, established how we worked, and moved design from a delivery function to something that actually contributed to where the product was going. The most significant moment was when the CPTO asked me to rethink the product from scratch. Not iterate. Start over. We ran workshops, built a vision that unified the company around a common direction for the first time, and that work has been the foundation of everything since. This year it extended into AI and a full repositioning of the company in the market.",
      "Along the way: the platform's first design system, built from a simple shared file into something every engineering team now uses without thinking about it. The first accessibility audit the platform had ever had. And AI-enabled workflows that cut idea-to-validated-concept time to under four weeks.",
    ],
  },
  {
    context: "Origin Markets",
    title: "Lead Product Designer",
    meta: "2020 – 2023",
    descriptor: "Fintech platform for debt capital markets · London",
    paragraphs: [
      "I was the first designer. No function, no system, no foundation. Just a product that had been growing faster than its structure and founders who needed someone to help them figure out what it should become.",
      "I worked closely with the founding team to define product strategy and translate a genuinely ambitious vision into something real institutions could use and trust. I built Morpho, the design system that became the foundation for everything the team built after. The product won consecutive GlobalCapital Bond Awards for Best Fintech, which was a nice acknowledgement that the work had landed.",
      "The thing I learned most at Origin Markets was that the interface is rarely the interesting problem. The interesting problem is usually what the product is actually for, and who it's really serving.",
    ],
  },
  {
    context: "Mendeley (Elsevier)",
    title: "Senior UX/UI Designer",
    meta: "2019 – 2020",
    descriptor: "Academic reference management platform · London",
    paragraphs: [
      "Mendeley is where I learned what it means to design for expert users doing genuinely complex work. Over 120,000 researchers, more than a million references, a product that had to work across web and desktop without falling apart.",
      "I led design across the core product areas, Library, Reader, and Citation, contributed to the cross-platform design system, and embedded continuous research into how the team worked. Not as an occasional exercise but as a regular part of how decisions got made.",
      "It was also my first experience inside a large organisation with multiple products and teams pulling in different directions. That's where systems thinking stopped being an instinct and started becoming something I could actually articulate.",
    ],
  },
];

const ContextLabel = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--accent-stone))]">
    {children}
  </h2>
);

export default function Work() {
  return (
    <PageShell>
      <PageHeader
        title="Work"
        lede="Three companies. All B2B. All complex. All situations where design either had to earn its place or build it from scratch."
      />

      <PageRule />

      <section className="pb-20 md:pb-28">
        {caseStudies.map((c, idx) => {
          const isLast = idx === caseStudies.length - 1;
          return (
            <article
              key={c.context}
              className={
                "pt-14 md:pt-20 " +
                (isLast ? "" : "pb-14 md:pb-20 border-b border-[hsl(var(--hairline))]")
              }
            >
              <div className="grid grid-cols-12 gap-6 md:gap-10">
                <div className="col-span-12 md:col-span-3">
                  <ContextLabel>{c.context}</ContextLabel>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-editorial text-[30px] md:text-[44px] leading-[1.05] tracking-[-0.015em] text-[hsl(var(--ink-strong))]">
                      {c.title}
                    </h3>
                    <span className="text-[15px] md:text-[17px] text-[hsl(var(--meta-ink))]">
                      · {c.meta}
                    </span>
                  </div>
                  <p className="mt-1 text-[14px] md:text-[15px] leading-[1.5] text-[hsl(var(--meta-ink))]">
                    {c.descriptor}
                  </p>
                  <div className="mt-8 md:mt-10 space-y-6">
                    {c.paragraphs.map((p, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-[15px] md:text-[17px] leading-[1.55] text-[hsl(var(--ink-body))]"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </PageShell>
  );
}
