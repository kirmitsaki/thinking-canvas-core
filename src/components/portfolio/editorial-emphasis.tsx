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