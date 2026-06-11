import { Link } from "react-router-dom";
import { PageHeader, PageRule, PageShell } from "@/components/PageShell";

type EssayItem = { slug: string; title: string; blurb: string };
type EssayGroup = { label: string; items: EssayItem[] };

const groups: EssayGroup[] = [
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

const EssayLink = ({ item }: { item: EssayItem }) => (
  <li>
    <Link to={`/essays/${item.slug}`} className="group block py-7 md:py-9">
      <div className="flex items-baseline justify-between gap-6">
        <h3 className="font-editorial text-[26px] md:text-[36px] leading-[1.1] tracking-[-0.015em] text-[hsl(var(--ink-strong))] group-hover:italic transition-[font-style]">
          {item.title}
        </h3>
        <span className="text-[hsl(var(--meta-ink))] opacity-30 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">
          →
        </span>
      </div>
      <p className="mt-3 max-w-2xl text-[15px] md:text-[16px] leading-[1.55] text-[hsl(var(--ink-body))]">
        {item.blurb}
      </p>
    </Link>
  </li>
);

export default function Writing() {
  return (
    <PageShell>
      <PageHeader
        title="Writing"
        lede="I've been doing this for a while now. Long enough to have opinions, make mistakes, and occasionally be right for the wrong reasons. These essays are my attempt to write down the things I keep thinking about, the patterns I keep seeing, the moments that changed how I work."
      >
        <p className="mt-6 max-w-2xl text-[15px] md:text-[17px] leading-[1.6] text-[hsl(var(--ink-body))]">
          No frameworks. No five-step models. Just what I've actually observed,
          from inside companies that were figuring things out in real time.
        </p>
      </PageHeader>

      <PageRule />

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
            {g.items.map((item) => (
              <EssayLink key={item.slug} item={item} />
            ))}
          </ul>
        </section>
      ))}

      <div className="h-24" />
    </PageShell>
  );
}
