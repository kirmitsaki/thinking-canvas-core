import { Link, useParams } from "react-router-dom";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

type CaseStudy = {
  context: string;
  title: string;
  meta: string;
  standfirst: string;
  paragraphs: string[];
};

const caseStudies: Record<string, CaseStudy> = {
  "secure-code-warrior": {
    context: "Secure Code Warrior",
    title: "Building a design function from the ground up",
    meta: "Head of Product Design · 2023 – Present · AI-driven developer risk platform · London (EMEA/APAC)",
    standfirst:
      "Secure Code Warrior helps organisations reduce software risk by changing how developers think about security. When I joined, design was present but peripheral, plugged in for delivery but not shaping direction. I was asked to change that.",
    paragraphs: [
      "I built and scaled a distributed design team across EMEA and APAC, establishing the operating model, hiring standards, and team culture from the ground up. The function moved from UI execution to product design, from delivery support to strategic contributor to roadmap and product direction.",
      "The most significant product contribution was the vision work that repositioned the company from a learning platform to a holistic developer risk solution, a shift now visible in how the company presents itself to the market. That vision unified internal teams around a common direction for the first time. The foundational work from that project continues to shape the product today, with this year's vision extending it further into AI.",
      "Along the way: the platform's first design system, built incrementally from a simple shared file into a living system now used by every engineering team across regions. The platform's first accessibility audit, guidelines, and engineering tickets, addressing a hard requirement from enterprise clients that had never been properly tackled. And AI-enabled prototyping workflows that reduced idea-to-validated-concept cycles to under four weeks.",
    ],
  },
  "origin-markets": {
    context: "Origin Markets",
    title: "Designing trust into institutional finance",
    meta: "Lead Product Designer · 2020 – 2023 · Fintech platform for debt capital markets · London",
    standfirst:
      "Origin Markets is a market-leading platform used by global banks and borrowers to manage debt issuance. I joined as the first in-house designer. No existing design function, no design system, a product that had grown faster than its foundations.",
    paragraphs: [
      "I partnered with the founders to define product strategy and position design as a core contributor to product and business decisions. Working closely with the founding team, I helped translate an ambitious vision for the debt capital markets into a structured digital product that real institutions could use and trust.",
      "The Morpho design system, which I created, brought consistency and scalability to a product handling high-density, high-stakes financial workflows. It became the foundation for everything the product team built from that point forward.",
      "The work was recognised with consecutive GlobalCapital Bond Awards for Best Fintech, an acknowledgement of what the product had become and the role design played in getting it there.",
    ],
  },
  "mendeley": {
    context: "Mendeley · Elsevier",
    title: "Coherence at scale, for expert users",
    meta: "Senior UX/UI Designer · 2019 – 2020 · Academic reference management platform · London",
    standfirst:
      "Mendeley is one of the world's largest academic networks, with over 120,000 researchers managing more than a million references. I joined as design lead across the core product areas, Library, Reader, and Citation, working within a large cross-functional team at Elsevier.",
    paragraphs: [
      "The work was about coherence at scale. I contributed to a cross-platform design system that brought consistency across web and desktop experiences, and led design across the product areas where researchers spent most of their time. I also embedded continuous research and usability testing into the product development process, making evidence-based decision making a regular part of how the team worked rather than an occasional exercise.",
      "Mendeley sharpened how I think about designing for expert users doing genuinely complex work, inside a large organisation with multiple products and teams. It is where systems thinking stopped being an instinct and started becoming a practice.",
    ],
  },
};

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = slug ? caseStudies[slug] : undefined;

  if (!study) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteNav />
        <main className="mx-auto max-w-[1320px] px-6 md:px-12 py-40">
          <p className="font-editorial text-[24px] text-[hsl(var(--ink-body))]">
            Case study not found.{" "}
            <Link to="/work" className="italic underline">
              Back to Work
            </Link>
            .
          </p>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="mx-auto max-w-[1320px] px-6 md:px-12">
        <section className="pt-24 md:pt-36 pb-10 md:pb-16">
          <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--accent-stone))]">
            {study.context}
          </div>
          <h1 className="mt-6 md:mt-8 font-editorial text-[44px] md:text-[88px] leading-[1.02] tracking-[-0.02em] text-[hsl(var(--ink-strong))] max-w-5xl">
            {study.title}
          </h1>
          <p className="mt-6 md:mt-8 max-w-3xl text-[13px] md:text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--meta-ink))]">
            {study.meta}
          </p>
          <p className="mt-8 md:mt-12 max-w-3xl font-editorial text-[20px] md:text-[26px] leading-[1.35] tracking-[-0.005em] text-[hsl(var(--ink-body))]">
            {study.standfirst}
          </p>
        </section>

        <hr className="border-[hsl(var(--hairline))]" />

        <article className="py-14 md:py-20 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--accent-stone))]">
              Case study
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-4 space-y-7 font-editorial text-[19px] md:text-[21px] leading-[1.6] text-[hsl(var(--ink-body))]">
            {study.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>

        <hr className="border-[hsl(var(--hairline))]" />

        <section className="py-14 md:py-20 flex items-baseline justify-between">
          <Link
            to="/work"
            className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--ink-body))] hover:text-[hsl(var(--ink-strong))] transition-colors"
          >
            ← All work
          </Link>
          <Link
            to="/writing"
            className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--ink-body))] hover:text-[hsl(var(--ink-strong))] transition-colors"
          >
            Read the essays →
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
