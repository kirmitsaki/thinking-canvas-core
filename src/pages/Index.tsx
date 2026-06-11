import { PageShell } from "@/components/PageShell";

const tags = [
  "B2B SaaS",
  "Cybersecurity",
  "Fintech",
  "Developer Platforms",
];

export default function Index() {
  return (
    <PageShell centered>
      <section className="py-24 md:py-40 max-w-4xl">
        <h1 className="font-editorial text-[56px] sm:text-[88px] md:text-[128px] leading-[0.95] tracking-[-0.025em] text-[hsl(var(--ink-strong))]">
          Rachel Kirmitsaki
        </h1>

        <p className="mt-10 md:mt-14 font-editorial text-[22px] sm:text-[26px] md:text-[30px] leading-[1.35] tracking-[-0.005em] text-[hsl(var(--ink-strong))]">
          Head of Product Design
        </p>

        <p className="mt-10 md:mt-14 text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--ink-body))]">
          {tags.map((tag, i) => (
            <span key={tag}>
              {i > 0 && <span className="opacity-40 mx-2">·</span>}
              {tag}
            </span>
          ))}
        </p>
      </section>
    </PageShell>
  );
}
