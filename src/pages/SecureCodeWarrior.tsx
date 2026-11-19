import type { ReactNode } from 'react';
import Seo from '@/components/Seo';
import { getProject, caseStudyMeta } from '@/data/projects';
import { snippets } from '@/data/snippets';
import { secondarySnippetFor } from '@/data/secondary-snippets';
import { SnippetCard } from '@/components/portfolio/snippet-card';
import { useSnippetModal } from '@/components/portfolio/snippet-context';
import { CaseStudy } from '@/components/portfolio/case-study';

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

const facts = [
  { label: 'Role', value: 'Head of Product Design' },
  { label: 'Tasks', value: 'Product vision, Design system, Accessibility, AI workflows, Team leadership' },
];

const scwSnippets = snippets.filter(snippet => snippet.project === 'Secure Code Warrior');

export default function SecureCodeWarrior() {
  const open = useSnippetModal();
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
    sectionNavigation: [],
  };

  const body = (
    <div className="snippet-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {scwSnippets.map(snippet => (
        <SnippetCard key={snippet.to} snippet={snippet} onOpen={() => {
          const target = secondarySnippetFor(snippet.to);
          if (target) open(target);
        }} />
      ))}
    </div>
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
