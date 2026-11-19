import type { ReactNode } from 'react';
import { SnippetHeader } from '@/components/portfolio/snippet-header';
import { SectionDivider } from '@/components/portfolio/section-divider';
import { NdaNotice } from '@/components/portfolio/nda-notice';
import { VisualPlaceholder } from '@/components/portfolio/visual-placeholder';

const levels = [
  ['Atoms', 'The smallest building blocks, such as buttons, inputs and icons.'],
  ['Molecules', 'Simple combinations of components.'],
  ['Organisms', 'More complex interface sections built from smaller elements.'],
  ['Templates', 'Reusable page structures and layouts.'],
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
    <SnippetHeader title="Creating a shared foundation with Morpho" subtitle="An atomic design system shared by design and development." intro="As the platform grew, inconsistencies between different areas became increasingly difficult to manage. Components were being created independently, patterns weren't always consistent, and there was no shared foundation between design and development." />
    <div className="sample-work-tabs py-3"><NdaNotice /></div>
    <article className="pt-12 md:pt-16">
      <Section title="A shared foundation" subtitle="Building the system together">
        <P>I saw an opportunity to address this by introducing a proper design system.</P>
        <P>I raised the idea with the lead frontend engineer, who was equally enthusiastic about the opportunity. We decided to build it together, with the aim of creating an atomic system that would work consistently across Figma and the codebase.</P>
        <VisualPlaceholder title="Morpho overview" />
      </Section>
      <Section title="Starting with the foundations" subtitle="Typography, colour and design tokens">
        <P>I began by researching and defining the foundations: typography, colour and design tokens. Working closely with the frontend lead, we gradually expanded these into more complex components and patterns.</P>
        <VisualPlaceholder title="Foundations: typography, colour and tokens" />
        <P>We structured Morpho around five levels:</P>
        <ul className="editorial-outcomes">{levels.map(([name, text]) => <li key={name}><P><strong>{name}</strong> — {text}</P></li>)}</ul>
        <VisualPlaceholder title="Atoms, molecules, organisms, templates and pages" />
        <P>We also established an agreed set of design tokens, creating a shared language for properties such as colour, spacing and typography.</P>
        <VisualPlaceholder title="Design tokens: colour, spacing and typography" />
      </Section>
      <Section title="One system, two environments" subtitle="Keeping Figma and the codebase aligned">
        <P>A key objective was keeping Figma and the codebase as closely aligned as possible. Rather than maintaining two separate interpretations of the same system, we wanted designers and engineers to work from a common foundation.</P>
        <VisualPlaceholder title="Figma library alongside the coded components" />
        <P>Morpho started with the essentials and grew alongside the product. By the time I left, it had become the foundation for everything the team built.</P>
        <blockquote className="pull-quote">A design system isn't a static library of colours and components. It's an evolving system, and its value comes from how consistently people use it.</blockquote>
      </Section>
    </article>
  </main>;
}