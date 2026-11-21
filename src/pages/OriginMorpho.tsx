import type { ReactNode } from 'react';
import { SnippetHeader } from '@/components/portfolio/snippet-header';
import { SectionDivider } from '@/components/portfolio/section-divider';
import { VisualPlaceholder } from '@/components/portfolio/visual-placeholder';
import { projectImage } from '@/data/projects';

const levels = [
  ['Atoms', 'Buttons, inputs and icons.'],
  ['Molecules', 'Simple combinations of components.'],
  ['Organisms', 'More complex interface sections.'],
  ['Templates', 'Reusable page structures.'],
  ['Pages', 'Complete product experiences.'],
];
const P = ({ children }: { children: ReactNode }) => <p className="body-copy">{children}</p>;
function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return <section className="origin-section"><SectionDivider /><div className="origin-section-grid">
    <div className="origin-section-heading"><h2 className="section-title">{title}</h2></div>
    <div className="space-y-6">{subtitle && <h3 className="subsection-title">{subtitle}</h3>}{children}</div>
  </div></section>;
}

export default function OriginMorpho() {
  return <main className="case-study-editorial origin-editorial mx-auto max-w-[960px] px-6 pb-16">
    <SnippetHeader title="Morpho" subtitle="The design system behind every screen of the Origin platform." image={projectImage('origin-morpho')} />
    <article className="pt-12 md:pt-16">
      <Section title="Overview" subtitle="Creating a shared foundation for design and development">
        <P>As Origin's platform grew, inconsistencies between different areas became increasingly difficult to manage. Components were being rebuilt independently, patterns differed across products and design and engineering lacked a shared reference point.</P>
        <P>I saw an opportunity to bring everything together through a unified design system.</P>
        <P>I initiated the project with the lead frontend engineer, and together we built Morpho: an atomic design system connecting Figma and the codebase.</P>
      </Section>
      <Section title="Foundations" subtitle="Establishing a common language">
        <P>We started by defining the foundations: typography, colour and spacing. These became a shared set of design tokens, creating consistency across the platform and a common language for design and development.</P>
        <VisualPlaceholder title="Morpho's foundations" caption="Typography, colour palette, design tokens and atomic structure" />
        <div className="morpho-levels">
          <h3 className="subsection-title">Adopting atomic design</h3>
          <ol className="design-goals-list mt-8">
            {levels.map(([name, text], index) => (
              <li key={name}>
                <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <p className="body-copy text-muted-foreground"><strong>{name}</strong> — {text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>
      <Section title="The system" subtitle="Building reusable components and patterns">
        <P>Working from these foundations, we gradually expanded Morpho into a shared library of components and patterns.</P>
        <P>The aim was to create flexible, reusable elements that could support different workflows across the platform without introducing unnecessary inconsistencies.</P>
        <VisualPlaceholder title="Component library" caption="Morpho component library showing buttons, inputs, tables, forms and other interface elements" />
      </Section>
      <Section title="Design meets development" subtitle="One system, two environments">
        <P>A key ambition was to keep Figma and the codebase as closely aligned as possible.</P>
        <P>Rather than maintaining two separate versions of the same system, I worked directly with the frontend lead to establish shared components and patterns that translated consistently between design and development.</P>
        <P>This meant both teams could work from the same foundation, making Morpho as useful in code as it was in Figma.</P>
        <VisualPlaceholder title="Figma and code" caption="Figma library alongside corresponding coded components" />
      </Section>
      <Section title="Growing with the product">
        <P>Morpho started with the essentials and gradually expanded alongside Origin.</P>
        <P>By the time I left, it had evolved into a shared library of design tokens, components, patterns and documentation, becoming the foundation for everything the team built.</P>
        <P>More than a collection of reusable components, Morpho gave design and engineering a common language and a more consistent way to build the platform.</P>
        <VisualPlaceholder title="Morpho across Origin" caption="Complete Morpho overview or examples of the system applied across Origin" />
      </Section>
      <blockquote className="pull-quote morpho-funfact"><span className="label-quiet block pb-2">Fun fact</span>Morpho was named after the butterfly — its name comes from an epithet meaning “changed” or “modified”, linked to an ancient Greek term, and the blue colours reflected the palette.</blockquote>
    </article>
  </main>;
}
