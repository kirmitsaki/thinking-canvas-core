import type { ReactNode } from "react";

// Emphasis changes presentation only; the original narrative remains intact.
const phrases = [
  "over 120,000 researchers", "more than one million references",
  "navigation and information architecture", "real researcher workflows",
  "thousands of references across dozens of collections", "richness versus simplicity",
  "reducing the number of steps", "The pattern library was the master file.",
  "78% of users", "centralised, secure, and genuinely easy to use",
  "The core design challenge was trust.", "clear, calm, and confident",
  "proven analogue programme", "behavioural change", "clinical credibility",
  "continuous research and usability testing", "information architecture",
  "visual identity", "WCAG 2.2 AA", "over 70%", "built with engineers",
  "one of the hardest design problems there is", "something clearly better in return",
  "7 to 10 users weekly", "live-streamed to all cross-functional team members",
  "the common reference point for the whole team", "prevent scope creep",
  "UI Pattern Library", "reveal tools on interaction", "forgiving, clear, and fast",
  "That number was the brief.", "discovery workshops with the founders",
  "users aged 12 to 29", "legible and honest", "communicate safety intuitively",
  "Getting the hierarchy right", "put the pet owner at the centre",
  "approachable, reliable, and playful", "Trust has to come first.",
  "The booking is the result of trust, not the cause of it.",
  "treated migrants as capable adults", "We started with the people, not the product.",
  "a personalised checklist", "People needed human connection and local knowledge.",
  "Thinking in code from the start changes how you design.",
  "designed and built end to end", "always knew where they were",
  "Every page led towards an enquiry",
  "make a clearer product direction work within an existing platform",
  "consistency across teams, not just consistency across screens",
  "AI-assisted prototyping in the live product codebase", "under four weeks",
  "simpler interface reduces the cognitive load",
  "interviews", "surveys", "consulted with vets", "early prototypes",
  "Reliable information.", "Simplified processes.", "Personalised guidance.", "Community connection.",
  "7 October 2024", "6 October 2025", "5 October 2026",
  "Pokémon meets secure coding", "AI and Large Language Model (LLM) security",
  "AI security challenges", "traditional cybersecurity with AI security",
  "Built by AI. Secured by You.",
];

export function editorialEmphasis(text: string): ReactNode {
  const matches = phrases.filter(phrase => text.toLowerCase().includes(phrase.toLowerCase()));
  if (!matches.length) return text;
  const pattern = new RegExp(`(${matches.map(phrase => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  return text.split(pattern).map((part, index) =>
    matches.some(phrase => phrase.toLowerCase() === part.toLowerCase())
      ? <strong key={index}>{part}</strong>
      : part
  );
}