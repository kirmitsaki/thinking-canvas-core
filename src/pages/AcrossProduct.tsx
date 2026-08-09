import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { postsInSection, type Post } from "@/lib/content";

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

function Cluster({ label, posts }: { label: string; posts: Post[] }) {
  if (posts.length === 0) return null;
  return (
    <section className="hairline-top pt-10">
      <p className="label-quiet mb-10">{label}</p>
      <div className="grid grid-cols-1 gap-x-16 gap-y-14 md:grid-cols-2">
        {posts.map((post) => {
          const copy = PIECE_COPY[post.slug];
          if (!copy) return null;

          return (
            <Link
              key={post.slug}
              to={`/piece/${post.slug}`}
              className="group block max-w-[52ch]"
            >
              <p className="label-quiet mb-4">{copy.eyebrow}</p>
              <h3 className="font-serif text-2xl leading-[1.2] decoration-1 underline-offset-4 group-hover:underline md:text-[28px]">
                {copy.title}
              </h3>
              <p className="mt-4 font-serif text-[17px] leading-[1.8] text-muted-foreground">
                {copy.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default function AcrossProduct() {
  const posts = postsInSection("systems-and-people");
  const [featured, ...rest] = posts;
  const firstCluster = rest.slice(0, 3);
  const secondCluster = rest.slice(3);

  return (
    <main className="page-shell pt-10 pb-24">
      <Seo
        title="Across Product · Rachel Kirmitsaki"
        description="Longer pieces from Rachel Kirmitsaki on product direction, teams, systems, customers and technology."
        path="/systems-and-people"
      />

      <header className="page-header">
        <p className="label">Across Product</p>
        <h1 className="mt-4 font-serif text-[42px] leading-[1.04] tracking-tight md:text-[60px]">
          Different companies and products, but I kept running into the same kinds of problems.
        </h1>
        <p className="mt-6 max-w-[58ch] font-serif text-[20px] leading-[1.7] text-muted-foreground">
          What to build, how to grow a team, why a product had become so complicated, what customers
          were actually doing, and how to make a decision when several teams had a stake in it.
        </p>
      </header>

      {featured && (
        <Link to={`/piece/${featured.slug}`} className="group block pt-10 pb-14">
          <p className="label">{PIECE_COPY[featured.slug]?.eyebrow}</p>
          <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight decoration-1 underline-offset-[6px] group-hover:underline md:text-[56px]">
            {PIECE_COPY[featured.slug]?.title}
          </h2>
          <p className="mt-7 max-w-[58ch] font-serif text-[20px] leading-[1.85] text-foreground/85">
            {PIECE_COPY[featured.slug]?.description}
          </p>
          <p className="accent-link mt-6">READ THE PIECE →</p>
        </Link>
      )}

      <Cluster label="Also in this chapter" posts={firstCluster} />

      <figure className="mx-auto my-20 max-w-[46ch] text-center">
        <span aria-hidden className="ornament mb-6 block text-2xl">
          ❦
        </span>
        <blockquote className="font-serif text-3xl italic leading-[1.3] tracking-tight md:text-[40px]">
          “Doing it yourself can be deceptively efficient. For about twenty minutes.”
        </blockquote>
      </figure>

      <Cluster label="Continued" posts={secondCluster} />
    </main>
  );
}
