import { Link } from "react-router-dom";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

type Item = { slug: string; title: string; blurb: string };

const groups: { label: string; items: Item[] }[] = [
  {
    label: "Core Identity",
    items: [
      {
        slug: "building-and-leading-design-organisations",
        title: "Building and leading design organisations",
        blurb:
          "How you build a design function from nothing, earn trust across engineering and product, and create the conditions for designers to become autonomous.",
      },
      {
        slug: "strategic-design-leadership",
        title: "Strategic design leadership",
        blurb:
          "How design earns influence at the strategic level, what it actually takes to get and keep a seat at the table, and how you lead when you're not the one doing the work.",
      },
      {
        slug: "systems-thinking",
        title: "Systems thinking",
        blurb:
          "Why most product problems are organisational problems in disguise, and how seeing systems rather than symptoms changes every decision you make.",
      },
      {
        slug: "complex-b2b-platforms",
        title: "Complex B2B platforms",
        blurb:
          "Why B2B design is harder and more interesting than it looks, and what it means to design around human systems rather than software workflows.",
      },
    ],
  },
  {
    label: "How I Work",
    items: [
      {
        slug: "workflow-transformation",
        title: "Workflow transformation",
        blurb:
          "What it actually means to transform a process rather than digitise it, and why the parts that look most inefficient are often the most valuable.",
      },
      {
        slug: "research-led-decision-making",
        title: "Research-led decision making",
        blurb:
          "Why research isn't about running studies but about interrupting false certainty, and what happens when you optimise without understanding.",
      },
      {
        slug: "design-systems",
        title: "Design systems",
        blurb:
          "Why a design system is decision-making infrastructure, not a component library, and what it takes to build one people actually use.",
      },
      {
        slug: "technical-fluency",
        title: "Technical fluency",
        blurb:
          "Why understanding how things are built makes you a better designer, and how that instinct changes conversations, decisions, and what you notice.",
      },
    ],
  },
  {
    label: "Multipliers",
    items: [
      {
        slug: "distributed-leadership",
        title: "Distributed leadership",
        blurb:
          "What it actually feels like to lead across regions, what breaks when teams are distributed, and why trust is built through predictability not presence.",
      },
      {
        slug: "commercial-and-business-impact",
        title: "Commercial and business impact",
        blurb:
          "How design shapes commercial outcomes rather than just supporting them, and what it means to translate design decisions into the language of risk, cost, and confidence.",
      },
      {
        slug: "ai-enabled-ways-of-working",
        title: "AI-enabled ways of working",
        blurb:
          "How AI has changed the design workflow in practice, what it gets wrong, and why execution is becoming cheaper while decision quality becomes more valuable.",
      },
    ],
  },
];

export default function Writing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="mx-auto max-w-[1320px] px-6 md:px-12">
        <section className="pt-24 md:pt-40 pb-12 md:pb-16">
          <h1 className="font-editorial text-[64px] md:text-[136px] leading-[0.95] tracking-[-0.025em] text-[hsl(var(--ink-strong))]">
            Writing
          </h1>
          <p className="mt-10 md:mt-14 max-w-2xl font-editorial text-[20px] md:text-[26px] leading-[1.35] tracking-[-0.005em] text-[hsl(var(--ink-body))]">
            A collection of essays on design leadership, systems thinking, and
            what it actually looks like to build products in complex
            organisations.
          </p>
        </section>

        <hr className="border-[hsl(var(--hairline))]" />

        {groups.map((g) => (
          <section
            key={g.label}
            className="pt-14 md:pt-20 pb-14 md:pb-20 grid grid-cols-12 gap-6 border-b border-[hsl(var(--hairline))]"
          >
            <div className="col-span-12 md:col-span-3">
              <h2 className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--accent-stone))]">
                {g.label}
              </h2>
            </div>
            <ul className="col-span-12 md:col-span-9 divide-y divide-[hsl(var(--hairline))]">
              {g.items.map((e) => (
                <li key={e.slug}>
                  <Link
                    to={`/essays/${e.slug}`}
                    className="group block py-7 md:py-9"
                  >
                    <div className="flex items-baseline justify-between gap-6">
                      <h3 className="font-editorial text-[26px] md:text-[36px] leading-[1.1] tracking-[-0.015em] text-[hsl(var(--ink-strong))] group-hover:italic transition-[font-style]">
                        {e.title}
                      </h3>
                      <span className="text-[hsl(var(--meta-ink))] opacity-30 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                    <p className="mt-3 max-w-2xl text-[15px] md:text-[16px] leading-[1.55] text-[hsl(var(--ink-body))]">
                      {e.blurb}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <div className="h-24" />
      </main>
      <SiteFooter />
    </div>
  );
}
