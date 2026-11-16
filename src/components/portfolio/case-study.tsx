import { Fragment, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { type Project, projectImage } from "@/data/projects";
import { VisualPlaceholder } from "./visual-placeholder";
import { ProjectPagination } from "./project-pagination";
import { SectionNavigation } from "./section-navigation";
import { PortfolioBreadcrumb } from "./breadcrumb";
import { SectionDivider } from "./section-divider";
import { NdaNotice } from "./nda-notice";
import { ProjectContext } from "./project-context";
import { SecondaryCard } from "./secondary-card";
import { editorialEmphasis } from "./editorial-emphasis";

export function CaseStudy({ project, body, introParagraphs, facts, minimalFrame = false, outcomesTitle = "Outcomes", notice, heroNotice }: { project: Project; body?: ReactNode; introParagraphs?: ReactNode[]; facts?: { label: string; value: string }[]; minimalFrame?: boolean; outcomesTitle?: string; notice?: ReactNode; heroNotice?: ReactNode }) {
  const navigation = project.sectionNavigation ?? [
    { label: "Overview", id: "overview" },
    ...project.sections.flatMap((section, index) =>
      section.id && section.navigationLabel
        ? [
            { id: section.id, label: section.navigationLabel },
            ...(index === 0 && project.contribution ? [{ id: "my-role", label: "My role" }] : []),
          ]
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
        className="mx-auto max-w-[1200px] scroll-mt-32 px-6 pb-12"
      >
        {noticeNode && <div className="mb-6">{noticeNode}</div>}
        <PortfolioBreadcrumb
          items={[{ label: "Portfolio", to: "/work" }, { label: project.name }]}
          trailing={
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <ProjectContext industry={project.industry} field={project.field} />
              <p className="label-quiet">{project.dates}</p>
            </div>
          }
        />
        <h1 className="mt-8 max-w-[720px] page-title">{project.title}</h1>
        {(() => {
          const paragraphs = introParagraphs ?? project.intro.split(/(?<=\.)\s+/);
          const headerFacts = facts ?? [
            { label: 'Role', value: project.role },
            { label: 'Duration', value: project.dates },
            { label: 'Industry', value: `${project.industry} · ${project.field}` },
          ];
          return (
            <div className="case-study-header-copy">
              <div className="mt-7 max-w-[640px] space-y-5">{paragraphs.map((text, index) => <p key={index} className={index === 0 ? "standfirst" : "body-copy"}>{typeof text === "string" ? editorialEmphasis(text) : text}</p>)}</div>
              <dl className="case-study-facts">{headerFacts.filter(fact => fact.label !== "Industry").map(fact => {
                const items = fact.label === "Tasks" ? fact.value.split(/,\s*/) : null;
                return (
                  <div key={fact.label} className="editorial-card min-w-0 p-6 md:p-8">
                    <dt className="label">{fact.label}</dt>
                    <dd className="case-study-fact-value mt-4">
                      {items ? (
                        <ul className="case-study-fact-pills">{items.map(item => <li key={item}>{item}</li>)}</ul>
                      ) : fact.value}
                    </dd>
                  </div>
                );
              })}</dl>
            </div>
          );
        })()}
      </header>
      <SectionNavigation items={navigation} to={`/work/${project.slug}`} />
      <div className="mx-auto max-w-[1200px] px-6">
        {heroNotice && <div className="mb-6">{heroNotice}</div>}
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
          <Fragment key={section.title}>
          <section id={section.id} className="editorial-study-section mb-20 scroll-mt-32 md:mb-28">
            {!(project.slug === "aladdin" && section.subheading) && <SectionDivider />}
            <div className="editorial-study-heading mx-auto max-w-[720px]">
              {project.slug === "aladdin" && section.subheading ? (
                <h3 className="subsection-title">{section.title}</h3>
              ) : (
                <h2 className="section-title">{section.title}</h2>
              )}
              <div className="essay-prose mt-8 space-y-6">
                {(section.paragraphs ?? []).map((paragraph, paragraphIndex) => (
                  <Fragment key={paragraph}>
                    <p>{editorialEmphasis(paragraph)}</p>
                    {section.quote && section.quoteAfter === paragraphIndex && (
                      <blockquote className="pull-quote">
                        <p>{editorialEmphasis(section.quote.text)}</p>
                        {section.quote.attribution && <cite>{section.quote.attribution}</cite>}
                      </blockquote>
                    )}
                  </Fragment>
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
            {section.quote && section.quoteAfter === undefined && (
              <blockquote className="pull-quote">
                <p>{editorialEmphasis(section.quote.text)}</p>
                {section.quote.attribution && <cite>{section.quote.attribution}</cite>}
              </blockquote>
            )}
            {section.groups && (
              <div className="mt-14 grid gap-14">
                {section.groups.map((group) => (
                  <div key={group.label} className="grid gap-6">
                    {group.cards ? (
                      <div className="grid gap-6">
                        <h3 className="subsection-title">{group.label}</h3>
                        <div className="brand-voice-cards">
                          {group.cards.map((card) => (
                            <figure key={card.image} className="brand-voice-card">
                              <img
                                src={projectImage(card.image).url}
                                alt={projectImage(card.image).alt}
                                className="h-auto w-full rounded-[10px]"
                                loading="lazy"
                              />
                              <figcaption className={`body-copy text-muted-foreground${project.slug === "pawsquad" ? " text-center" : ""}`}>{editorialEmphasis(card.text)}</figcaption>
                            </figure>
                          ))}
                        </div>
                      </div>
                    ) : group.imageSide === 'right' && group.image ? (
                      <>
                      <div className="origin-research-block origin-research-block--media-right">
                        <div className="space-y-6">
                          <h3 className="subsection-title">{group.label}</h3>
                          {(group.text ?? "").split("\n").filter(Boolean).map((paragraph) => (
                            <p key={paragraph} className="body-copy text-muted-foreground">{editorialEmphasis(paragraph)}</p>
                          ))}
                        </div>
                        <img
                          src={projectImage(group.image).url}
                          alt={projectImage(group.image).alt}
                          className="h-auto w-full rounded-[10px]"
                          loading="lazy"
                        />
                      </div>
                      {group.image2 && (
                        <img
                          src={projectImage(group.image2).url}
                          alt={projectImage(group.image2).alt}
                          className="h-auto w-full rounded-[10px]"
                          loading="lazy"
                        />
                      )}
                      {group.caption && <figcaption className="caption">{group.caption}</figcaption>}
                      </>
                    ) : (
                    <>
                    <div className="origin-research-block">
                      <h3 className="subsection-title">{group.label}</h3>
                      <div className="space-y-6">
                        {group.numbered ? (
                          <ol className="design-goals-list">
                            {(group.text ?? "").split("\n").filter(Boolean).map((goal, index) => (
                              <li key={goal}>
                                <span aria-hidden={group.markers ? undefined : "true"}>{group.markers?.[index] ?? String(index + 1).padStart(2, "0")}</span>
                                <p className="body-copy text-muted-foreground">{editorialEmphasis(goal)}</p>
                              </li>
                            ))}
                          </ol>
                        ) : (
                          (group.text ?? "").split("\n").filter(Boolean).map((paragraph) => (
                            <p key={paragraph} className="body-copy text-muted-foreground">{editorialEmphasis(paragraph)}</p>
                          ))
                        )}
                      </div>
                    </div>
                     {group.images ? (
                      <div className={project.slug === "mds-quostar" ? `mds-image-row ${group.images.length === 4 ? "mds-image-row--four" : group.images.length <= 2 ? "mds-image-row--two" : "mds-image-row--three"}` : project.slug === "pawsquad" && group.label === "The vet app" ? "grid items-center gap-6 sm:grid-cols-[449414fr_613200fr]" : group.imageSize === 'quarter' ? "grid gap-6 grid-cols-2 sm:grid-cols-4" : "grid gap-6 sm:grid-cols-2"}>
                        {group.images.map((image) => (
                          <img
                            key={image}
                            src={projectImage(image).url}
                            alt={projectImage(image).alt}
                            className={project.slug === "mds-quostar" ? "h-auto rounded-[10px]" : project.slug === "pawsquad" && group.label === "The vet app" ? "mx-auto h-auto max-h-[320px] w-auto max-w-full rounded-[10px] sm:max-h-none sm:w-full" : "h-auto w-full rounded-[10px]"}
                            loading="lazy"
                          />
                        ))}
                      </div>
                    ) : group.image ? (
                      <>
                      <img
                        src={projectImage(group.image).url}
                        alt={projectImage(group.image).alt}
                        className={project.slug === "mds-quostar" || group.imageSize === 'small' ? "mx-auto h-auto w-full max-w-[720px] rounded-[10px]" : group.imageSize === 'quarter' ? "h-auto w-full rounded-[10px] sm:w-1/4" : "h-auto w-full rounded-[10px]"}
                        loading="lazy"
                      />
                      {group.image2 && (
                        <img
                          src={projectImage(group.image2).url}
                          alt={projectImage(group.image2).alt}
                          className="h-auto w-full rounded-[10px]"
                          loading="lazy"
                        />
                      )}
                      {group.caption && <figcaption className="caption">{group.caption}</figcaption>}
                      </>
                    ) : null}
                    </>
                    )}
                  </div>
                ))}
              </div>
            )}
            {section.visual && (
              <figure className="editorial-study-visual mx-auto mt-12 w-full max-w-[720px]">
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
                      section.imageSize === "small"
                        ? "mx-auto max-h-[80vh] w-auto max-w-full rounded-[10px]"
                        : section.imageFit === "native"
                        ? "mx-auto h-auto max-w-full rounded-[10px]"
                        : imageClass
                    }
                    loading="lazy"
                  />
                ) : (
                  <VisualPlaceholder title={section.visual} />
                )}
                <figcaption className="caption mt-5">{section.caption}</figcaption>
              </figure>
            )}
            {project.slug === "mendeley" && section.id === "products" && (
              <div className="mx-auto mt-12 max-w-[720px]">
                <SecondaryCard to="/work/mendeley/sample-work" image="mendeley-header" description="Selected screens and flows from the Library, Reader and Citation interfaces." />
              </div>
            )}
          </section>
          {index === 0 && project.contribution && (
            <section id="my-role" className="origin-section scroll-mt-32">
              <SectionDivider />
              <div className="origin-section-heading">
                <h2 className="section-title">My role</h2>
                <p className="body-copy text-muted-foreground">{editorialEmphasis(project.contribution)}</p>
              </div>
            </section>
          )}
          </Fragment>
        ))}
        <div className="editorial-study-closing mx-auto max-w-[720px]">
          {(project.outcomes.length > 0 || project.outcomeStats || project.outcomeImage) && <SectionDivider />}
          {project.outcomeStats ? <div id="outcomes" className="scroll-mt-32"><h2 className="card-title">{outcomesTitle}</h2>{project.outcomesHeading && <p className="subsection-title mt-4">{project.outcomesHeading}</p>}{project.outcomesIntro && <p className="body-copy mt-5 text-muted-foreground">{project.outcomesIntro}</p>}<dl className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2">{project.outcomeStats.map(stat => <div key={stat.text}><dt className="subsection-title">{stat.value}</dt><dd className="caption mt-2">{stat.text}</dd></div>)}</dl></div> : project.outcomes.length > 0 && (
            <>
              <h2 id="outcomes" className="section-title scroll-mt-32">
                {outcomesTitle}
              </h2>
              <ul className="editorial-outcomes mt-8 space-y-5">
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
            <section className="editorial-study-reflection mt-16">
              <SectionDivider />
              <div className="essay-prose mx-auto mt-10 space-y-6 text-center">
                {project.reflection.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{editorialEmphasis(paragraph)}</p>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
      <ProjectPagination slug={project.slug} />
    </main>
  );
}
