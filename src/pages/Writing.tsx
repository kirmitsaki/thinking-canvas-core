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
          "I've walked into a few companies where design was technically present but nobody was quite sure what it was for. This is what I learned from building it properly.",
      },
      {
        slug: "strategic-design-leadership",
        title: "Strategic design leadership",
        blurb:
          "Getting a seat at the table is one thing. Keeping it when everyone else in the room has a very strong opinion about next Friday's deadline is another.",
      },
      {
        slug: "systems-thinking",
        title: "Systems thinking",
        blurb:
          "Most problems that look like design problems aren't design problems. They're symptoms of something upstream. A button in the wrong place is rarely about the button.",
      },
      {
        slug: "complex-b2b-platforms",
        title: "Complex B2B platforms",
        blurb:
          "B2B gets a bad reputation for being unglamorous. I'd argue it's where the actually interesting problems live. The ones where the interface is the least complicated part.",
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
          "The most valuable thing I've learned about transforming how people work is that the parts that look most broken are often the parts doing the most important job.",
      },
      {
        slug: "research-led-decision-making",
        title: "Research-led decision making",
        blurb:
          "Research isn't about running studies. It's about building the habit of being wrong less often. Harder than it sounds, especially when the roadmap is already planned.",
      },
      {
        slug: "design-systems",
        title: "Design systems",
        blurb:
          "A design system is not a component library. It's a decision-making system. The difference matters more than most organisations realise until it's too late.",
      },
      {
        slug: "technical-fluency",
        title: "Technical fluency",
        blurb:
          "I started my career writing code. I haven't written production code in years. The way it still shows up every single day is one of the more useful things I can share.",
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
          "Leading a team across EMEA and APAC sounds like a logistics problem. It's actually a clarity problem. Everything that breaks is a symptom of the same thing.",
      },
      {
        slug: "commercial-and-business-impact",
        title: "Commercial and business impact",
        blurb:
          "Design either shapes commercial outcomes or it doesn't. There's very little middle ground. This is how I think about making sure it's the former.",
      },
      {
        slug: "ai-enabled-ways-of-working",
        title: "AI-enabled ways of working",
        blurb:
          "The biggest change AI made to how I work isn't speed. It's that weak ideas fail earlier and strong ideas surface sooner. One of my designers recently went a week without opening Figma. That felt significant.",
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
            I've been doing this for a while now. Long enough to have opinions,
            make mistakes, and occasionally be right for the wrong reasons.
            These essays are my attempt to write down the things I keep
            thinking about, the patterns I keep seeing, the moments that
            changed how I work.
          </p>
          <p className="mt-6 max-w-2xl text-[15px] md:text-[17px] leading-[1.6] text-[hsl(var(--ink-body))]">
            No frameworks. No five-step models. Just what I've actually
            observed, from inside companies that were figuring things out in
            real time.
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
