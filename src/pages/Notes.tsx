import { Link } from "react-router-dom";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const notes = [
  { slug: "most-product-problems-are-not-design-problems", title: "Most product problems are not design problems" },
  { slug: "research-systems-rarely-reset", title: "Research systems rarely reset" },
  { slug: "design-systems-as-organisational-memory", title: "Design systems as organisational memory" },
  { slug: "the-cost-of-prototyping-is-collapsing", title: "The cost of prototyping is collapsing" },
  { slug: "why-product-direction-matters-before-roadmaps", title: "Why product direction matters before roadmaps" },
  { slug: "what-ai-changes-and-what-it-doesnt", title: "What AI changes and what it doesn't" },
];

export default function Notes() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="mx-auto max-w-[1320px] px-6 md:px-12">
        <section className="pt-24 md:pt-40 pb-16 md:pb-24 max-w-3xl">
          <h1 className="font-editorial text-[56px] md:text-[112px] leading-[0.95] tracking-[-0.02em] text-[hsl(var(--ink-strong))]">
            Notes
          </h1>
        </section>

        <hr className="border-[hsl(var(--hairline))]" />

        <ul className="divide-y divide-[hsl(var(--hairline))]">
          {notes.map((n) => (
            <li key={n.slug}>
              <Link
                to={`/essays/${n.slug}`}
                className="group flex items-baseline gap-3 py-6 md:py-8"
              >
                <span className="font-editorial text-[24px] md:text-[34px] leading-[1.2] tracking-[-0.005em] text-[hsl(var(--ink-strong))] group-hover:italic transition-[font-style]">
                  {n.title}
                </span>
                <span className="inline-block text-[0.55em] text-[hsl(var(--meta-ink))] opacity-30 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
