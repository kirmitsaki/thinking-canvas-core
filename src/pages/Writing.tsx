import { useNavigate, useParams } from "react-router-dom";
import { PageHeader, PageRule, PageShell } from "@/components/PageShell";
import EssayModal from "@/components/EssayModal";
import Seo from "@/components/Seo";
import { essays as essayContent } from "@/content/essays";

type EssayItem = { slug: string; title: string; blurb: string };

// Flat list, no categories. Ordered 01 → 11.
const essays: EssayItem[] = [
  {
    slug: "ai-enabled-ways-of-working",
    title: "AI-enabled ways of working",
    blurb:
      "The biggest change AI made to how I work isn't speed. It's that weak ideas fail earlier and strong ideas surface sooner. One of my designers recently went a week without opening Figma. That felt significant.",
  },
  {
    slug: "building-and-leading-design-organisations",
    title: "Building and leading design organisations",
    blurb:
      "I've walked into a few companies where design was technically present but nobody was quite sure what it was for. This is what I learned from building it properly.",
  },
  {
    slug: "strategic-design-leadership",
    title: "Strategic design leadership",
    blurb:
      "Getting a seat at the table is one thing. Keeping it when everyone else in the room has a very strong opinion about next Friday's deadline is another.",
  },
  {
    slug: "systems-thinking",
    title: "Systems thinking",
    blurb:
      "Most problems that look like design problems aren't design problems. They're symptoms of something upstream. A button in the wrong place is rarely about the button.",
  },

  {
    slug: "complex-b2b-platforms",
    title: "Complex B2B platforms",
    blurb:
      "B2B gets a bad reputation for being unglamorous. I'd argue it's where the actually interesting problems live. The ones where the interface is the least complicated part.",
  },
  {
    slug: "workflow-transformation",
    title: "Workflow transformation",
    blurb:
      "The most valuable thing I've learned about transforming how people work is that the parts that look most broken are often the parts doing the most important job.",
  },
  {
    slug: "research-led-decision-making",
    title: "Research-led decision making",
    blurb:
      "Research isn't about running studies. It's about building the habit of being wrong less often. Harder than it sounds, especially when the roadmap is already planned.",
  },
  {
    slug: "design-systems",
    title: "Design systems",
    blurb:
      "A design system is not a component library. It's a decision-making system. The difference matters more than most organisations realise until it's too late.",
  },
  {
    slug: "technical-fluency",
    title: "Technical fluency",
    blurb:
      "I started my career writing code. I haven't written production code in years. The way it still shows up every single day is one of the more useful things I can share.",
  },
  {
    slug: "distributed-leadership",
    title: "Distributed leadership",
    blurb:
      "Leading a team across EMEA and APAC sounds like a logistics problem. It's actually a clarity problem. Everything that breaks is a symptom of the same thing.",
  },
  {
    slug: "commercial-and-business-impact",
    title: "Commercial and business impact",
    blurb:
      "Design either shapes commercial outcomes or it doesn't. There's very little middle ground. This is how I think about making sure it's the former.",
  },
];

const romans = ["I","II","III","IV","V","VI","VII","VIII","IX","X","XI"];

export default function Writing() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const openEssay = slug ? essayContent[slug] : undefined;

  const openModal = (s: string) => navigate(`/essays/${s}`);
  const closeModal = () => navigate("/writing");

  const SITE_URL = "https://rachel.kirmitsaki.com";

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Writing", item: `${SITE_URL}/writing` },
      ...(slug && openEssay
        ? [{ "@type": "ListItem", position: 3, name: openEssay.title, item: `${SITE_URL}/essays/${slug}` }]
        : []),
    ],
  };

  const essayMeta = slug ? essays.find((e) => e.slug === slug) : undefined;
  const articleSchema =
    slug && openEssay && essayMeta
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: openEssay.title,
          description: essayMeta.blurb,
          url: `${SITE_URL}/essays/${slug}`,
          author: {
            "@type": "Person",
            name: "Rachel Kirmitsaki",
            url: SITE_URL,
          },
          mainEntityOfPage: `${SITE_URL}/essays/${slug}`,
        }
      : null;

  const jsonLd = articleSchema ? [articleSchema, breadcrumb] : [breadcrumb];

  return (
    <PageShell>
      <Seo
        title={slug && openEssay ? `${openEssay.title} — Rachel Kirmitsaki` : "Writing — Rachel Kirmitsaki"}
        description={
          slug && essayMeta
            ? essayMeta.blurb
            : "Essays by Rachel Kirmitsaki on design leadership, systems thinking, AI-enabled workflows, design systems and shaping complex B2B products."
        }
        path={slug ? `/essays/${slug}` : "/writing"}
        jsonLd={jsonLd}
        ogType={slug && openEssay ? "article" : "website"}

      />

      <PageHeader title="Writing" />

      <PageRule />

      <ul className="pt-10 md:pt-16 pb-20 md:pb-28">
        {essays.map((item, idx) => {
          const n = romans[idx];
          return (
            <li
              key={item.slug}
              className="border-b border-[hsl(var(--hairline))]"
            >
              <button
                type="button"
                onClick={() => openModal(item.slug)}
                className="group w-full text-left grid grid-cols-12 gap-4 md:gap-8 items-start py-10 md:py-14"
              >
                <div className="col-span-2 md:col-span-2">
                  <span
                    aria-hidden
                    className="block font-editorial font-light text-[22px] sm:text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.01em] text-[hsl(var(--meta-ink))] group-hover:text-[hsl(var(--accent-stone))] transition-colors duration-300"
                  >
                    {n}
                  </span>
                </div>
                <div className="col-span-10 md:col-span-10 min-w-0">
                  <h2 className="flex items-center gap-2 sm:gap-3 font-editorial text-[20px] sm:text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.015em] text-[hsl(var(--ink-strong))] group-hover:italic transition-[font-style] break-words">
                    {item.title}
                    <span
                      aria-hidden
                      className="inline-block text-[0.6em] text-[hsl(var(--meta-ink))] group-hover:text-[hsl(var(--accent-stone))] group-hover:translate-x-1 transition-all duration-300"
                    >
                      →
                    </span>
                  </h2>
                  <p className="mt-3 sm:mt-4 max-w-[660px] text-[15px] sm:text-[17px] leading-[1.65] text-[hsl(var(--ink-body))]">
                    {item.blurb}
                  </p>
                </div>

              </button>
            </li>
          );
        })}
      </ul>

      {openEssay && slug && <EssayModal essay={openEssay} slug={slug} onClose={closeModal} />}
    </PageShell>
  );
}
