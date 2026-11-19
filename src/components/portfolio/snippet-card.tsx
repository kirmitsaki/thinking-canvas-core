import { Button } from '@/components/ui/button';
import { getProject, projectImage, type Project } from '@/data/projects';
import { snippets, type Snippet } from '@/data/snippets';
import { useSnippetModal } from './snippet-context';

export function SnippetCard({ snippet, onOpen }: { snippet: Snippet; onOpen: () => void }) {
  const media = projectImage(snippet.image);
  const slug = snippet.to.split('/')[2].split(/[#?]/)[0] as Project['slug'];
  const logo = getProject(slug).logo ? projectImage(getProject(slug).logo!) : undefined;
  return <Button variant="ghost" disabled={snippet.disabled} onClick={onOpen} aria-haspopup="dialog" className="editorial-card group block h-auto w-full min-w-0 overflow-hidden whitespace-normal p-0 text-left text-card-foreground hover:bg-card hover:text-card-foreground">
    <div className="aspect-[16/10] overflow-hidden bg-muted"><img loading="lazy" src={media.url} alt={media.alt} className="block h-full w-full object-cover object-top" /></div>
    <div className="p-6 md:p-8">
      <div className="flex min-w-0 items-center gap-2">
        {logo ? <img src={logo.url} alt={logo.alt} className="size-10 shrink-0 rounded-full object-cover" loading="lazy" /> : null}
        <p className="label">{snippet.project}</p>
      </div>
      <h3 className="subsection-title mt-2">{snippet.name}</h3>
      <p className="caption mt-3">{snippet.description}</p>
    </div>
  </Button>;
}

export function CaseStudySnippetCard({ to, inRow = false }: { to: string; inRow?: boolean }) {
  const open = useSnippetModal();
  const snippet = snippets.find(item => item.to === to);
  if (!snippet) return null;
  return <div className={inRow ? "case-study-snippet w-full min-w-0" : "case-study-snippet mx-auto mt-8 w-full max-w-full md:w-[min(50vw,100%)]"}><SnippetCard snippet={snippet} onOpen={() => open(snippet)} /></div>;
}
