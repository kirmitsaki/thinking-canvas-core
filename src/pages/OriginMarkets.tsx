import Seo from '@/components/Seo';
import { getProject, caseStudyMeta, projectImage } from '@/data/projects';
import { CaseStudy } from '@/components/portfolio/case-study';
import { SectionDivider } from '@/components/portfolio/section-divider';
import { SecondaryCard } from '@/components/portfolio/secondary-card';

const project = getProject('origin-markets');

const intro = [
  'The first front-to-back digital platform aiming to simplify the global debt capital markets.',
  'The platform served over 100 borrowers, 20 major investment banks, and nearly 700 professionals across 70 cities, covering the debt issuance lifecycle from pricing to settlement. I joined as the first in-house designer. No design function, no system, no process. An ambitious product that had been growing faster than its foundations.',
];
const challengeCopy = 'The challenge was bringing simplicity to an industry still reliant on manual processes, fragmented communication and legacy software. The platform served over 100 borrowers, 20 major investment banks, and nearly 700 professionals across 70 cities, covering the debt issuance lifecycle from pricing to settlement.';
const roleCopy = 'I joined as the first in-house designer. No design function, no system, no process. An ambitious product that had been growing faster than its foundations.';
const processCopy = 'I introduced an agile design process with two paths: quick improvements to existing workflows and deeper exploration for more complex features. Both started with the same question: How can we make the platform more useful to the people using it?';
const productsCopy = 'Three products, one institutional workflow, each evolved through continuous iteration and careful evaluation.';

const facts = [
  { label: 'Role', value: 'Lead Product Designer' },
  { label: 'Duration', value: '3 years' },
  { label: 'Industry', value: 'Financial Technology, Debt Capital Markets' },
];

const products = [
  { name: 'Origin Marketplace', text: 'Identifying issuance opportunities through a database of 1,000+ issuers, with consolidated funding levels, advanced filtering, cross-currency pricing and graphical analysis. This included a redesign of the Funding Matrix.', image: 'origin-marketplace' },
  { name: 'Origin Documentation', text: 'Simplifying the drafting and collaboration of transaction documents for vanilla and structured notes. Structuring data at execution enabled downstream processes including listing and instant ISIN generation.', image: 'origin-documentation' },
  { name: 'Origin Structured Notes', text: 'Automating the workflow from termsheet generation through to post-trade operations with an API-driven platform, reducing manual processes and operational risk.', image: 'origin-structured_notes' },
];

function Section({ id, title, lede, children }: { id: string; title: string; lede?: string; children?: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto mb-14 max-w-[720px] scroll-mt-32 md:mb-20">
      <SectionDivider />
      <h2 className="card-title">{title}</h2>
      {lede && <p className="body-copy mt-5 text-muted-foreground">{lede}</p>}
      {children && <div className="mt-8 space-y-5">{children}</div>}
    </section>
  );
}

