import Seo from "@/components/Seo";
import { projectsByYear, pageMeta } from "@/data/projects";
import { ProjectGrid } from "@/components/portfolio/project-grid";

// Filters hidden for now. To restore: re-add useSearchParams, projectFilters,
// projectMatchesFilter and the filterPill Button group under the heading.

const meta = pageMeta(
  "Work",
  "Product design, websites and brand design by Rachel Kirmitsaki. Explore Secure Code Warrior, Origin Markets, Mendeley and more projects."
);

export default function WorkPage() {
  return (
    <main className="relative z-10">
      <Seo title={meta.title} description={meta.description} path="/work" ogType={meta.ogType} />
      <div className="mx-auto max-w-[1200px] px-6 pb-20 md:pb-28">
        <header className="fade-in pb-10 pt-12 md:pb-14 md:pt-16">
          <h1 className="page-title">Portfolio</h1>
        </header>
        <ProjectGrid items={projectsByYear} />
      </div>
    </main>
  );
}
