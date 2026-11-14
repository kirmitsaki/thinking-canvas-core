import { Link } from "react-router-dom";
import { projectImage, projectWorkAreas, type Project } from "@/data/projects";
import { VisualPlaceholder } from "./visual-placeholder";
import { ComingSoonHint } from "./coming-soon-media";
import { ProjectContext } from "./project-context";

function CardBody({ project, link }: { project: Project; link: boolean }) {
  return (
    <div className="p-6 md:p-8">
      <p className="caption">{project.dates}</p>
      <h2 className="mt-3 card-title">{project.name}</h2>
      <ProjectContext industry={project.industry} field={project.field} className="mt-4" />
      <p className="mt-4 max-w-lg body-copy text-muted-foreground">{project.summary}</p>
      {link ? <p className="accent-link mt-6">Read case study <span className="arrow-nudge">→</span></p> : null}
    </div>
  );
}

export function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((project) => {
        if (project.comingSoon) {
          return (
            <ComingSoonHint key={project.slug} name={project.name} industry={project.industry} className="md:col-span-2" />
          );
        }
        const image = project.heroImage ? projectImage(project.heroImage) : undefined;
        return (
          <Link
            key={project.slug}
            to={`/work/${project.slug}`}
            className={`editorial-card group block min-w-0 overflow-hidden${project.slug === "meliniki" ? " artwork-card" : ""}`}
          >
            <div className="aspect-[16/10] overflow-hidden bg-muted">
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
            <CardBody project={project} link />
          </Link>
        );
      })}
    </div>
  );
}
