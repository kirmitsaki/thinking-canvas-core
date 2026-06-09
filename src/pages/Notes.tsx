import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const notes = [
  "Most product problems are not design problems",
  "Research systems rarely reset",
  "Design systems as organisational memory",
  "The cost of prototyping is collapsing",
  "Why product direction matters before roadmaps",
  "What AI changes and what it doesn’t",
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

        <ul className="py-4">
          {notes.map((n) => (
            <li
              key={n}
              className="py-6 md:py-8 border-b border-[hsl(var(--hairline))] last:border-b-0"
            >
              <span className="font-editorial text-[24px] md:text-[34px] leading-[1.2] tracking-[-0.005em] text-[hsl(var(--ink-strong))]">
                {n}
              </span>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
