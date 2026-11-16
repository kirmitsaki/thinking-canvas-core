import { originStudyGroups } from './origin-studies';

export type SecondarySnippet = { to: string; project: string; name: string };

export const secondarySnippets: SecondarySnippet[] = [
  { to: '/work/origin-markets/gallery', project: 'Origin Markets', name: 'Sample interface' },
  { to: '/work/mendeley/sample-work', project: 'Mendeley', name: 'Sample interface' },
  ...['library', 'reader', 'citation'].map(view => ({ to: `/work/mendeley/sample-work?view=${view}`, project: 'Mendeley', name: view.charAt(0).toUpperCase() + view.slice(1) })),
  { to: '/work/secure-code-warrior/product-design-identity', project: 'Secure Code Warrior', name: 'Product design identity' },
  { to: '/work/secure-code-warrior/cybermon', project: 'Secure Code Warrior', name: 'Cybermon' },
  ...originStudyGroups.flatMap(group => group.studies.map(study => ({ to: `/work/origin-markets/${study.slug}`, project: 'Origin Markets', name: study.name }))),
];

export function secondarySnippetFor(to: string) {
  return secondarySnippets.find(snippet => snippet.to === to) ?? secondarySnippets.find(snippet => snippet.to === to.split('?')[0]);
}

export function snippetFrameUrl(to: string) {
  const [destination, section] = to.split('#');
  const url = new URL(destination, window.location.origin);
  const parts = url.pathname.split('/').filter(Boolean);
  const content = section ?? parts[2] ?? 'page';
  url.pathname = `/${parts.slice(0, 2).join('/')}`;
  url.searchParams.set('snippet', content);
  return `${url.pathname}${url.search}`;
}