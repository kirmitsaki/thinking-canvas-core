import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Laptop, Handshake } from "lucide-react";
import Seo from "@/components/Seo";
import { projects, projectImage, projectWorkAreas, pageMeta } from "@/data/projects";
import { VisualPlaceholder } from "@/components/portfolio/visual-placeholder";
import { ComingSoonHint } from "@/components/portfolio/coming-soon-media";
import { ProjectContext } from "@/components/portfolio/project-context";
import { ContactLink } from "@/components/portfolio/shell";

const meta = pageMeta(
  "Product Design Consultant",
  "Rachel Kirmitsaki helps teams make complex products simpler, clearer and more useful. Available for contract engagements in London, working remotely."
);

const expertise = [
  "Product discovery and research",
  "UX and UI design",
  "Complex B2B workflows",
  "Design systems",
  "Accessibility",
  "AI-assisted prototyping",
  "Product strategy and collaboration",
];

export default function Home() {
  return (
    <main className="relative z-10 mx-auto max-w-[1200px] px-6">
      <Seo title={meta.title} description={meta.description} path="/" ogType={meta.ogType} />

      <section className="fade-in pb-12 pt-12 md:pb-14 md:pt-16">
        <h1 className="page-title max-w-[900px]">Product Design Consultant</h1>
        <p className="standfirst mt-6 max-w-[800px]">
          I work across product discovery, UX/UI, design systems and prototyping, helping teams
          turn complex problems into thoughtful, well-crafted digital products.
        </p>
        <ul
          aria-label="Location and working arrangement"
          className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4"
        >
          <li className="flex items-center gap-2.5 caption text-foreground">
            <span className="flex size-9 items-center justify-center rounded-full border border-dashed border-camel text-accent">
              <MapPin size={17} aria-hidden="true" />
            </span>
            London
          </li>
          <li className="flex items-center gap-2.5 caption text-foreground">
            <span className="flex size-9 items-center justify-center rounded-full border border-dashed border-camel text-forest">
              <Laptop size={17} aria-hidden="true" />
            </span>
            Remote
          </li>
          <li className="flex items-center gap-2.5 caption text-foreground">
            <span className="flex size-9 items-center justify-center rounded-full border border-dashed border-camel text-indigo">
              <Handshake size={17} aria-hidden="true" />
            </span>
            Contract
          </li>
        </ul>
      </section>

      <section className="hairline-top py-10 md:py-12">
        <div className="grid gap-5 md:grid-cols-[1fr_3fr]">
          <p className="label">Areas of expertise</p>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {expertise.map((item) => (
              <li key={item} className="body-copy">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="selected-work" className="hairline-top scroll-mt-28 py-10 md:py-14">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="section-title">Latest work</h2>
          <Link to="/work" className="accent-link inline-flex items-center gap-2 pb-2">
            All work
            <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(0, 3).map((project, index) => {
            const comingSoon = Boolean(project.comingSoon);
            const cardClass = `${index === 0 ? "lead-card md:col-span-2" : "editorial-card"} group block overflow-hidden`;
            const media = (
              <div
                className={
                  index === 0 ? "aspect-[2/1] md:aspect-[3/1]" : "aspect-[2/1] overflow-hidden bg-muted"
                }
              >
                {project.heroImage ? (
                  <img
                    src={projectImage(project.heroImage).url}
                    alt={projectImage(project.heroImage).alt}
                    className="block h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <VisualPlaceholder
                    title={`${project.name} · product screens`}
                    className="h-full w-full"
                  />
                )}
              </div>
            );
            if (comingSoon) {
              return (
                <ComingSoonHint key={project.slug} name={project.name} industry={project.industry} className="md:col-span-2" />
              );
            }
            return (
              <Link key={project.slug} to={`/work/${project.slug}`} className={cardClass}>
                {media}
                <div className="p-6 md:p-8">
                  <ProjectContext industry={project.industry} field={project.field} />
                  <h3 className="mt-3 card-title">{project.name}</h3>
                  <p className="mt-4 max-w-[680px] body-copy text-muted-foreground">
                    {project.summary}
                  </p>
                  <p className="accent-link mt-6">Read case study <span className="arrow-nudge">→</span></p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="hairline-top py-10 md:py-12">
        <Link to="/about" className="chocolate-card group relative block p-8 md:p-12">
          <span
            className="dark-card-label absolute bottom-8 right-8 text-2xl transition-transform duration-200 ease-out group-hover:translate-x-2 md:bottom-12 md:right-12"
            aria-hidden="true"
          >
            →
          </span>
          <p className="label dark-card-label">A little about me</p>
          <h2 className="mt-4 max-w-[600px] section-title">A designer with a technical foundation.</h2>
          <p className="mt-6 max-w-[660px] body-copy text-warm-ivory/80">
            Over a decade in digital product design, with a background in UX engineering and
            coding. My work spans fintech, cybersecurity and research platforms, alongside product
            teams, engineers, leadership and customers.
          </p>
        </Link>
      </section>

      <section className="hairline-top flex flex-wrap items-center justify-between gap-6 py-10 md:py-14">
        <div>
          <h2 className="card-title">Have a complex product in mind?</h2>
        </div>
        <ContactLink />
      </section>
    </main>
  );
}
