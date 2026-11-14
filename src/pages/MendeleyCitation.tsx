import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";
import { PortfolioBreadcrumb } from "@/components/portfolio/breadcrumb";
import { pageMeta, getProject } from "@/data/projects";
import { citationSections } from "@/data/mendeley-citation";
import { SectionDivider } from "@/components/portfolio/section-divider";

const meta = pageMeta(
  "Mendeley Citation · Interface design",
  "Rachel Kirmitsaki’s Mendeley Cite interface deep dive: inserting citations, managing styles and generating bibliographies in Microsoft Word.",
  "article"
);

export default function MendeleyCitation() {
  return (
    <main className="relative z-10 mx-auto max-w-[1200px] px-6 pb-16">
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
        />
        <div className="hairline-bottom mt-10 flex flex-wrap justify-between gap-4 pb-5">
          <p className="label">Mendeley · Interface design</p>
          <p className="label-quiet">{getProject("mendeley").dates}</p>
        </div>
        <h1 className="mt-8 page-title">Citation</h1>
        <p className="standfirst mt-6 max-w-[720px]">
          The Microsoft® Word add-in for inserting references, changing citation styles and
          generating a bibliography, without leaving the document.
        </p>
      </header>
      <article className="mx-auto max-w-[720px]">
        {citationSections.map((section, index) => (
          <section key={section.id} id={section.id} className="mb-14 scroll-mt-32 md:mb-20">
            {index > 0 && <SectionDivider />}
            <h2 className="card-title">{section.title}</h2>
            {section.paragraphs.length > 0 && (
              <div className="essay-prose mt-6 space-y-5">
                {section.paragraphs.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
            )}
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
