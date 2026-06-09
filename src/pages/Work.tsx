import { Link } from "react-router-dom";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const essays = [
  {
    slug: "creating-product-direction",
    number: "I",
    title: "Creating Product Direction",
    dek: "On the quiet work that decides what gets built, and what doesn’t.",
    kicker: "Essay",
    minutes: 9,
  },
  {
    slug: "building-design-functions-from-zero",
    number: "II",
    title: "Building Design Functions From Zero",
    dek: "Notes from the early years of a design practice, before anything is in place.",
    kicker: "Field study",
    minutes: 11,
  },
  {
    slug: "designing-systems-that-accumulate-complexity",
    number: "III",
    title: "Designing Systems That Accumulate Complexity",
    dek: "Most products do not fail at the beginning. They fail at the seams.",
    kicker: "Essay",
    minutes: 12,
  },
  {
    slug: "ai-and-product-development",
    number: "IV",
    title: "AI and Product Development",
    dek: "What changes when the cost of producing software approaches the cost of describing it.",
    kicker: "Essay",
    minutes: 10,
  },
];

export default function Work() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="mx-auto max-w-[1320px] px-6 md:px-12">
        <section className="pt-20 md:pt-32 pb-16 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--meta-ink))] md:pt-3">
            Section I
          </div>
          <div className="col-span-12 md:col-span-10">
            <h1 className="font-editorial text-[56px] md:text-[112px] leading-[0.95] tracking-[-0.02em] text-[hsl(var(--ink-strong))]">
              Work
            </h1>
            <p className="mt-8 max-w-2xl text-[15px] md:text-[17px] leading-[1.6] text-[hsl(var(--muted-ink))]">
              Four pieces, written less as case studies than as field notes. Companies appear where useful;
              the ideas come first.
            </p>
          </div>
        </section>

        <hr className="border-[hsl(var(--hairline))]" />

        <ol>
          {essays.map((e, i) => (
            <li key={e.slug} className={i === essays.length - 1 ? "" : "border-b border-[hsl(var(--hairline))]"}>
              <Link to={`/work/${e.slug}`} className="block group py-12 md:py-20">
                <div className="grid grid-cols-12 gap-6 items-baseline">
                  <div className="col-span-12 md:col-span-2">
                    <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--meta-ink))]">
                      № {e.number}
                    </div>
                    <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--meta-ink))]">
                      {e.kicker} · {e.minutes} min
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-10">
                    <h2 className="font-editorial text-[40px] sm:text-[56px] md:text-[80px] leading-[1] tracking-[-0.015em] text-[hsl(var(--ink-strong))] group-hover:italic transition-[font-style]">
                      {e.title}
                    </h2>
                    <p className="mt-6 max-w-2xl text-[16px] md:text-[18px] leading-[1.55] text-[hsl(var(--muted-ink))]">
                      {e.dek}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </main>
      <SiteFooter />
    </div>
  );
}
