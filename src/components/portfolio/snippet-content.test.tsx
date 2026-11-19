import { Suspense } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SnippetContent } from './snippet-content';

vi.mock('@/pages/OriginMorpho', () => ({ default: () => <div data-testid="independent-origin-story" /> }));
vi.mock('@/pages/MendeleyDesignSystem', () => ({ default: () => <div data-testid="independent-mendeley-story" /> }));

describe('self-contained design-system snippets', () => {
  it('opens Morpho as its own story rather than the Origin overview', async () => {
    render(<MemoryRouter initialEntries={['/work/origin-markets?snippet=design-system']}><Suspense><SnippetContent /></Suspense></MemoryRouter>);
    expect(await screen.findByTestId('independent-origin-story')).toBeInTheDocument();
  });
  it('opens the Mendeley pattern library as its own story rather than a filtered case-study section', async () => {
    render(<MemoryRouter initialEntries={['/work/mendeley?snippet=design-system']}><Suspense><SnippetContent /></Suspense></MemoryRouter>);
    expect(await screen.findByTestId('independent-mendeley-story')).toBeInTheDocument();
  });
});