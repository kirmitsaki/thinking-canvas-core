import { Link, useParams } from "react-router-dom";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

type CaseStudy = {
  context: string;
  title: string;
  standfirst: string;
  paragraphs: string[];
};

const caseStudies: Record<string, CaseStudy> = {
  "secure-code-warrior-vision": {
    context: "Secure Code Warrior",
    title: "Rebuilding a platform from its foundations",
    standfirst:
      "A platform that had been built outward without being built coherently. The work was less about redesigning interfaces and more about giving the company a shared picture of where it was going.",
    paragraphs: [
      "[Copy to be provided.]",
    ],
  },
  "origin-markets": {
    context: "Origin Markets",
    title: "Designing trust into institutional finance",
    standfirst:
      "An ambitious idea translated into a product that institutions handling hundreds of millions in debt issuance could actually use. The documents weren't really the product. The confidence between the parties was.",
    paragraphs: [
      "[Copy to be provided.]",
    ],
  },
  "mendeley": {
    context: "Mendeley · Elsevier",
    title: "Calibrating a product inside a larger ecosystem",
    standfirst:
      "One product among many under a single parent company. The challenge wasn't fragmentation but calibration: how to hold shared principles across very different products without flattening what made each one distinct.",
    paragraphs: [
      "[Copy to be provided.]",
    ],
  },
};

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = slug ? caseStudies[slug] : undefined;

  if (!study) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteNav />
        <main className="mx-auto max-w-[1320px] px-6 md:px-12 py-40">
          <p className="font-editorial text-[24px] text-[hsl(var(--ink-body))]">
            Case study not found.{" "}
            <Link to="/work" className="italic underline">
              Back to Work
            </Link>
            .
          </p>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="mx-auto max-w-[1320px] px-6 md:px-12">
        <section className="pt-24 md:pt-36 pb-10 md:pb-16">
          <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--accent-stone))]">
            {study.context}
          </div>
          <h1 className="mt-6 md:mt-8 font-editorial text-[44px] md:text-[88px] leading-[1.02] tracking-[-0.02em] text-[hsl(var(--ink-strong))] max-w-5xl">
            {study.title}
          </h1>
          <p className="mt-8 md:mt-12 max-w-3xl font-editorial text-[20px] md:text-[26px] leading-[1.35] tracking-[-0.005em] text-[hsl(var(--ink-body))]">
            {study.standfirst}
          </p>
        </section>

        <hr className="border-[hsl(var(--hairline))]" />

        <article className="py-14 md:py-20 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--accent-stone))]">
              Case study
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-4 space-y-7 font-editorial text-[19px] md:text-[21px] leading-[1.6] text-[hsl(var(--ink-body))]">
            {study.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>

        <hr className="border-[hsl(var(--hairline))]" />

        <section className="py-14 md:py-20 flex items-baseline justify-between">
          <Link
            to="/work"
            className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--ink-body))] hover:text-[hsl(var(--ink-strong))] transition-colors"
          >
            ← All work
          </Link>
          <Link
            to="/writing"
            className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--ink-body))] hover:text-[hsl(var(--ink-strong))] transition-colors"
          >
            Read the essays →
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
