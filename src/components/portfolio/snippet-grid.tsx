import { useState } from "react";
import { SnippetModal } from "./snippet-modal";
import { SnippetCard } from "./snippet-card";
import { snippets, type Snippet } from "@/data/snippets";

export function SnippetGrid() {
  const [selected, setSelected] = useState<Snippet | null>(null);
  return <>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {snippets.map(snippet => <SnippetCard key={snippet.to} snippet={snippet} onOpen={() => setSelected(snippet)} />)}
    </div>
    <SnippetModal snippet={selected} onClose={() => setSelected(null)} />
  </>;
}
