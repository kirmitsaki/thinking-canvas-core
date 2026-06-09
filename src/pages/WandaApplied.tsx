import SiteNav from "@/components/SiteNav";
import PracticePager from "@/components/PracticePager";
import {
  CaseHero,
  Section,
  ImagePlaceholder,
  BackLink,
  Divider,
  FocusList,
  OutcomeList,
} from "@/components/editorial";

const focus = [
  {
    title: "From rules to behaviour",
    body: "Components adapted to real product constraints.",
  },
  {
    title: "Handling edge cases",
    body: "System holds even when workflows become complex.",
  },
  {
    title: "Maintaining coherence",
    body: "Different parts of the product still feel like one system.",
  },
];

const outcomes = [
  "A system that works in practice, not just in theory",
  "Consistency without rigidity",
  "Interfaces that feel connected across the product",
];

const WandaApplied = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <BackLink to="/design-practice" />

      <CaseHero
        eyebrow="Design System"
        title="Wanda Applied UI"
        subtitle="Where the system meets reality."
        intro="Design systems only matter when they are used. This is how the system holds up inside real workflows."
      />

      <ImagePlaceholder label="System applied across product flows" />

      <Section label="Focus">
        <FocusList items={focus} />
      </Section>

      <ImagePlaceholder label="Complex workflows built from simple components" />

      <Divider />

      <Section label="Outcome">
        <OutcomeList items={outcomes} />
      </Section>

      <PracticePager slug="wanda-applied" />
    </main>
  );
};

export default WandaApplied;
