import { cleanup, render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';
import OriginGallery from '@/pages/OriginGallery';
import { snippets } from '@/data/snippets';

afterEach(cleanup);

// jsdom has no ResizeObserver, which the page's header-height hook needs.
class ResizeObserverStub { observe() {} unobserve() {} disconnect() {} }
globalThis.ResizeObserver ??= ResizeObserverStub as unknown as typeof ResizeObserver;

const sampleInterface = snippets.find(snippet => snippet.to === '/work/origin-markets/gallery');

describe('Origin sample interface snippet', () => {
  it('uses the supplied title and subtitle in the modal header, with no intro paragraph', () => {
    render(<HelmetProvider><MemoryRouter initialEntries={['/work/origin-markets/gallery?snippet=gallery']}><OriginGallery /></MemoryRouter></HelmetProvider>);
    expect(screen.getByRole('heading', { level: 1, name: 'Across the Origin platform' })).toBeInTheDocument();
    expect(screen.getByText('A selection of product screens showcasing dashboards, market data, pricing and documentation workflows.')).toBeInTheDocument();
    expect(screen.queryByText("A selection of screens, showcasing dashboards, market data, pricing and documentation workflows across Origin's three products.")).not.toBeInTheDocument();
  });

  it('shows the same title and subtitle on the Portfolio snippet card', () => {
    expect(sampleInterface?.name).toBe('Across the platform');
    expect(sampleInterface?.description).toBe('A selection of product screens showcasing dashboards, market data, pricing and documentation workflows.');
  });
});
