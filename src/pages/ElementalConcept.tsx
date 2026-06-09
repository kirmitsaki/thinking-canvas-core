import SiteNav from "@/components/SiteNav";
import PracticePager from "@/components/PracticePager";
import { BackLink, PracticeCaseTemplate } from "@/components/editorial";

const ElementalConcept = () => (
  <main className="min-h-screen bg-background text-foreground">
    <SiteNav />
    <BackLink to="/work" />

    <PracticeCaseTemplate
      eyebrow="Consultancy & Product Strategy"
      title="Elemental Concept"
      subtitle="Product discovery, UX/UI, and brand direction delivered across a range of client products spanning web and mobile experiences."
      intro="Consulting across multiple client projects required moving fluidly between product strategy, UX, interface design, and brand direction depending on the needs of each engagement."
      context="The work involved helping products define clearer positioning, improve usability, and shape more coherent digital experiences across both web and mobile environments."
      imageLabel="Mixed client work, discovery artefacts, UX direction, interface exploration"
      outcomes={[
        "Product discovery and UX strategy across client engagements.",
        "End-to-end web and mobile product design.",
        "Brand and interface direction supporting launch and growth.",
      ]}
    />

    <PracticePager slug="elemental-concept" />
  </main>
);

export default ElementalConcept;
