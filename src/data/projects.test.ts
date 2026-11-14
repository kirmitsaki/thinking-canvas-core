import { describe, it } from 'vitest';
import { strict as assert } from 'node:assert';
import { projects, projectsByYear, projectTags, projectFilters, projectMatchesFilter, projectSectionLabels, projectWorkAreas, getProject } from './projects';

describe('portfolio project dates from Rachel’s CV and brief', () => {
  const dates = [
    ['secure-code-warrior', 'Jan 2023 – Oct 2026'],
    ['origin-markets', 'Jan 2020 – Jan 2023'],
    ['mendeley', 'Jan 2019 – Jan 2020'],
    ['aladdin', 'Jul 2017 – Dec 2018'],
    ['corresilience', 'Jul 2017 – Dec 2018'],
    ['pawsquad', 'Nov 2015 – Jun 2017'],
    ['migreat', 'Jan 2014 – Sep 2015'],
    ['mds-quostar', '2015'], ['jobme', '2019'], ['meliniki', '2024'],
  ];
  for (const [slug, date] of dates) {
    it(`${slug} uses the supplied dates`, () => assert.equal(projects.find(project => project.slug === slug)?.dates, date));
  }
});

describe('work index ordering', () => {
  it('lists the main case studies first with Meliniki and JobMe last', () => {
    assert.deepEqual(projectsByYear.map(project => project.slug), ['secure-code-warrior', 'origin-markets', 'origin-design-process', 'origin-design-system', 'mendeley', 'aladdin', 'corresilience', 'pawsquad', 'mds-quostar', 'migreat', 'meliniki', 'jobme']);
  });
  it('includes every project exactly once', () => {
    assert.equal(projectsByYear.length, projects.length);
    assert.deepEqual([...projectsByYear].map(project => project.slug).sort(), projects.map(project => project.slug).sort());
  });
});

describe('work filters', () => {
  const withTag = (tag: string) => projectsByYear.filter(project => project.tags.includes(tag)).map(project => project.slug);
  it('Design Systems shows Secure Code Warrior, Origin and Mendeley', () => {
    assert.deepEqual(withTag('Design Systems'), ['secure-code-warrior', 'origin-markets', 'origin-design-system', 'mendeley']);
  });
  it('separates Product Identity from Brand', () => {
    assert.deepEqual(withTag('Product Identity'), ['secure-code-warrior']);
    assert.deepEqual(withTag('Brand'), ['aladdin', 'corresilience', 'pawsquad', 'migreat', 'meliniki', 'jobme']);
  });
  it('every project has at least one known tag', () => {
    for (const project of projects) {
      assert.ok(project.tags.length > 0, `${project.slug} has no tags`);
      for (const tag of project.tags) assert.ok(projectTags.includes(tag), `${project.slug} has unknown tag ${tag}`);
    }
  });
});

describe('industry, field and contribution taxonomy', () => {
  it('never uses dates as labels or filter options', () => {
    for (const project of projects) {
      assert.ok(![project.industry, project.field, ...project.tags].some(label => /\d{4}/.test(label)));
    }
    assert.ok(!projectFilters.some(label => /\d{4}/.test(label)));
  });
  it('keeps industry and field metadata out of section filters', () => {
    for (const label of ['Cybersecurity', 'Enterprise software', 'Wine', 'Mobile apps']) {
      assert.equal(projectFilters.includes(label), false);
      assert.equal(projectsByYear.some(project => projectMatchesFilter(project, label)), false);
    }
  });
  it('includes the requested SCW contributions', () => {
    const tags = getProject('secure-code-warrior').tags;
    for (const tag of ['Product Design', 'Product Identity', 'Vision', 'AI-assisted Prototyping', 'Design Systems', 'Accessibility']) assert.ok(tags.includes(tag));
  });
});

