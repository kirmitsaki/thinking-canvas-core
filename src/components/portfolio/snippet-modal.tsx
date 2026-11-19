import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { snippetFrameUrl } from '@/data/secondary-snippets';
import { caseStudyTitle, projects } from '@/data/projects';

export function SnippetModal({ snippet, onClose }: {
  snippet: { to: string; project: string; name: string } | null;
  onClose: () => void;
}) {
  const [path] = snippet?.to.split("#") ?? [];
  /* Case study root: /work/<slug> regardless of the snippet's deeper path. */
  const projectRoot = path ? `/${path.split("/").filter(Boolean).slice(0, 2).join("/")}` : "";
  const parentProject = projects.find(item => item.slug === projectRoot.split("/")[2]);
  const parentLabel = parentProject ? caseStudyTitle(parentProject) : snippet?.project;
  return (
    <Dialog.Root open={Boolean(snippet)} onOpenChange={open => { if (!open) onClose(); }}>
      <Dialog.Portal>
        <Dialog.Overlay className="snippet-modal-overlay fixed inset-0 z-40" />
        <Dialog.Content aria-describedby={undefined} className="fixed inset-2 z-50 flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-background md:inset-8">
          <div className="flex shrink-0 items-center justify-between gap-4 border-b border-border px-4 py-2 md:px-6">
            <nav aria-label="Snippet breadcrumbs" className="caption min-w-0">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <li><Link to="/work" onClick={onClose} className="snippet-modal-link underline-offset-4 hover:underline">Portfolio</Link></li>
                <li aria-hidden="true">&gt;</li>
                <li><Link to={projectRoot} onClick={onClose} className="snippet-modal-link underline-offset-4 hover:underline">{parentLabel}</Link></li>
                <li aria-hidden="true">&gt;</li>
                <li><Dialog.Title className="caption" aria-current="page">{snippet?.name}</Dialog.Title></li>
              </ol>
            </nav>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" title="Close" aria-label="Close snippet" className="shrink-0"><X /></Button>
            </Dialog.Close>
          </div>
          {snippet && <iframe key={snippet.to} title={`${parentLabel} · ${snippet.name}`} src={snippetFrameUrl(snippet.to)} onLoad={event => {
            event.currentTarget.contentDocument?.addEventListener("keydown", key => {
              if (key.key === "Escape") onClose();
            });
          }} className="min-h-0 w-full flex-1 border-0" />}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}