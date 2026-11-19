import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";
import { PortfolioBreadcrumb } from "@/components/portfolio/breadcrumb";
import { caseStudyTitle, getProject, pageMeta, projectImage } from "@/data/projects";
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
      <header className="pb-12">
        <PortfolioBreadcrumb
          items={[
            { label: "Portfolio", to: "/work" },
            { label: caseStudyTitle(getProject("secure-code-warrior")), to: "/work/secure-code-warrior" },
            { label: "Product design identity" },
          ]}
          trailing={<p className="label-quiet">{getProject("secure-code-warrior").dates}</p>}
        />
        <h1 className="mt-8 page-title">Product design identity</h1>
      </header>
      <div className="sample-work-tabs py-3"><NdaNotice /></div>
      <figure className="w-full pt-12">
        <img
          src={image.url}
          alt={image.alt}
          width={179}
          height={1920}
          className="block h-auto w-full rounded-[10px]"
        />
      </figure>
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
