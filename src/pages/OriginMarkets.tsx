import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import { getProject, caseStudyMeta, projectImage } from '@/data/projects';
import { CaseStudy } from '@/components/portfolio/case-study';
import { SectionDivider } from '@/components/portfolio/section-divider';

const project = getProject('origin-markets');
const intro = [
  'Origin’s vision was to become the data and communication layer at the centre of global debt capital markets.',
  'The challenge was bringing simplicity to an industry still reliant on manual processes, fragmented communication and legacy software.',
  'I worked across product design, design systems and the wider design process to help shape a more connected and intuitive platform.',
];
const facts = [{ label: 'Role', value: 'Product Design, UX, UI, Design Systems' }, { label: 'Duration', value: '3 years' }, { label: 'Industry', value: 'Financial Technology, Debt Capital Markets' }];
const audiences = [
  ['Issuers', 'Accessing funding and connecting with dealers and investors globally.'],
  ['Dealers', 'Finding opportunities and managing bond transactions.'],
  ['Lawyers', 'Drafting and collaborating on transaction documentation.'],
  ['Market infrastructure', 'Capturing issuance data and creating a source of truth for new securities.'],
];
const products = [
  { name: 'Origin Marketplace', text: 'Identifying issuance opportunities through a database of 1,000+ issuers, with consolidated funding levels, advanced filtering, cross-currency pricing and graphical analysis. This included a redesign of the Funding Matrix.', image: 'origin-marketplace' },
  { name: 'Origin Documentation', text: 'Simplifying the drafting and collaboration of transaction documents for vanilla and structured notes. Structuring data at execution enabled downstream processes including listing and instant ISIN generation.', image: 'origin-documentation' },
  { name: 'Origin Structured Notes', text: 'Automating the workflow from termsheet generation through to post-trade operations with an API-driven platform, reducing manual processes and operational risk.', image: 'origin-structured_notes' },
];

function Img({ k }: { k: string }) {
  const image = projectImage(k);
  return <img loading="lazy" src={image.url} alt={image.alt} className="mt-8 h-auto w-full rounded-[10px]" />;
}
function Sample({ to, label = 'READ MORE' }: { to: string; label?: string }) {
  return <Link to={to} className="accent-link mt-8 inline-block max-w-full leading-relaxed">{label}</Link>;
}
function Section({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return <section id={id} className="mx-auto mb-14 max-w-[720px] scroll-mt-32 md:mb-20"><SectionDivider /><h2 className="card-title">{title}</h2>{subtitle && <p className="subsection-title mt-4">{subtitle}</p>}<div className="essay-prose mt-6 space-y-5">{children}</div></section>;
}

export default function OriginMarkets() {
  const overview = { ...project, reflection: undefined, contribution: '', sections: [], sectionNavigation: [
    { label: 'Overview', id: 'overview' }, { label: 'Challenge', id: 'challenge' }, { label: 'Products', id: 'products' },
    { label: 'Design Process', id: 'design-process-overview' }, { label: 'Design System', id: 'design-system-overview' }, { label: 'Outcomes', id: 'outcomes' },
  ] };
  const body = <>
    <Section id="challenge" title="Bringing simplicity to a complex industry">
      <p>Origin connects the different participants involved in bond issuance, providing tools to simplify workflows, improve communication and automate manual processes.</p>
      <p>The platform serves four main audiences, each with distinct needs and responsibilities.</p>
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-5">{audiences.map(([label, text]) => <p key={label}><strong className="font-semibold">{label}</strong> – {text}</p>)}</div>
        <img loading="lazy" src={projectImage('origin-audience-2').url} alt={projectImage('origin-audience-2').alt} className="h-auto w-full rounded-[10px]" />
      </div>
    </Section>
    <Section id="products" title="Four products, one institutional workflow">
      <p>As we learned more about our users, we focused on delivering polished, high-quality designs and interactions across the platform. Each product evolved through continuous iteration and careful evaluation.</p>
      {products.map(item => <div key={item.name} className={`grid gap-5 pt-4 md:items-start md:gap-7 ${item.image ? 'md:grid-cols-[minmax(0,1fr)_220px]' : ''}`}><div><h3 className="label">{item.name}</h3><p className="mt-3">{item.text}</p></div>{item.image && <img loading="lazy" src={projectImage(item.image).url} alt={projectImage(item.image).alt} className="h-auto w-full max-w-[220px] rounded-[10px]" />}</div>)}
      <Sample to="/work/origin-markets/gallery" label="SEE SAMPLE WORK" />
    </Section>
    <Section id="design-process-overview" title="A design process for an agile team">
      <div className="pt-4"><h3 className="label">Continuous improvements</h3><p className="mt-3">Small changes removed unnecessary steps, reduced visual noise and moved legacy features into Morpho, our new UI framework. I regularly reviewed existing workflows and worked with product managers, business and engineering to identify and prioritise opportunities.</p></div>
      <div className="pt-4"><h3 className="label">Complex features</h3><p className="mt-3">Workshops with business, product and engineering helped define problems and explore solutions. Research and planning led into UX exploration and UI design, with prototypes and customer feedback shaping each iteration before development.</p></div>
      <p className="pt-4">The approach encouraged continuous feedback, collaboration and iteration, rather than treating design as a one-off stage before development.</p>
      <Sample to="/work/origin-markets/design-process" />
    </Section>
    <Section id="design-system-overview" title="A design system for a Fintech Startup">
      <Link to="/work/origin-markets/design-system" className="editorial-card group block min-w-0 overflow-hidden">
        <div className="aspect-[16/10] overflow-hidden bg-muted">
          <img loading="lazy" src={projectImage('origin-morpho').url} alt={projectImage('origin-morpho').alt} className="block h-full w-full object-cover object-top" />
        </div>
        <div className="p-6 md:p-8">
          <h3 className="card-title">Morpho</h3>
          <p className="mt-4 max-w-lg body-copy text-muted-foreground">Evolving the visual language, creating reusable interface components and bringing existing features into a more consistent and scalable framework.</p>
          <p className="accent-link mt-6">Read case study <span className="arrow-nudge">→</span></p>
        </div>
      </Link>
    </Section>
  </>;
  const meta = caseStudyMeta(project);
  return <><Seo title={meta.title} description={meta.description} path="/work/origin-markets" ogType={meta.ogType} /><CaseStudy project={overview} body={body} introParagraphs={intro} facts={facts} minimalFrame /></>;
}
