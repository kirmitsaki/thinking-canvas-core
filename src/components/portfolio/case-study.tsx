import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { type Project, projectImage } from "@/data/projects";
import { VisualPlaceholder } from "./visual-placeholder";
import { ProjectPagination } from "./project-pagination";
import { SectionNavigation } from "./section-navigation";
import { PortfolioBreadcrumb } from "./breadcrumb";
import { SectionDivider } from "./section-divider";
import { NdaNotice } from "./nda-notice";
import { SecondaryCard } from "./secondary-card";
import { editorialEmphasis } from "./editorial-emphasis";

export function CaseStudy({ project, body, introParagraphs, facts, minimalFrame = false, outcomesTitle = "Outcomes & evidence", notice }: { project: Project; body?: ReactNode; introParagraphs?: ReactNode[]; facts?: { label: string; value: string }[]; minimalFrame?: boolean; outcomesTitle?: string; notice?: ReactNode }) {
  const navigation = project.sectionNavigation ?? [
    { label: "Overview", id: "overview" },
    ...project.sections.flatMap((section) =>
      section.id && section.navigationLabel
        ? [{ id: section.id, label: section.navigationLabel }]
        : []
    ),
    ...(project.outcomes.length ? [{ id: "outcomes", label: "Outcomes" }] : []),
  ];
  const compact = project.presentation === "compact";
  const imageClass = "mx-auto w-full max-w-[720px] rounded-[10px]";
  const heroImageClass =
    compact ? imageClass : "w-full rounded-[10px]";
  const noticeNode = notice ?? (project.ndaNotice ? <NdaNotice /> : null);
  return (
    <main className={`case-study relative z-10 ${minimalFrame ? "" : "case-study-editorial"} ${compact ? "case-study-compact" : ""}`}>
      <header
        id="overview"
        className="mx-auto max-w-[1200px] scroll-mt-32 px-6 pb-12 pt-10 md:pt-14"
      >
        {noticeNode && <div className="mb-6">{noticeNode}</div>}
        <PortfolioBreadcrumb
          items={[{ label: "Portfolio", to: "/work" }, { label: project.name }]}
          trailing={<p className="label-quiet">{project.dates}</p>}
        />
        <h1 className="mt-8 max-w-[900px] page-title">{project.title}</h1>
        {(() => {
          const paragraphs = introParagraphs ?? project.intro.split(/(?<=\.)\s+/);
          const headerFacts = facts ?? [
            { label: 'Role', value: project.role },
            { label: 'Duration', value: project.dates },
            { label: 'Industry', value: `${project.industry} · ${project.field}` },
          ];
          return (
            <div className="case-study-header-copy">
              <div className="mt-6 max-w-[760px] space-y-4">{paragraphs.map((text, index) => <p key={index} className={index === 0 ? "standfirst" : "body-copy"}>{typeof text === "string" ? editorialEmphasis(text) : text}</p>)}</div>
              <dl className="mt-7 space-y-1">{headerFacts.map(fact => <div key={fact.label} className="caption"><dt className="inline font-semibold">{fact.label}: </dt><dd className="inline">{fact.value}</dd></div>)}</dl>
            </div>
          );
        })()}
      </header>
      <SectionNavigation items={navigation} to={`/work/${project.slug}`} />
      <div className="mx-auto max-w-[1200px] px-6">
        {project.heroImage ? (
          <img
            src={projectImage(project.heroImage).url}
            alt={projectImage(project.heroImage).alt}
            className={
              project.heroFit === "tile"
                ? "aspect-[16/10] w-full rounded-[10px] object-cover object-top"
                : heroImageClass
            }
          />
        ) : (
          <VisualPlaceholder title={`${project.name} · ${project.sector}`} />
        )}
      </div>
      <article className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        {body}
        {project.sections.map((section) => (
          <section key={section.title} id={section.id} className="editorial-study-section mb-14 scroll-mt-32 md:mb-20">
            <SectionDivider />
            <div className="editorial-study-heading mx-auto max-w-[720px]">
              <h2 className="section-title">{section.title}</h2>
              <div className="essay-prose mt-6 space-y-5">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{editorialEmphasis(paragraph)}</p>
                ))}
              </div>
              {project.slug === "secure-code-warrior" && section.id === "product-design-identity" && (
                <Link
                  to="/work/secure-code-warrior/product-design-identity"
                  className="accent-link mt-6 inline-flex items-center gap-2"
                >
                  Explore the product design identity
                  <ArrowUpRight size={16} />
                </Link>
              )}
            </div>
            {section.visual && (
              <figure className="editorial-study-visual mx-auto mt-9 w-full max-w-[720px]">
                {section.images ? (
                  section.imageLayout === "side-by-side" ? (
                    <div className="grid grid-cols-3 items-start gap-3 md:gap-6">
                      {section.images.map((key) => (
                        <img
                          key={key}
                          src={projectImage(key).url}
                          alt={projectImage(key).alt}
                          className="h-auto w-full rounded-[10px]"
                        />
                      ))}
                    </div>
                  ) : section.imageLayout === "desktop-mobile" ? (
                    <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-start gap-3 md:gap-6">
                      {section.images.map((key) => (
                        <img
                          key={key}
                          src={projectImage(key).url}
                          alt={projectImage(key).alt}
                          className="h-auto w-full rounded-[10px]"
                        />
                      ))}
                    </div>
                  ) : section.imageLayout === "gallery" ? (
                    <div
                      className={`grid gap-4 ${section.images.length > 2 ? "grid-cols-2 md:grid-cols-3" : "grid-cols-2"}`}
                    >
                      {section.images.map((key) => (
                        <img
                          key={key}
                          src={projectImage(key).url}
                          alt={projectImage(key).alt}
                          className="aspect-[3/4] w-full rounded-[10px] object-cover object-top"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-6">
                      {section.images.map((key) => (
                        <img
                          key={key}
                          src={projectImage(key).url}
                          alt={projectImage(key).alt}
                          className={imageClass}
                          loading="lazy"
                        />
                      ))}
                    </div>
                  )
                ) : section.image ? (
                  <img
                    src={projectImage(section.image).url}
                    alt={projectImage(section.image).alt}
                    className={
                      section.imageFit === "native"
                        ? "mx-auto h-auto max-w-full rounded-[10px]"
                        : imageClass
                    }
                    loading="lazy"
                  />
                ) : (
                  <VisualPlaceholder title={section.visual} />
                )}
                <figcaption className="caption mt-4">{section.caption}</figcaption>
              </figure>
            )}
            {project.slug === "mendeley" && section.id === "citation" && (
              <div className="mx-auto mt-10 max-w-[720px]">
                <SecondaryCard to="/work/mendeley/sample-work" image="mendeley-header" description="Selected screens and flows from the Library, Reader and Citation interfaces." />
              </div>
            )}
          </section>
        ))}
        <div className="editorial-study-closing mx-auto max-w-[720px]">
          {(project.outcomes.length > 0 || project.outcomeStats || project.outcomeImage) && <SectionDivider />}
          {project.outcomeStats ? <div id="outcomes" className="scroll-mt-32"><h2 className="card-title">{outcomesTitle}</h2>{project.outcomesHeading && <p className="subsection-title mt-4">{project.outcomesHeading}</p>}{project.outcomesIntro && <p className="body-copy mt-5 text-muted-foreground">{project.outcomesIntro}</p>}<dl className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2">{project.outcomeStats.map(stat => <div key={stat.text}><dt className="subsection-title">{stat.value}</dt><dd className="caption mt-2">{stat.text}</dd></div>)}</dl></div> : project.outcomes.length > 0 && (
            <>
              <h2 id="outcomes" className="section-title scroll-mt-32">
                {outcomesTitle}
              </h2>
              <ul className="editorial-outcomes mt-6 space-y-4">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="hairline-bottom pb-4 body-copy">
                    {editorialEmphasis(outcome)}
                  </li>
                ))}
              </ul>
            </>
          )}
          {project.outcomeImage && (
            <figure className="editorial-study-visual mx-auto mt-9 w-full max-w-[720px]">
              <img
                src={projectImage(project.outcomeImage).url}
                alt={projectImage(project.outcomeImage).alt}
                className={imageClass}
              />
              <figcaption className="caption mt-4">{project.outcomeCaption}</figcaption>
            </figure>
          )}
          {!compact && project.evidencePending !== false && (
            <p className="mt-5 caption">
              Selected artefacts and supporting evidence will be added before publication.
            </p>
          )}
          {project.reflection && (
            <section className="editorial-study-reflection mt-12">
              <SectionDivider />
              <h2 className="section-title">{project.reflection.title}</h2>
              <div className="essay-prose mt-6 space-y-5">
                {project.reflection.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{editorialEmphasis(paragraph)}</p>
                ))}
              </div>
            </section>
          )}
          {project.contribution && (
            <>
              <SectionDivider />
              <h2 className="mt-12 section-title">My contribution</h2>
              <p className="editorial-contribution essay-prose mt-6">{editorialEmphasis(project.contribution)}</p>
            </>
          )}
        </div>
      </article>
      <ProjectPagination slug={project.slug} />
    </main>
  );
}
