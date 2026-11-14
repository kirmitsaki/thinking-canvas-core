import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";
import { PortfolioBreadcrumb } from "@/components/portfolio/breadcrumb";
import { pageMeta, getProject } from "@/data/projects";
import { librarySections } from "@/data/mendeley-library";
import { editorialEmphasis } from "@/components/portfolio/editorial-emphasis";
import { SectionDivider } from "@/components/portfolio/section-divider";

const meta = pageMeta(
  "Mendeley Library · Interface design",
  "Rachel Kirmitsaki’s Mendeley Library interface deep dive: adding, organising, finding and syncing academic references.",
  "article"
);

export default function MendeleyLibrary({ embedded = false }: { embedded?: boolean }) {
  const content = <>
    <h2 className="card-title">The Library</h2>
    <p className="standfirst mt-6 mb-10">Organising and retrieving references in one place, through collections, tags, keyword search and filtering.</p>
    <MendeleyLibraryContent />
  </>;
  if (embedded) return content;
  return (
    <main className="case-study-editorial relative z-10 mx-auto max-w-[1200px] px-6 pb-16">
      <Seo
        title={meta.title}
        description={meta.description}
        path="/work/mendeley/library"
        ogType={meta.ogType}
      />
      <header className="pb-12 pt-10 md:pt-14">
        <PortfolioBreadcrumb
          items={[
            { label: "Portfolio", to: "/work" },
            { label: "Mendeley", to: "/work/mendeley" },
            { label: "The Library" },
          ]}
          trailing={<p className="label-quiet">{getProject("mendeley").dates}</p>}
        />
        <h1 className="mt-8 page-title">The Library</h1>
        <p className="standfirst mt-6 max-w-[720px]">
          Organising and retrieving references in one place, through collections, tags, keyword
          search and filtering.
        </p>
      </header>
      <article className="mx-auto max-w-[720px]">
        <MendeleyLibraryContent />
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

function MendeleyLibraryContent() {
  return <>
        {librarySections.map((section, index) => (
          <section key={section.id} id={section.id} className="editorial-study-section mb-14 scroll-mt-32 md:mb-20">
            {index > 0 && <SectionDivider />}
            <div className="editorial-study-heading"><h2 className="section-title">{section.title}</h2>
            <div className="essay-prose mt-6 space-y-5">
              {section.paragraphs.map((text) => (
                <p key={text}>{editorialEmphasis(text)}</p>
              ))}
            </div>
            </div>
            {section.items?.map((item) => (
              <section key={item.title} className="mt-10">
                <SectionDivider />
                <h3 className="subsection-title">{item.title}</h3>
                {item.text && <p className="essay-prose mt-4">{item.text}</p>}
                <figure className="mt-6">
                  <img
                    src={item.image.url}
                    alt={item.alt}
                    className="h-auto w-full max-w-[720px] rounded-[10px]"
                    loading="lazy"
                  />
                  <figcaption className="caption mt-4">{item.alt}</figcaption>
                </figure>
              </section>
            ))}
          </section>
        ))}
  </>;
}
