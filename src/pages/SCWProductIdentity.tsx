import SiteNav from "@/components/SiteNav";
import PracticePager from "@/components/PracticePager";
import { BackLink, PracticeCaseTemplate } from "@/components/editorial";

const SCWProductIdentity = () => (
  <main className="min-h-screen bg-background text-foreground">
    <SiteNav />
    <BackLink to="/work" />

    <PracticeCaseTemplate
      eyebrow="Product Identity"
      title="Product Identity Foundations"
      subtitle="Visual language developed for a platform spanning governance, learning, observability, and risk."
      intro="As Secure Code Warrior expanded into a broader enterprise platform, the product identity needed to evolve beyond individual interfaces into a clearer operational brand language."
      context="The work focused on shaping the overall visual direction of the platform — typography, hierarchy, motion, colour behaviour, layout rhythm, and interface tone — creating a product experience that could feel coherent across governance tooling, learning environments, observability workflows, and operational surfaces."
      imageLabel="Platform identity language — typography system, colour behaviour, interface rhythm, motion direction"
      outcomes={[
        "Unified visual direction across platform surfaces.",
        "Stronger product recognition and coherence.",
        "Foundations supporting scalable platform evolution.",
      ]}
    />

    <PracticePager slug="scw-product-identity" />
  </main>
);

export default SCWProductIdentity;
