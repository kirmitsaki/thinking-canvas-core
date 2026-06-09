import { Link } from "react-router-dom";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const entries = [
  {
    slug: "product-direction",
    title: "Product Direction",
    note: "Helping teams create clarity around product structure, priorities, and long-term evolution.",
  },
  {
    slug: "building-design-functions",
    title: "Building Design Functions",
    note: "Establishing the practices, systems, and operating models that allow design to scale.",
  },
  {
    slug: "designing-complex-systems",
    title: "Designing Complex Systems",
    note: "Working on products where workflows and organisational context matter more than individual screens.",
  },
  {
    slug: "ai-and-product-development",
    title: "AI and Product Development",
    note: "Exploring how AI changes discovery, validation, and the process of building products.",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <main className="mx-auto max-w-[1320px] px-6 md:px-12">
        {/* Masthead */}
        <section className="pt-24 md:pt-40 pb-16 md:pb-24">
          <h1 className="font-editorial text-[56px] sm:text-[84px] md:text-[128px] leading-[0.92] tracking-[-0.02em] text-[hsl(var(--ink-strong))]">
            Rachel
            <br />
            Kirmitsaki
          </h1>
          <p className="mt-10 md:mt-14 text-[14px] uppercase tracking-[0.22em] text-[hsl(var(--ink-body))]">
            Head of Product Design
          </p>
        </section>

        {/* Lede */}
        <section className="pb-24 md:pb-40 max-w-4xl">
          <p className="font-editorial text-[24px] sm:text-[30px] md:text-[40px] leading-[1.2] tracking-[-0.005em] text-[hsl(var(--ink-strong))]">
            Over the last decade I’ve worked across research, fintech, cybersecurity, and AI.
            Most of those products had one thing in common: they became more complex as they grew.
            My work has largely been about helping products and teams navigate that complexity.
          </p>
        </section>

        <hr className="border-[hsl(var(--hairline))]" />

        {/* What I Do */}
        <section className="pt-16 md:pt-24 pb-16 md:pb-24">
          <h2 className="text-[12px] uppercase tracking-[0.22em] text-[hsl(var(--meta-ink))] mb-10 md:mb-16">
            What I Do
          </h2>
          <ul className="divide-y divide-[hsl(var(--hairline))] border-t border-b border-[hsl(var(--hairline))]">
            {entries.map((e) => (
              <li key={e.slug}>
                <Link
                  to={`/essays/${e.slug}`}
                  className="group grid grid-cols-12 gap-6 py-8 md:py-10 items-baseline"
                >
                  <span className="col-span-12 md:col-span-5 font-editorial text-[28px] md:text-[40px] leading-[1.05] tracking-[-0.01em] text-[hsl(var(--ink-strong))] group-hover:italic transition-[font-style]">
                    {e.title}
                  </span>
                  <span className="col-span-12 md:col-span-7 text-[15px] md:text-[17px] leading-[1.5] text-[hsl(var(--muted-ink))]">
                    {e.note}
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
