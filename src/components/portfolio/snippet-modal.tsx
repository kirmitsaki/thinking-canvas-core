import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function SnippetModal({ snippet, onClose }: {
  snippet: { to: string; project: string; name: string } | null;
  onClose: () => void;
}) {
  const [path, section] = snippet?.to.split("#") ?? [];
  /* Case study root: /work/<slug> regardless of the snippet's deeper path. */
  const projectRoot = path ? `/${path.split("/").filter(Boolean).slice(0, 2).join("/")}` : "";
  return (
    <Dialog.Root open={Boolean(snippet)} onOpenChange={open => { if (!open) onClose(); }}>
      <Dialog.Portal>
        <Dialog.Overlay className="snippet-modal-overlay fixed inset-0 z-40" />
        <Dialog.Content aria-describedby={undefined} className="fixed inset-2 z-50 flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-background md:inset-8">
          <div className="flex shrink-0 items-center justify-between gap-4 border-b border-border px-4 py-2 md:px-6">
            <Dialog.Title className="caption min-w-0">
              <Link to={projectRoot} onClick={onClose} className="underline-offset-4 hover:underline">{snippet?.project}</Link>
              {" · "}
              {snippet?.name}
            </Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" title="Close" aria-label="Close snippet" className="shrink-0"><X /></Button>
            </Dialog.Close>
          </div>
          {snippet && <iframe key={snippet.to} title={`${snippet.project} · ${snippet.name}`} src={`${path}?snippet=${section ?? "page"}`} onLoad={event => {
            event.currentTarget.contentDocument?.addEventListener("keydown", key => {
              if (key.key === "Escape") onClose();
            });
          }} className="min-h-0 w-full flex-1 border-0" />}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}