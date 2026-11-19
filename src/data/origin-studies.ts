import { getProject } from './projects';

export const originStudyGroups = [
  { title: 'Foundations', studies: [
    { slug: 'design-process', name: 'Design process in Fintech', sectionIds: ['process-purpose', 'audience', 'design-process', 'development-process', 'research', 'challenge'] },
  ] },
  { title: 'Products', studies: [
    { slug: 'documentation', name: 'Documentation', sectionIds: ['documentation'] },
    { slug: 'funding-matrix-redesign', name: 'Funding Matrix redesign', sectionIds: ['interface', 'role', 'funding-research', 'solution', 'search', 'matrix', 'performance', 'results'] },
  ] },
];

const fundingMatrixReflection = {
  title: 'Findings',
  paragraphs: [
    'The most used feature in a product accumulates complexity over time not because it is planned that way, but because every addition made sense to someone in the moment. Nobody steps back to ask whether the whole still makes sense until the thing becomes genuinely painful to use.',
    'Professional tools have different usability requirements than consumer products. Density is not the enemy. Professionals need to see as much information as possible at once, the way a trader needs to see a Bloomberg terminal. Simplifying for simplicity’s sake would have made the tool feel less serious, not easier to use. The goal was to make the complexity navigable, not to eliminate it.',
    'The 70% loading time improvement mattered as much as the visual redesign. In financial markets, speed is trust. A slow tool feels unreliable before the user has clicked anything.',
  ],
};

export function getOriginStudy(slug: string) {
  const study = originStudyGroups.flatMap(group => group.studies).find(item => item.slug === slug);
  if (!study) return undefined;
  const project = getProject('origin-markets');
  const sections = study.sectionIds.map(id => {
    const section = project.sections.find(item => item.id === id);
    if (!section) throw new Error(`Missing Origin section: ${id}`);
    return section;
  });
  const reflection = slug === 'design-process' ? project.reflection : slug === 'funding-matrix-redesign' ? fundingMatrixReflection : undefined;
  return { ...study, sections, reflection, displayTitle: study.name, subtitle: slug === 'design-process' ? 'A two-track design process connecting research, product design and development.' : slug === 'documentation' ? 'Simplifying transaction documents and collaboration across the issuance lifecycle.' : 'Making complex financial data easier to explore and work with.', disciplines: undefined };
}