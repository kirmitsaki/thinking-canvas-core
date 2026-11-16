import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";
import { PortfolioBreadcrumb } from "@/components/portfolio/breadcrumb";
import { SectionNavigation } from "@/components/portfolio/section-navigation";
import { getProject, pageMeta } from "@/data/projects";
import { usePortfolioHeaderHeight } from "@/lib/portfolio-header-height";
import { scrollToSection } from "@/lib/section-scroll";
import { ProjectPagination } from "@/components/portfolio/project-pagination";
import { SectionDivider } from "@/components/portfolio/section-divider";
import { editorialEmphasis } from "@/components/portfolio/editorial-emphasis";
import interface2024 from "@/assets/cybermon/2024_-_Interface.webp.asset.json";
import results2024 from "@/assets/cybermon/2024-results.webp.asset.json";
import badge2025 from "@/assets/cybermon/2025-badge.webp.asset.json";
import interface2025_1 from "@/assets/cybermon/2025_-_Interface_1.webp.asset.json";
import interface2025_2 from "@/assets/cybermon/2025_-_Interface_2.webp.asset.json";
import interface2025_3 from "@/assets/cybermon/2025_-_Interface_3.webp.asset.json";
import interface2025_4 from "@/assets/cybermon/2025_-_Interface_4.webp.asset.json";
import interface2025_5 from "@/assets/cybermon/2025_-_Interface_5.webp.asset.json";
import banner2025_2 from "@/assets/cybermon/2025-banner-2.webp.asset.json";
import mon2026_1 from "@/assets/cybermon/2026-cybermon-1.webp.asset.json";
import mon2026_2 from "@/assets/cybermon/2026-cybermon-2.webp.asset.json";
import mon2026_3 from "@/assets/cybermon/2026-cybermon-3.webp.asset.json";
import merch2026_1 from "@/assets/cybermon/2026-merch-1.webp.asset.json";
import merch2026_2 from "@/assets/cybermon/2026-merch-2.webp.asset.json";
import interface2025_6 from "@/assets/cybermon/2025_-_Interface_6.webp.asset.json";
import film2026 from "@/assets/cybermon/cybermon-2026-film.mp4.asset.json";
import poster2026 from "@/assets/cybermon/cybermon-2026-poster.webp.asset.json";

