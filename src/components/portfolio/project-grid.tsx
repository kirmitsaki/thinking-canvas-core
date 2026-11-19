import { SnippetLink } from './snippet-context';
import { projectImage, type Project } from "@/data/projects";
import { VisualPlaceholder } from "./visual-placeholder";
import { ComingSoonHint } from "./coming-soon-media";

export function cardYears(dates: string) {
  return dates.replace(/\b[A-Za-z]+\s+(?=\d{4})/g, "");
}

export function CardBody({ project }: { project: Project }) {
  const logo = project.logo ? projectImage(project.logo) : undefined;
  return (
    <div className="px-6 pb-6 pt-4 md:px-8 md:pb-8 md:pt-5">
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-2">
          {logo ? (
            <img src={logo.url} alt={logo.alt} className="size-10 shrink-0 rounded-full object-cover" loading="lazy" />
          ) : null}
          <p className="card-company">{project.name}</p>
        </div>
        <span className="card-years">{cardYears(project.dates)}</span>
      </div>
      {project.cardTitle ? <h2 className="mt-6 card-subtitle">{project.cardTitle}</h2> : null}
    </div>
  );
}

export function ProjectCard({ project, horizontal = false }: { project: Project; horizontal?: boolean }) {
  const image = project.heroImage ? projectImage(project.heroImage) : undefined;
  return (
    <SnippetLink
      to={project.linkTo ?? `/work/${project.slug}`}
      className={`editorial-card case-study-card group min-w-0 overflow-hidden${horizontal ? " case-study-card--horizontal" : " block"}${project.slug === "meliniki" ? " artwork-card" : ""}`}
    >
      <div className={`case-study-card-media overflow-hidden ${horizontal ? "aspect-[16/10] md:aspect-auto" : "aspect-[16/10]"} ${project.heroFit === "contain" ? "diagram-card-media" : project.slug === "jobme" ? "logo-card-media" : "bg-muted"}`}>
        {image ? (
          <img
            src={image.url}
            alt={image.alt}
            className="block h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <VisualPlaceholder
            title={`${project.name} · ${project.sector}`}
            className="h-full w-full"
          />
        )}
      </div>
      <CardBody project={project} />
    </SnippetLink>
  );
}

export function ProjectGrid({ items, columns = 2 }: { items: Project[]; columns?: 2 | 3 }) {
  return (
    <div className={`grid gap-6 md:grid-cols-2${columns === 3 ? " lg:grid-cols-3" : ""}`}>
      {items.map((project) => {
        if (project.comingSoon) {
          return (
            <ComingSoonHint key={project.slug} name={project.name} industry={project.industry} className="md:col-span-2" />
          );
        }
        return <ProjectCard key={project.slug} project={project} />;
      })}
    </div>
  );
}
