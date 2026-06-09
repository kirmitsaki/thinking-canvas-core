import { Link } from "react-router-dom";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteNav />

      <main className="flex-1 mx-auto w-full max-w-[1320px] px-6 md:px-12">
        {/* Cover */}
        <section className="pt-24 md:pt-40 pb-20 md:pb-32">
          <p className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--meta-ink))]">
            Head of Product Design
          </p>

          <h1 className="mt-10 md:mt-16 font-editorial text-[64px] sm:text-[104px] md:text-[168px] leading-[0.9] tracking-[-0.025em] text-[hsl(var(--ink-strong))]">
            Rachel
            <br />
            Kirmitsaki
          </h1>

          <p className="mt-10 md:mt-16 text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--ink-body))]">
            B2B SaaS <span className="opacity-40 mx-2">·</span> Fintech{" "}
            <span className="opacity-40 mx-2">·</span> Cybersecurity{" "}
            <span className="opacity-40 mx-2">·</span> AI
          </p>
        </section>

        {/* Supporting statement */}
        <section className="pb-24 md:pb-40 max-w-3xl">
          <p className="font-editorial text-[22px] sm:text-[26px] md:text-[32px] leading-[1.3] tracking-[-0.005em] text-[hsl(var(--ink-strong))]">
            Over the last decade I've worked across research, fintech, cybersecurity, and AI.
            Most of those products had one thing in common: they became more complex as they grew.
            My work has largely been about helping products and teams navigate that complexity.
          </p>

          <Link
            to="/notes"
            className="group mt-12 md:mt-16 inline-flex items-baseline gap-3 text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--ink-strong))]"
          >
            <span className="border-b border-[hsl(var(--ink-strong))] pb-1">View Notes</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
