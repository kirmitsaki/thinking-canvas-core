import type { ReactNode } from 'react';
import { SnippetLink } from './snippet-context';
import { projectImage } from '@/data/projects';

/* Quiet card for secondary pages linked from inside a case study:
   visual-led, no date or title, just a short line and a "Read more" link. */
export function SecondaryCard({
  to,
  image,
  description,
  notice,
  fit = 'cover',
}: {
  to: string;
  image: string;
  description: string;
  notice?: ReactNode;
  fit?: 'cover' | 'contain';
}) {
  const media = projectImage(image);
  return (
    <SnippetLink to={to} className="editorial-card group block min-w-0 overflow-hidden p-0 text-card-foreground">
      <div className={`aspect-[16/10] overflow-hidden ${fit === 'contain' ? 'diagram-card-media' : 'bg-muted'}`}>
        <img
          loading="lazy"
          src={media.url}
          alt={media.alt}
          className={`block h-full w-full ${fit === 'contain' ? 'object-contain' : 'object-cover object-top'}`}
        />
      </div>
      <div className="p-6 md:p-8">
        <p className="body-copy text-muted-foreground">{description}</p>
        {notice && <div className="mt-4">{notice}</div>}
        <p className="accent-link mt-4">SEE MORE{"\u00a0"}<span className="arrow-nudge">→</span></p>
      </div>
    </SnippetLink>
  );
}
