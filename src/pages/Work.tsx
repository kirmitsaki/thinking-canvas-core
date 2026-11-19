import Seo from "@/components/Seo";
import { portfolioProjects, freelanceProjects, pageMeta } from "@/data/projects";
import { ProjectCard, ProjectGrid } from "@/components/portfolio/project-grid";
import { SnippetGrid } from "@/components/portfolio/snippet-grid";

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
      <div className="mx-auto max-w-[960px] px-6 pb-20 md:pb-28">
        <header className="fade-in pb-10 pt-12 md:pb-14 md:pt-16">
          <h1 className="page-title">Portfolio</h1>
        </header>
        <section>
          {/* Coming-soon entries (Secure Code Warrior) hidden; restore by passing portfolioProjects directly. */}
          {(() => {
            const items = portfolioProjects.filter((project) => !project.comingSoon);
            const featured = items.slice(0, 2);
            const rest = items.slice(2);
            return (
              <>
                <div className="grid gap-6 md:grid-cols-2">
                  {featured.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
                <div className="mt-6">
                  <ProjectGrid items={rest} />
                </div>
              </>
            );
          })()}
        </section>
        <section className="mt-20 md:mt-28" aria-labelledby="snippets-heading">
          <h2 id="snippets-heading" className="section-title mb-10 md:mb-14">Snippets</h2>
          <SnippetGrid />
        </section>
        <section className="mt-20 md:mt-28" aria-labelledby="freelancing-heading">
          <h2 id="freelancing-heading" className="section-title mb-10 md:mb-14">Freelancing</h2>
          <ProjectGrid items={freelanceProjects} columns={3} />
        </section>
      </div>
    </main>
  );
}
