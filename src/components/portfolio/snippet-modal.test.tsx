import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { SnippetModal } from './snippet-modal';

afterEach(cleanup);

const close = () => {};

describe('snippet modal bar', () => {
  it('shows the company logo and company name, and no breadcrumb', () => {
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
    expect(screen.getByText('Library')).not.toBeNull();
  });

  it('shows only the company name when the project has no logo', () => {
    render(
      <SnippetModal
        snippet={{ to: '/work/secure-code-warrior/cybermon', project: 'Secure Code Warrior', name: 'Cybermon' }}
        onClose={close}
      />
    );
    const name = screen.getByText('Secure Code Warrior');
    const bar = name.parentElement as HTMLElement;
    expect(bar.querySelector('img')).toBeNull();
    expect(screen.queryByText('Portfolio')).toBeNull();
  });
});
