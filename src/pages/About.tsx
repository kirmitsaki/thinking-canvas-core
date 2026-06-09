import SiteNav from "@/components/SiteNav";
import {
  Container,
  Body,
  RuleLabel,
  Annotation,
  PullQuote,
  PageHeader,
  H3,
} from "@/components/editorial";

const focusItems = [
  {
    title: "Product direction",
    note: "Helping teams define product structure, priorities, and long-term direction across evolving platforms.",
  },
  {
    title: "Operational workflows",
    note: "Designing operational workflows that improve clarity, coordination, and decision-making across complex products.",
  },
  {
    title: "Component libraries & accessibility",
    note: "Creating scalable foundations, shared patterns, and accessibility standards across products and platforms.",
  },
  {
    title: "Organisational alignment",
    note: "Improving collaboration and alignment across Product, Design, and Engineering teams.",
  },
  {
    title: "Product exploration",
    note: "Using research, prototyping, and iterative discovery to shape product decisions and reduce ambiguity.",
  },
  {
    title: "AI-assisted workflows",
    note: "Exploring how AI can accelerate product exploration, validation, and creative decision-making.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <PageHeader label="About">
        Helping products evolve through clearer direction, stronger collaboration, and products that make more sense over time.
      </PageHeader>


      {/* Current Role — interview-style */}
      <Container className="py-[40px] md:py-[60px]">
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
          <div className="col-span-12 md:col-span-2 md:col-start-2 mb-8 md:mb-0">
            <RuleLabel>01 · Current role</RuleLabel>
          </div>
          <div className="col-span-12 md:col-span-6 max-w-[58ch]">
            <Body>
              Currently leading Product Design across EMEA and APAC at Secure
              Code Warrior, shaping product direction across governance,
              observability, learning, and risk.
            </Body>
          </div>
          <div className="hidden md:block md:col-span-2 md:col-start-10 pt-1">
            <Annotation>
              Secure Code Warrior
              <br />
              EMEA + APAC
              <br />
              2024 —
            </Annotation>
          </div>
        </div>
      </Container>

      {/* Focus — numbered editorial entries, single column */}
      <Container className="py-[40px] md:py-[60px]">
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
          <div className="col-span-12 md:col-span-2 md:col-start-2 mb-8 md:mb-0">
            <RuleLabel>02 · Focus</RuleLabel>
          </div>
          <div className="col-span-12 md:col-span-8 max-w-[64ch]">
            <ul>
              {focusItems.map((f, i) => (
                <li
                  key={f.title}
                  className="border-t border-hairline first:border-t-0 py-10 md:py-12 first:pt-0 grid grid-cols-12 gap-x-6"
                >
                  <span className="col-span-2 md:col-span-1 text-[11px] tracking-[0.22em] uppercase font-mono text-meta-ink tabular-nums pt-2">
                    0{i + 1}
                  </span>
                  <div className="col-span-10 md:col-span-11">
                    <H3 className="text-[20px] md:text-[24px] leading-[1.25]">
                      {f.title}
                    </H3>
                    <Body muted className="mt-3 max-w-[52ch]">
                      {f.note}
                    </Body>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Closing reflection — Coda pull quote on dark */}
      <section className="relative bg-ink-strong text-background mt-[80px] md:mt-[120px]">
        <Container className="py-[100px] md:py-[160px]">
          <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
            <div className="col-span-12 md:col-span-2 md:col-start-2 mb-8 md:mb-0">
              <RuleLabel tone="inverse">Coda</RuleLabel>
            </div>
            <div className="col-span-12 md:col-span-8">
              <PullQuote tone="inverse" cite="— R.K.">
                Over time, I've become less interested in isolated features and
                more interested in how products evolve through the people
                building them.
              </PullQuote>
            </div>
          </div>

        </Container>
      </section>

    </main>
  );
};

export default About;
