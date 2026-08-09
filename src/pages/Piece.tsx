import { Link, useParams } from "react-router-dom";
import Seo from "@/components/Seo";
import NotFound from "@/pages/NotFound";
import { getPiece, PIECES, pieceIndex, type Block, type Piece } from "@/content/pieces";

/** Reading column, shared by every text-shaped block. */
const COLUMN = "w-full";

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

function readingMinutes(piece: Piece) {
  const words = piece.blocks
    .map((b) => {
      switch (b.type) {
        case "list":
          return b.items.join(" ");
        case "keyed":
          return b.lines.map((l) => l.text).join(" ");
        case "figure":
          return `${b.caption} ${b.nodes.join(" ")}`;
        default:
          return b.text;
      }
    })
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

function BlockView({ block, dropCap }: { block: Block; dropCap: boolean }) {
  switch (block.type) {
    case "statement":
      return (
        <h2 className="relative mt-20 mb-9 max-w-[24ch] pl-6 font-serif text-[30px] leading-[1.14] tracking-tight text-espresso first:mt-0 md:pl-7 md:text-[40px]">
          <span
            aria-hidden
            className="absolute left-0 top-[0.34em] block h-[2px] w-3 bg-rust md:w-4"
          />
          {block.text}
        </h2>
      );

    case "p":
      return (
        <p
          className={`${COLUMN} mt-6 font-serif text-[19px] leading-[1.85] text-foreground/90 md:text-[20px] ${
            dropCap ? "drop-cap" : ""
          }`}
        >
          {block.text}
        </p>
      );

    case "list":
      return (
        <ul className={`${COLUMN} mt-8 space-y-4 border-l border-border pl-6 md:pl-8`}>
          {block.items.map((item) => (
            <li
              key={item}
              className="font-serif text-[18px] italic leading-[1.7] text-foreground/85 md:text-[19px]"
            >
              {item}
            </li>
          ))}
        </ul>
      );

    case "deck":
      return (
        <p
          className={`${COLUMN} mt-8 font-serif text-[22px] italic leading-[1.5] text-foreground/85 md:text-[26px]`}
        >
          {block.text}
        </p>
      );

    case "keyed":
      return (
        <div className="camel-wash mt-14 mb-6 w-full rounded-[10px] px-6 py-8 md:px-9">
          <p className="label-quiet mb-5">{block.label}</p>
          <dl className="space-y-4">
            {block.lines.map((line, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:gap-6">
                <dt className="shrink-0 pt-[7px] font-sans text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:w-32">
                  {line.speaker}
                </dt>
                <dd className="font-serif text-[18px] leading-[1.7] text-foreground/85">
                  {line.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      );

    case "anecdote":
      return (
        <aside className="mt-14 mb-6 w-full border-l-2 border-l-rust pl-6 md:pl-8">
          <p className="label-quiet mb-3">In practice</p>
          <p className="font-serif text-[18px] italic leading-[1.8] text-foreground/90 md:text-[19px]">
            {block.text}
          </p>
        </aside>
      );

    case "pullquote":
      return (
        <figure className="my-20 text-center md:my-24 md:-mx-16">
          <span aria-hidden className="ornament mb-6 block text-2xl">
            ❦
          </span>
          <blockquote className="font-serif text-[26px] italic leading-[1.32] tracking-tight text-espresso md:text-[34px]">
            {block.text}
          </blockquote>
        </figure>
      );

    case "figure":
      return (
        <figure className="mt-14 mb-6 w-full">
          <div className="rounded-[10px] border border-border bg-card px-6 py-10 md:px-10">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-4">
              {block.nodes.map((node, i) => (
                <div key={i} className="flex items-center gap-3">
                  {i > 0 && <span className="text-camel">→</span>}
                  <span className="rounded-full border border-border px-4 py-2 font-sans text-[10px] uppercase tracking-[0.14em] text-foreground/80">
                    {node}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <figcaption className="label-quiet mt-3">{block.caption}</figcaption>
        </figure>
      );

    default:
      return null;
  }
}

export default function PiecePage() {
  const { slug } = useParams<{ slug: string }>();
  const piece = slug ? getPiece(slug) : undefined;

  if (!piece) return <NotFound />;

  const i = pieceIndex(piece.slug);
  const prev = i > 0 ? PIECES[i - 1] : undefined;
  const next = i < PIECES.length - 1 ? PIECES[i + 1] : undefined;
  const firstParagraph = piece.blocks.findIndex((b) => b.type === "p");
  const description = (piece.blocks.find((b) => b.type === "p") as { text: string } | undefined)?.text ?? piece.title;

  return (
    <main className="page-shell pt-10 pb-28">
      <Seo
        title={`${piece.title} · Rachel Kirmitsaki`}
        description={description.slice(0, 155)}
        path={`/piece/${piece.slug}`}
        ogType="article"
      />

      <div className="masthead-bar">
        <Link to="/systems-and-people" className="label underline-offset-4 hover:underline">
          Across Product
        </Link>

        <p className="label-quiet hidden sm:block">
          {ROMAN[i] ?? i + 1} · {readingMinutes(piece)} min read
        </p>
        <Link to="/systems-and-people" className="accent-link">
          All pieces →
        </Link>
      </div>

      <article className="mx-auto mt-16 max-w-[42rem] md:mt-20">
        <header>
          <p className="label">{piece.eyebrow}</p>
          <h1 className="mt-4 font-serif text-[42px] leading-[1.04] tracking-tight md:text-[60px]">
            {piece.title}
          </h1>

          <div aria-hidden className="mt-10 h-px w-24 bg-caramel" />
        </header>

        <div className="article-prose mt-12">
          {piece.blocks.map((block, idx) => (
            <BlockView key={idx} block={block} dropCap={idx === firstParagraph} />
          ))}
        </div>

        <p aria-hidden className="section-break mt-16">
          ⁘
        </p>
      </article>

      <nav className="hairline-top mx-auto mt-8 grid max-w-[42rem] gap-8 pt-8 sm:grid-cols-2">
        {prev ? (
          <Link to={`/piece/${prev.slug}`} className="group block">
            <p className="label-quiet">Previous</p>
            <p className="mt-2 font-serif text-2xl leading-snug decoration-1 underline-offset-4 group-hover:underline">
              {prev.title}
            </p>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link to={`/piece/${next.slug}`} className="group block sm:text-right">
            <p className="label-quiet">Next</p>
            <p className="mt-2 font-serif text-2xl leading-snug decoration-1 underline-offset-4 group-hover:underline">
              {next.title}
            </p>
          </Link>
        )}
      </nav>
    </main>
  );
}
