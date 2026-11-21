import type { ReactNode } from 'react';
import Seo from '@/components/Seo';
import { getProject, caseStudyMeta } from '@/data/projects';
import { CaseStudy } from '@/components/portfolio/case-study';
import { NdaNotice } from '@/components/portfolio/nda-notice';
import { SectionDivider } from '@/components/portfolio/section-divider';
import { CaseStudySnippetCard } from '@/components/portfolio/snippet-card';
import continuousImprovements from '@/assets/origin-continuous-improvements.webp';
import complexWorkflows from '@/assets/origin-complex-workflows.webp';

const project = getProject('origin-markets');

function emphasize(text: string): ReactNode {
  const phrases = [
    'over 100 borrowers, 20 major investment banks and nearly 700 professionals',
    'first in-house designer',
    'manual processes and fragmented systems',
    'more than 20 dealers and 90 issuers globally',
    'Customer feedback became part of the development process',
    'weekly product demos',
    'two complementary ways of working',
    'over 1,000 issuers',
    'reducing manual processes and operational risk',
  ];
  const pattern = new RegExp(`(${phrases.join('|')})`, 'g');
  return text.split(pattern).map((part, index) => phrases.includes(part) ? <strong key={index}>{part}</strong> : part);
}

const intro = [
  'Origin Markets was building a digital platform to modernise debt capital markets, an industry still heavily reliant on manual processes and fragmented systems.',
].map(emphasize);
const facts = [
  { label: 'Role', value: 'Lead Product Designer' },
  { label: 'Tasks', value: 'Product design, Design system, Accessibility, Dashboards, Grids' },
  { label: 'Industry', value: 'Financial Technology · Debt Capital Markets' },
];

const products = [
  { name: 'Marketplace', paragraphs: ['Helping institutions discover issuance opportunities through a database of over 1,000 issuers, with advanced filtering, pricing analysis and an improved Funding Matrix.'] },
  { name: 'Documentation', paragraphs: ['Simplifying transaction documentation through structured data, collaborative workflows and connections to downstream processes.'] },
  { name: 'Structured Notes', paragraphs: ['Automating the journey from termsheet generation through to post-trade operations, reducing manual processes and operational risk.'] },
];

const P = ({ children }: { children: string }) => <p className="body-copy text-muted-foreground">{emphasize(children)}</p>;


function Section({ id, title, heading, lede, children }: { id: string; title: string; heading?: string; lede?: string; children?: ReactNode }) {
  return (
    <section id={id} className="origin-section scroll-mt-32">
      <SectionDivider />
      <div className="origin-section-grid">
        <div className="origin-section-heading">
          <h2 className="section-title">{title}</h2>
          {heading && <p className="subsection-title">{heading}</p>}
        </div>
        {lede && <p className="body-copy text-muted-foreground">{emphasize(lede)}</p>}
        {children}
      </div>
    </section>
  );
}

