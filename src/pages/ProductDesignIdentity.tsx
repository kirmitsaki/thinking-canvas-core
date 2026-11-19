import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";
import { SnippetHeader } from "@/components/portfolio/snippet-header";
import { SectionDivider } from "@/components/portfolio/section-divider";
import { pageMeta, projectImage } from "@/data/projects";
import { NdaNotice } from "@/components/portfolio/nda-notice";
import { ProjectPagination } from "@/components/portfolio/project-pagination";
import { usePortfolioHeaderHeight } from "@/lib/portfolio-header-height";

const meta = pageMeta(
  "Secure Code Warrior · Product design identity",
  "Rachel Kirmitsaki’s Secure Code Warrior product design identity infographic: visual foundations, interface examples and character artwork.",
  "article"
);

export default function ProductDesignIdentity() {
  usePortfolioHeaderHeight();
  const image = projectImage("scw-identity");
  return (
    <main className="case-study-editorial relative z-10 mx-auto max-w-[960px] px-6 pb-16">
      <Seo
        title={meta.title}
        description={meta.description}
        path="/work/secure-code-warrior/product-design-identity"
        ogType={meta.ogType}
      />
      <SnippetHeader title="Product design identity" subtitle="Colour, interface examples and character artwork for the new product vision." intro="The product design identity brings the visual direction together in one artefact: colour, interface examples and character artwork. It provides the context for the design-system work that follows." />
      <div className="sample-work-tabs py-3"><NdaNotice /></div>
      <section className="origin-section pt-12"><SectionDivider /><div className="origin-section-grid">
        <div className="origin-section-heading"><h2 className="section-title">Visual foundations</h2></div>
        <div><h3 className="subsection-title mb-8">Bringing the product direction together</h3>
      <figure className="w-full">
        <img
          src={image.url}
          alt={image.alt}
          width={179}
          height={1920}
          className="block h-auto w-full rounded-[10px]"
        />
      </figure>
        </div></div></section>
      <div className="flex justify-center pt-12 pb-12 md:pb-16">
        <Link to="/work/secure-code-warrior" className="accent-link inline-flex items-center gap-2">
          <ArrowLeft size={14} />
          Back to Secure Code Warrior
        </Link>
      </div>
      <ProjectPagination slug="secure-code-warrior" />
    </main>
  );
}
