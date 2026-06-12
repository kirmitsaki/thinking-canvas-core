import { PageShell } from "@/components/PageShell";

export default function Index() {
  return (
    <PageShell centered>
      <section className="py-24 md:py-40 max-w-4xl">
        <h1 className="font-editorial text-[56px] sm:text-[88px] md:text-[128px] leading-[0.95] tracking-[-0.025em] text-[hsl(var(--ink-strong))]">
          Rachel Kirmitsaki
        </h1>

        <p className="lede mt-10 md:mt-14 max-w-2xl font-editorial text-[20px] md:text-[26px] leading-[1.35] tracking-[-0.005em] text-[hsl(var(--ink-body))]">
          Defining product direction across complex digital products.
        </p>

        <p className="mt-6 md:mt-8 max-w-2xl text-[17px] md:text-[18px] leading-[1.5] font-light text-[hsl(var(--ink-body))]">
          I've spent over a decade building design functions inside B2B companies. I started my career writing code. I think in systems, work closely with engineering, and spend most of my time on the problems that exist before anyone opens a design tool.
        </p>

        <p className="mt-10 md:mt-14 text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--ink-body))]">
          CYBERSECURITY<span className="opacity-40 mx-2">·</span>FINTECH<span className="opacity-40 mx-2">·</span>ACADEMIC RESEARCH<span className="opacity-40 mx-2">·</span>DEVELOPER TOOLING
        </p>
      </section>
    </PageShell>
  );
}
