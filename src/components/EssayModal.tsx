import { useEffect } from "react";
import { X } from "lucide-react";
import type { Essay, EssayParagraph } from "@/content/essays";

type Props = {
  essay: Essay;
  onClose: () => void;
};

function Dinkus() {
  return (
    <p aria-hidden className="dinkus font-editorial">· · ·</p>
  );
}

function renderParagraph(p: EssayParagraph, i: number, prev?: EssayParagraph) {
  const isSmallcaps = typeof p !== "string" && p.type === "smallcaps";
  const showDinkus = isSmallcaps && i > 0;

  const body = (() => {
    if (typeof p === "string") {
      return (
        <p key={i} className="essay-body">{p}</p>
      );
    }
    switch (p.type) {
      case "hook":
        return (
          <p
            key={i}
            className="essay-hook font-editorial"
          >
            {p.text}
          </p>
        );
      case "smallcaps":
        return (
          <p key={i} className="essay-body">
            <span className="smallcaps">{p.prefix}</span>
            {p.text}
          </p>
        );
      case "pull":
        return (
          <p
            key={i}
            className="essay-pull font-editorial"
          >
            {p.text}
          </p>
        );
      case "closing":
        return (
          <p
            key={i}
            className="essay-closing font-editorial"
          >
            {p.text}
          </p>
        );
      case "body":
      default:
        return <p key={i} className="essay-body">{p.text}</p>;
    }
  })();

  if (showDinkus) {
    return (
      <div key={i}>
        <Dinkus />
        {body}
      </div>
    );
  }
  return body;
}

export default function EssayModal({ essay, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={essay.title}
    >
      {/* Dim layer */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />
      {/* Modal surface */}
      <div className="absolute inset-0 bg-background overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="fixed top-5 right-6 md:top-7 md:right-10 z-10 text-[hsl(var(--meta-ink))] hover:text-[hsl(var(--ink-strong))] transition-colors text-3xl leading-none"
        >
          ×
        </button>

        <div className="mx-auto w-full max-w-[1320px] px-6 md:px-12">
          <article className="max-w-[680px] pt-20 md:pt-28 pb-24 md:pb-32">
            <h1 className="font-editorial text-[hsl(var(--ink-strong))] text-[40px] sm:text-[52px] md:text-[64px] leading-[1.05] tracking-[-0.02em]">
              {essay.title}
            </h1>
            <p className="mt-4 text-[13px] font-light text-[hsl(var(--ink-strong))]/50">
              Rachel Kirmitsaki
            </p>

            <div className="mt-2">
              {essay.paragraphs.map((p, i) =>
                renderParagraph(p, i, essay.paragraphs[i - 1])
              )}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
