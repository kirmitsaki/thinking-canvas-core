import { editorialEmphasis } from './editorial-emphasis';

export function SnippetHeader({ title, subtitle, intro, image }: { title: string; subtitle: string; intro?: string; image?: { url: string; alt: string } }) {
  return <header className="snippet-entry-header pb-12">
    <div className={image ? 'grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end md:gap-12' : undefined}>
      <div className="min-w-0">
        <h1 className="page-title max-w-[720px]">{title}</h1>
        <p className="standfirst mt-6 max-w-[720px]">{subtitle}</p>
        {intro && <p className="body-copy mt-6 max-w-[65ch]">{editorialEmphasis(intro)}</p>}
      </div>
      {image && <img src={image.url} alt={image.alt} className="w-full shrink-0 self-end rounded-lg object-cover" />}
    </div>
  </header>;
}
