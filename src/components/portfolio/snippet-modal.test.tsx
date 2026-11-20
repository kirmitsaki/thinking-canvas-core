import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { SnippetModal } from './snippet-modal';
import { snippetBarLabel, snippets } from '@/data/snippets';

afterEach(cleanup);

const close = () => {};

describe('snippet modal bar', () => {
  it('shows the company logo, the company name and the snippet title, and no breadcrumb', () => {
    render(
      <SnippetModal
        snippet={{ to: '/work/mendeley/sample-work?view=library', project: 'Mendeley', name: 'Library' }}
        onClose={close}
      />
    );
    const name = screen.getByText('Mendeley (Elsevier)');
    const bar = name.parentElement as HTMLElement;
    expect(bar.querySelector('img')).not.toBeNull();
    expect(screen.queryByText('Portfolio')).toBeNull();
    expect(screen.queryByRole('navigation')).toBeNull();
    expect(bar.textContent).toContain('Library interface');
  });

  it('shows the company logo, name and snippet title for Secure Code Warrior', () => {
    render(
      <SnippetModal
        snippet={{ to: '/work/secure-code-warrior/cybermon', project: 'Secure Code Warrior', name: 'Cybermon' }}
        onClose={close}
      />
    );
    const name = screen.getByText('Secure Code Warrior');
    const bar = name.parentElement as HTMLElement;
    const logo = bar.querySelector('img');
    expect(logo).not.toBeNull();
    expect(logo?.getAttribute('alt')).toBe('Secure Code Warrior logo');
    expect(screen.queryByText('Portfolio')).toBeNull();
    expect(bar.textContent).toContain('Cybermon');
  });
});

describe('snippet bar labels', () => {
  it('labels every openable snippet the way the bar should read it', () => {
    const expected: Record<string, string> = {
      '/work/secure-code-warrior/product-design-identity': 'Product design identity',
      '/work/secure-code-warrior/cybermon': 'Cybermon',
      '/work/origin-markets#design-system': 'Design system',
      '/work/origin-markets/gallery': 'Sample interface',
      '/work/mendeley#design-system': 'Design system',
      '/work/mendeley/sample-work?view=library': 'Library interface',
      '/work/mendeley/sample-work?view=reader': 'Reader interface',
      '/work/mendeley/sample-work?view=citation': 'Citation interface',
    };
    for (const [to, label] of Object.entries(expected)) {
      const snippet = snippets.find(item => item.to === to);
      expect(snippet, to).toBeDefined();
      expect(snippetBarLabel(to, snippet?.name ?? ''), to).toBe(label);
    }
  });

  it('falls back to the snippet name when there is no bar label', () => {
    expect(snippetBarLabel('/work/origin-markets/some-study', 'Market research')).toBe('Market research');
  });
});
