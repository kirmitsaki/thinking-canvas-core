import { Fragment } from "react";
import { PageShell } from "@/components/PageShell";
import Seo from "@/components/Seo";

const TAGS = ["CYBERSECURITY", "FINTECH", "ACADEMIC RESEARCH", "DEVELOPER TOOLING"];

export default function Index() {
  return (
    <PageShell centered>
      <Seo
        title="Rachel Kirmitsaki — Head of Product Design"
        description="Head of Product Design at Secure Code Warrior. Shaping product systems and organisations that scale across B2B SaaS, AI, fintech and developer platforms."
        path="/"
      />
      <section className="py-24 md:py-40 max-w-4xl w-full">
        <h1 className="font-editorial text-[44px] sm:text-[72px] md:text-[128px] leading-[0.95] tracking-[-0.025em] text-[hsl(var(--ink-strong))] break-words">
          Rachel Kirmitsaki
          <span className="block text-[0.4em] sm:text-[0.35em] md:text-[0.3em] mt-1 sm:mt-2 md:mt-3 tracking-[0.02em] font-light text-[hsl(var(--ink-body))]">
            — Head of Product Design
          </span>
        </h1>

        <p className="lede mt-8 md:mt-14 max-w-2xl font-editorial text-[18px] sm:text-[22px] md:text-[26px] leading-[1.35] tracking-[-0.005em] text-[hsl(var(--ink-body))]">
          Head of Product Design at Secure Code Warrior, building products that help engineering teams write more secure code at scale.
        </p>


        <p className="smallcaps mt-10 md:mt-14 text-[hsl(var(--ink-body))]">
          {TAGS.map((tag, i) => (
            <Fragment key={tag}>
              {i > 0 && <span className="opacity-40 mx-2">·</span>}
              {tag}
            </Fragment>
          ))}
        </p>
      </section>
    </PageShell>
  );
}
