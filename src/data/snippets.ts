export type Snippet = {
  to: string;
  image?: string;
  project: string;
  name: string;
  description: string;
  disabled?: boolean;
};

export const snippets: Snippet[] = [
  // SCW case study shows every card below; only the enabled ones appear in Portfolio snippets.
  {
    to: "/work/secure-code-warrior#product-vision",
    project: "Secure Code Warrior",
    name: "Product vision",
    description: "Repositioning the company from a learning platform to a holistic developer risk solution.",
    disabled: true,
  },
  {
    to: "/work/secure-code-warrior/product-design-identity",
    image: "scw-identity-header",
    project: "Secure Code Warrior",
    name: "Product design identity",
    description: "Colour, interface examples and character artwork for the new product vision.",
  },
  {
    to: "/work/secure-code-warrior#design-system",
    image: "scw-wanda",
    project: "Secure Code Warrior",
    name: "Design system",
    description: "Wanda, the platform’s first design system, from shared file to living system.",
    disabled: true,
  },
  {
    to: "/work/secure-code-warrior#ai-workflows",
    image: "scw-ai-workflows",
    project: "Secure Code Warrior",
    name: "AI workflows",
    description: "AI-enabled prototyping that cut idea-to-validated-concept time to under four weeks.",
    disabled: true,
  },
  {
    to: "/work/secure-code-warrior#products",
    project: "Secure Code Warrior",
    name: "Products",
    description: "Developer Risk Management, Learning Platform, Trust Agent, Reporting and Content.",
    disabled: true,
  },
  {
    to: "/work/secure-code-warrior/cybermon",
    image: "cybermon-snippet",
    project: "Secure Code Warrior",
    name: "Cybermon",
    description: "Three years of gamified secure coding tournaments, 2024 to 2026.",
  },
  {
    to: "/work/origin-markets#design-system",
    image: "origin-morpho",
    project: "Origin Markets",
    name: "Morpho",
    description: "The design system behind every screen of the Origin platform.",
  },
  {
    to: "/work/origin-markets/gallery",
    image: "origin-sample-work",
    project: "Origin Markets",
    name: "Across the platform",
    description: "A selection of product screens showcasing dashboards, market data, pricing and documentation workflows.",
  },
  {
    to: "/work/mendeley#design-system",
    image: "mendeley-design-system-snippet",
    project: "Mendeley",
    name: "Reference Manager 2.0",
    description: "The UI Pattern Library and reusable Sketch components for Reference Manager.",
  },
  {
    to: "/work/mendeley/sample-work?view=library",
    image: "mendeley-library-snippet",
    project: "Mendeley",
    name: "Library",
    description: "Reference organisation, collections and search designed with researchers.",
  },
  {
    to: "/work/mendeley/sample-work?view=reader",
    image: "mendeley-reader-snippet",
    project: "Mendeley",
    name: "Reader",
    description: "Paper reading, highlighting and annotation flows designed with researchers.",
  },
  {
    to: "/work/mendeley/sample-work?view=citation",
    image: "mendeley-citation-snippet",
    project: "Mendeley",
    name: "Citation",
    description: "Citation selection, formatting and insertion within Word documents.",
  },
  // Hidden Nov 2026 (kept for later): Aladdin and CorResilience snippets.
  // {
  //   to: "/work/aladdin#interface",
  //   image: "aladdin-header",
  //   project: "Aladdin",
  //   name: "Android and iOS",
  //   description: "Health records, appointment booking and preventative care across the healthcare app.",
  // },
  // {
  //   to: "/work/aladdin#brand",
  //   image: "aladdin-brand",
  //   project: "Aladdin",
  //   name: "Brand and service guide",
  //   description: "Logo, typography, colour and imagery for the healthcare platform.",
  // },
  // {
  //   to: "/work/corresilience#interface",
  //   image: "cor-header",
  //   project: "CorResilience",
  //   name: "Android and iOS",
  //   description: "Onboarding, health dashboards, goals and learning flows for the wellbeing app.",
  // },
  // {
  //   to: "/work/corresilience#brand",
  //   image: "cor-brand",
  //   project: "CorResilience",
  //   name: "Brand and service guide",
  //   description: "Identity, typography and iconography across the app and website.",
  // },
];

