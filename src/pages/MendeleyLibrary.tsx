import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";
import { PortfolioBreadcrumb } from "@/components/portfolio/breadcrumb";
import { pageMeta } from "@/data/projects";
import { librarySections } from "@/data/mendeley-library";

const meta = pageMeta(
  "Mendeley Library · Interface design",
  "Rachel Kirmitsaki’s Mendeley Library interface deep dive: adding, organising, finding and syncing academic references.",
  "article"
);

export default function MendeleyLibrary() {
  return (
    <main className="relative z-10 mx-auto max-w-[1200px] px-6 pb-16">
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
        />
        <div className="hairline-bottom mt-10 flex flex-wrap justify-between gap-4 pb-5">
          <p className="label">Mendeley · Interface design</p>
          <p className="label-quiet">Jan 2019 – Jan 2020</p>
        </div>
        <h1 className="mt-8 page-title">The Library</h1>
        <p className="standfirst mt-6 max-w-[720px]">
          Organising and retrieving references in one place, through collections, tags, keyword
          search and filtering.
        </p>
      </header>
      <article className="mx-auto max-w-[720px]">
        {librarySections.map((section, index) => (
          <section key={section.id} id={section.id} className="mb-14 scroll-mt-32 md:mb-20">
            <p className="label-quiet">{String(index + 1).padStart(2, "0")}</p>
            <h2 className="mt-3 card-title">{section.title}</h2>
            <div className="essay-prose mt-6 space-y-5">
              {section.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
            {section.items?.map((item) => (
              <section key={item.title} className="mt-10">
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
