import type { ReactNode } from 'react';
import { SnippetHeader } from '@/components/portfolio/snippet-header';
import { SectionDivider } from '@/components/portfolio/section-divider';
import { projectImage } from '@/data/projects';

function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return <section className="origin-section"><SectionDivider /><div className="origin-section-grid">
    <div className="origin-section-heading"><h2 className="section-title">{title}</h2></div>
    <div className="space-y-6">{subtitle && <h3 className="subsection-title">{subtitle}</h3>}{children}</div>
  </div></section>;
}

const P = ({ children }: { children: ReactNode }) => <p className="body-copy">{children}</p>;
const Image = ({ image }: { image: string }) => <img src={projectImage(image).url} alt={projectImage(image).alt} loading="lazy" className="h-auto w-full rounded-[10px]" />;

export default function MendeleyDesignSystem() {
  return <main className="case-study-editorial mx-auto max-w-[960px] px-6 pb-16">
    <SnippetHeader title="Reference Manager 2.0" subtitle="The UI Pattern Library and reusable Sketch components for Reference Manager." intro="During my time on MRM I was heavily involved in creating and implementing the UI Pattern Library, a living document containing the core components that formed the foundation for the redesign." image={projectImage('mendeley-design-system-snippet')} />
    <article className="pt-12 md:pt-16">
      <Section title="Overview" subtitle="Maintaining consistency across a growing product">
        <P>Reference Manager 2.0 was a major redesign of Mendeley's reference management application. With multiple teams working across different areas of the product, a shared design foundation was essential to maintaining consistency.</P>
        <P>I worked on adopting, extending and maintaining the UI Pattern Library, helping it evolve alongside the product and remain a reliable reference for the wider team.</P>
      </Section>
      <Section title="Shared components" subtitle="One library, multiple workflows">
        <P>The pattern library was built in Sketch as a collection of reusable symbols, linked to individual design files.</P>
        <P>I helped maintain and expand the library as new features were introduced, ensuring designers could reuse established components rather than recreate them from scratch.</P>
        <P>The master library remained the single source of truth for the product's interface.</P>
        <Image image="mendeley-pattern-library" />
      </Section>
      <Section title="Documentation" subtitle="Keeping everyone on the same page">
        <P>We maintained detailed product documentation in Confluence, covering the application's functionality, behaviours and design patterns.</P>
        <P>This gave designers, developers and product teams a shared understanding of the product, helping maintain consistency and keep everyone aligned as the application evolved.</P>
        <Image image="mendeley-symbols-components" />
      </Section>
      <Section title="Accessibility" subtitle="Designing for different access needs">
        <P>Accessibility was an important consideration across the shared patterns and components.</P>
        <P>We maintained accessibility as part of the design foundation, supporting an academic audience with diverse access needs.</P>
      </Section>
      <Section title="Maintaining the system">
        <P>The UI Pattern Library evolved alongside Reference Manager 2.0, supporting new features while preserving consistency across the application.</P>
        <P>It became an important shared resource for the team, helping designers work more efficiently and maintain a cohesive product experience.</P>
      </Section>
    </article>
  </main>;
}
