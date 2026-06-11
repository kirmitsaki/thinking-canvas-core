// Per-essay editorial metadata: small-caps section openers and pull-quote text.
// The pull-quote string must appear verbatim somewhere inside one of the body
// paragraphs — at render time it is split out into its own blockquote.
// Small-caps prefixes are matched case-insensitively; the first occurrence in
// any body paragraph is wrapped in a small-caps span.

export type EssayMeta = {
  smallCapsPrefixes: string[];
  pullQuote: string;
};

export const essayMeta: Record<string, EssayMeta> = {
  "building-and-leading-design-organisations": {
    smallCapsPrefixes: ["The first move", "The harder work", "The moment design"],
    pullQuote:
      "Clarity builds trust. Trust builds autonomy. Autonomy builds teams that don't need you in every decision. Which is exactly what you want.",
  },
  "strategic-design-leadership": {
    smallCapsPrefixes: [
      "Most design leaders",
      "The first step",
      "Credibility gets you",
      "The tricky thing",
      "And then there's",
    ],
    pullQuote:
      "Credibility gets you into the room. But outcomes keep you there.",
  },
  "systems-thinking": {
    smallCapsPrefixes: [
      "What I've come",
      "At Origin Markets",
      "At Elsevier",
      "Three companies",
    ],
    pullQuote:
      "Nobody scheduled a meeting to create a permanent constraint. It just accumulated, one reasonable decision at a time, until the system had opinions of its own.",
  },
  "complex-b2b-platforms": {
    smallCapsPrefixes: [
      "I've never found",
      "What I've learned",
      "The clearest example",
      "Most designers who",
    ],
    pullQuote:
      "Learning that language before picking up a design tool is not optional. It's the job.",
  },
  "workflow-transformation": {
    smallCapsPrefixes: [
      "We kept trying",
      "Once we mapped",
      "Not all friction",
      "The people who",
    ],
    pullQuote:
      "People rarely resist losing a workflow. They resist losing the value that workflow provided.",
  },
  "design-systems": {
    smallCapsPrefixes: [
      "Before I joined",
      "When I arrived",
      "What the failed",
      "What gets lost",
    ],
    pullQuote: "Adoption is a better measure of success than quality.",
  },
  "research-led-decision-making": {
    smallCapsPrefixes: [
      "At Secure Code Warrior",
      "Bad research looks",
      "The strongest resistance",
      "In environments where",
    ],
    pullQuote: "Security wasn't unclear. It was poorly timed.",
  },
  "technical-fluency": {
    smallCapsPrefixes: [
      "At Origin Markets",
      "At Secure Code Warrior",
      "What designers without",
      "There is also",
    ],
    pullQuote:
      "Without that understanding, the design would have been correct at the interface level and expensive at the system level.",
  },
  "distributed-leadership": {
    smallCapsPrefixes: [
      "I experienced this",
      "I don't think",
      "What you give up",
      "I saw that",
    ],
    pullQuote:
      "In a distributed system, ambiguity is not neutral. It travels.",
  },
  "commercial-and-business-impact": {
    smallCapsPrefixes: [
      "The clearest example",
      "At Origin Markets",
      "What does it look",
      "There is a tension",
    ],
    pullQuote:
      "The question I kept coming back to in those conversations was not whether we should have a design system. It was whether we could afford the cost of not having one.",
  },
  "ai-enabled-ways-of-working": {
    smallCapsPrefixes: [
      "At Secure Code Warrior",
      "What AI makes",
      "The main risk",
      "What AI is doing",
      "Responsible AI use",
    ],
    pullQuote:
      "Speed without understanding increases rework, not productivity.",
  },
};
