import { Link } from "react-router-dom";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const interests = [
  "Product direction",
  "Design systems",
  "Organisational alignment",
  "Operational workflows",
  "AI-assisted product development",
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <main className="mx-auto max-w-[1320px] px-6 md:px-12">
        {/* Masthead */}
        <section className="pt-24 md:pt-40 pb-24 md:pb-40 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-start-3 md:col-span-10">
            <h1 className="font-editorial text-[56px] sm:text-[84px] md:text-[128px] leading-[0.92] tracking-[-0.02em] text-[hsl(var(--ink-strong))]">
              Rachel
              <br />
              Kirmitsaki
            </h1>
            <p className="mt-10 md:mt-14 text-[14px] uppercase tracking-[0.22em] text-[hsl(var(--ink-body))]">
              Head of Product Design
            </p>
          </div>
        </section>

        <hr className="border-[hsl(var(--hairline))]" />

        {/* Lede */}
        <section className="py-20 md:py-32 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--meta-ink))]">
            Editor’s note
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-4">
            <p className="font-editorial text-[26px] sm:text-[34px] md:text-[44px] leading-[1.18] tracking-[-0.005em] text-[hsl(var(--ink-strong))]">
              Over the last decade I’ve worked across research, fintech, cybersecurity, and AI.
              Most of those products had one thing in common: they became more complex as they grew.
              My work has largely been about helping products and teams navigate that complexity.
            </p>
          </div>
        </section>

        <hr className="border-[hsl(var(--hairline))]" />

        {/* Index of sections */}
        <section className="py-20 md:py-28 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--meta-ink))]">
            Inside
          </div>
          <ol className="col-span-12 md:col-span-10 divide-y divide-[hsl(var(--hairline))]">
            {[
              { to: "/work", num: "I", label: "Work", note: "Four essays on building product." },
              { to: "/notes", num: "II", label: "Notes", note: "Shorter observations from practice." },
              { to: "/about", num: "III", label: "About", note: "A brief, factual account." },
            ].map((s) => (
              <li key={s.to}>
                <Link
                  to={s.to}
                  className="group grid grid-cols-12 gap-6 py-6 md:py-8 items-baseline"
                >
                  <span className="col-span-2 md:col-span-1 font-mono text-[12px] tracking-[0.1em] text-[hsl(var(--meta-ink))]">
                    {s.num}
                  </span>
                  <span className="col-span-10 md:col-span-6 font-editorial text-[32px] md:text-[52px] leading-[1] tracking-[-0.01em] text-[hsl(var(--ink-strong))] group-hover:italic transition-[font-style]">
                    {s.label}
                  </span>
                  <span className="col-span-12 md:col-span-5 text-[14px] md:text-[15px] text-[hsl(var(--muted-ink))] md:text-right">
                    {s.note}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <hr className="border-[hsl(var(--hairline))]" />

        {/* Current interests */}
        <section className="py-20 md:py-28 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--meta-ink))]">
            Currently
          </div>
          <ul className="col-span-12 md:col-span-10">
            {interests.map((t, i) => (
              <li
                key={t}
                className="flex items-baseline gap-6 py-3 border-b border-[hsl(var(--hairline))] last:border-b-0"
              >
                <span className="font-mono text-[11px] tracking-[0.1em] text-[hsl(var(--meta-ink))] w-10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-editorial text-[22px] md:text-[30px] tracking-[-0.005em] text-[hsl(var(--ink-strong))]">
                  {t}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
