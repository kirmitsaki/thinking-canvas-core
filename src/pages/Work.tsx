import { Link } from "react-router-dom";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

type CaseStudy = {
  slug: string;
  title: string;
  context: string;
  blurb: string;
};

const caseStudies: CaseStudy[] = [
  {
    slug: "secure-code-warrior-vision",
    title: "Rebuilding a platform from its foundations",
    context: "Secure Code Warrior",
    blurb:
      "A platform that had been built outward without being built coherently. The work was less about redesigning interfaces and more about giving the company a shared picture of where it was going.",
  },
  {
    slug: "origin-markets",
    title: "Designing trust into institutional finance",
    context: "Origin Markets",
    blurb:
      "An ambitious idea translated into a product that institutions handling hundreds of millions in debt issuance could actually use. The documents weren't really the product. The confidence between the parties was.",
  },
  {
    slug: "mendeley",
    title: "Calibrating a product inside a larger ecosystem",
    context: "Mendeley · Elsevier",
    blurb:
      "One product among many under a single parent company. The challenge wasn't fragmentation but calibration: how to hold shared principles across very different products without flattening what made each one distinct.",
  },
];

export default function Work() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="mx-auto max-w-[1320px] px-6 md:px-12">
        <section className="pt-24 md:pt-40 pb-12 md:pb-16">
          <h1 className="font-editorial text-[64px] md:text-[136px] leading-[0.95] tracking-[-0.025em] text-[hsl(var(--ink-strong))]">
            Work
          </h1>
          <p className="mt-10 md:mt-14 max-w-2xl font-editorial text-[20px] md:text-[26px] leading-[1.35] tracking-[-0.005em] text-[hsl(var(--ink-body))]">
            Not a portfolio of interfaces. A record of the organisations I've
            shaped, the problems I've worked through, and the outcomes that
            followed. Three case studies, written in the same voice as the
            essays.
          </p>
        </section>

        <hr className="border-[hsl(var(--hairline))]" />

        <section className="pt-14 md:pt-20 pb-20 md:pb-28">
          <ul className="divide-y divide-[hsl(var(--hairline))]">
            {caseStudies.map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/work/${c.slug}`}
                  className="group block py-10 md:py-14 grid grid-cols-12 gap-6"
                >
                  <div className="col-span-12 md:col-span-3">
                    <h2 className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--accent-stone))]">
                      {c.context}
                    </h2>
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <div className="flex items-baseline justify-between gap-6">
                      <h3 className="font-editorial text-[30px] md:text-[44px] leading-[1.05] tracking-[-0.015em] text-[hsl(var(--ink-strong))] group-hover:italic transition-[font-style]">
                        {c.title}
                      </h3>
                      <span className="text-[hsl(var(--meta-ink))] opacity-30 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                    <p className="mt-4 max-w-2xl text-[15px] md:text-[17px] leading-[1.55] text-[hsl(var(--ink-body))]">
                      {c.blurb}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