describe('shared case-study section filters', () => {
  it('groups Mendeley product areas under Products', () => {
    assert.deepEqual(projectSectionLabels(getProject('mendeley')), ['Overview', 'Challenge', 'Research', 'Products', 'Design system', 'Outcomes']);
  });
  it('omits Enquiries from MDS navigation and filters', () => {
    assert.deepEqual(projectSectionLabels(getProject('mds-quostar')), ['Overview', 'Structure', 'Interface']);
    assert.equal(projectMatchesFilter(getProject('mds-quostar'), 'Enquiries'), false);
  });
  it('uses Brand & Identity for all brand and styleguide anchors', () => {
    assert.deepEqual(projectsByYear.filter(project => projectMatchesFilter(project, 'Brand & Identity')).map(project => project.slug), ['secure-code-warrior', 'aladdin', 'corresilience', 'pawsquad', 'migreat', 'jobme']);
  });
  it('keeps Meliniki to Overview, Brief and Label design', () => {
    assert.deepEqual(projectSectionLabels(getProject('meliniki')), ['Overview', 'Brief', 'Label design']);
  });
  it('uses curated work areas for contribution filter options and matches', () => {
    assert.deepEqual(projectFilters, [...new Set(projectsByYear.flatMap(projectWorkAreas))]);
    assert.deepEqual(projectsByYear.filter(project => projectMatchesFilter(project, 'Design system')).map(project => project.slug), ['secure-code-warrior', 'origin-markets', 'mendeley']);
  });
  it('combines Products and Interface into one Interface work area', () => {
    assert.equal(projectFilters.includes('Products'), false);
    assert.deepEqual(projectsByYear.filter(project => projectMatchesFilter(project, 'Interface')).map(project => project.slug), ['secure-code-warrior', 'origin-markets', 'mendeley', 'aladdin', 'corresilience', 'pawsquad', 'mds-quostar', 'migreat']);
    assert.equal(projectWorkAreas(getProject('origin-markets')).filter(label => label === 'Interface').length, 1);
    assert.ok(projectSectionLabels(getProject('mendeley')).includes('Products'));
  });
  for (const label of ['Overview', 'Outcomes', 'Challenge', 'Structure', 'Brief']) {
    it(`${label} remains a section but is not a work-area filter`, () => {
      assert.ok(projectsByYear.some(project => projectSectionLabels(project).includes(label)));
      assert.equal(projectFilters.includes(label), false);
      assert.equal(projectsByYear.some(project => projectMatchesFilter(project, label)), false);
    });
  }
  it('replaces artwork-specific filters with Illustration for JobMe and Meliniki', () => {
    for (const label of ['Label design', 'Logo']) assert.equal(projectFilters.includes(label), false);
    assert.deepEqual(projectsByYear.filter(project => projectMatchesFilter(project, 'Illustration')).map(project => project.slug), ['secure-code-warrior', 'meliniki', 'jobme']);
    assert.ok(projectSectionLabels(getProject('jobme')).includes('Logo'));
    assert.ok(projectSectionLabels(getProject('meliniki')).includes('Label design'));
  });
});

describe('coming-soon case studies', () => {
  it('Accessibility labels and filtering apply to SCW, Origin and Mendeley only', () => {
    const expected = ['secure-code-warrior', 'origin-markets', 'mendeley'];
    assert.ok(projectFilters.includes('Accessibility'));
    assert.deepEqual(projectsByYear.filter(project => projectWorkAreas(project).includes('Accessibility')).map(project => project.slug), expected);
    assert.deepEqual(projectsByYear.filter(project => projectMatchesFilter(project, 'Accessibility')).map(project => project.slug), expected);
  });
  it('keeps Secure Code Warrior first under every available filter', () => {
    for (const filter of projectFilters) {
      assert.equal(projectMatchesFilter(getProject('secure-code-warrior'), filter), true);
      assert.equal(projectsByYear.filter(project => projectMatchesFilter(project, filter))[0]?.slug, 'secure-code-warrior');
    }
    assert.equal(projectMatchesFilter(getProject('secure-code-warrior'), 'Overview'), false);
  });
  it('marks Secure Code Warrior as coming soon', () => {
    assert.equal(getProject('secure-code-warrior').comingSoon, true);
  });
  it('keeps every other case study open', () => {
    assert.deepEqual(projects.filter(project => project.comingSoon).map(project => project.slug), ['secure-code-warrior']);
  });
});

describe('case-study destinations', () => {
  const destinations = [
    ['secure-code-warrior', 'Secure Code Warrior'],
    ['origin-markets', 'Origin Markets'],
    ['mendeley', 'Mendeley'],
    ['aladdin', 'Aladdin'],
    ['corresilience', 'CorResilience'],
    ['pawsquad', 'PawSquad'],
    ['migreat', 'Migreat'],
    ['mds-quostar', 'MDS Quostar'],
    ['jobme', 'JobMe'],
    ['meliniki', 'Meliniki'],
  ] as const;
  for (const [slug, name] of destinations) {
    it(`${slug} resolves to ${name} even when project order changes`, () => {
      const original = [...projects];
      try {
        projects.reverse();
        assert.equal(getProject(slug).name, name);
        assert.equal(getProject(slug).slug, slug);
      } finally {
        projects.splice(0, projects.length, ...original);
      }
    });
  }
});