export default function OriginMarkets() {
  const overview = {
    ...project,
    reflection: undefined,
    contribution: '',
    sections: [],
    outcomesHeading: undefined,
    sectionNavigation: [
      { label: 'Challenge', id: 'challenge' },
      { label: 'My role', id: 'my-role' },
      { label: 'Research', id: 'research' },
      { label: 'Process', id: 'process' },
      { label: 'Design System', id: 'design-system' },
      { label: 'Products', id: 'products' },
      { label: 'Outcomes', id: 'outcomes' },
    ],
  };

  const body = (
    <>
      <Section id="challenge" title="Challenge" lede={challengeCopy} />

      <Section id="my-role" title="My role" lede={roleCopy} />

      <Section id="research" title="Research">
        <h3 className="subsection-title">Audience</h3>
        <p className="body-copy text-muted-foreground">We started with the people already using the product and the manual processes it was replacing. Understanding how dealers, borrowers, and investment banks actually worked, not how they described their work in meetings, was the foundation for every design decision that followed. Early customer collaboration gave us direct insight into daily workflows and real pain points. All new features were shared with customers immediately on release to gather feedback.</p>
        <p className="body-copy text-muted-foreground">Over two years of platform development we accumulated a significant body of customer insight from over 20 dealers and nearly 90 issuers globally.</p>
        <h3 className="subsection-title">Defining the problem</h3>
        <p className="body-copy text-muted-foreground">The most important research finding was not what we expected.</p>
        <p className="body-copy text-muted-foreground">We had assumed the primary problem was efficiency. We spent months trying to remove steps from workflows, cut email chains, reduce manual overhead. When we spent proper time with customers it became clear that many of the steps we were trying to eliminate were doing important work. The phone call before a major transaction was not redundant. It was how both parties confirmed that the person on the other side had seen the document, understood what it meant, and was ready to proceed.</p>
        <blockquote className="pull-quote">Trust between institutions has to be produced. You cannot automate it out of existence without replacing it with something equally credible.</blockquote>
        <p className="body-copy text-muted-foreground">That insight changed the entire product direction.</p>
      </Section>

      <Section id="process" title="Process" lede={processCopy}>
        <img loading="lazy" src={projectImage('origin-design-process-diagram').url} alt={projectImage('origin-design-process-diagram').alt} className="h-auto w-full rounded-[10px]" />
        <h3 className="subsection-title">Continuous improvements</h3>
        <p className="body-copy text-muted-foreground">Not every problem needed a major redesign. I regularly reviewed existing workflows, identified unnecessary steps and visual noise, and worked with product managers to prioritise improvements. This also included moving legacy features into Morpho, our new UI framework. Ideas came from across the business, product and engineering teams, and I shared proposed designs with stakeholders early, before committing development resources.</p>
        <h3 className="subsection-title">Exploring complex workflows</h3>
        <p className="body-copy text-muted-foreground">Larger features needed a more considered approach. I brought business, product and engineering together in workshops to understand the problem, challenge assumptions and explore potential solutions. From there, the process moved through research, planning and UX exploration into detailed UI design, with prototypes and customer feedback shaping each iteration before development.</p>
      </Section>

      <Section id="design-system" title="Design System">
        <p className="body-copy text-muted-foreground">Before Morpho, every part of the platform had its own components, its own patterns, its own logic. Engineering was rebuilding the same things independently. Product was making decisions without a shared reference point.</p>
        <p className="body-copy text-muted-foreground">Morpho started small: the components used every day, built once, used everywhere. It grew into a full design system covering tokens, components, patterns, and documentation. By the time I left it was the foundation for everything the team built.</p>
        <p className="body-copy text-muted-foreground">A design system is only as valuable as its adoption. Morpho worked because it was built with engineers, not for them.</p>
        <img loading="lazy" src={projectImage('origin-morpho').url} alt={projectImage('origin-morpho').alt} className="h-auto w-full rounded-[10px]" />
      </Section>

      <Section id="products" title="Products" lede={productsCopy}>
        {products.map(item => (
          <div key={item.name} className="grid gap-5 pt-4 md:items-start md:gap-7 md:grid-cols-[220px_minmax(0,1fr)]">
            <img loading="lazy" src={projectImage(item.image).url} alt={projectImage(item.image).alt} className="h-auto w-full max-w-[220px] rounded-[10px]" />
            <div>
              <h3 className="label">{item.name}</h3>
              <p className="body-copy mt-3">{item.text}</p>
            </div>
          </div>
        ))}
        <SecondaryCard to="/work/origin-markets/gallery" image="origin-funding-matrix" description="A selection of screens and flows from across the Origin product family." />
      </Section>
    </>
  );

  const meta = caseStudyMeta(project);
  return (
    <>
      <Seo title={meta.title} description={meta.description} path="/work/origin-markets" ogType={meta.ogType} />
      <CaseStudy project={overview} body={body} introParagraphs={intro} facts={facts} minimalFrame outcomesTitle="Outcomes" />
    </>
  );
}
