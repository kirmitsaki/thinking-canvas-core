import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";
import { PortfolioBreadcrumb } from "@/components/portfolio/breadcrumb";
import { getProject, pageMeta, projectImage } from "@/data/projects";
import { NdaNotice } from "@/components/portfolio/nda-notice";
import { ProjectPagination } from "@/components/portfolio/project-pagination";

const meta = pageMeta(
  "Secure Code Warrior · Product design identity",
  "Rachel Kirmitsaki’s Secure Code Warrior product design identity infographic: visual foundations, interface examples and character artwork.",
  "article"
);

export default function ProductDesignIdentity() {
  const image = projectImage("scw-identity");
  return (
    <main className="relative z-10 mx-auto max-w-[1200px] px-6 pb-16">
      <Seo
        title={meta.title}
        description={meta.description}
        path="/work/secure-code-warrior/product-design-identity"
        ogType={meta.ogType}
      />
      <header className="pb-12 pt-10 md:pt-14">
        <div className="mb-6"><NdaNotice /></div>
        <PortfolioBreadcrumb
          items={[
            { label: "Portfolio", to: "/work" },
            { label: "Secure Code Warrior", to: "/work/secure-code-warrior" },
            { label: "Product design identity" },
          ]}
          trailing={<p className="label-quiet">{getProject("secure-code-warrior").dates}</p>}
        />
        <h1 className="mt-8 page-title">Product design identity</h1>
      </header>
      <figure className="w-full">
        <img
          src={image.url}
          alt={image.alt}
          width={179}
          height={1920}
          className="block h-auto w-full rounded-[10px]"
        />
        <figcaption className="caption mt-4">
          The complete infographic. Higher-resolution export pending.
        </figcaption>
      </figure>
      <div className="hairline-top mt-12 pt-8">
        <Link
          to="/work/secure-code-warrior"
          className="accent-link inline-flex items-center gap-2"
        >
          <ArrowLeft size={14} />
          Back to the case study
        </Link>
      </div>
      <ProjectPagination slug="secure-code-warrior" />
    </main>
  );
}
