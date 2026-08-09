import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import featuredImage from "@/assets/featured-golden-ratio.jpg";

const FEATURED_SLUG = "knowing-what-to-build";
const FEATURED_TITLE = "Knowing what to build";
const FEATURED_BODY =
  "Early in my career, the problem was usually already defined. Later, I found myself spending much more time working out what we should be building in the first place.";
const HOME_QUOTE =
  "Once we agreed what the product was becoming, a lot of smaller decisions got easier.";

function ReadingMode({
  number,
  title,
  description,
  to,
  action,
}: {
  number: string;
  title: string;
  description: string;
  to: string;
  action: string;
}) {
  return (
    <Link to={to} className="group flex h-full flex-col">
      <span className="label-quiet mb-6">SECTION {number}</span>
      <h2 className="font-serif text-4xl leading-[1.08] lg:text-5xl">{title}</h2>
      <p className="mt-6 max-w-[28ch] font-serif text-[16px] leading-[1.75] text-muted-foreground">
        {description}
      </p>
      <span className="accent-link mt-auto inline-flex items-center gap-2 pt-8">
        <span className="h-px w-8 bg-foreground/20 transition-all duration-300 group-hover:w-12 group-hover:bg-accent" />
        {action}
      </span>
    </Link>
  );
}

export default function Home() {
  return (
    <main>
      <Seo
        title="Rachel Kirmitsaki — Notes from inside product teams"
        description="A working notebook: field notes, longer pieces on product and people, and the places the observations came from."
        path="/"
      />

      {/* 1 — Opening statement */}
      <section className="mx-auto max-w-[1200px] px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <h1 className="max-w-[32ch] animate-rk-fade-in font-serif text-[30px] italic leading-[1.3] text-foreground md:text-[46px] md:leading-[1.25]">
          I have always liked making things. I started with <span className="text-accent">code</span>,
          moved into <span className="text-accent">design</span>, and eventually into{" "}
          <span className="text-accent">product</span> leadership so I could be more involved in
          deciding what we build and why.
        </h1>
      </section>

      {/* 2 — Featured piece */}
      <section className="bg-card">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
          <Link
            to={`/piece/${FEATURED_SLUG}`}
            className="group grid grid-cols-1 items-start gap-10 md:grid-cols-[1.618fr_1fr] md:gap-14"
          >
            <div>
              <p className="label">ACROSS PRODUCT</p>
              <h2 className="mt-5 font-serif text-[34px] leading-[1.05] tracking-tight decoration-1 underline-offset-[6px] group-hover:underline md:text-[54px]">
                {FEATURED_TITLE}
              </h2>
              <p className="mt-7 max-w-[58ch] font-serif text-lg leading-[1.7] text-muted-foreground md:text-xl">
                {FEATURED_BODY}
              </p>
              <span className="accent-link mt-8 inline-block">READ MORE →</span>
            </div>
            <div>
              <img
                src={featuredImage}
                alt="Golden ratio construction diagram accompanying the lead piece"
                loading="lazy"
                className="h-auto w-full rounded-[10px] object-contain"
              />
            </div>
          </Link>
        </div>
      </section>

      {/* 3 — Pull quote */}
      <section className="camel-wash">
        <div className="mx-auto max-w-[900px] px-6 py-20 text-center md:py-28">
          <blockquote className="font-serif text-[26px] italic leading-[1.3] text-foreground md:text-[38px]">
            &ldquo;{HOME_QUOTE}&rdquo;
          </blockquote>
        </div>
      </section>

      {/* 4 — Three reading modes */}
      <section className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 border-t border-border pt-10 md:grid-cols-3 md:gap-16 lg:gap-24 lg:pt-12">
          <ReadingMode
            number="01"
            title="The Work"
            description="The products, teams and companies behind most of the writing here."
            to="/the-work"
            action="READ →"
          />
          <ReadingMode
            number="02"
            title="Across Product"
            description="Longer pieces about strategy, teams, systems, customers and technology."
            to="/systems-and-people"
            action="ALL →"
          />
          <ReadingMode
            number="03"
            title="Field Notes"
            description="Short notes from meetings, tools, decisions and the odd thing that keeps happening."
            to="/field-notes"
            action="ALL →"
          />
        </div>
      </section>

      {/* 5 — Closing block */}
      <section className="bg-chocolate">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
          <Link to="/about" className="group block max-w-[62ch]">
            <p className="dark-card-label">ABOUT</p>
            <div className="mt-6 space-y-6 font-serif text-2xl leading-[1.3] text-warm-ivory md:text-[34px]">
              <p>I grew up in the 90s, when computers still felt slightly mysterious.</p>
              <p>
                One came home after a tech expo, took over a corner of the house, and became the
                thing I wanted to understand.
              </p>
            </div>
            <span className="dark-card-label mt-8 inline-block decoration-1 underline-offset-4 group-hover:underline">
              READ THE STORY →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
