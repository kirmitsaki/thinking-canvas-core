import { editorialEmphasis } from './editorial-emphasis';
import { SectionDivider } from './section-divider';

type DetailSection = {
  id: string;
  title: string;
  paragraphs: string[];
  points: string[];
  images: { image: { url: string }; alt: string; caption: string }[];
  pointsAfterImage?: boolean;
};

function Figure({ item }: { item: DetailSection['images'][number] }) {
  return (
    <figure className="mt-9">
      <img src={item.image.url} alt={item.alt} className="h-auto w-full rounded-[10px]" loading="lazy" />
      <figcaption className="caption mt-4">{item.caption}</figcaption>
    </figure>
  );
}

export function MendeleySections({ sections, introInHeader = false }: { sections: DetailSection[]; introInHeader?: boolean }) {
  return <>{sections.map((section, index) => (
    <section key={section.id} id={section.id} className="editorial-study-section mb-14 scroll-mt-32 md:mb-20">
      {index > 0 && <SectionDivider />}
      <div className="mendeley-detail-row">
        <h2 className="section-title">{section.title}</h2>
        <div className="mendeley-detail-body">
          {section.paragraphs.length > 0 && (
            <div className="essay-prose space-y-5">
              {(introInHeader && section.id === 'goals' ? section.paragraphs.slice(1) : section.paragraphs).map(text => (
                <p key={text}>{editorialEmphasis(text)}</p>
              ))}
            </div>
          )}
          {section.pointsAfterImage && section.images[0] && <Figure item={section.images[0]} />}
          {section.points.length > 0 && (
            <ul className={`essay-prose space-y-3 ${section.pointsAfterImage ? 'mt-9' : 'mt-6'}`}>
              {section.points.map(text => <li key={text}>{text}</li>)}
            </ul>
          )}
          {(section.pointsAfterImage ? section.images.slice(1) : section.images).map(item => (
            <Figure key={item.alt} item={item} />
          ))}
        </div>
      </div>
    </section>
  ))}</>;
}