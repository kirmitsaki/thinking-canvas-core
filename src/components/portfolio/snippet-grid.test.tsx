import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { SnippetGrid } from './snippet-grid';

vi.mock('@/data/projects', () => ({
  projectImage: () => ({ url: '/placeholder.svg', alt: '' }),
}));
vi.mock('./snippet-modal', () => ({
  SnippetModal: ({ snippet }: { snippet: unknown }) => snippet ? <div role="dialog" /> : null,
}));

afterEach(cleanup);

describe('snippet availability', () => {
  it('prevents opening the SCW design system without disabling the other snippets', () => {
    render(<SnippetGrid />);
    const cards = screen.getAllByRole('button');
    const scwDesignSystem = cards[0];
    expect(scwDesignSystem instanceof HTMLButtonElement && scwDesignSystem.disabled).toBe(true);
    fireEvent.click(scwDesignSystem);
    expect(screen.queryByRole('dialog')).toBeNull();
    for (const card of cards.slice(1)) {
      expect(card instanceof HTMLButtonElement && card.disabled).toBe(false);
    }
    fireEvent.click(cards[1]);
    expect(screen.queryByRole('dialog')).not.toBeNull();
  });
});