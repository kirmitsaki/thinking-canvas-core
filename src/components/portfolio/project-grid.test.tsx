import { cleanup, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { getProject } from '@/data/projects';
import { ProjectCard } from './project-grid';

vi.mock('@/data/projects', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/data/projects')>();
  return { ...actual, projectImage: () => ({ url: '/company-logo.svg', alt: 'Company logo' }) };
});

afterEach(cleanup);

describe('case-study card logo', () => {
  const project = getProject('origin-markets');

  it('sits inside the card image, not in the row with the years', () => {
    const { container } = render(
      <MemoryRouter>
        <ProjectCard project={project} />
      </MemoryRouter>,
    );

    const media = container.querySelector('.case-study-card-media');
    const logo = media?.querySelector('img.card-logo');
    expect(logo).not.toBeNull();

    const years = container.querySelector('.card-years');
    expect(years).not.toBeNull();
    expect(years?.parentElement?.querySelector('img')).toBeNull();
    expect(years?.parentElement?.textContent).toContain(project.name);
  });
});
