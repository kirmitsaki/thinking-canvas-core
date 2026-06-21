import { useCallback, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import type { Essay, EssayParagraph } from "@/content/essays";
import { essays, essayOrder } from "@/content/essays";

type Props = {
  essay: Essay;
  slug: string;
  onClose: () => void;
};


const PARAGRAPH_CLASS = {
  hook: "essay-hook font-editorial",
  pull: "essay-pull font-editorial",
  closing: "essay-closing font-editorial",
  smallcaps: "essay-body",
  body: "essay-body",
} as const;

function renderParagraph(p: EssayParagraph, i: number) {
  if (typeof p === "string") {
    return <p key={i} className="essay-body">{p}</p>;
  }

  const className = PARAGRAPH_CLASS[p.type];

  const body =
    p.type === "smallcaps" ? (
      <p key={i} className={className}>
        <span className="smallcaps">{p.prefix}</span>
        {p.text}
      </p>
    ) : (
      <p key={i} className={className}>{p.text}</p>
    );

  if (p.type === "smallcaps" && i > 0) {
    return (
      <div key={i}>
        <p aria-hidden className="dinkus font-editorial">· · ·</p>
        {body}
      </div>
    );
  }
  return body;
}

export default function EssayModal({ essay, slug, onClose }: Props) {
  const navigate = useNavigate();

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

  const { nextSlug, nextEssay } = useMemo(() => {
    const idx = essayOrder.indexOf(slug);
    const next = essayOrder[(idx + 1) % essayOrder.length];
    return { nextSlug: next, nextEssay: essays[next] };
  }, [slug]);

  const goToNext = useCallback(
    () => navigate(`/essays/${nextSlug}`),
    [navigate, nextSlug],
  );

  return (
    <div
      className="fixed inset-0 z-50 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={essay.title}
    >
      {/* Dim layer */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* Modal surface — equal inset on all sides from viewport edge */}
      <div
        className="absolute bg-background overflow-y-auto rounded-xl shadow-2xl"
        style={{
          top: "var(--modal-inset)",
          left: "var(--modal-inset)",
          width: "calc(100vw - (var(--modal-inset) * 2))",
          height: "calc(100vh - (var(--modal-inset) * 2))",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 md:top-7 md:right-8 z-10 text-[hsl(var(--meta-ink))] hover:text-[hsl(var(--ink-strong))] transition-colors text-3xl leading-none"
        >
          ×
        </button>

        <article className="max-w-[640px] mx-auto px-5 sm:px-8 pt-16 sm:pt-20 md:pt-28 pb-20 md:pb-32">
          <h1 className="font-editorial text-[hsl(var(--ink-strong))] text-[32px] sm:text-[48px] md:text-[64px] leading-[1.06] tracking-[-0.02em] break-words">
            {essay.title}
          </h1>

          <div className="mt-12">
            {essay.paragraphs.map(renderParagraph)}
          </div>

          {/* Next reading */}
          <div className="mt-16 pb-[60px]">
            <hr className="border-0 border-t border-[hsl(var(--hairline))]" />
            <p className="mt-8 text-[11px] uppercase tracking-[0.08em] text-[hsl(var(--meta-ink))]">
              Next read
            </p>
            <button
              type="button"
              onClick={goToNext}
              className="mt-3 font-editorial text-[1rem] font-normal text-[hsl(var(--ink-body))] hover:underline text-left"
            >
              {nextEssay.title}
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
