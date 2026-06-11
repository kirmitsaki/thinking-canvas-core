import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

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
    descriptor: "AI-driven developer risk platform · London (EMEA/APAC)",
    paragraphs: [
      "Secure Code Warrior helps organisations reduce software risk by changing how developers think about security. When I joined, design was present but peripheral, plugged in for delivery but not shaping direction. I was asked to change that.",
      "I built and scaled a distributed design team across EMEA and APAC, establishing the operating model, hiring standards, and team culture from the ground up. The function moved from UI execution to product design, from delivery support to strategic contributor to roadmap and product direction.",
      "The most significant product contribution was the vision work that repositioned the company from a learning platform to a holistic developer risk solution, a shift now visible in how the company presents itself to the market. That vision unified internal teams around a common direction for the first time. The foundational work from that project continues to shape the product today, with this year's vision extending it further into AI.",
      "Along the way: the platform's first design system, built incrementally from a simple shared file into a living system now used by every engineering team across regions. The platform's first accessibility audit, guidelines, and engineering tickets, addressing a hard requirement from enterprise clients that had never been properly tackled. And AI-enabled prototyping workflows that reduced idea-to-validated-concept cycles to under four weeks.",
    ],
  },
  {
    context: "Origin Markets",
    title: "Lead Product Designer",
    meta: "2020 – 2023",
    descriptor: "Fintech platform for debt capital markets · London",
    paragraphs: [
      "Origin Markets is a market-leading platform used by global banks and borrowers to manage debt issuance. I joined as the first in-house designer. No existing design function, no design system, a product that had grown faster than its foundations.",
      "I partnered with the founders to define product strategy and position design as a core contributor to product and business decisions. Working closely with the founding team, I helped translate an ambitious vision for the debt capital markets into a structured digital product that real institutions could use and trust.",
      "The Morpho design system, which I created, brought consistency and scalability to a product handling high-density, high-stakes financial workflows. It became the foundation for everything the product team built from that point forward.",
      "The work was recognised with consecutive GlobalCapital Bond Awards for Best Fintech, an acknowledgement of what the product had become and the role design played in getting it there.",
    ],
  },
  {
    context: "Mendeley (Elsevier)",
    title: "Senior UX/UI Designer",
    meta: "2019 – 2020",
    descriptor: "Academic reference management platform · London",
    paragraphs: [
      "Mendeley is one of the world's largest academic networks, with over 120,000 researchers managing more than a million references. I joined as design lead across the core product areas, Library, Reader, and Citation, working within a large cross-functional team at Elsevier.",
      "The work was about coherence at scale. I contributed to a cross-platform design system that brought consistency across web and desktop experiences, and led design across the product areas where researchers spent most of their time. I also embedded continuous research and usability testing into the product development process, making evidence-based decision making a regular part of how the team worked rather than an occasional exercise.",
      "Mendeley sharpened how I think about designing for expert users doing genuinely complex work, inside a large organisation with multiple products and teams. It is where systems thinking stopped being an instinct and started becoming a practice.",
    ],
  },
];

export default function Work() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="mx-auto max-w-[1320px] px-6 md:px-12">
        <section className="pt-24 md:pt-40 pb-12 md:pb-16">
          <h1 className="font-editorial text-[64px] md:text-[136px] leading-[0.95] tracking-[-0.025em] text-[hsl(var(--ink-strong))]">
            Work
          </h1>
          <p className="mt-10 md:mt-14 max-w-2xl font-editorial text-[20px] md:text-[26px] leading-[1.35] tracking-[-0.005em] text-[hsl(var(--ink-body))]">
            Three companies. Different domains, different problems, different
            stages of growth. The through line is the same: design walking in
            when the function didn't exist or wasn't working, and walking out
            having built something that lasted.
          </p>
        </section>

        <hr className="border-[hsl(var(--hairline))]" />

        <section className="pb-20 md:pb-28">
          {caseStudies.map((c, idx) => (
            <article
              key={c.context}
              className={
                "pt-14 md:pt-20 " +
                (idx < caseStudies.length - 1 ? "pb-14 md:pb-20 border-b border-[hsl(var(--hairline))]" : "")
              }
            >
              <div className="grid grid-cols-12 gap-6 md:gap-10">
                <div className="col-span-12 md:col-span-3">
                  <h2 className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--accent-stone))]">
                    {c.context}
                  </h2>
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
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
