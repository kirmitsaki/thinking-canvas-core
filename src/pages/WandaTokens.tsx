import SiteNav from "@/components/SiteNav";
import PracticePager from "@/components/PracticePager";
import { BackLink, PracticeCaseTemplate } from "@/components/editorial";

const WandaTokens = () => (
  <main className="min-h-screen bg-background text-foreground">
    <SiteNav />
    <BackLink to="/work" />

    <PracticeCaseTemplate
      eyebrow="Design System"
      title="Wanda Library"
      subtitle="Design system supporting Secure Code Warrior's product platform across components, accessibility, themes, and operational states."
      intro="Wanda became the shared operational layer underpinning Secure Code Warrior's evolving platform experience."
      context="The system focused on reusable components, semantic tokens, accessibility standards, interaction behaviour, and implementation consistency across complex operational workflows and distributed product teams."
      imageLabel="Component library, tokens, accessibility states, operational UI patterns"
      outcomes={[
        "Shared component and interaction foundations.",
        "Improved accessibility and implementation consistency.",
        "Faster collaboration between Product, Design, and Engineering.",
      ]}
    />

    <PracticePager slug="wanda-tokens" />
  </main>
);

export default WandaTokens;
