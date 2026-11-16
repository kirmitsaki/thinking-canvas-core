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
  for (const view of ['library', 'reader', 'citation']) {
    it(`opens the separate Mendeley ${view} snippet`, () => {
      const path = `/work/mendeley/sample-work?view=${view}`;
      expect(secondarySnippetFor(path)?.to).toBe(path);
      expect(secondarySnippetFor(path)?.name).toBe(view.charAt(0).toUpperCase() + view.slice(1));
      expect(snippetFrameUrl(path)).toBe(`/work/mendeley?view=${view}&snippet=sample-work`);
    });
  }
  it('preserves Mendeley view selection in the modal', () => {
    expect(snippetFrameUrl('/work/mendeley/sample-work?view=reader')).toBe('/work/mendeley?view=reader&snippet=sample-work');
  });
  it('keeps full case-study destinations outside the secondary registry', () => {
    expect(secondarySnippetFor('/work/mendeley')).toBeUndefined();
  });
});