import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

export default function NotFound() {
  return (
    <div>
      <Seo
        title="Not found · Rachel Kirmitsaki"
        description="This page hasn’t been filed."
        path="/404"
      />
      <div className="mx-auto max-w-[1200px] px-6 pt-10">
        <div className="masthead-bar">
          <Link to="/" className="label underline-offset-4 hover:underline">
            ← Front page
          </Link>
          <p className="label text-muted-foreground">Not found</p>
        </div>
      </div>
      <main className="mx-auto max-w-[720px] px-6 pt-24 pb-16 text-center">
        <p className="label text-muted-foreground">404</p>
        <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight md:text-6xl">
          This page hasn’t been filed.
        </h1>
        <p className="mx-auto mt-6 max-w-[52ch] font-serif text-xl italic text-muted-foreground">
          The link may have moved, or perhaps it never quite existed.
        </p>
        <Link
          to="/"
          className="mt-10 inline-block border-b border-foreground pb-0.5 font-serif italic"
        >
          Return to the front page
        </Link>
      </main>
    </div>
  );
}
