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

describe('case-study card body', () => {
  const project = getProject('origin-markets');

  it('shows only the years and the title, with the logo on the image', () => {
    const { container } = render(
      <MemoryRouter>
        <ProjectCard project={project} />
      </MemoryRouter>,
    );

    const media = container.querySelector('.case-study-card-media');
    expect(media?.querySelector('img.card-logo')).not.toBeNull();

    const body = container.querySelector('.card-body');
    expect(body?.textContent).not.toContain(project.name);
    expect(body?.textContent).toContain(cardYears(project.dates));
    expect(body?.textContent).toContain(project.cardTitle ?? '');
  });

  it('keeps the company name on the logo only, for the hover label', () => {
    const { container } = render(
      <MemoryRouter>
        <ProjectCard project={project} />
      </MemoryRouter>,
    );

    const label = container.querySelector('.card-logo-name');
    expect(label?.textContent).toBe(project.name);
    expect(container.querySelector('.card-logo-wrap')?.contains(label ?? null)).toBe(true);
  });
});
