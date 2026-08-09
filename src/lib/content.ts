import { FIELD_NOTES } from "@/content/field-notes";

export type SectionSlug = "the-work" | "systems-and-people" | "field-notes";

/** Items rendered in the site header. About is not a section but belongs in nav. */
export const NAV_ITEMS: { name: string; path: string }[] = [
  { name: "The Work", path: "/the-work" },
  { name: "Across Product", path: "/systems-and-people" },
  { name: "Field Notes", path: "/field-notes" },
  { name: "About", path: "/about" },
];

export type Post = {
  slug: string;
  title: string;
  section: SectionSlug;
  dek: string;
};

export const POSTS: Post[] = [
  // Across Product — the main pieces.
  { slug: "knowing-what-to-build", title: "Knowing what to build", section: "systems-and-people", dek: "The further I moved into leadership, the less time I spent deciding what a screen should look like and the more time I spent trying to understand what we should be building in the first place." },
  { slug: "building-the-team-around-the-work", title: "Building the team around the work", section: "systems-and-people", dek: "I have been the first designer in a company and I have led a larger team. The difficult part is surprisingly similar: creating a way of working that does not depend entirely on you." },
  { slug: "seeing-the-whole-thing", title: "Seeing the whole thing", section: "systems-and-people", dek: "One reasonable decision follows another until something temporary becomes part of the structure of the product." },
  { slug: "learning-complicated-worlds", title: "Learning complicated worlds", section: "systems-and-people", dek: "Debt capital markets. Cybersecurity. Academic research. None are fields where you understand the customer by Tuesday." },
  { slug: "working-through-other-people", title: "Working through other people", section: "systems-and-people", dek: "The harder situations are the ones where several people are behaving reasonably and the system around them is still producing a poor result." },
  { slug: "getting-closer-to-reality", title: "Getting closer to reality", section: "systems-and-people", dek: "There is a moment in product work when everybody in the room agrees. That is usually the moment I become slightly nervous." },
  { slug: "what-ai-has-changed-in-my-work", title: "What AI has changed in my work", section: "systems-and-people", dek: "The biggest improvement has not been producing the same work faster. It has been getting to the uncomfortable questions earlier." },
  { slug: "why-i-still-think-like-an-engineer", title: "Why I still think like an engineer", section: "systems-and-people", dek: "The barrier to making something work has fallen much faster than the barrier to understanding what you have made." },

  // Field Notes — short entries.
  ...FIELD_NOTES.map(({ slug, title, dek }) => ({
    slug,
    title,
    section: "field-notes" as const,
    dek,
  })),
];

export const postsInSection = (section: SectionSlug) =>
  POSTS.filter((p) => p.section === section);

export const postDetailPath = (post: Post) =>
  post.section === "field-notes" ? `/note/${post.slug}` : `/piece/${post.slug}`;
