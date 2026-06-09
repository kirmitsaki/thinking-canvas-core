import SiteNav from "@/components/SiteNav";
import PracticePager from "@/components/PracticePager";
import { BackLink, PracticeCaseTemplate } from "@/components/editorial";

const PawSquad = () => (
  <main className="min-h-screen bg-background text-foreground">
    <SiteNav />
    <BackLink to="/work" />

    <PracticeCaseTemplate
      eyebrow="Brand & Consumer"
      title="PawSquad"
      subtitle="Consumer brand and product experience exploring trust, accessibility, and service clarity within veterinary care."
      intro="PawSquad operated at the intersection of healthcare, logistics, and consumer trust, where product clarity directly affected how confident people felt accessing veterinary care."
      context="The work focused on improving customer journeys across acquisition, booking, and communication while supporting go-to-market initiatives through campaign and landing page experiences."
      imageLabel="Booking flows, campaign pages, service experience, responsive product surfaces"
      outcomes={[
        "Improved acquisition and booking journeys.",
        "Clearer customer communication flows.",
        "Product and campaign experiences supporting engagement growth.",
      ]}
    />

    <PracticePager slug="pawsquad" />
  </main>
);

export default PawSquad;
