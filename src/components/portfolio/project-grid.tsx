import { Link } from "react-router-dom";
import { projectImage, projectWorkAreas, type Project } from "@/data/projects";
import { VisualPlaceholder } from "./visual-placeholder";
import { ComingSoonMedia } from "./coming-soon-media";
import { ProjectLabels } from "./project-labels";
import { ProjectContext } from "./project-context";

function CardBody({ project, index, link }: { project: Project; index: number; link: boolean }) {
  return (
    <div className="p-6 md:p-8">
      <p className="caption">
        {String(index + 1).padStart(2, "0")} / {project.dates}
      </p>
      <h2 className="mt-3 card-title">{project.name}</h2>
      <ProjectContext industry={project.industry} field={project.field} className="mt-4" />
      {!project.comingSoon && <ProjectLabels labels={projectWorkAreas(project)} className="mt-3" />}
      <p className="mt-4 max-w-lg body-copy text-muted-foreground">{project.summary}</p>
      {link ? <p className="accent-link mt-6">Read case study →</p> : null}
    </div>
  );
}

export function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((project, index) => {
        if (project.comingSoon) {
          return (
            <div
              key={project.slug}
              className="block min-w-0 overflow-hidden rounded-[10px] border border-hairline bg-card"
            >
              <ComingSoonMedia topics={project.tags} className="aspect-[16/10]" />
              <CardBody project={project} index={index} link={false} />
            </div>
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
            <CardBody project={project} index={index} link />
          </Link>
        );
      })}
    </div>
  );
}
