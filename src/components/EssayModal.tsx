import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { Essay, EssayParagraph } from "@/content/essays";
import { essays, essayOrder } from "@/content/essays";

type Props = {
  essay: Essay;
  slug: string;
  onClose: () => void;
};

function Dinkus() {
  return (
    <p aria-hidden className="dinkus font-editorial">· · ·</p>
  );
}

function renderParagraph(p: EssayParagraph, i: number) {
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
          <p key={i} className="essay-hook font-editorial">{p.text}</p>
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
          <p key={i} className="essay-pull font-editorial">{p.text}</p>
        );
      case "closing":
        return (
          <p key={i} className="essay-closing font-editorial">{p.text}</p>
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

  const currentIdx = essayOrder.indexOf(slug);
  const nextSlug = essayOrder[(currentIdx + 1) % essayOrder.length];
  const nextEssay = essays[nextSlug];

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
      {/* Modal surface — equal padding on all sides from viewport edge */}
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

        <div className="w-full">
          <article className="max-w-[640px] mx-auto px-8 pt-20 md:pt-28 pb-24 md:pb-32">
            <h1 className="font-editorial text-[hsl(var(--ink-strong))] text-[40px] sm:text-[52px] md:text-[64px] leading-[1.05] tracking-[-0.02em]">
              {essay.title}
            </h1>
            <div className="mt-12">
              {essay.paragraphs.map((p, i) => renderParagraph(p, i))}
            </div>

            {/* Next reading */}
            <div className="mt-16 pb-[60px]">
              <hr className="border-0 border-t border-[hsl(var(--hairline))]" />
              <p className="mt-8 text-[11px] uppercase tracking-[0.08em] text-[hsl(var(--meta-ink))]">
                Next read
              </p>
              <button
                type="button"
                onClick={() => navigate(`/essays/${nextSlug}`)}
                className="mt-3 font-editorial text-[1rem] font-normal text-[hsl(var(--ink-body))] hover:underline text-left"
              >
                {nextEssay.title}
              </button>
            </div>
          </article>
        </div>
      </div>

      <style>{`
        :root { --modal-inset: 16px; }
        @media (min-width: 768px) { :root { --modal-inset: 40px; } }
      `}</style>
    </div>
  );
}
