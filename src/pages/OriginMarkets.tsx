import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import { getProject, caseStudyMeta, projectImage } from '@/data/projects';
import { CaseStudy } from '@/components/portfolio/case-study';
import { SectionDivider } from '@/components/portfolio/section-divider';

const project = getProject('origin-markets');

/* Header standfirst; the challenge and role sentences below are the same
   paragraphs, reused as the opening line of their own sections. */
const intro = ['The first front-to-back digital platform aiming to simplify the global debt capital markets.'];
const challengeCopy = 'The platform served over 100 borrowers, 20 major investment banks, and nearly 700 professionals across 70 cities, covering the debt issuance lifecycle from pricing to settlement.';
const roleCopy = 'I joined as the first in-house designer. No design function, no system, no process. An ambitious product that had been growing faster than its foundations.';
const researchCopy = 'Good design decisions needed a strong understanding of the people using the platform, built over two years through ongoing conversations with more than 20 dealers and nearly 90 issuers globally.';
const processCopy = 'A two-track design process: continuous improvements alongside deeper exploration of complex workflows, shaped by customer feedback at every step.';
const designSystemCopy = 'Morpho gave the product family a shared visual language and a library of reusable components, so new features could be designed and built consistently as the platform grew.';
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

function Section({ id, title, lede, children }: { id: string; title: string; lede: string; children?: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto mb-14 max-w-[720px] scroll-mt-32 md:mb-20">
      <SectionDivider />
      <h2 className="card-title">{title}</h2>
      <p className="body-copy mt-5 text-muted-foreground">{lede}</p>
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
      <Section id="challenge" title="Challenge" lede={challengeCopy}>
        <img loading="lazy" src={projectImage('origin-audience-map').url} alt={projectImage('origin-audience-map').alt} className="h-auto w-full rounded-[10px]" />
      </Section>

      <Section id="my-role" title="My role" lede={roleCopy} />

      <Section id="research" title="Research" lede={researchCopy} />

      <Section id="process" title="Process" lede={processCopy}>
        <Link to="/work/origin-markets/design-process" className="editorial-card group block min-w-0 overflow-hidden">
          <div className="aspect-[16/10] overflow-hidden bg-[#FAF6F3]">
            <img loading="lazy" src={projectImage('origin-design-process-diagram').url} alt={projectImage('origin-design-process-diagram').alt} className="block h-full w-full object-contain" />
          </div>
          <div className="p-6 md:p-8">
            <p className="caption">2019 – 2022</p>
            <h3 className="mt-3 card-title">A design process for an fintech team</h3>
            <p className="mt-4 max-w-lg body-copy text-muted-foreground">{processCopy}</p>
            <p className="accent-link mt-6">Read case study <span className="arrow-nudge">→</span></p>
          </div>
        </Link>
      </Section>

      <Section id="design-system" title="Design System" lede={designSystemCopy}>
        <Link to="/work/origin-markets/design-system" className="editorial-card group block min-w-0 overflow-hidden">
          <div className="aspect-[16/10] overflow-hidden bg-muted">
            <img loading="lazy" src={projectImage('origin-morpho').url} alt={projectImage('origin-morpho').alt} className="block h-full w-full object-cover object-top" />
          </div>
          <div className="p-6 md:p-8">
            <p className="caption">2021 – 2022</p>
            <h3 className="mt-3 card-title">Morpho - A design system for a Fintech Startup</h3>
            <p className="mt-4 max-w-lg body-copy text-muted-foreground">Evolving the visual language, creating reusable interface components and bringing existing features into a more consistent and scalable framework.</p>
            <p className="accent-link mt-6">Read case study <span className="arrow-nudge">→</span></p>
          </div>
        </Link>
      </Section>

      <Section id="products" title="Products" lede={productsCopy}>
        {products.map(item => (
          <div key={item.name} className="grid gap-5 pt-4 md:items-start md:gap-7 md:grid-cols-[220px_minmax(0,1fr)]">
            <img loading="lazy" src={projectImage(item.image).url} alt={projectImage(item.image).alt} className="h-auto w-full max-w-[220px] rounded-[10px]" />
            <div>
              <h3 className="label">{item.name}</h3>
              <p className="mt-3">{item.text}</p>
            </div>
          </div>
        ))}
        <Link to="/work/origin-markets/gallery" className="editorial-card group block min-w-0 overflow-hidden">
          <div className="aspect-[16/10] overflow-hidden bg-muted">
            <img loading="lazy" src={projectImage('origin-header').url} alt={projectImage('origin-header').alt} className="block h-full w-full object-cover object-top" />
          </div>
          <div className="p-6 md:p-8">
            <p className="caption">2019 – 2022</p>
            <h3 className="mt-3 card-title">Sample work</h3>
            <p className="mt-4 max-w-lg body-copy text-muted-foreground">A selection of screens and flows from across the Origin product family.</p>
            <p className="accent-link mt-6">View gallery <span className="arrow-nudge">→</span></p>
          </div>
        </Link>
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
