import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const notes = [
  { title: "Most Product Problems Are Not Design Problems", date: "May 2026" },
  { title: "Research Systems Rarely Reset", date: "April 2026" },
  { title: "Design Systems as Organisational Memory", date: "March 2026" },
  { title: "The Cost of Prototyping Is Collapsing", date: "February 2026" },
  { title: "Why Product Direction Matters Before Roadmaps", date: "January 2026" },
  { title: "What AI Changes and What It Doesn’t", date: "December 2025" },
];

export default function Notes() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="mx-auto max-w-[1320px] px-6 md:px-12">
        <section className="pt-20 md:pt-32 pb-16 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--meta-ink))] md:pt-3">
            Section II
          </div>
          <div className="col-span-12 md:col-span-10">
            <h1 className="font-editorial text-[56px] md:text-[112px] leading-[0.95] tracking-[-0.02em] text-[hsl(var(--ink-strong))]">
              Notes
            </h1>
            <p className="mt-8 max-w-2xl text-[15px] md:text-[17px] leading-[1.6] text-[hsl(var(--muted-ink))]">
              Shorter observations. Kept here in the order they arrived.
            </p>
          </div>
        </section>

        <hr className="border-[hsl(var(--hairline))]" />

        <ul className="py-6">
          {notes.map((n, i) => (
            <li
              key={n.title}
              className="grid grid-cols-12 gap-6 items-baseline py-6 md:py-8 border-b border-[hsl(var(--hairline))] last:border-b-0"
            >
              <span className="col-span-2 md:col-span-1 font-mono text-[11px] tracking-[0.1em] text-[hsl(var(--meta-ink))]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="col-span-10 md:col-span-8 font-editorial text-[24px] md:text-[34px] leading-[1.15] tracking-[-0.005em] text-[hsl(var(--ink-strong))]">
                {n.title}
              </span>
              <span className="col-span-12 md:col-span-3 text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--meta-ink))] md:text-right">
                {n.date}
              </span>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
