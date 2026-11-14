import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { type Project, projects, projectImage } from "@/data/projects";
import { VisualPlaceholder } from "./visual-placeholder";
import { ContactLink } from "./shell";
import { SectionNavigation } from "./section-navigation";
import { ProjectContext } from "./project-context";
import { PortfolioBreadcrumb } from "./breadcrumb";
import { SectionDivider } from "./section-divider";

export function CaseStudy({ project, body, introParagraphs, facts, minimalFrame = false }: { project: Project; body?: ReactNode; introParagraphs?: string[]; facts?: { label: string; value: string }[]; minimalFrame?: boolean }) {
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
    compact || project.slug === "origin-markets" ? imageClass : "w-full rounded-[10px]";
  return (
    <main className="case-study relative z-10">
      <header
        id="overview"
        className="mx-auto max-w-[1200px] scroll-mt-32 px-6 pb-12 pt-10 md:pt-14"
      >
        <PortfolioBreadcrumb
          items={[{ label: "Portfolio", to: "/work" }, { label: project.name }]}
          trailing={
            <div className="flex flex-wrap items-center justify-end gap-3">
              {!minimalFrame && <ProjectContext industry={project.industry} field={project.field} />}
              <p className="label-quiet">{project.dates}</p>
            </div>
          }
        />
        <h1 className="mt-8 max-w-[900px] page-title">{project.title}</h1>
        {introParagraphs ? <div className="mt-6 max-w-[760px] space-y-4">{introParagraphs.map((text, index) => <p key={text} className={index === 0 ? "standfirst" : "body-copy"}>{text}</p>)}</div> : <p className="standfirst mt-6 max-w-[760px]">{project.intro}</p>}
        {facts ? <dl className="mt-7 space-y-1">{facts.map(fact => <div key={fact.label} className="caption"><dt className="inline font-semibold">{fact.label}: </dt><dd className="inline">{fact.value}</dd></div>)}</dl> : <p className="caption mt-7">{project.role}</p>}
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
        {project.sections.map((section, index) => (
          <section key={section.title} id={section.id} className="mb-14 scroll-mt-32 md:mb-20">
            <SectionDivider />
            <div className="mx-auto max-w-[720px]">
              <p className="label-quiet">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 card-title">{section.title}</h2>
              <div className="essay-prose mt-6 space-y-5">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
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
              {project.slug === "mendeley" && section.id === "library" && (
                <Link
                  to="/work/mendeley/library"
                  className="accent-link mt-6 inline-flex items-center gap-2"
                >
                  Explore the Library interface
                  <ArrowUpRight size={16} />
                </Link>
              )}
              {project.slug === "mendeley" && section.id === "reader" && (
                <Link
                  to="/work/mendeley/reader"
                  className="accent-link mt-6 inline-flex items-center gap-2"
                >
                  Explore the Reader interface
                  <ArrowUpRight size={16} />
                </Link>
              )}
              {project.slug === "mendeley" && section.id === "citation" && (
                <Link
                  to="/work/mendeley/citation"
                  className="accent-link mt-6 inline-flex items-center gap-2"
                >
                  Explore the Citation interface
                  <ArrowUpRight size={16} />
                </Link>
              )}
            </div>
            {section.visual && (
              <figure className="mx-auto mt-9 w-full max-w-[720px]">
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
                  />
                ) : (
                  <VisualPlaceholder title={section.visual} />
                )}
                <figcaption className="caption mt-4">{section.caption}</figcaption>
              </figure>
            )}
          </section>
        ))}
        <div className="mx-auto max-w-[720px]">
          {(project.outcomes.length > 0 || project.outcomeStats || project.outcomeImage) && <SectionDivider />}
          {project.outcomeStats ? <div id="outcomes" className="scroll-mt-32"><h2 className="card-title">Outcomes & evidence</h2>{project.outcomesHeading && <p className="subsection-title mt-4">{project.outcomesHeading}</p>}{project.outcomesIntro && <p className="body-copy mt-5 text-muted-foreground">{project.outcomesIntro}</p>}<dl className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2">{project.outcomeStats.map(stat => <div key={stat.text}><dt className="subsection-title">{stat.value}</dt><dd className="caption mt-2">{stat.text}</dd></div>)}</dl></div> : project.outcomes.length > 0 && (
            <>
              <h2 id="outcomes" className="card-title">
                Outcomes & evidence
              </h2>
              <ul className="mt-6 space-y-4">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="hairline-bottom pb-4 body-copy">
                    {outcome}
                  </li>
                ))}
              </ul>
            </>
          )}
          {project.outcomeImage && (
            <figure className="mx-auto mt-9 w-full max-w-[720px]">
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
            <section className="mt-12">
              <SectionDivider />
              <h2 className="card-title">{project.reflection.title}</h2>
              <div className="essay-prose mt-6 space-y-5">
                {project.reflection.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          )}
          {project.contribution && (
            <>
              <SectionDivider />
              <h2 className="mt-12 card-title">My contribution</h2>
              <p className="essay-prose mt-6">{project.contribution}</p>
            </>
          )}
        </div>
      </article>
      <section className="hairline-top">
        <div className="mx-auto max-w-[1200px] px-6 py-12">
          <SectionDivider />
          <h2 className="card-title">More work</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects
              .filter((item) => item.slug !== project.slug)
              .slice(0, 2)
              .map((item) => (
                <Link key={item.slug} to={`/work/${item.slug}`} className="editorial-card block p-7">
                  <h3 className="flex items-start justify-between gap-4 card-title">
                    {item.name}
                    <ArrowUpRight size={20} className="shrink-0 text-accent" />
                  </h3>
                  <p className="mt-4 body-copy text-muted-foreground">{item.summary}</p>
                </Link>
              ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <Link to="/work" className="accent-link">
              View all work <span className="arrow-nudge">→</span>
            </Link>
            <ContactLink />
          </div>
        </div>
      </section>
    </main>
  );
}
