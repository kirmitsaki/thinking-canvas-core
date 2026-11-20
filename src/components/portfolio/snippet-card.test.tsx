import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { SnippetCard } from './snippet-card';
import { snippets } from '@/data/snippets';

vi.mock('@/data/projects', () => ({
  projectImage: () => ({ url: '/placeholder.svg', alt: '' }),
  getProject: () => ({ logo: undefined }),
}));

const snippet = snippets.find((item) => item.to === '/work/origin-markets/gallery')!;

afterEach(cleanup);

describe('snippet card description', () => {
  it('shows the description clamped to three rows', () => {
    render(<SnippetCard snippet={snippet} onOpen={() => {}} />);
    const description = screen.getByText(snippet.description);
    expect(description.className).toContain('line-clamp-3');
  });

  it('reveals the full text in a note only when the description is cut short', () => {
    render(<SnippetCard snippet={snippet} onOpen={() => {}} />);
    expect(document.querySelector('.snippet-note')).toBeNull();
    cleanup();

    const originalScroll = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollHeight');
    const originalClient = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'clientHeight');
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', { configurable: true, value: 104 });
    Object.defineProperty(HTMLElement.prototype, 'clientHeight', { configurable: true, value: 62 });
    render(<SnippetCard snippet={snippet} onOpen={() => {}} />);
    const note = document.querySelector('.snippet-note');
    expect(note?.textContent).toBe(snippet.description);
    expect(note?.getAttribute('aria-hidden')).toBe('true');
    if (originalScroll) Object.defineProperty(HTMLElement.prototype, 'scrollHeight', originalScroll);
    else delete (HTMLElement.prototype as unknown as Record<string, unknown>).scrollHeight;
    if (originalClient) Object.defineProperty(HTMLElement.prototype, 'clientHeight', originalClient);
    else delete (HTMLElement.prototype as unknown as Record<string, unknown>).clientHeight;
  });
});
