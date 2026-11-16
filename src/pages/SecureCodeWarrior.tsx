import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import { getProject, caseStudyMeta, projectImage } from '@/data/projects';
import { CaseStudy } from '@/components/portfolio/case-study';
import { SectionDivider } from '@/components/portfolio/section-divider';

import aiWorkflows from '@/assets/scw-ai-workflows.webp';
import identityHeader from '@/assets/scw-identity-header.webp';

const project = getProject('secure-code-warrior');

function emphasize(text: string): ReactNode {
  const phrases = [
    'no coherent product vision',
    'no design infrastructure',
    'team of 6 across EMEA and APAC',
    'under four weeks',
    'first design system',
    'first accessibility audit',
    'strategic contributor',
    'holistic developer risk solution',
  ];
  const pattern = new RegExp(`(${phrases.join('|')})`, 'g');
  return text.split(pattern).map((part, index) => phrases.includes(part) ? <strong key={index}>{part}</strong> : part);
}

const intro = [
  'An AI-driven developer risk platform serving enterprise teams across EMEA and APAC.',
  'I joined during an internal restructure to build the design function properly across two regions. The platform had years of accumulated decisions, no coherent product vision, and no design infrastructure. The brief was to change that.',
].map(emphasize);

const challengeCopy = 'The platform had years of accumulated decisions, no coherent product vision, and no design infrastructure. Moving from a learning platform to a holistic developer risk solution meant changing how the company thought about its product, not just how it looked.';
const roleCopy = 'As Head of Product Design I led the product vision work directly with the CPTO, repositioned design from a delivery function to a strategic contributor to product direction, roadmap decisions and company positioning, and built and scaled a design team of 6 across EMEA and APAC, from discovery through to delivery.';

const facts = [
  { label: 'Role', value: 'Head of Product Design' },
  { label: 'Tasks', value: 'Product vision, Design system, Accessibility, AI workflows, Team leadership' },
];

const products = [
  { name: 'Developer Risk Management', text: 'The core platform for measuring and reducing developer security risk across engineering teams.' },
  { name: 'Learning Platform', text: 'The original hands-on secure coding product the company was built on.' },
  { name: 'Trust Agent', text: 'AI-assisted security guidance inside the developer workflow.' },
  { name: 'Reporting', text: 'Dashboards and insight that make developer risk visible to leadership.' },
  { name: 'Content', text: 'The learning content library powering every product in the family.' },
  { name: 'Cybermon', text: 'Gamified tournaments and challenges that build secure coding habits.' },
];

function ComingSoon({ to }: { to?: string }) {
  const text = (
    <>
      <p className="body-copy text-muted-foreground">Full case study coming soon.</p>
      {to && <p className="accent-link mt-4">SEE MORE{"\u00a0"}<span className="arrow-nudge">→</span></p>}
    </>
  );
  if (to) {
    return (
      <Link to={to} className="editorial-card group mx-auto mt-8 block w-full max-w-[720px] overflow-hidden">
        <img src={identityHeader} alt="Secure Code Warrior character artwork annotated with its design meanings" width={1600} height={1333} loading="lazy" className="block h-auto w-full" />
        <p className="accent-link p-6 md:p-8">SEE MORE{"\u00a0"}<span className="arrow-nudge">→</span></p>
      </Link>
    );
  }
  return (
    <div className="editorial-card mx-auto mt-8 w-full max-w-[720px] p-6 md:p-8">
      {text}
    </div>
  );
}

function Section({ id, title, lede, children }: { id: string; title: string; lede?: string; children?: ReactNode }) {
  return (
    <section id={id} className="origin-section scroll-mt-32">
      <SectionDivider />
      <div className="origin-section-heading">
        <h2 className="section-title">{title}</h2>
        {lede && <p className="body-copy text-muted-foreground">{emphasize(lede)}</p>}
      </div>
      {children && <div className="origin-section-content">{children}</div>}
    </section>
  );
}

export default function SecureCodeWarrior() {
  const overview = {
    ...project,
    ndaNotice: false,
    heroImage: undefined,
    reflection: undefined,
    contribution: '',
    sections: [],
    outcomes: [],
    outcomesHeading: undefined,
    evidencePending: false,
    sectionNavigation: [
      { label: 'Overview', id: 'overview' },
      { label: 'Challenge', id: 'challenge' },
      { label: 'My role', id: 'my-role' },
      { label: 'Product Vision', id: 'product-vision' },
      { label: 'Product Design Identity', id: 'product-design-identity' },
      { label: 'Design system', id: 'design-system' },
      { label: 'AI Workflows', id: 'ai-workflows' },
      { label: 'Products', id: 'products' },
      { label: 'Outcomes', id: 'outcomes' },
    ],
  };

  const body = (
    <>
      <Section id="challenge" title="Challenge" lede={challengeCopy} />

      <Section id="my-role" title="My role" lede={roleCopy} />

      <Section id="product-vision" title="Product Vision" lede="Repositioning the company from a learning platform to a holistic developer risk solution. A unified vision, built through cross-functional workshops, that gave every internal team a common direction for the first time.">
        <ComingSoon />
      </Section>

      <Section id="product-design-identity" title="Product Design Identity" lede="The visual direction that gave the new product vision a face: colour, interface examples and character artwork.">
        <ComingSoon to="/work/secure-code-warrior/product-design-identity" />
      </Section>

      <Section id="design-system" title="Design system" lede="The platform's first design system, grown from a simple shared file into a living system used by every engineering team across regions. It took about four years and a reasonable amount of stubbornness.">
        <div className="editorial-card mx-auto mt-8 w-full max-w-[720px] overflow-hidden">
          <img
            src={projectImage('scw-wanda').url}
            alt={projectImage('scw-wanda').alt}
            className="block h-auto w-full"
            loading="lazy"
          />
          <p className="body-copy p-6 text-muted-foreground md:p-8">Full case study coming soon.</p>
        </div>
      </Section>

      <Section id="ai-workflows" title="AI Workflows" lede="AI-enabled prototyping workflows that cut idea-to-validated-concept time to under four weeks.">
        <div className="editorial-card mx-auto mt-8 w-full max-w-[720px] overflow-hidden">
          <img src={aiWorkflows} alt="How AI changed the workflow: design system moved from Figma and Storybook to designing in code with Claude Code; prototyping moved from Figma to Lovable and Claude Code on the same design system; research and feedback moved from Slack, Google Docs and other tools to Salesforce MCP" width={1440} height=1248 loading="lazy" className="block h-auto w-full" />
          <p className="body-copy p-6 text-muted-foreground md:p-8">Full case study coming soon.</p>
        </div>
      </Section>

      <Section id="products" title="Products">
        <div className="origin-product-cards">
          {products.map((item, index) => (
            <article key={item.name} className="origin-product-card editorial-card">
              <p className="label-quiet">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="subsection-title">{item.name}</h3>
              <p className="body-copy">{emphasize(item.text)}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="outcomes" title="Outcomes" lede="What changed across the platform, the team and the company.">
        <ComingSoon />
      </Section>
    </>
  );

  const meta = caseStudyMeta(project);
  return (
    <>
      <Seo title={meta.title} description={meta.description} path="/work/secure-code-warrior" ogType={meta.ogType} />
      <div className="origin-editorial">
        <CaseStudy project={overview} body={body} introParagraphs={intro} facts={facts} minimalFrame outcomesTitle="Outcomes" />
      </div>
    </>
  );
}
