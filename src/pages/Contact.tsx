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

export default function Contact() {
  return (
    <main className="relative z-10 mx-auto max-w-[960px] px-6 py-12 md:py-16">
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
        </header>
        <div className="flex flex-col gap-5 md:pt-10">
          {channels.map(({ icon: Icon, label, text, href, external, note }) => (
            <section key={label} className="editorial-card min-w-0 p-6 md:p-8">
              <h2 className="label">
                <Icon size={18} className="text-accent" />
                <span className="sr-only">{label}</span>
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
