import { Button } from '@/components/ui/button';
import { projectImage } from '@/data/projects';
import { snippets, type Snippet } from '@/data/snippets';
import { useSnippetModal } from './snippet-context';

export function SnippetCard({ snippet, onOpen }: { snippet: Snippet; onOpen: () => void }) {
  const media = projectImage(snippet.image);
  return <Button variant="ghost" disabled={snippet.disabled} onClick={onOpen} aria-haspopup="dialog" className="editorial-card group block h-auto w-full min-w-0 overflow-hidden whitespace-normal p-0 text-left text-card-foreground hover:bg-card hover:text-card-foreground">
    <div className="aspect-[16/10] overflow-hidden bg-muted"><img loading="lazy" src={media.url} alt={media.alt} className="block h-full w-full object-cover object-top" /></div>
    <div className="p-6 md:p-8">
      <p className="label">{snippet.project}</p>
      <h3 className="subsection-title mt-2">{snippet.name}</h3>
      <p className="caption mt-3">{snippet.description}</p>
      <p className="accent-link mt-4">{snippet.disabled ? 'COMING SOON' : <>SEE MORE{"\u00a0"}<span className="arrow-nudge">→</span></>}</p>
    </div>
  </Button>;
}

export function CaseStudySnippetCard({ to }: { to: string }) {
  const open = useSnippetModal();
  const snippet = snippets.find(item => item.to === to);
  if (!snippet) return null;
  return <div className="case-study-snippet mx-auto mt-8 w-full max-w-full md:w-[50vw]"><SnippetCard snippet={snippet} onOpen={() => open(snippet)} /></div>;
}
