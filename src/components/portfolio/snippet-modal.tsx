import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { snippetFrameUrl } from '@/data/secondary-snippets';
import { projectImage, projects } from '@/data/projects';

export function SnippetModal({ snippet, onClose }: {
  snippet: { to: string; project: string; name: string } | null;
  onClose: () => void;
}) {
  const [path] = snippet?.to.split("#") ?? [];
  /* Case study root: /work/<slug> regardless of the snippet's deeper path. */
  const projectRoot = path ? `/${path.split("/").filter(Boolean).slice(0, 2).join("/")}` : "";
  const parentProject = projects.find(item => item.slug === projectRoot.split("/")[2]);
  const companyName = parentProject?.name ?? snippet?.project;
  const logo = parentProject?.logo ? projectImage(parentProject.logo) : undefined;
  return (
    <Dialog.Root open={Boolean(snippet)} onOpenChange={open => { if (!open) onClose(); }}>
      <Dialog.Portal>
        <Dialog.Overlay className="snippet-modal-overlay fixed inset-0 z-40" />
        <Dialog.Content aria-describedby={undefined} className="fixed inset-2 z-50 flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-background md:inset-8">
          <div className="flex shrink-0 items-center justify-between gap-4 border-b border-border px-4 py-2 md:px-6">
            <div className="flex min-w-0 items-center gap-2">
              {logo ? (
                <img src={logo.url} alt={logo.alt} className="size-8 shrink-0 rounded-full object-cover" />
              ) : null}
              <span className="snippet-modal-company truncate">{companyName}</span>
            </div>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" title="Close" aria-label="Close snippet" className="shrink-0"><X /></Button>
            </Dialog.Close>
          </div>
          <Dialog.Title className="sr-only">{snippet?.name}</Dialog.Title>
          {snippet && <iframe key={snippet.to} title={`${companyName} · ${snippet.name}`} src={snippetFrameUrl(snippet.to)} onLoad={event => {
            event.currentTarget.contentDocument?.addEventListener("keydown", key => {
              if (key.key === "Escape") onClose();
            });
          }} className="min-h-0 w-full flex-1 border-0" />}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
