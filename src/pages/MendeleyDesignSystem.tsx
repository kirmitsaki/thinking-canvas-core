import { SnippetHeader } from '@/components/portfolio/snippet-header';
import { SectionDivider } from '@/components/portfolio/section-divider';
import { projectImage } from '@/data/projects';

const sections = [
  { title: 'Shared components', subtitle: 'A master library in Sketch', paragraphs: ['All components were built as symbols in Sketch and linked to working files for new UI flows, ensuring consistency across the application without requiring designers to rebuild from scratch on every task. The pattern library was the master file. Everything referenced it.'], image: 'mendeley-pattern-library' },
  { title: 'Documentation', subtitle: 'One shared version of the product', paragraphs: ['We also maintained detailed design documentation in Confluence describing every part of the application and its functionality. In a team of this size, across this many product areas, documentation was the only thing that prevented scope creep and kept everyone working from the same version of the product.'], image: 'mendeley-symbols-components' },
  { title: 'Accessibility', subtitle: 'Patterns for different access needs', paragraphs: ['Accessibility was a core requirement for the shared patterns, supporting an academic audience with different access needs.'] },
];

export default function MendeleyDesignSystem() {
  return <main className="case-study-editorial mx-auto max-w-[960px] px-6 pb-16">
    <SnippetHeader title="The UI Pattern Library" subtitle="Reusable Sketch components for Mendeley Reference Manager." intro="During my time on MRM I was heavily involved in creating and implementing the UI Pattern Library, a living document containing the core components that formed the foundation for the redesign." />
    <article>{sections.map(section => <section key={section.title} className="origin-section">
      <SectionDivider />
      <div className="origin-section-grid">
        <div className="origin-section-heading"><h2 className="section-title">{section.title}</h2></div>
        <div className="space-y-6">
          <h3 className="subsection-title">{section.subtitle}</h3>
          {section.paragraphs.map(text => <p key={text} className="body-copy">{text}</p>)}
          {section.image && <img src={projectImage(section.image).url} alt={projectImage(section.image).alt} loading="lazy" className="h-auto w-full rounded-[10px]" />}
        </div>
      </div>
    </section>)}</article>
  </main>;
}