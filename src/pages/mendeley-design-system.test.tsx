import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import MendeleyDesignSystem from '@/pages/MendeleyDesignSystem';
import { snippets } from '@/data/snippets';

afterEach(cleanup);

const patternLibrary = snippets.find(snippet => snippet.to === '/work/mendeley#design-system');

describe('Reference Manager 2.0 snippet', () => {
  it('uses the supplied title and subtitle in the modal header', () => {
    render(<MendeleyDesignSystem />);
    expect(screen.getByRole('heading', { level: 1, name: 'Reference Manager 2.0' })).toBeInTheDocument();
    expect(screen.getByText('The UI Pattern Library and reusable Sketch components for Reference Manager.')).toBeInTheDocument();
  });

  it('renders every supplied section title in order', () => {
    render(<MendeleyDesignSystem />);
    const titles = screen.getAllByRole('heading', { level: 2 }).map(heading => heading.textContent);
    expect(titles).toEqual(['Overview', 'Shared components', 'Documentation', 'Accessibility', 'Maintaining the system']);
  });

  it('shows the same title and subtitle on the Portfolio snippet card', () => {
    expect(patternLibrary?.name).toBe('Reference Manager 2.0');
    expect(patternLibrary?.description).toBe('The UI Pattern Library and reusable Sketch components for Reference Manager.');
  });
});
