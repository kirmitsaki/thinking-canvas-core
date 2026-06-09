import { Link, useParams } from "react-router-dom";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

type Block =
  | { type: "p"; text: string }
  | { type: "lede"; text: string }
  | { type: "h2"; text: string }
  | { type: "pull"; text: string };

const essayContent: Record<string, { title: string; blocks: Block[] }> = {
  "product-direction": {
    title: "Product Direction",
    blocks: [
      {
        type: "lede",
        text: "Most teams do not lack ideas. They lack a way to choose between them that holds for longer than a quarter.",
      },
      {
        type: "p",
        text: "Product direction is often confused with roadmapping. A roadmap is a record of decisions. Direction is the thing those decisions are tested against. Without it, a roadmap drifts toward whatever was loudest in the last review.",
      },
      {
        type: "p",
        text: "At Secure Code Warrior, the question was never which feature to ship next. It was which kind of company we were becoming, and whether the next twelve months would make that shape more legible or less. Direction is what answers that question, written down, before anyone opens a backlog.",
      },
      { type: "h2", text: "What direction is" },
      {
        type: "p",
        text: "Direction is a small set of statements about the future the team is willing to defend. It is short enough to be remembered, opinionated enough to exclude things, and concrete enough that two reasonable people would agree on whether a given decision honours it.",
      },
      {
        type: "pull",
        text: "Direction is what gives a team the right to say no without rehearsing the argument every time.",
      },
      {
        type: "p",
        text: "At Origin Markets, we wrote ours on a single page. It survived three reorganisations because it described what the product was for, not what it would do.",
      },
      { type: "h2", text: "How it gets made" },
      {
        type: "p",
        text: "Direction is not produced in a workshop. It is produced in the long, unglamorous conversations between the people closest to the customer and the people closest to the architecture. The role of design, in my experience, is to make those conversations legible — to write them down in a form the rest of the company can use.",
      },
      {
        type: "p",
        text: "When it works, the team stops asking what to build next. They start asking whether the next thing makes the previous things make more sense.",
      },
    ],
  },
  "building-design-functions": {
    title: "Building Design Functions",
    blocks: [
      {
        type: "lede",
        text: "The first design hire rarely builds a design team. They build the conditions under which one becomes possible.",
      },
      {
        type: "p",
        text: "Joining a company without a design function is, at first, indistinguishable from joining a company without a design problem. The work is everywhere and nowhere. There are no rituals, no artefacts, no shared vocabulary. The job for the first year is to invent the smallest amount of structure that will hold.",
      },
      { type: "h2", text: "Start with the seams" },
      {
        type: "p",
        text: "I look first at the seams between functions. Where does product meet engineering badly? Where does sales describe the product in a way the team would not recognise? These seams are where a design practice earns its place — not by claiming territory, but by translating.",
      },
      { type: "pull", text: "A design function is, in its first year, mostly translation." },
      {
        type: "p",
        text: "At Origin Markets the seam was between sales and product. At Secure Code Warrior it was between research and engineering. In both cases, the first useful thing was not a design system. It was a shared way of describing the customer.",
      },
      { type: "h2", text: "Hire late, write early" },
      {
        type: "p",
        text: "It is tempting to hire quickly. I have learned to write first — to put the practice on paper before putting people in seats. Hires inherit the culture they arrive into. Writing it down, however incompletely, gives the second and third designer something to push against.",
      },
    ],
  },
  "designing-complex-systems": {
    title: "Designing Complex Systems",
    blocks: [
      {
        type: "lede",
        text: "A product that grows is a product that accumulates exceptions. The job is to keep the exceptions from becoming the system.",
      },
      {
        type: "p",
        text: "Every product I have worked on long enough has reached the same point. The original mental model — the one that made the first version coherent — stops describing the thing the product has become. The team feels it before they can name it. Decisions take longer. Edge cases multiply. New hires take six months to be useful.",
      },
      { type: "h2", text: "Models, not screens" },
      {
        type: "p",
        text: "At Mendeley, the research platform had grown across a decade. The interface was the smallest part of the problem. The harder work was naming the underlying objects in a way that the next ten years of features could be hung from. A pattern library helps; a model is what makes a pattern library worth maintaining.",
      },
      {
        type: "pull",
        text: "A design system is a record of the decisions a team has stopped making.",
      },
      { type: "h2", text: "Carrying memory" },
      {
        type: "p",
        text: "Design systems are often described in terms of consistency. I find it more useful to describe them in terms of memory. They are the place where a team’s past decisions are kept legible to people who were not in the room when those decisions were made. Without that, every new feature is a small re-litigation of the product’s first principles.",
      },
    ],
  },
  "ai-and-product-development": {
    title: "AI and Product Development",
    blocks: [
      {
        type: "lede",
        text: "The interesting shift is not that AI writes code. It is that describing a product carefully has become, for the first time, the bottleneck in building one.",
      },
      {
        type: "p",
        text: "For most of my career, the gap between a clear product description and a working version of it has been measured in weeks. That gap is closing. Prototypes that would have taken a sprint now take an afternoon. The work that remains is the work that was always hardest: deciding what is worth building, and for whom.",
      },
      { type: "h2", text: "Cheaper prototypes, harder choices" },
      {
        type: "p",
        text: "When prototyping is cheap, the discipline shifts upstream. The expensive part is no longer the building; it is the framing. Teams that treat AI as a way to ship more end up with more of the wrong thing. Teams that treat it as a way to ask better questions earlier end up with products that hold together.",
      },
      {
        type: "pull",
        text: "AI does not remove the need for judgment. It moves judgment closer to the start of the process.",
      },
      { type: "h2", text: "What doesn’t change" },
      {
        type: "p",
        text: "The parts of the job that survive are the ones that were never really about producing artefacts. Understanding the customer. Holding a point of view. Knowing when a product has stopped being one product and become two. These remain, undisturbed, and arguably more valuable than before.",
      },
    ],
  },
};