// The CDN handles hosted previews; local copies also support GitHub Pages.
const localImages = import.meta.glob<string>("../assets/cybermon/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});

function useLocalImage(event: React.SyntheticEvent<HTMLImageElement>) {
  const image = event.currentTarget;
  const filename = decodeURIComponent(image.src.split("/").pop() ?? "").replace(/\.[^.]+$/, ".webp");
  const fallback = localImages[`../assets/cybermon/${filename}`];
  if (fallback && image.dataset.localFallback !== "true") {
    image.dataset.localFallback = "true";
    image.src = fallback;
  }
}

const localVideos = import.meta.glob<string>("../assets/cybermon/*.mp4", {
  eager: true,
  query: "?url",
  import: "default",
});

function useLocalVideo(event: React.SyntheticEvent<HTMLVideoElement>) {
  const video = event.currentTarget;
  if (video.dataset.localFallback === "true") return;
  const filename = decodeURIComponent(video.src.split("/").pop() ?? "").replace(/\.[^.]+$/, ".mp4");
  const fallback = localVideos[`../assets/cybermon/${filename}`];
  if (!fallback) return;
  video.dataset.localFallback = "true";
  video.src = fallback;
  const poster = video.dataset.localPoster
    ? localImages[`../assets/cybermon/${video.dataset.localPoster}`]
    : undefined;
  if (poster) video.poster = poster;
}

type DetailImage = { asset: { url: string; asset_id: string }; alt: string; width: number; height: number };

const meta = pageMeta(
  "Secure Code Warrior · Cybermon",
  "Rachel Kirmitsaki’s Cybermon campaigns for Secure Code Warrior: three years of gamified secure coding tournaments, 2024 to 2026.",
  "article"
);

type DetailRow = {
  title: string;
  sub?: boolean;
  paragraphs?: string[];
  items?: { name: string; text: string }[];
  list?: string[];
  table?: { head: string[]; rows: string[][] };
  images?: DetailImage[];
  imagesGrid?: boolean;
};

function DetailTable({ table }: { table: NonNullable<DetailRow["table"]> }) {
  return (
    <div className="mt-8 overflow-x-auto">
    <table className="body-copy w-full border-collapse text-left">
      <thead>
        <tr>
          {table.head.map(cell => (
            <th key={cell} className="label-quiet border-b border-border pb-3 pr-4 font-normal">{cell}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="border-b border-border py-3 pr-4 align-top">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

function DetailSection({ row }: { row: DetailRow }) {
  return (
    <section className="editorial-study-section mb-14 md:mb-20">
      <div className="mendeley-detail-row">
        {row.sub
          ? <h3 className="subsection-title">{row.title}</h3>
          : <h2 className="section-title">{row.title}</h2>}
        <div className="mendeley-detail-body">
          {row.paragraphs && (
            <div className="essay-prose space-y-5">
              {row.paragraphs.map(text => <p key={text}>{editorialEmphasis(text)}</p>)}
            </div>
          )}
          {row.list && (
            <ul className="essay-prose mt-5 list-disc space-y-2 pl-5 first:mt-0">
              {row.list.map(item => <li key={item}>{editorialEmphasis(item)}</li>)}
            </ul>
          )}
          {row.items && (
            <dl className="mt-8 space-y-6">
              {row.items.map(item => (
                <div key={item.name}>
                  <dt className="body-copy font-semibold text-foreground">{item.name}</dt>
                  <dd className="body-copy mt-1 text-muted-foreground">{item.text}</dd>
                </div>
              ))}
            </dl>
          )}
          {row.table && <DetailTable table={row.table} />}
          {row.images && (
            <div className={row.imagesGrid ? `mt-8 grid items-start gap-6 ${row.images.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}` : "mt-8 space-y-8"}>
              {row.images.map(image => (
                <figure key={image.asset.asset_id}>
                  <img
                    loading="lazy"
                    decoding="async"
                    onError={useLocalImage}
                    src={image.asset.url}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="h-auto w-full rounded-lg"
                  />
                </figure>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const stats2026 = [
  { value: "74", label: "Countries represented" },
  { value: "42,000+", label: "Activities completed" },
  { value: "19,000+", label: "Badges earned" },
  { value: "2,000+", label: "Cyberheroes crowned" },
  { value: "880+", label: "Cyberhero Primes" },
];

const rows2024: DetailRow[] = [
  {
    title: "Introduction",
    sub: true,
    paragraphs: [
      "Cybermon 2024 was Secure Code Warrior’s gamified cybersecurity awareness campaign, launched on 7 October 2024 during Cybersecurity Awareness Month.",
      "The campaign aimed to make secure coding education more engaging by introducing fictional monsters representing software security vulnerabilities. Developers were challenged to defeat the Cybermon by completing practical secure coding activities and earning points.",
    ],
  },
  {
    title: "How did it work?",
    sub: true,
    list: [
      "The campaign ran for four weeks.",
      "A new Cybermon was introduced each week.",
      "Participants completed learning activities to earn points.",
      "Developers needed to earn three points each week to defeat that week’s Cybermon.",
      "Defeating all four Cybermon earned participants Cyberhero status.",
    ],
  },
  {
    title: "Meet the Cybermon",
    sub: true,
    paragraphs: [
      "The 2024 campaign featured four weekly Cybermon, each representing a common software security threat.",
    ],
    images: [
      { asset: interface2024, alt: "Cybermon 2024 teaser screen counting down to the first monster.", width: 800, height: 531 },
    ],
  },
  {
    title: "Rewards & achievements",
    sub: true,
    paragraphs: ["The campaign included a structured achievement system:"],
    table: {
      head: ["Achievement", "Description"],
      rows: [
        ["Weekly Cybermon badges", "Limited-edition badges earned by defeating each week’s Cybermon"],
        ["Cyberhero", "Defeat all four Cybermon"],
        ["Prize draw entry", "Awarded to participants who completed the campaign"],
      ],
    },
  },
  {
    title: "Learning activities",
    sub: true,
    paragraphs: [
      "Activities were designed to help developers recognise vulnerabilities, understand how they could be exploited and practise writing more secure code.",
    ],
    table: {
      head: ["Activity", "Points"],
      rows: [
        ["Coding Labs", "2"],
        ["Walkthroughs", "1"],
        ["Missions", "1"],
        ["Challenges", "1"],
      ],
    },
  },
  {
    title: "Business objective",
    sub: true,
    list: [
      "Improve developer awareness of common software vulnerabilities.",
      "Encourage secure coding practices.",
      "Increase participation in cybersecurity training.",
      "Make learning interactive through gamification.",
      "Build a stronger organisational security culture.",
    ],
  },
  {
    title: "In simple terms",
    sub: true,
    paragraphs: [
      "Cybermon 2024 was essentially Pokémon meets secure coding. Developers completed practical coding exercises to defeat four monsters, earn badges and become Cyberheroes. The aim was to make cybersecurity training more enjoyable while improving developers’ ability to write secure software.",
    ],
  },
  {
    title: "Results",
    sub: true,
    images: [
      { asset: results2024, alt: "Cybermon 2024 results: 11,000 badges earned, 5,260 users, 350 companies and 95% thumbs up.", width: 500, height: 500 },
    ],
  },
];

const rows2025: DetailRow[] = [
  {
    title: "Introduction",
    sub: true,
    paragraphs: [
      "Cybermon 2025 was Secure Code Warrior’s next annual gamified cybersecurity campaign, launched on 6 October 2025.",
      "The campaign shifted its focus towards AI and Large Language Model (LLM) security, introducing four AI-focused Boss Missions. The objective was to help developers understand emerging threats associated with AI-powered applications and learn how to protect them.",
    ],
  },
  {
    title: "How did it work?",
    sub: true,
    list: [
      "The campaign introduced four AI security boss challenges.",
      "Participants worked through practical AI/LLM security scenarios.",
      "Developers explored how attackers could exploit weaknesses in AI applications.",
      "Participants completed walkthroughs and high-difficulty Boss Missions.",
      "The campaign encouraged developers to demonstrate their ability to identify and mitigate AI security risks.",
    ],
    images: [
      { asset: interface2025_1, alt: "Cybermon 2025 quest hub listing the four AI boss missions.", width: 800, height: 505 },
    ],
  },
  {
    title: "Meet the Cybermon",
    sub: true,
    items: [
      { name: "Bypassaur", text: "Direct Prompt Injection — exploits malicious instructions supplied directly to AI models." },
      { name: "Keykraken", text: "Indirect Prompt Injection — exploits malicious instructions hidden in external content processed by AI." },
      { name: "Promptgeist", text: "Vector and Embedding Weaknesses — targets weaknesses in AI retrieval systems and vector databases." },
      { name: "Proxysurfa", text: "Excessive Agency — exploits AI agents with excessive permissions or autonomy." },
    ],
    imagesGrid: true,
    images: [
      { asset: interface2025_2, alt: "Promptgeist Prime boss detail page.", width: 800, height: 574 },
      { asset: interface2025_3, alt: "Bypassaur Prime boss detail page.", width: 800, height: 578 },
      { asset: interface2025_4, alt: "Keykraken Prime boss detail page.", width: 800, height: 558 },
      { asset: interface2025_5, alt: "Proxysurfa Prime boss detail page.", width: 800, height: 567 },
    ],
  },
  {
    title: "Rewards & achievements",
    sub: true,
    paragraphs: ["The campaign included a structured achievement system:"],
    table: {
      head: ["Achievement", "Description"],
      rows: [
        ["Boss Mission completion", "Four AI security Boss Missions, each with exclusive campaign content"],
        ["Campaign prizes", "Awarded to participants who completed the challenges"],
        ["Achievement recognition", "Recognition for completing the AI security challenges"],
      ],
    },
    images: [
      { asset: interface2025_6, alt: "Cyberhero completion screen — You beat all Cybermon.", width: 800, height: 450 },
      { asset: badge2025, alt: "Cyberhero Prime badge awarded in Cybermon 2025.", width: 500, height: 261 },
    ],
  },
  {
    title: "Learning activities",
    sub: true,
    paragraphs: ["Participants undertook practical activities focused on AI security, including:"],
    list: [
      "Understanding common AI and LLM vulnerabilities.",
      "Exploring how prompt injection attacks work.",
      "Identifying risks in AI-powered applications.",
      "Completing guided security walkthroughs.",
      "Attempting high-difficulty Boss Missions.",
      "Learning how to mitigate vulnerabilities in AI systems.",
    ],
  },
  {
    title: "Business objective",
    sub: true,
    list: [
      "Improve awareness of AI-specific security vulnerabilities.",
      "Develop secure AI application development skills.",
      "Prepare developers for emerging AI-related threats.",
      "Encourage responsible AI adoption.",
      "Promote practical security learning through challenging missions.",
      "Strengthen organisational readiness for AI security risks.",
    ],
  },
  {
    title: "In simple terms",
    sub: true,
    paragraphs: [
      "Cybermon 2025 moved beyond traditional secure coding and introduced AI security challenges. Developers had to defeat four AI-focused bosses by learning how attackers could manipulate AI systems, exploit weaknesses in AI applications and misuse AI agents. The main objective was to help organisations adopt AI more securely.",
    ],
  },
];

const rows2026: DetailRow[] = [
  {
    title: "Introduction",
    sub: true,
    paragraphs: [
      "Cybermon 2026 continued Secure Code Warrior’s annual cybersecurity awareness campaign, launching on 5 October 2026.",
      "Under the theme Built by AI. Secured by You., the campaign brought together traditional application security and emerging AI-related vulnerabilities. It focused on helping developers understand the risks associated with AI-generated software, automated workflows and modern application development.",
    ],
  },
  {
    title: "How did it work?",
    sub: true,
    list: [
      "The campaign ran for four weeks.",
      "A new Cybermon was introduced each week.",
      "Participants completed short coding labs and interactive challenges.",
      "Developers faced four AI-focused Prime Boss missions.",
      "Participants earned digital badges for completing activities.",
      "Completing all four Cybermon contributed towards Cyberhero status.",
      "Completing all four Prime Boss missions earned Cyberhero Prime status.",
    ],
  },
  {
    title: "Meet the Cybermon",
    sub: true,
    items: [
      { name: "Glitchrusus — The Scrap Bandit", text: "Indirect Prompt Injection & Formula Injection — focuses on malicious instructions in AI workflows and spreadsheet formula injection." },
      { name: "Gatecorvus — The Keykeeper", text: "SSRF, Data Exposure & Cryptography — focuses on server-side request forgery, sensitive data exposure, path traversal and weak cryptography." },
      { name: "Fangserpens — The Commit Devourer", text: "SQL Injection & Error Handling — focuses on SQL injection, error handling and security checks that fail open." },
      { name: "Nulltinea — The Lure", text: "Credentials, XSS & CSRF — focuses on exposed credentials, stored cross-site scripting and cross-site request forgery." },
    ],
    imagesGrid: true,
    images: [
      { asset: mon2026_1, alt: "Glitchrusus, the Scrap Bandit — a cyberpunk raccoon Cybermon.", width: 500, height: 500 },
      { asset: mon2026_2, alt: "Gatecorvus, the Keykeeper — a hooded crow Cybermon guarding a vault.", width: 500, height: 500 },
      { asset: mon2026_3, alt: "Cybermon 2026 crest with the Cybermon around the shield logo.", width: 500, height: 500 },
    ],
  },
  {
    title: "Rewards & achievements",
    sub: true,
    paragraphs: ["The campaign included a structured achievement system:"],
    table: {
      head: ["Achievement", "Description"],
      rows: [
        ["Weekly Cybermon badges", "Earned by defeating individual Cybermon"],
        ["Cyberhero", "Defeat all four Cybermon"],
        ["Cyberhero Prime", "Complete all four Prime Boss missions"],
      ],
    },
    images: [
      { asset: merch2026_1, alt: "Box of holographic Cybermon 2026 stickers.", width: 800, height: 298 },
      { asset: merch2026_2, alt: "Cybermon 2026 T-shirt and sticker.", width: 500, height: 508 },
    ],
  },
  {
    title: "Learning activities",
    sub: true,
    paragraphs: ["The 2026 campaign offered:"],
    list: [
      "Short coding labs, typically lasting 6–10 minutes.",
      "Interactive security challenges.",
      "Four AI-focused Prime Boss missions.",
      "Practical vulnerability identification.",
      "Exercises around traditional application security.",
      "Learning activities covering AI-generated code and automated workflows.",
    ],
  },
  {
    title: "Business objective",
    sub: true,
    list: [
      "Improve awareness of vulnerabilities in AI-generated software.",
      "Reinforce traditional secure coding fundamentals.",
      "Help developers recognise emerging AI security risks.",
      "Encourage secure use of AI development tools and workflows.",
      "Measure participation and learning engagement.",
      "Build a global culture of continuous security improvement.",
    ],
  },
  {
    title: "In simple terms",
    sub: true,
    paragraphs: [
      "Cybermon 2026 combined traditional cybersecurity with AI security. Developers had to defeat four monsters representing different vulnerabilities, complete coding exercises and tackle additional Boss missions. The goal was to ensure developers understand that although AI can help build software faster, the responsibility for securing that software still belongs to the people developing it.",
    ],
  },
];

const comparisonTable = {
  head: ["Category", "2024", "2025", "2026"],
  rows: [
    ["Theme", "Secure coding", "The Age of AI", "Built by AI. Secured by You."],
    ["Main focus", "Software vulnerabilities", "AI/LLM security", "AI and application security"],
    ["Campaign duration", "4 weeks", "October campaign", "4 weeks"],
    ["Characters", "4 Cybermon", "4 AI bosses", "4 Cybermon"],
    ["Learning format", "Labs, walkthroughs, missions", "AI security missions", "Labs, challenges and Prime Boss missions"],
    ["Rewards", "Weekly badges", "Exclusive content and prizes", "Weekly badges and achievements"],
    ["Main achievement", "Cyberhero", "Boss challenges", "Cyberhero / Cyberhero Prime"],
  ],
};

const years = [
  { id: "2024", label: "Cybermon 2024", title: "Cybermon 2024", standfirst: "Secure coding fundamentals: four weeks, four monsters, one Cyberhero.", rows: rows2024 },
  { id: "2025", label: "Cybermon 2025", title: "Cybermon 2025", standfirst: "The Age of AI: four bosses, four AI security threats, one mission — beat the boss.", rows: rows2025 },
  { id: "2026", label: "Cybermon 2026", title: "Cybermon 2026", standfirst: "Built by AI. Secured by You. Four Cybermon, four weeks, one global community.", rows: rows2026 },
];

const navItems = [
  { label: "Overview", id: "overview" },
  ...years.map(year => ({ label: year.label, id: year.id })),
  { label: "Three years of fun", id: "three-years" },
];

export default function Cybermon() {
  usePortfolioHeaderHeight();
  // Honour a shared anchor link on first load.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (target) return scrollToSection(target, "instant");
  }, []);
  return (
    <main className="case-study-editorial relative z-10 mx-auto max-w-[1200px] px-6 pb-16">
      <Seo title={meta.title} description={meta.description} path="/work/secure-code-warrior/cybermon" ogType={meta.ogType} />
      <header className="pb-10" id="overview">
        <PortfolioBreadcrumb
          items={[
            { label: "Portfolio", to: "/work" },
            { label: "Secure Code Warrior", to: "/work/secure-code-warrior" },
            { label: "Cybermon" },
          ]}
          trailing={<p className="label-quiet">{getProject("secure-code-warrior").dates}</p>}
        />
        <h1 className="mt-8 page-title">Cybermon</h1>
        <p className="standfirst mt-6 max-w-[720px]">
          Three years of gamified secure coding tournaments — from secure coding fundamentals to securing software built with AI.
        </p>
      </header>
      <SectionNavigation
        items={navItems}
        to="/work/secure-code-warrior"
      />
      {years.map((year, yearIndex) => (
        <section key={year.id} id={year.id} className="mb-20 md:mb-28">
          <h2 className="card-title">{year.title}</h2>
          <p className="standfirst mt-6 mb-10">{year.standfirst}</p>
          {year.id === "2025" && (
            <figure className="mb-10">
              <img
                loading="lazy"
                decoding="async"
                onError={useLocalImage}
                src={banner2025_2.url}
                alt="Cybermon 2025 campaign banner."
                width={800}
                height={267}
                className="h-auto w-full rounded-lg"
              />
            </figure>
          )}
          {year.id === "2026" && (
            <figure className="mb-10">
              <video
                controls
                playsInline
                preload="metadata"
                poster={poster2026.url}
                src={film2026.url}
                onError={useLocalVideo}
                data-local-poster="cybermon-2026-poster.webp"
                width={1138}
                height={640}
                className="h-auto w-full rounded-lg"
                aria-label="Cybermon 2026 campaign film introducing the four Cybermon."
              />
            </figure>
          )}
          {year.rows.map(row => <DetailSection key={row.title} row={row} />)}
          {year.id === "2026" && (
            <section className="editorial-study-section mb-14 md:mb-20">
              <div className="mendeley-detail-row">
                <h3 className="subsection-title">Results</h3>
                <div className="mendeley-detail-body">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {stats2026.map(stat => (
                      <div key={stat.label} className="editorial-card p-6">
                        <p className="page-title">{stat.value}</p>
                        <p className="body-copy mt-2 text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}
          {yearIndex < years.length - 1 && <SectionDivider />}
        </section>
      ))}
      <SectionDivider />
      <section id="three-years" className="mb-20 md:mb-28">
        <h2 className="card-title">Three years of fun</h2>
        <p className="standfirst mt-6 mb-10">How the campaign evolved between 2024 and 2026.</p>
        <DetailSection
          row={{ title: "Three-year comparison", sub: true, table: comparisonTable }}
        />
        <DetailSection
          row={{
            title: "How Cybermon evolved",
            sub: true,
            items: [
              { name: "2024 — Build secure coding foundations", text: "Teach developers to identify and prevent common software vulnerabilities." },
              { name: "2025 — Secure AI applications", text: "Introduce developers to emerging AI and LLM security threats." },
              { name: "2026 — Secure AI-enabled development", text: "Combine traditional application security with the risks of AI-generated software and automated workflows." },
            ],
          }}
        />
        <DetailSection
          row={{
            title: "Overall business value",
            sub: true,
            paragraphs: ["Across the three campaigns, Secure Code Warrior has used Cybermon to support five broader organisational goals:"],
            items: [
              { name: "Developer engagement", text: "Make cybersecurity training more enjoyable and encourage participation." },
              { name: "Security capability", text: "Improve developers’ practical ability to identify and fix vulnerabilities." },
              { name: "Risk reduction", text: "Help reduce the likelihood of vulnerabilities being introduced into production software." },
              { name: "AI readiness", text: "Prepare developers for the security implications of AI-assisted development." },
              { name: "Security culture", text: "Make secure coding a continuous responsibility rather than an annual compliance exercise." },
            ],
          }}
        />
      </section>
      <SectionDivider />
      <section className="mb-20 md:mb-28">
        <p className="pull-quote text-accent">{editorialEmphasis("After popular demand, Cybermon is here to stay. There is also conversation about using the same technology to build more events throughout the year — even customer-specific ones. A fun experiment opened the door to a proper engagement platform.")}</p>
      </section>
      <div className="flex justify-center pt-12 pb-12 md:pb-16">
        <Link to="/work/secure-code-warrior" className="accent-link inline-flex items-center gap-2">
          <ArrowLeft size={14} />
          Back to Secure Code Warrior
        </Link>
      </div>
      <ProjectPagination slug="secure-code-warrior" />
    </main>
  );
}
