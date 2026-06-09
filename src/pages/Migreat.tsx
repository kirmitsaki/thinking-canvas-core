import SiteNav from "@/components/SiteNav";
import PracticePager from "@/components/PracticePager";
import { BackLink, PracticeCaseTemplate } from "@/components/editorial";

const Migreat = () => (
  <main className="min-h-screen bg-background text-foreground">
    <SiteNav />
    <BackLink to="/work" />

    <PracticeCaseTemplate
      eyebrow="Product Experience"
      title="Migreat"
      subtitle="Digital product experiences designed to simplify immigration complexity through clearer workflows and structured information."
      intro="Migreat focused on making immigration processes easier to navigate through digital tools that translated regulatory complexity into clearer user experiences."
      context="Working across both design and front-end implementation, the role involved designing interfaces, building coded prototypes, and translating business, technical, and user requirements into usable product flows."
      imageLabel="Workflow mapping, coded prototypes, structured form experiences"
      outcomes={[
        "End-to-end UX and interface development.",
        "Product workflows translating complex requirements into usable experiences.",
        "Early foundations in product thinking, systems, and implementation.",
      ]}
    />

    <PracticePager slug="migreat" />
  </main>
);

export default Migreat;
