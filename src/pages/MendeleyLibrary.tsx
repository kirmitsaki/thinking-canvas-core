import { SnippetHeader } from '@/components/portfolio/snippet-header';
import { librarySections } from '@/data/mendeley-library';
import { editorialEmphasis } from '@/components/portfolio/editorial-emphasis';
import { SectionDivider } from '@/components/portfolio/section-divider';
import { projectImage } from '@/data/projects';

export default function MendeleyLibrary() {
  return <><SnippetHeader title="Library" subtitle="Organising and retrieving references in one place, through collections, tags, keyword search and filtering." intro="User feedback revealed three key challenges: cross-platform workflow disruptions, complex organisation systems and difficult team collaboration. The response was an intuitive interface integrating desktop and web functionality." image={projectImage('mendeley-library-snippet')} /><MendeleyLibraryContent /></>;
}

function MendeleyLibraryContent() {
  return <>
        {librarySections.map((section, index) => (
          <section key={section.id} id={section.id} className="editorial-study-section mb-14 scroll-mt-32 md:mb-20">
            {index > 0 && <SectionDivider />}
            <div className="mendeley-detail-row">
              <h2 className="section-title">{section.title}</h2>
              <div className="mendeley-detail-body">
                {section.paragraphs.length > 0 && (
                <div className="essay-prose space-y-5">
                  {(section.id === "goals" ? section.paragraphs.slice(1) : section.paragraphs).map((text) => (
                    <p key={text}>{editorialEmphasis(text)}</p>
                  ))}
                </div>
                )}
            {section.items?.map((item) => (
              <section key={item.title} className="mt-16">
                <div className="mendeley-detail-row">
                  <h3 className="subsection-title">{item.title}</h3>
                  <div className="mendeley-detail-body">
                    {item.text && <p className="essay-prose">{item.text}</p>}
                    <figure className="mt-6">
                      <img src={item.image.url} alt={item.alt} className="h-auto w-full rounded-[10px]" loading="lazy" />
                      <figcaption className="caption mt-4">{item.alt}</figcaption>
                    </figure>
                  </div>
                </div>
              </section>
            ))}
              </div>
            </div>
          </section>
        ))}
  </>;
}