export default function OriginMarkets() {
  const designSystem = (
    <Section id="design-system" title="Design system" heading="One foundation for a growing platform">
      <div className="origin-system-copy">
        <P>I introduced Morpho, a shared design system built in collaboration with Engineering.</P>
        <P>What started as a small component library evolved into a system of tokens, components, patterns and documentation.</P>
        <P>Morpho became the foundation for the entire platform, bringing consistency to the experience and scalability to development.</P>
      </div>
      <div className="origin-wide"><CaseStudySnippetCard to="/work/origin-markets#design-system" /></div>
    </Section>
  );
  const overview = {
    ...project,
    ndaNotice: false,
    reflection: { title: 'Reflections', subtitle: 'Building more than a product', paragraphs: [
      'My biggest contribution at Origin was helping establish design as part of how the business built products.',
      "I learned that modernising an established industry isn't always about replacing existing processes. It's about understanding why they exist, knowing where technology can help and bringing people along in the process.",
    ] },
    contribution: '',
    sections: [],
    outcomesHeading: 'A more connected approach to debt issuance',
    outcomesIntro: 'The work helped evolve Origin into a platform supporting real-world digital bond issuance.',
    outcomeStats: [
      { value: '70%+', label: 'Faster loading', text: 'Reduction in Funding Matrix loading time.' },
      { value: '5', label: 'Digital transactions', text: 'Including the first fully digitally issued bond.' },
      { value: '700', label: 'Global professionals', text: 'Across 70 cities.' },
      { value: '3 years', label: 'Industry recognition', text: 'Best Fintech in the field, GlobalCapital.' },
    ],
    outcomesClosing: '100+ borrowers and 20 major investment banks connected through the platform.',
    outcomesClosingCard: true,
    sectionNavigation: [
      { label: 'Overview', id: 'challenge' },
      { label: 'Discovery', id: 'discovery' },
      { label: 'Research', id: 'research' },
      { label: 'Design practice', id: 'process' },
      { label: 'Design system', id: 'design-system' },
      { label: 'Products', id: 'products' },
      { label: 'Outcomes', id: 'outcomes' },
    ],
  };

  const body = (
    <>
      <Section id="challenge" title="Overview" heading="Bringing design to a complex financial industry">
        <div className="space-y-6">
          <P>Origin Markets was building a digital platform to modernise debt capital markets, an industry still heavily reliant on manual processes and fragmented systems.</P>
          <P>Serving over 100 borrowers, 20 major investment banks and nearly 700 professionals, the platform aimed to connect the entire debt issuance lifecycle, from pricing to settlement.</P>
          <P>I joined as the first in-house designer, introducing design practices, building a shared design system and shaping experiences across three interconnected products.</P>
        </div>
      </Section>

      <Section id="discovery" title="Discovery" heading="Not everything needed to be automated">
        <div className="space-y-6">
          <P>Debt issuance involved countless manual processes. Our initial assumption was that the biggest opportunity was to remove friction and make workflows faster.</P>
          <P>But conversations with customers revealed something unexpected.</P>
          <P>Some manual interactions were essential. A phone call before a major transaction, for example, wasn't inefficiency. It was how institutions established trust and confirmed they were ready to proceed.</P>
          <P>We realised the challenge wasn't simply automating existing workflows. It was understanding what should be automated and what needed to remain human.</P>
        </div>
      </Section>

      <Section id="research" title="Research" heading="Understanding the people behind the transactions">
        <div className="space-y-6">
          <P>I worked closely with dealers, borrowers and investment banks to understand their workflows, challenges and expectations.</P>
          <P>Over two years, we collaborated with more than 20 dealers and 90 issuers globally.</P>
          <P>Customer feedback became part of the development process, helping us validate new features, challenge assumptions and continuously improve the platform.</P>
        </div>
      </Section>

      <Section id="process" title="Design practice" heading="Making design part of how we worked">
        <div className="space-y-6">
          <P>As the first designer, I introduced a more collaborative approach across Business, Product and Engineering.</P>
          <P>This included discovery workshops, prioritisation sessions, weekly product demos and regular design reviews.</P>
          <P>I established two complementary ways of working:</P>
        </div>
        <div className="origin-process-paths origin-wide">
          <div className="space-y-5">
            <img loading="lazy" src={continuousImprovements} width={1440} height={1024} alt="Continuous improvements: review workflows, prioritise with PMs, share designs early, then move into Morpho." className="h-auto w-full" />
            <h3 className="subsection-title">Continuous improvement</h3>
            <P>Reviewing existing workflows, prioritising friction points and gradually improving the experience.</P>
          </div>
          <div className="space-y-5">
            <img loading="lazy" src={complexWorkflows} width={1440} height={1024} alt="Exploring complex workflows: workshops, research and planning, UX exploration, UI design, prototypes, then customer feedback." className="h-auto w-full" />
            <h3 className="subsection-title">New product exploration</h3>
            <P>Bringing teams together to research, explore concepts, prototype and validate more complex features with customers.</P>
          </div>
        </div>
        <P>The goal was to make design part of decision-making, not just the final delivery.</P>
      </Section>

      {designSystem}

      <Section id="products" title="Products" heading="Three products, one connected workflow" lede="I worked across three products covering different stages of the debt issuance lifecycle.">
        <div className="origin-product-cards origin-product-cards-2up origin-wide">
          {products.map((item, index) => (
            <article key={item.name} className="origin-product-card editorial-card">
              <p className="label-quiet">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="subsection-title">{item.name}</h3>
              {item.paragraphs.map((text) => <p key={text} className="body-copy">{emphasize(text)}</p>)}
            </article>
          ))}
        </div>
        <div className="origin-wide">
          <CaseStudySnippetCard to="/work/origin-markets/gallery" />
        </div>
      </Section>
    </>
  );

  const meta = caseStudyMeta(project);
  return (
    <>
      <Seo title={meta.title} description={meta.description} path="/work/origin-markets" ogType={meta.ogType} />
      <div className="origin-editorial">
        <CaseStudy project={overview} body={body} introParagraphs={intro} facts={facts} minimalFrame outcomesTitle="Outcomes" heroNotice={<NdaNotice />} />
      </div>
    </>
  );
}
