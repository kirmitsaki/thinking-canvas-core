import type { ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';
import Seo from '@/components/Seo';
import { getProject, caseStudyMeta, projectImage } from '@/data/projects';
import { CaseStudy } from '@/components/portfolio/case-study';
import { NdaNotice } from '@/components/portfolio/nda-notice';
import { SectionDivider } from '@/components/portfolio/section-divider';
import { CaseStudySnippetCard } from '@/components/portfolio/snippet-card';
import continuousImprovements from '@/assets/origin-continuous-improvements.webp';
import complexWorkflows from '@/assets/origin-complex-workflows.webp';

const project = getProject('origin-markets');

function emphasize(text: string): ReactNode {
  const phrases = [
    'over 100 borrowers, 20 major investment banks and nearly 700 professionals across 70 cities',
    'first in-house designer',
    'manual processes, fragmented communication and legacy software',
    'Some of the processes we thought were inefficient were actually essential.',
    'over 20 dealers and 90 issuers globally',
    'Customer feedback became part of how we developed the product.',
    'weekly product demos',
    'monthly workshops',
    'two complementary design approaches',
    'just enough structure',
    'without a shared reference point',
    'built once, used everywhere',
    'over 1,000 issuers',
    'structuring data at execution',
    'reducing manual processes and operational risk',
  ];
  const pattern = new RegExp(`(${phrases.join('|')})`, 'g');
  return text.split(pattern).map((part, index) => phrases.includes(part) ? <strong key={index}>{part}</strong> : part);
}

const intro = [
  'Origin Markets is a front-to-back digital platform bringing simplicity to the global debt capital markets. The platform served over 100 borrowers, 20 major investment banks, and nearly 700 professionals across 70 cities, covering the debt issuance lifecycle from pricing to settlement.',
].map(emphasize);
const facts = [
  { label: 'Role', value: 'Lead Product Designer' },
  { label: 'Tasks', value: 'Product design, Design system, Accessibility, Dashboards, Grids' },
  { label: 'Industry', value: 'Financial Technology · Debt Capital Markets' },
];

const products = [
  { name: 'Marketplace', paragraphs: ['Helping institutions identify issuance opportunities through a database of over 1,000 issuers.', 'The experience brought together consolidated funding levels, advanced filtering, cross-currency pricing and graphical analysis. This also included a redesign of the Funding Matrix, making large volumes of financial data easier to explore and work with.'] },
  { name: 'Documentation', paragraphs: ['Simplifying the drafting and collaboration of transaction documents for vanilla and structured notes.', 'A key part of the work was structuring data at execution, enabling downstream processes such as listing and instant ISIN generation. This helped connect documentation with the wider transaction lifecycle.'] },
  { name: 'Structured Notes', paragraphs: ['Automating the journey from termsheet generation through to post-trade operations.', 'The API-driven platform connected previously fragmented steps, reducing manual processes and operational risk.'] },
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
  const [params] = useSearchParams();
  const designSystem = (
    <Section id="design-system" title="Design system">
      <div className="origin-system-copy">
        <p className="body-copy text-muted-foreground">{emphasize('Before Morpho, every part of the platform had its own components, its own patterns, its own logic. Engineering was rebuilding the same things independently. Product was making decisions without a shared reference point.')}</p>
        <p className="body-copy text-muted-foreground">{emphasize('Morpho started small: the components used every day, built once, used everywhere. It grew into a full design system covering tokens, components, patterns, and documentation. By the time I left it was the foundation for everything the team built.')}</p>
      </div>
      <p className="origin-system-principle origin-wide">A design system is only as valuable as its adoption. Morpho worked because it was built with engineers, not for them.</p>
      <img loading="lazy" src={projectImage('origin-morpho').url} alt={projectImage('origin-morpho').alt} className="origin-wide h-auto w-full rounded-[10px]" />
    </Section>
  );
  if (params.get('snippet') === 'design-system') return <main className="origin-editorial mx-auto max-w-[960px] px-6 pb-16">{designSystem}</main>;
  const overview = {
    ...project,
    ndaNotice: false,
    reflection: { title: 'Reflections', paragraphs: [
      'Joining Origin as its first designer meant helping define what design could be in a business that hadn’t worked with an in-house design function before.',
      'I learned that introducing design is about making space for different perspectives, asking better questions and helping a team make decisions with a clearer understanding of the people using its products.',
      'I also learned that improving an established industry doesn’t always mean removing the old ways of working. Sometimes the most important part of the job is understanding why they exist in the first place.',
      'Over time, design became part of how Origin approached product development, not just how the finished product looked. That was perhaps the most meaningful change I helped make.',
    ] },
    contribution: '',
    sections: [],
    outcomesHeading: undefined,
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
      <Section id="challenge" title="Overview" heading="Introducing design to a growing fintech platform">
        <div className="space-y-6">
          <P>Origin was building a digital platform to modernise the debt issuance process, an industry still heavily reliant on manual processes, fragmented communication and legacy software.</P>
          <P>The ambition was significant. The platform connected over 100 borrowers, 20 major investment banks and nearly 700 professionals across 70 cities, supporting the entire debt issuance lifecycle, from pricing to settlement.</P>
          <P>I joined as the first in-house designer. There was no established design function, no shared design system and no consistent design process. The product had been growing quickly, and it needed stronger foundations to support its next stage.</P>
          <P>My role went beyond designing interfaces. I introduced design as a discipline, established closer collaboration between Business, Product and Engineering, and helped create the processes and foundations needed to scale the product.</P>
          <P>Alongside this, I worked across three interconnected products, helping simplify complex financial workflows and bring a more consistent experience to the platform.</P>
        </div>
      </Section>

      <Section id="discovery" title="Discovery" heading="The initial assumption was that the biggest opportunity was efficiency">
        <div className="space-y-6">
          <P>Debt issuance involved a huge amount of manual work. Information moved between spreadsheets, emails and different systems. Processes were fragmented, and even relatively straightforward tasks could involve unnecessary steps and back-and-forth.</P>
          <P>It seemed obvious where to start: remove friction, automate repetitive tasks and make workflows faster.</P>
          <P>But the more time we spent with customers, the more we realised the problem was more nuanced.</P>
        </div>
        <div className="origin-research-block">
          <h3 className="subsection-title">Not every manual step was a bad one</h3>
          <div className="space-y-6">
            <P>We started working closely with dealers, borrowers and investment banks to understand how they actually worked. Not just what they told us in meetings, but what happened during a real transaction.</P>
            <P>Something unexpected emerged. Some of the processes we thought were inefficient were actually essential.</P>
            <P>A phone call before a major transaction wasn’t simply another step to eliminate. It was how two institutions confirmed that the other party had received the information, understood it and was ready to proceed.</P>
          </div>
        </div>
        <blockquote className="pull-quote origin-wide">Trust between institutions has to be produced. You cannot automate it out of existence without replacing it with something equally credible.</blockquote>
        <div className="space-y-6">
          <P>That changed how we thought about the product.</P>
          <P>We weren’t simply trying to make existing workflows faster. We needed to understand which parts could be automated, which needed to remain human, and how technology could make the relationship between them work better.</P>
        </div>
      </Section>

      <Section id="research" title="Research" heading="Understanding the people behind the transactions">
        <div className="space-y-6">
          <P>We built our understanding of the market through continuous customer collaboration.</P>
          <P>I worked with dealers, borrowers and investment banks to understand their daily workflows, where information was getting lost, what created friction and where the platform could genuinely add value.</P>
          <P>Over two years of platform development, this grew into a substantial body of customer insight, involving over 20 dealers and 90 issuers globally.</P>
          <P>Research wasn’t something that happened once at the beginning of a project. Customer feedback became part of how we developed the product. New features were shared with customers as soon as they were released, giving us an opportunity to learn, validate and improve.</P>
          <P>This was particularly important in an industry where workflows were complex, established and often very different between institutions.</P>
          <P>The closer we worked with customers, the better we understood not just what they needed, but why they worked the way they did.</P>
        </div>
      </Section>

      <Section id="process" title="Design practice" heading="Changing how we worked">
        <div className="space-y-6">
          <P>Origin was a small, fast-paced startup. Business, Product and Engineering worked closely together, but there wasn’t an established design process or a dedicated design function.</P>
          <P>As the first in-house designer, I wanted design to be part of the conversation from the beginning, not something brought in once decisions had already been made.</P>
          <P>I introduced a more structured, collaborative way of working across the teams. This included discovery workshops, prioritisation sessions with Product Managers, regular design reviews and a clearer process for taking ideas from exploration through to development.</P>
        </div>
        <div className="origin-research-block">
          <h3 className="subsection-title">Creating a shared rhythm</h3>
          <div className="space-y-6">
            <P>I introduced weekly product demos, giving everyone visibility of what was being built and an opportunity to share feedback.</P>
            <P>Alongside this, I organised monthly workshops to review the existing platform, identify friction in current workflows and uncover opportunities for improvement.</P>
            <P>Ideas came from across the business, product and engineering teams. Bringing these perspectives together helped us challenge assumptions, evaluate opportunities and make better decisions before committing development resources.</P>
          </div>
        </div>
        <div className="origin-research-block">
          <h3 className="subsection-title">Two ways of moving the product forward</h3>
          <P>Not every problem needed the same level of exploration. I established two complementary design approaches.</P>
        </div>
        <div className="origin-process-paths origin-wide">
        <div className="space-y-5">
        <img loading="lazy" src={continuousImprovements} width={1440} height={1024} alt="Continuous improvements: review workflows, prioritise with PMs, share designs early, then move into Morpho." className="h-auto w-full" />
        <h3 className="subsection-title">Continuous improvements</h3>
        <P>I regularly reviewed existing workflows, looking for unnecessary steps, visual noise and opportunities to make the experience clearer. Working with Product Managers, we prioritised improvements, shared designs early and gradually moved legacy features into our new UI framework, Morpho.</P>
        </div>
        <div className="space-y-5">
        <img loading="lazy" src={complexWorkflows} width={1440} height={1024} alt="Exploring complex workflows: workshops, research and planning, UX exploration, UI design, prototypes, then customer feedback." className="h-auto w-full" />
        <h3 className="subsection-title">Exploring complex workflows</h3>
        <P>Larger features needed a more considered approach. I brought Business, Product and Engineering together in workshops to understand the problem, challenge assumptions and explore potential solutions.</P>
        <P>From there, we moved through research, planning and UX exploration into detailed UI design. Prototypes and customer feedback shaped each iteration before development began.</P>
        </div>
        </div>
        <P>The goal wasn’t to introduce process for its own sake. It was to create just enough structure to help a growing team make better decisions, collaborate more effectively and keep the product moving.</P>
      </Section>

      {designSystem}

      <Section id="products" title="Products" heading="Three products, one connected workflow" lede="The platform covered different stages of the debt issuance lifecycle. Each product addressed a different set of challenges, but they all needed to work together as part of a connected experience.">
        <div className="origin-product-cards origin-product-cards-2up origin-wide">
          {products.map((item, index) => (
            <article key={item.name} className="origin-product-card editorial-card">
              <p className="label-quiet">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="subsection-title">{item.name}</h3>
              {item.paragraphs.map((text) => <p key={text} className="body-copy">{emphasize(text)}</p>)}
            </article>
          ))}
        </div>
        <P>Together, the three products helped bring more of the issuance lifecycle into one connected digital platform.</P>
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
