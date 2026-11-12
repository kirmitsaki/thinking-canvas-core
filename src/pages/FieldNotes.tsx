import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { pageMeta } from "@/data/projects";
import { PIECES } from "@/data/pieces";

const meta = pageMeta(
  "Field Notes",
  "Longer pieces from Rachel Kirmitsaki on product direction, teams, systems, customers and technology."
);

type PieceCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

const PIECE_COPY: Record<string, PieceCopy> = {
  "knowing-what-to-build": {
    eyebrow: "STRATEGY BEFORE EXECUTION",
    title: "Knowing what to build",
    description:
      "Early in my career, the problem was usually already defined. As the roles became more senior, I found myself spending much more time working out what we should be building in the first place.",
  },
  "building-the-team-around-the-work": {
    eyebrow: "BUILDING ORGANISATIONS",
    title: "Building the team around the work",
    description:
      "I have been the first designer in a company and I have led a larger team. The work looks very different, but both taught me how quickly things stop working when too much knowledge lives in one person’s head.",
  },
  "seeing-the-whole-thing": {
    eyebrow: "SYSTEMS THINKING",
    title: "Seeing the whole thing",
    description:
      "A temporary feature that is still with us years later, products that grow one reasonable decision at a time, and why I now spend more time looking at what something is connected to before changing it.",
  },
  "learning-complicated-worlds": {
    eyebrow: "COMPLEX ENTERPRISE PRODUCTS",
    title: "Learning complicated worlds",
    description:
      "Cybersecurity, financial markets and academic research each came with their own language, workflows and things that looked unnecessary until I understood why they were there.",
  },
  "working-through-other-people": {
    eyebrow: "CROSS-FUNCTIONAL LEADERSHIP",
    title: "Working through other people",
    description:
      "I started spending more of my time on problems that did not belong neatly to one team. This is about working through them with product, engineering and the other people who had a stake in the decision.",
  },
  "getting-closer-to-reality": {
    eyebrow: "CUSTOMER INSIGHT",
    title: "Getting closer to reality",
    description:
      "Some of the most useful customer conversations I have had were the ones that made a perfectly sensible internal plan stop making sense.",
  },
  "what-ai-has-changed-in-my-work": {
    eyebrow: "AI-ENABLED PRODUCT LEADERSHIP",
    title: "Modern, AI-enabled product leadership",
    description:
      "AI has changed the day-to-day work of my team quickly. We can make ideas tangible much earlier, work closer to implementation, and get things wrong before anyone has invested too much in them.",
  },
  "why-i-still-think-like-an-engineer": {
    eyebrow: "TECHNICAL FLUENCY",
    title: "Why I still think like an engineer",
    description:
      "I started my career writing code and then spent years mostly not writing it. AI has brought me much closer to implementation again, which has made knowing enough not to break things unexpectedly useful.",
  },
};

export default function FieldNotes() {
  const [featured, ...rest] = PIECES;
  const firstCluster = rest.slice(0, 3);
  const secondCluster = rest.slice(3);

  return (
    <main className="relative z-10 mx-auto max-w-[1200px] px-6 pb-24">
      <Seo
        title={meta.title}
        description={meta.description}
        path="/field-notes"
        ogType={meta.ogType}
      />
      <header className="fade-in pb-10 pt-12 md:pb-14 md:pt-16">
        <h1 className="page-title">Notes</h1>
        <p className="standfirst mt-6 max-w-[720px]">
          Different companies, similar challenges: what to build, how to grow teams, simplify
          products, understand customers and make better decisions.
        </p>
      </header>

      {featured && (
        <Link to={`/field-notes/${featured.slug}`} className="group block pt-10 pb-14">
          <p className="label">{PIECE_COPY[featured.slug]?.eyebrow}</p>
          <h2 className="mt-5 section-title group-hover:underline underline-offset-[6px] decoration-1">
            {PIECE_COPY[featured.slug]?.title}
          </h2>
          <p className="mt-7 max-w-[58ch] note-article-body text-foreground">
            {PIECE_COPY[featured.slug]?.description}
          </p>
          <p className="mt-6 accent-link">READ MORE <span className="arrow-nudge">→</span></p>
        </Link>
      )}

      <Cluster slugs={firstCluster.map((p) => p.slug)} />

      <figure className="my-20 max-w-[46ch] mx-auto text-center">
        <span aria-hidden className="ornament mb-6 block text-2xl">
          ❦
        </span>
        <blockquote className="pull-quote">
          “Doing it yourself can be deceptively efficient. For about twenty minutes.”
        </blockquote>
      </figure>

      <Cluster slugs={secondCluster.map((p) => p.slug)} />
    </main>
  );
}

function Cluster({ slugs }: { slugs: string[] }) {
  if (slugs.length === 0) return null;
  return (
    <section className="hairline-top pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
        {slugs.map((slug) => {
          const copy = PIECE_COPY[slug];
          if (!copy) return null;
          return (
            <Link
              key={slug}
              to={`/field-notes/${slug}`}
              className="group block max-w-[52ch]"
            >
              <p className="label-quiet mb-4">{copy.eyebrow}</p>
              <h3 className="card-title group-hover:underline underline-offset-4 decoration-1">
                {copy.title}
              </h3>
              <p className="mt-4 note-article-body text-muted-foreground">{copy.description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
