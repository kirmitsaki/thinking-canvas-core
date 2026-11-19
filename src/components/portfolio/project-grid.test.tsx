import { cleanup, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { getProject } from '@/data/projects';
import { ProjectCard, cardYears } from './project-grid';

vi.mock('@/data/projects', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/data/projects')>();
  return { ...actual, projectImage: () => ({ url: '/company-logo.svg', alt: 'Company logo' }) };
});

afterEach(cleanup);

const card = (slug: string) =>
  render(
    <MemoryRouter>
      <ProjectCard project={getProject(slug)} />
    </MemoryRouter>,
  );

describe('case-study card body', () => {
  const project = getProject('origin-markets');

  it('shows only the years and the title, with the logo on the image', () => {
    const { container } = card('origin-markets');

    const media = container.querySelector('.case-study-card-media');
    expect(media?.querySelector('img.card-logo')).not.toBeNull();

    const body = container.querySelector('.card-body');
    expect(body?.textContent).not.toContain(project.name);
    expect(body?.textContent).toContain(cardYears(project.dates));
    expect(body?.textContent).toContain(project.cardTitle ?? '');
  });

  it('keeps the company name on the logo only, for the hover label', () => {
    const { container } = card('origin-markets');

    const label = container.querySelector('.card-logo-name');
    expect(label?.textContent).toBe('Origin Markets');
    expect(container.querySelector('.card-logo-wrap')?.contains(label ?? null)).toBe(true);
  });

  it('labels the Elemental Concept logos with Elemental Concept', () => {
    for (const slug of ['aladdin', 'corresilience']) {
      const { container, unmount } = card(slug);
      expect(container.querySelector('.card-logo-name')?.textContent).toBe('Elemental Concept');
      unmount();
      cleanup();
    }
  });
});
