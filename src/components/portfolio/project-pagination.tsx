import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsByYear, type Project } from '@/data/projects';

export function adjacentProjects(slug: Project['slug']) {
  const index = projectsByYear.findIndex(project => project.slug === slug);
  return {
    previous: index > 0 ? projectsByYear[index - 1] : undefined,
    next: index >= 0 ? projectsByYear[index + 1] : undefined,
  };
}

export function ProjectPagination({ slug }: { slug: Project['slug'] }) {
  const { previous, next } = adjacentProjects(slug);
  return (
    <nav aria-label="Previous and next case studies" className="hairline-top">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="grid grid-cols-2 gap-6 md:gap-12">
          {previous ? (
            <Link to={previous.linkTo ?? `/work/${previous.slug}`} className="group min-w-0 py-4">
              <span className="accent-link inline-flex items-center gap-2"><ArrowLeft size={16} />Previous</span>
              <p className="subsection-title mt-4 break-words">{previous.name}</p>
            </Link>
          ) : <div />}
          {next && (
            <Link to={next.linkTo ?? `/work/${next.slug}`} className="group min-w-0 py-4 text-right">
              <span className="accent-link inline-flex items-center gap-2">Next<ArrowRight size={16} /></span>
              <p className="subsection-title mt-4 break-words">{next.name}</p>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}