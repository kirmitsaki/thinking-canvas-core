import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteNav />

      <main className="flex-1 mx-auto w-full max-w-[1320px] px-6 md:px-12 flex items-center">
        <section className="py-24 md:py-40 max-w-4xl">
          <h1 className="font-editorial text-[56px] sm:text-[88px] md:text-[128px] leading-[0.95] tracking-[-0.025em] text-[hsl(var(--ink-strong))]">
            Rachel Kirmitsaki
          </h1>

          <p className="mt-10 md:mt-14 font-editorial text-[22px] sm:text-[26px] md:text-[30px] leading-[1.35] tracking-[-0.005em] text-[hsl(var(--ink-strong))]">
            I've spent the last decade building design functions inside complex
            B2B companies. The kind where the interface is never really the
            problem, and the interesting work happens well before anyone opens
            a design tool.
          </p>

          <p className="mt-10 md:mt-14 text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--ink-body))]">
            B2B SaaS <span className="opacity-40 mx-2">·</span> Cybersecurity{" "}
            <span className="opacity-40 mx-2">·</span> Fintech{" "}
            <span className="opacity-40 mx-2">·</span> Developer Platforms
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
