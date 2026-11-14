import { Link } from 'react-router-dom';
import { projectImage } from '@/data/projects';

/* Quiet card for secondary pages linked from inside a case study:
   visual-led, no date or title, just a short line and a "Read more" link. */
export function SecondaryCard({
  to,
  image,
  description,
  fit = 'cover',
}: {
  to: string;
  image: string;
  description: string;
  fit?: 'cover' | 'contain';
}) {
  const media = projectImage(image);
  return (
    <Link to={to} className="editorial-card group block min-w-0 overflow-hidden">
      <div className={`aspect-[16/10] overflow-hidden ${fit === 'contain' ? 'bg-[#FAF6F3]' : 'bg-muted'}`}>
        <img
          loading="lazy"
          src={media.url}
          alt={media.alt}
          className={`block h-full w-full ${fit === 'contain' ? 'object-contain' : 'object-cover object-top'}`}
        />
      </div>
      <div className="p-6 md:p-8">
        <p className="body-copy text-muted-foreground">{description}</p>
        <p className="accent-link mt-4">Read more <span className="arrow-nudge">→</span></p>
      </div>
    </Link>
  );
}
