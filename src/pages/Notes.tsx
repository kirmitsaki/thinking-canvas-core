import { Link } from "react-router-dom";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const essays = [
  { slug: "product-direction", title: "Creating Product Direction" },
  { slug: "building-design-functions", title: "Building Design Functions From Zero" },
  { slug: "designing-complex-systems", title: "Designing Systems That Accumulate Complexity" },
  { slug: "ai-and-product-development", title: "AI and Product Development" },
  { slug: "operational-workflows-and-product-evolution", title: "Operational Workflows and Product Evolution" },
  { slug: "research-systems-rarely-reset", title: "Research Systems Rarely Reset" },
];

const fieldNotes = [
  { slug: "most-product-problems-are-not-design-problems", title: "Most Product Problems Are Not Design Problems" },
  { slug: "why-product-direction-matters-before-roadmaps", title: "Why Product Direction Matters Before Roadmaps" },
  { slug: "design-systems-as-organisational-memory", title: "Design Systems as Organisational Memory" },
  { slug: "the-cost-of-prototyping-is-collapsing", title: "The Cost of Prototyping Is Collapsing" },
  { slug: "speed-only-matters-if-people-move-together", title: "Speed Only Matters If People Move Together" },
  { slug: "what-ai-changes-and-what-it-doesnt", title: "What AI Changes and What It Doesn't" },
  { slug: "products-rarely-become-simpler-as-they-grow", title: "Products Rarely Become Simpler As They Grow" },
  { slug: "the-difference-between-alignment-and-agreement", title: "The Difference Between Alignment and Agreement" },
  { slug: "discovery-is-often-an-organisational-problem", title: "Discovery Is Often an Organisational Problem" },
];

export default function Notes() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="mx-auto max-w-[1320px] px-6 md:px-12">
        {/* Masthead */}
        <section className="pt-24 md:pt-40 pb-12 md:pb-16">
          <h1 className="font-editorial text-[64px] md:text-[136px] leading-[0.95] tracking-[-0.025em] text-[hsl(var(--ink-strong))]">
            Notes
          </h1>
          <p className="mt-10 md:mt-14 max-w-2xl font-editorial text-[20px] md:text-[26px] leading-[1.35] tracking-[-0.005em] text-[hsl(var(--ink-body))]">
            Observations, essays, and field notes gathered from a decade working across
            research, fintech, cybersecurity, and AI.
          </p>
        </section>

        <hr className="border-[hsl(var(--hairline))]" />

        {/* Essays */}
        <section className="pt-16 md:pt-24 pb-20 md:pb-32 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <h2 className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--meta-ink))]">
              Essays
            </h2>
          </div>
          <ol className="col-span-12 md:col-span-9 divide-y divide-[hsl(var(--hairline))] border-t border-b border-[hsl(var(--hairline))]">
            {essays.map((e, i) => (
              <li key={e.slug}>
                <Link
                  to={`/essays/${e.slug}`}
                  className="group grid grid-cols-12 gap-4 py-8 md:py-10 items-baseline"
                >
                  <span className="col-span-11 font-editorial text-[28px] md:text-[44px] leading-[1.05] tracking-[-0.015em] text-[hsl(var(--ink-strong))] group-hover:italic transition-[font-style]">
                    {e.title}
                  </span>
                  <span className="col-span-1 text-right text-[hsl(var(--meta-ink))] opacity-30 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <hr className="border-[hsl(var(--hairline))]" />

        {/* Field Notes */}
        <section className="pt-16 md:pt-24 pb-24 md:pb-40 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <h2 className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--meta-ink))]">
              Field Notes
            </h2>
          </div>
          <ul className="col-span-12 md:col-span-9 divide-y divide-[hsl(var(--hairline))]">
            {fieldNotes.map((n) => (
              <li key={n.slug}>
                <Link
                  to={`/essays/${n.slug}`}
                  className="group flex items-baseline justify-between gap-6 py-5 md:py-6"
                >
                  <span className="font-editorial text-[20px] md:text-[24px] leading-[1.25] tracking-[-0.005em] text-[hsl(var(--ink-strong))] group-hover:italic transition-[font-style]">
                    {n.title}
                  </span>
                  <span className="text-[hsl(var(--meta-ink))] opacity-20 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
