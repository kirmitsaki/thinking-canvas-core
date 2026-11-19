import { Button } from '@/components/ui/button';
import { projectImage } from '@/data/projects';
import { snippets, type Snippet } from '@/data/snippets';
import { useSnippetModal } from './snippet-context';

export function SnippetCard({ snippet, onOpen }: { snippet: Snippet; onOpen: () => void }) {
  const media = projectImage(snippet.image);
  return <Button variant="ghost" disabled={snippet.disabled} onClick={onOpen} aria-haspopup="dialog" className="editorial-card snippet-card group block h-auto w-full min-w-0 overflow-hidden whitespace-normal p-0 text-left text-card-foreground hover:bg-card hover:text-card-foreground">
    <div className="aspect-[16/10] overflow-hidden bg-muted"><img loading="lazy" src={media.url} alt={media.alt} className="block h-full w-full object-cover object-top" /></div>
    <div className="p-6 md:p-8">
      <h3 className="subsection-title">{snippet.name}</h3>
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
