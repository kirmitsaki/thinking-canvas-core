import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { postDetailPath, postsInSection } from "@/lib/content";

export default function FieldNotes() {
  const posts = postsInSection("field-notes");

  return (
    <main className="page-shell pt-10 pb-20">
      <Seo
        title="Field Notes · Rachel Kirmitsaki"
        description="Things I wrote down before I forgot them: moments from meetings, questions worth asking, and behaviours seen across teams."
        path="/field-notes"
      />

      <header className="mx-auto mt-12 mb-14 max-w-[62ch] text-center">
        <p className="label">Field Notes</p>
        <h1 className="mt-4 font-serif text-[42px] leading-[1.04] tracking-tight md:text-[60px]">
          Meetings, tools, decisions, people, and the odd thing that keeps happening.
        </h1>
      </header>

      <div className="note-grid columns-1 gap-5 sm:columns-2 lg:columns-3">
        {posts.map((post, index) => (
          <Link
            key={post.slug}
            to={postDetailPath(post)}
            className="note-card group mb-5 break-inside-avoid"
          >
            <div className="text-center">
              <span className="label-quiet">{String(index + 1).padStart(3, "0")}</span>
              <span className="mx-auto mt-4 block w-full max-w-[20ch] font-serif text-[25px] leading-[1.15] transition-colors group-hover:text-accent md:text-[28px]">
                {post.title}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <p className="ornament mt-20 text-center text-2xl">❦</p>
    </main>
  );
}
