import { Mail, Linkedin } from "lucide-react";
import Seo from "@/components/Seo";
import { pageMeta } from "@/data/projects";
import { contactDetails } from "@/data/contact";

const meta = pageMeta(
  "Contact",
  "Contact Rachel Kirmitsaki for Product Design Consultant and contract engagements in London, working remotely."
);

const channels = [
  {
    icon: Mail,
    label: "Email",
    text: contactDetails.email,
    href: contactDetails.emailHref,
    external: false,
    note: "Best for new engagements and introductions.",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    text: "linkedin.com/in/rachelkirmitsaki",
    href: contactDetails.linkedin,
    external: true,
    note: "For background and a quick hello.",
  },
];

const fit: [string, string][] = [
  [
    "Product design",
    "10+ years of experience designing complex digital products across fintech, EdTech and SaaS, from early discovery through to delivery.",
  ],
  [
    "Design systems",
    "Experience building, maintaining and scaling design systems from the ground up, supporting multiple product teams and engineering teams.",
  ],
  [
    "Figma proficiency",
    "Strong knowledge of component architecture, shared libraries, variables, tokens and documentation.",
  ],
  [
    "Systems mindset",
    "Ability to look beyond individual screens and understand how components work across different products, user flows and use cases.",
  ],
  [
    "Accessibility",
    "Experience auditing products, establishing guidelines and embedding WCAG standards into the design process.",
  ],
  [
    "AI prototyping",
    "Hands-on experience with the latest AI tools to explore ideas, prototype concepts and accelerate product validation.",
  ],
];

export default function Contact() {
  return (
    <main className="relative z-10 mx-auto max-w-[1200px] px-6 py-12 md:py-16">
      <Seo
        title={meta.title}
        description={meta.description}
        path="/contact"
        ogType={meta.ogType}
      />
      <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
        <header>
          <h1 className="page-title">Contact</h1>
          <p className="standfirst mt-6 max-w-2xl">
            Available for Product Design contract engagements. London, working remotely.
          </p>
          <section className="hairline-top mt-10 max-w-[520px] pt-6">
            <h2 className="subsection-title">Where I can help</h2>
            <ul className="mt-6 space-y-5 body-copy">
              {fit.map(([label, text]) => (
                <li key={label} className="flex gap-3">
                  <span className="text-accent" aria-hidden>
                    ⁘
                  </span>
                  <span>
                    <strong className="label mb-1 block">{label}</strong> {text}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </header>
        <div className="flex flex-col gap-5 md:pt-10">
          {channels.map(({ icon: Icon, label, text, href, external, note }) => (
            <section key={label} className="editorial-card min-w-0 p-6 md:p-8">
              <h2 className="flex items-center gap-3 label">
                <Icon size={18} className="text-accent" />
                {label}
              </h2>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="mt-4 block break-words body-copy text-accent underline decoration-1 underline-offset-4 transition-colors hover:text-caramel"
              >
                {text}
              </a>
              <p className="mt-3 caption">{note}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
