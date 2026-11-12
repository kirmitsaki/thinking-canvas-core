import { useSearchParams } from "react-router-dom";
import Seo from "@/components/Seo";
import {
  projectsByYear,
  projectFilters,
  projectMatchesFilter,
  pageMeta,
} from "@/data/projects";
import { ProjectGrid } from "@/components/portfolio/project-grid";
import { Button } from "@/components/ui/button";

const meta = pageMeta(
  "Work",
  "Product design, websites and brand design by Rachel Kirmitsaki. Explore Secure Code Warrior, Origin Markets, Mendeley and more projects."
);

export default function WorkPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawFilter = searchParams.get("filter");
  const filter = rawFilter && projectFilters.includes(rawFilter) ? rawFilter : undefined;
  const visible = filter
    ? projectsByYear.filter((project) => projectMatchesFilter(project, filter))
    : projectsByYear;

  return (
    <main className="relative z-10">
      <Seo title={meta.title} description={meta.description} path="/work" ogType={meta.ogType} />
      <div className="mx-auto max-w-[1200px] px-6 pb-20 md:pb-28">
        <header className="fade-in pb-10 pt-12 md:pb-14 md:pt-16">
          <h1 className="page-title">Portfolio</h1>
          <div role="group" aria-label="Filter projects" className="mt-8 flex flex-wrap gap-2">
            {[undefined, ...projectFilters].map((option) => (
              <Button
                key={option ?? "all"}
                variant="filterPill"
                aria-pressed={filter === option}
                onClick={() =>
                  setSearchParams(option && option !== filter ? { filter: option } : {}, {
                    replace: true,
                  })
                }
              >
                {option ?? "All work"}
              </Button>
            ))}
          </div>
        </header>
        <ProjectGrid items={visible} />
      </div>
    </main>
  );
}
