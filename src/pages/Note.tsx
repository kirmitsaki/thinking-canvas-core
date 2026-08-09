import { Link, useParams } from "react-router-dom";
import Seo from "@/components/Seo";
import NotFound from "@/pages/NotFound";
import { FIELD_NOTES, getFieldNote } from "@/content/field-notes";

export default function NotePage() {
  const { slug } = useParams<{ slug: string }>();
  const note = slug ? getFieldNote(slug) : undefined;

  if (!note) return <NotFound />;

  const noteIndex = FIELD_NOTES.findIndex((entry) => entry.slug === note.slug);
  const previous = noteIndex > 0 ? FIELD_NOTES[noteIndex - 1] : undefined;
  const next = noteIndex < FIELD_NOTES.length - 1 ? FIELD_NOTES[noteIndex + 1] : undefined;
  const noteNumber = note.slug.replace("field-note-", "").padStart(3, "0");

  return (
    <main className="mx-auto max-w-[1200px] px-6 pt-10 pb-20">
      <Seo
        title={`${note.title} · Rachel Kirmitsaki`}
        description={note.dek}
        path={`/note/${note.slug}`}
        ogType="article"
      />

      <div className="masthead-bar">
        <p className="label">Field Notes</p>
        <Link to="/field-notes" className="accent-link">
          All entries →
        </Link>
      </div>

      <article className="mx-auto mt-16 max-w-[720px]">
        <header className="note-article-header">
          <p className="label">{noteNumber}</p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.06] tracking-tight md:text-5xl">
            {note.title}
          </h1>
          <p className="standfirst mt-6 max-w-[48ch] text-xl md:text-2xl">{note.dek}</p>
        </header>

        <div className="article-prose article-body note-article-body mt-12">
          {note.paragraphs.map((paragraph, index) => (
            <p key={`${note.slug}-${index}`}>{paragraph}</p>
          ))}
        </div>
      </article>

      <p aria-hidden className="section-break mx-auto mt-16 max-w-[720px]">
        ⁘
      </p>

      <nav className="hairline-top mx-auto mt-8 grid max-w-[720px] gap-8 pt-8 sm:grid-cols-2">
        {previous ? (
          <Link to={`/note/${previous.slug}`} className="group block">
            <p className="label-quiet">Previous</p>
            <p className="mt-2 font-serif text-2xl leading-snug decoration-1 underline-offset-4 group-hover:underline">
              {previous.title}
            </p>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link to={`/note/${next.slug}`} className="group block sm:text-right">
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
