import SiteNav from "@/components/SiteNav";
import PracticePager from "@/components/PracticePager";
import {
  CaseHero,
  Section,
  Container,
  Caption,
  BackLink,
  Body,
  EnabledList,
} from "@/components/editorial";
import mendeleySystem from "@/assets/mendeley-pattern-library-grid.png";

const MendeleyPatternLibrary = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <BackLink to="/work" />

      <CaseHero
        eyebrow="Product System"
        title="Mendeley Pattern Library"
        subtitle="Cross-platform patterns supporting consistency across research workflows spanning web and desktop environments."
        intro="Research workflows rarely exist in isolation. Reading, annotation, organisation, citation, and collaboration all evolve together over time."
      />

      <Section label="Context">
        <Body>
          The pattern library focused on creating shared interaction models
          and reusable interface patterns that could support consistency
          across Mendeley's distributed research ecosystem spanning desktop
          and web products.
        </Body>
      </Section>

      <Container className="py-[64px] md:py-[80px]">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <figure>
              <img
                src={mendeleySystem}
                alt="Mendeley Pattern Library. Shared patterns, workflow consistency, desktop and web systems"
                loading="lazy"
                className="w-full h-auto border border-hairline"
              />
              <Caption>
                Shared patterns, workflow consistency, and cross-platform
                systems spanning desktop and web.
              </Caption>
            </figure>
          </div>
        </div>
      </Container>

      <Section label="Outcomes">
        <EnabledList
          items={[
            "Cross-platform interaction consistency.",
            "Shared workflow patterns across teams.",
            "Reduced duplication across product surfaces.",
          ]}
        />
      </Section>

      <PracticePager slug="mendeley-pattern-library" />
    </main>
  );
};

export default MendeleyPatternLibrary;
