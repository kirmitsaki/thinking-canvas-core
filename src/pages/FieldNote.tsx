import { Link, useParams } from "react-router-dom";
import Seo from "@/components/Seo";
import NotFound from "@/pages/NotFound";
import { PortfolioBreadcrumb } from "@/components/portfolio/breadcrumb";
import { getPiece, PIECES, pieceIndex, type Block, type Piece } from "@/data/pieces";

/** Reading column, shared by every text-shaped block. */
const COLUMN = "w-full";

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

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "statement":
      return (
        <h2 className="mt-20 mb-9 first:mt-0 card-title text-espresso max-w-[24ch] relative pl-6 md:pl-7">
          <span
            aria-hidden
            className="absolute left-0 top-[0.34em] block h-[2px] w-3 md:w-4 bg-rust"
          />
          {block.text}
        </h2>
      );

    case "p":
      return <p className={`${COLUMN} mt-6 article-body text-foreground`}>{block.text}</p>;

    case "list":
      return (
        <ul className={`${COLUMN} mt-8 space-y-4 border-l border-border pl-6 md:pl-8`}>
          {block.items.map((item) => (
            <li key={item} className="note-article-body italic text-foreground">
              {item}
            </li>
          ))}
        </ul>
      );

    case "deck":
      return <p className={`${COLUMN} mt-8 standfirst`}>{block.text}</p>;

    case "keyed":
      return (
        <div className="camel-wash mt-14 mb-6 w-full rounded-[10px] px-6 py-8 md:px-9">
          <p className="label-quiet mb-5">{block.label}</p>
          <dl className="space-y-4">
            {block.lines.map((line, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:gap-6">
                <dt className="label-quiet sm:w-32 shrink-0 pt-[7px]">{line.speaker}</dt>
                <dd className="note-article-body text-foreground">{line.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      );

    case "anecdote":
      return (
        <aside className="mt-14 mb-6 w-full border-l-2 border-l-rust pl-6 md:pl-8">
          <p className="label-quiet mb-3">In practice</p>
          <p className="note-article-body italic text-foreground">{block.text}</p>
        </aside>
      );

    case "pullquote":
      return (
        <figure className="my-20 md:my-24 md:-mx-16 text-center">
          <span aria-hidden className="ornament block text-2xl mb-6">
            ❦
          </span>
          <blockquote className="pull-quote text-espresso">{block.text}</blockquote>
        </figure>
      );

    case "figure":
      return (
        <figure className="mt-14 mb-6 w-full">
          <div className="bg-card border border-border rounded-[10px] px-6 py-10 md:px-10">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-4">
              {block.nodes.map((node, i) => (
                <div key={i} className="flex items-center gap-3">
                  {i > 0 && <span className="text-camel">→</span>}
                  <span className="border border-border rounded-full px-4 py-2 label-quiet">
                    {node}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <figcaption className="mt-3 label-quiet">{block.caption}</figcaption>
        </figure>
      );

    default:
      return null;
  }
}

export default function FieldNotePage() {
  const { slug } = useParams<{ slug: string }>();
  const piece = slug ? getPiece(slug) : undefined;

  if (!piece) return <NotFound />;

  const i = pieceIndex(piece.slug);
  const prev = i > 0 ? PIECES[i - 1] : undefined;
  const next = i < PIECES.length - 1 ? PIECES[i + 1] : undefined;
  const description = piece.blocks.find((b) => b.type === "p")?.text ?? piece.title;

  return (
    <main className="page-shell relative z-10 pt-10 pb-28">
      <Seo
        title={`${piece.title} · Rachel Kirmitsaki`}
        description={description.slice(0, 155)}
        path={`/field-notes/${piece.slug}`}
        ogType="article"
      />
      <PortfolioBreadcrumb
        items={[{ label: "Field Notes", to: "/field-notes" }, { label: piece.title }]}
        trailing={<p className="label-quiet">{readingMinutes(piece)} min read</p>}
      />

      <article className="mx-auto max-w-[42rem] mt-16 md:mt-20">
        <header>
          <p className="label">{piece.eyebrow}</p>
          <h1 className="mt-4 page-title">{piece.title}</h1>
          <div aria-hidden className="mt-10 h-px w-24 bg-caramel" />
        </header>

        <div className="article-prose mt-12">
          {piece.blocks.map((block, idx) => (
            <BlockView key={idx} block={block} />
          ))}
        </div>

        <p aria-hidden className="section-break mt-16">
          ⁘
        </p>
      </article>

      <nav className="mx-auto max-w-[42rem] mt-8 hairline-top pt-8 grid gap-8 sm:grid-cols-2">
        {prev ? (
          <Link to={`/field-notes/${prev.slug}`} className="group block">
            <p className="label-quiet">Previous</p>
            <p className="mt-2 subsection-title group-hover:underline underline-offset-4 decoration-1">
              {prev.title}
            </p>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link to={`/field-notes/${next.slug}`} className="group block sm:text-right">
            <p className="label-quiet">Next</p>
            <p className="mt-2 subsection-title group-hover:underline underline-offset-4 decoration-1">
              {next.title}
            </p>
          </Link>
        )}
      </nav>
    </main>
  );
}