export default function Essay() {
  const { slug } = useParams();
  const essay = slug ? essayContent[slug] : undefined;

  if (!essay) {
    return (
      <div className="min-h-screen bg-background">
        <SiteNav />
        <main className="mx-auto max-w-[900px] px-6 py-32">
          <p className="font-editorial text-3xl">Not found.</p>
          <Link to="/" className="mt-6 inline-block text-sm uppercase tracking-[0.22em]">
            ← Back
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="mx-auto max-w-[1320px] px-6 md:px-12">
        <section className="pt-24 md:pt-40 pb-16 md:pb-24 max-w-4xl">
          <h1 className="font-editorial text-[44px] sm:text-[64px] md:text-[96px] leading-[1] tracking-[-0.02em] text-[hsl(var(--ink-strong))]">
            {essay.title}
          </h1>
        </section>

        <hr className="border-[hsl(var(--hairline))]" />

        <article className="py-16 md:py-24 max-w-[680px]">
          {essay.blocks.map((b, i) => {
            if (b.type === "lede")
              return (
                <p
                  key={i}
                  className="font-editorial text-[26px] md:text-[34px] leading-[1.3] tracking-[-0.005em] text-[hsl(var(--ink-strong))] mb-12"
                >
                  {b.text}
                </p>
              );
            if (b.type === "h2")
              return (
                <h2
                  key={i}
                  className="mt-14 mb-6 text-[12px] uppercase tracking-[0.22em] text-[hsl(var(--ink-strong))]"
                >
                  {b.text}
                </h2>
              );
            if (b.type === "pull")
              return (
                <blockquote
                  key={i}
                  className="my-12 border-t border-b border-[hsl(var(--hairline))] py-8 font-editorial italic text-[24px] md:text-[30px] leading-[1.3] text-[hsl(var(--ink-strong))]"
                >
                  “{b.text}”
                </blockquote>
              );
            return (
              <p
                key={i}
                className="mb-6 text-[17px] md:text-[18px] leading-[1.7] text-[hsl(var(--ink-body))]"
              >
                {b.text}
              </p>
            );
          })}

          <div className="mt-20">
            <Link
              to="/"
              className="text-[12px] uppercase tracking-[0.22em] text-[hsl(var(--meta-ink))] hover:text-[hsl(var(--ink-strong))]"
            >
              ← Index
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
