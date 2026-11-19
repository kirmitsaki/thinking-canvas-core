import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { SnippetGrid } from './snippet-grid';

vi.mock('@/data/projects', () => ({
  projectImage: () => ({ url: '/placeholder.svg', alt: '' }),
  getProject: () => ({ logo: undefined }),
}));
vi.mock('./snippet-modal', () => ({
  SnippetModal: ({ snippet }: { snippet: unknown }) => snippet ? <div role="dialog" /> : null,
}));

afterEach(cleanup);

describe('snippet availability', () => {
  it('hides the SCW design system snippet and keeps every visible snippet openable', () => {
    render(<SnippetGrid />);
    expect(screen.queryByText('Wanda, the platform’s first design system, from shared file to living system.')).toBeNull();
    const cards = screen.getAllByRole('button');
    expect(cards.length).toBeGreaterThan(0);
    for (const card of cards) {
      expect(card instanceof HTMLButtonElement && card.disabled).toBe(false);
    }
    fireEvent.click(cards[0]);
    expect(screen.queryByRole('dialog')).not.toBeNull();
  });
});
