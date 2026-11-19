import { editorialEmphasis } from './editorial-emphasis';

export function SnippetHeader({ title, subtitle, intro }: { title: string; subtitle: string; intro: string }) {
  return <header className="snippet-entry-header pb-12">
    <h1 className="page-title max-w-[720px]">{title}</h1>
    <p className="standfirst mt-6 max-w-[720px]">{subtitle}</p>
    <p className="body-copy mt-6 max-w-[65ch]">{editorialEmphasis(intro)}</p>
  </header>;
}