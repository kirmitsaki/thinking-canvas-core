import { describe, it } from 'vitest';
import { strict as assert } from 'node:assert';
import { getOriginStudy, originStudyGroups } from './origin-studies';
import { getProject } from './projects';

describe('Origin study organisation', () => {
  it('combines the design process and fintech research into one Foundations study', () => {
    assert.deepEqual(originStudyGroups[0]?.studies.map(study => study.slug), ['design-process', 'design-system']);
    assert.deepEqual(originStudyGroups[0]?.studies[0]?.sectionIds, ['process-purpose', 'audience', 'design-process', 'development-process', 'research', 'challenge']);
  });
  it('groups Documentation and Funding Matrix under Products', () => {
    assert.deepEqual(originStudyGroups[1]?.studies.map(study => study.slug), ['documentation', 'funding-matrix-redesign']);
  });
  it('tells the Funding Matrix story from challenge to results', () => {
    assert.deepEqual(originStudyGroups[1]?.studies[1]?.sectionIds, ['interface', 'role', 'funding-research', 'solution', 'search', 'matrix', 'performance', 'results']);
  });
  it('assigns every detailed section once and keeps the product family in the overview', () => {
    const ids = originStudyGroups.flatMap(group => group.studies.flatMap(study => study.sectionIds));
    assert.equal(new Set(ids).size, 21);
    assert.deepEqual([...ids].sort(), getProject('origin-markets').sections.filter(section => section.id !== 'products' && section.id !== 'ecosystem').map(section => section.id).sort());
  });
  it('resolves original section objects rather than duplicating or rewriting their content', () => {
    for (const group of originStudyGroups) for (const item of group.studies) {
      const study = getOriginStudy(item.slug);
      assert.ok(study);
      study.sections.forEach((section, index) => assert.equal(section, getProject('origin-markets').sections.find(original => original.id === item.sectionIds[index])));
    }
    assert.equal(getOriginStudy('unknown'), undefined);
  });
});