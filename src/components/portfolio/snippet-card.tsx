import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { projectImage } from '@/data/projects';
import { snippets, type Snippet } from '@/data/snippets';
import { useSnippetModal } from './snippet-context';
import { VisualPlaceholder } from './visual-placeholder';

function pinOffset(key: string) {
  let hash = 0;
  for (const ch of key) hash = (hash * 31 + ch.charCodeAt(0)) % 997;
  return { left: 28 + (hash % 44), rotate: (hash % 21) - 10 };
}

function SnippetPin({ snippetKey }: { snippetKey: string }) {
  const { left, rotate } = pinOffset(snippetKey);
  return (
    <svg aria-hidden="true" className="snippet-pin" style={{ left: `${left}%`, transform: `translateX(-50%) rotate(${rotate}deg)` }} width="38" height="50" viewBox="0 0 22 30" fill="none">
      <line x1="11" y1="13" x2="11" y2="28" stroke="var(--caramel)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="11" cy="8" r="7" fill="var(--caramel)" />
      <circle cx="8.5" cy="5.5" r="2.2" fill="var(--card-surface)" opacity="0.55" />
    </svg>
  );
}

/** True once the description is taller than the three rows the card shows. */
function useIsClamped() {
  const cardRef = useRef<HTMLButtonElement>(null);
  const ref = useRef<HTMLParagraphElement>(null);
  const [clamped, setClamped] = useState(false);
  useEffect(() => {
    const paragraph = ref.current;
    if (!paragraph) return;
    const check = () => setClamped(paragraph.scrollHeight > paragraph.clientHeight + 1);
    check();
    // The card's own width can change after the covers finish loading, which
    // re-wraps the text; watching the card keeps the answer honest.
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(check) : undefined;
    observer?.observe(paragraph);
    if (cardRef.current) observer?.observe(cardRef.current);
    window.addEventListener('resize', check);
    document.fonts?.ready?.then(check).catch(() => {});
    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', check);
    };
  }, []);
  return { cardRef, ref, clamped };
}

export function SnippetCard({ snippet, onOpen }: { snippet: Snippet; onOpen: () => void }) {
  const media = snippet.image ? projectImage(snippet.image) : undefined;
  const { cardRef, ref, clamped } = useIsClamped();
  return <Button ref={cardRef} variant="ghost" disabled={snippet.disabled} onClick={onOpen} aria-haspopup="dialog" className="editorial-card snippet-card group relative flex h-full w-full min-w-0 flex-col justify-start gap-0 whitespace-normal p-0 text-left text-card-foreground hover:bg-card hover:text-card-foreground disabled:pointer-events-auto">
    <SnippetPin snippetKey={snippet.to} />
    <div className="aspect-[16/10] w-full shrink-0 overflow-hidden bg-muted">{media ? <img loading="lazy" src={media.url} alt={media.alt} className="block h-full w-full object-cover object-top" /> : <VisualPlaceholder title={snippet.name} className="aspect-auto h-full" />}</div>
    <div className="min-h-[12rem] w-full flex-1 p-6 md:p-8">
      <h3 className="subsection-title">{snippet.name}</h3>
      <p ref={ref} className="snippet-desc caption mt-3 text-[0.8125rem] line-clamp-3">{snippet.description}</p>
    </div>
    {clamped && <span aria-hidden="true" className="snippet-note caption text-[0.8125rem]">{snippet.description}</span>}
  </Button>;
}

export function CaseStudySnippetCard({ to, inRow = false }: { to: string; inRow?: boolean }) {
  const open = useSnippetModal();
  const snippet = snippets.find(item => item.to === to);
  if (!snippet) return null;
  return <div className={inRow ? "case-study-snippet w-full min-w-0" : "case-study-snippet mx-auto mt-8 w-full max-w-full md:w-[min(50vw,100%)]"}><SnippetCard snippet={snippet} onOpen={() => open(snippet)} /></div>;
}
