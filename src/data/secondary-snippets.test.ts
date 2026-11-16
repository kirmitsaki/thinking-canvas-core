import { describe, expect, it } from 'vitest';
import { secondarySnippetFor, snippetFrameUrl } from './secondary-snippets';

describe('secondary case studies open only in modals', () => {
  for (const [path, project, name] of [
    ['/work/origin-markets/gallery', 'Origin Markets', 'Sample interface'],
    ['/work/mendeley/sample-work', 'Mendeley', 'Sample interface'],
    ['/work/secure-code-warrior/product-design-identity', 'Secure Code Warrior', 'Product design identity'],
    ['/work/secure-code-warrior/cybermon', 'Secure Code Warrior', 'Cybermon'],
  ]) {
    it(`resolves ${path} to parent-hosted modal content`, () => {
      expect(secondarySnippetFor(path)).toEqual({ to: path, project, name });
      const parts = path.split('/');
      expect(snippetFrameUrl(path)).toBe(`/work/${parts[2]}?snippet=${parts[3]}`);
    });
  }
  it('preserves Mendeley tab selection in the modal', () => {
    expect(snippetFrameUrl('/work/mendeley/sample-work?view=reader')).toBe('/work/mendeley?view=reader&snippet=sample-work');
  });
  it('keeps full case-study destinations outside the secondary registry', () => {
    expect(secondarySnippetFor('/work/mendeley')).toBeUndefined();
  });
});