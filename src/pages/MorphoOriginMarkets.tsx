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
import morphoBoard from "@/assets/morpho-library-grid.png";

const MorphoOriginMarkets = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <BackLink to="/work" />

      <CaseHero
        eyebrow="Product System"
        title="Morpho Library"
        subtitle="Shared operational foundation for a 0→1 fintech platform. Tokens, components, accessibility standards, and interaction patterns across product surfaces."
        intro="As Origin Markets evolved from an early-stage product into a connected operational platform, Morpho became the shared design foundation supporting that growth."
      />

      <Section label="Context">
        <Body>
          The system established reusable interaction patterns, accessibility
          standards, layout structures, and operational components designed
          to support complex financial workflows without slowing product
          evolution.
        </Body>
      </Section>

      <Container className="py-[64px] md:py-[80px]">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <figure>
              <img
                src={morphoBoard}
                alt="Morpho design system. Components, operational layouts, foundations, accessibility patterns"
                loading="lazy"
                className="w-full h-auto border border-hairline"
              />
              <Caption>
                Components, operational layouts, foundations, and
                accessibility patterns from the shared product system.
              </Caption>
            </figure>
          </div>
        </div>
      </Container>

      <Section label="Outcomes">
        <EnabledList
          items={[
            "Shared operational UI foundations across the platform.",
            "Improved accessibility and interface consistency.",
            "Faster collaboration between Product, Design, and Engineering.",
          ]}
        />
      </Section>

      <PracticePager slug="morpho-origin-markets" />
    </main>
  );
};

export default MorphoOriginMarkets;
