import { cleanup, render, within } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { snippets } from '@/data/snippets';
import SecureCodeWarrior from './SecureCodeWarrior';

vi.mock('@/components/Seo', () => ({ default: () => null }));

class ResizeObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}
vi.stubGlobal('ResizeObserver', ResizeObserverStub);

afterEach(cleanup);

describe('Secure Code Warrior case study', () => {
  it('shows every SCW snippet card, with only Product design identity and Cybermon enabled', () => {
    const { container } = render(<MemoryRouter><SecureCodeWarrior /></MemoryRouter>);
    const grid = container.querySelector('.snippet-grid');
    expect(grid).not.toBeNull();
    const scwSnippets = snippets.filter(snippet => snippet.project === 'Secure Code Warrior');
    expect(scwSnippets.length).toBe(6);
    const cards = within(grid as HTMLElement).getAllByRole('button');
    expect(cards.length).toBe(6);
    scwSnippets.forEach((snippet, index) => {
      expect(cards[index].textContent).toContain(snippet.name);
      const enabled = snippet.name === 'Product design identity' || snippet.name === 'Cybermon';
      expect(cards[index] instanceof HTMLButtonElement && cards[index].disabled).toBe(!enabled);
    });
  });
});
