import { cleanup, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeAll, describe, expect, it } from 'vitest';
import { CaseStudy } from '@/components/portfolio/case-study';
import { projects } from '@/data/projects';

beforeAll(() => {
  // jsdom has no ResizeObserver; the sticky header hook only measures layout.
  if (!('ResizeObserver' in globalThis)) {
    (globalThis as { ResizeObserver?: unknown }).ResizeObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    };
  }
});

afterEach(cleanup);

const project = (slug: string) => projects.find((entry) => entry.slug === slug)!;

const renderStudy = (slug: string) =>
  render(
    <MemoryRouter>
      <CaseStudy project={project(slug)} />
    </MemoryRouter>,
  );

describe('Outcomes presentation', () => {
  it('shows Mendeley outcomes as stat cards with the beta figures', () => {
    const { container } = renderStudy('mendeley');
    const grid = container.querySelector('dl.outcome-stats--cards');
    expect(grid).not.toBeNull();
    expect(grid?.querySelectorAll('div.editorial-card')).toHaveLength(4);
    expect([...(grid?.querySelectorAll('dt') ?? [])].map((dt) => dt.textContent)).toEqual([
      '+120k',
      '1M+',
      '+1M',
    ]);
    expect(grid?.querySelector('.outcome-closing-card')?.textContent).toContain(
      'notoriously resistant to switching tools',
    );
    expect(grid?.querySelector('.outcome-stat-card--wide')?.textContent).toContain('+1M');
    expect(container.querySelector('ul.editorial-outcomes--cards')).toBeNull();
  });

  it('shows Origin outcomes as cards', () => {
    const { container } = renderStudy('origin-markets');
    const grid = container.querySelector('dl.outcome-stats--cards');
    expect(grid).not.toBeNull();
    expect(grid?.querySelectorAll('div.editorial-card')).toHaveLength(6);
    expect(grid?.querySelector('.outcome-stat-card--wide')).toBeNull();
  });

  it('keeps the hairline list on other case studies', () => {
    const { container } = renderStudy('pawsquad');
    expect(container.querySelector('ul.editorial-outcomes')).not.toBeNull();
    expect(container.querySelector('.editorial-outcomes--cards')).toBeNull();
    expect(container.querySelector('li.editorial-card')).toBeNull();
  });
});
