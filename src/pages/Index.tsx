import { PageShell } from "@/components/PageShell";

export default function Index() {
  return (
    <PageShell centered>
      <section className="py-24 md:py-40 max-w-4xl">
        <h1 className="font-editorial text-[56px] sm:text-[88px] md:text-[128px] leading-[0.95] tracking-[-0.025em] text-[hsl(var(--ink-strong))]">
          Rachel Kirmitsaki
        </h1>

        <p className="lede mt-10 md:mt-14 max-w-2xl font-editorial text-[20px] md:text-[26px] leading-[1.35] tracking-[-0.005em] text-[hsl(var(--ink-body))]">
          Head of Product Design at Secure Code Warrior, building products that help engineering teams write more secure code at scale.
        </p>

        <p className="smallcaps mt-10 md:mt-14 text-[hsl(var(--ink-body))]">
          CYBERSECURITY<span className="opacity-40 mx-2">·</span>FINTECH<span className="opacity-40 mx-2">·</span>ACADEMIC RESEARCH<span className="opacity-40 mx-2">·</span>DEVELOPER TOOLING
        </p>
      </section>
    </PageShell>
  );
}
