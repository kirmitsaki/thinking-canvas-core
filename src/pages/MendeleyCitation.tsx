import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";
import { PortfolioBreadcrumb } from "@/components/portfolio/breadcrumb";
import { pageMeta, getProject } from "@/data/projects";
import { citationSections } from "@/data/mendeley-citation";
import { editorialEmphasis } from "@/components/portfolio/editorial-emphasis";
import { SectionDivider } from "@/components/portfolio/section-divider";

const meta = pageMeta(
  "Mendeley Citation · Interface design",
  "Rachel Kirmitsaki’s Mendeley Cite interface deep dive: inserting citations, managing styles and generating bibliographies in Microsoft Word.",
  "article"
);

export default function MendeleyCitation({ embedded = false }: { embedded?: boolean }) {
  if (embedded) return <><h2 className="card-title">Citation</h2><p className="standfirst mt-6 mb-10">The Microsoft® Word add-in for inserting references, changing citation styles and generating a bibliography, without leaving the document.</p><MendeleyCitationContent /></>;
  return (
    <main className="case-study-editorial relative z-10 mx-auto max-w-[1200px] px-6 pb-16">
      <Seo
        title={meta.title}
        description={meta.description}
        path="/work/mendeley/citation"
        ogType={meta.ogType}
      />
      <header className="pb-12 pt-10 md:pt-14">
        <PortfolioBreadcrumb
          items={[
            { label: "Portfolio", to: "/work" },
            { label: "Mendeley", to: "/work/mendeley" },
            { label: "Citation" },
          ]}
          trailing={<p className="label-quiet">{getProject("mendeley").dates}</p>}
        />
        <h1 className="mt-8 page-title">Citation</h1>
        <p className="standfirst mt-6 max-w-[720px]">
          The Microsoft® Word add-in for inserting references, changing citation styles and
          generating a bibliography, without leaving the document.
        </p>
      </header>
      <article className="mx-auto max-w-[720px]">
        <MendeleyCitationContent />
        <div className="hairline-top pt-8">
          <Link to="/work/mendeley" className="accent-link inline-flex items-center gap-2">
            <ArrowLeft size={14} />
            Back to the Mendeley case study
          </Link>
        </div>
      </article>
    </main>
  );
}

function MendeleyCitationContent() {
  return <>
        {citationSections.map((section, index) => (
          <section key={section.id} id={section.id} className="editorial-study-section mb-14 scroll-mt-32 md:mb-20">
            {index > 0 && <SectionDivider />}
            <div className="editorial-study-heading"><h2 className="section-title">{section.title}</h2>
            {section.paragraphs.length > 0 && (
              <div className="essay-prose mt-6 space-y-5">
                {section.paragraphs.map((text) => (
                  <p key={text}>{editorialEmphasis(text)}</p>
                ))}
              </div>
            )}
            </div>
            {section.points.length > 0 && (
              <ul className="essay-prose mt-6 space-y-3">
                {section.points.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            )}
            {section.images.map((item) => (
              <figure key={item.alt} className="mt-9">
                <img
                  src={item.image.url}
                  alt={item.alt}
                  className="h-auto w-full max-w-[720px] rounded-[10px]"
                  loading="lazy"
                />
                <figcaption className="caption mt-4">{item.caption}</figcaption>
              </figure>
            ))}
          </section>
        ))}
  </>;
}
