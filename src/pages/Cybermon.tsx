import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowDown, Award, Crown, Gift, Medal, Star, Trophy } from "lucide-react";
import Seo from "@/components/Seo";
import { PortfolioBreadcrumb } from "@/components/portfolio/breadcrumb";
import { SectionNavigation } from "@/components/portfolio/section-navigation";
import { getProject, pageMeta } from "@/data/projects";
import { usePortfolioHeaderHeight } from "@/lib/portfolio-header-height";
import { scrollToSection } from "@/lib/section-scroll";
import { ProjectPagination } from "@/components/portfolio/project-pagination";
import { SectionDivider } from "@/components/portfolio/section-divider";
import { editorialEmphasis } from "@/components/portfolio/editorial-emphasis";
import crest2024 from "@/assets/cybermon/2024_-_cybermon.webp.asset.json";
import crest2025 from "@/assets/cybermon/2024_-_cybermon-2.webp.asset.json";
import crest2026 from "@/assets/cybermon/2024_-_cybermon-1.webp.asset.json";
import mon2024_accessomorph from "@/assets/cybermon/2024_-_cybermon_-_accessomorph.webp.asset.json";
import mon2024_injecotpus from "@/assets/cybermon/2024_-_cybermon_-_injecotpus.webp.asset.json";
import mon2024_permissite from "@/assets/cybermon/2024_-_cybermon_-_permissite.webp.asset.json";
import mon2024_xssassin from "@/assets/cybermon/2024_-_cybermon_-_xssassin.webp.asset.json";
import mon2025_bypassaur from "@/assets/cybermon/2025_-_cybermon_-_bypaussaur.webp.asset.json";
import mon2025_keykraken from "@/assets/cybermon/2025_-_cybermon_-_keykraken.webp.asset.json";
import mon2025_promptgeist from "@/assets/cybermon/2025_-_cybermon_-_promptgeist.webp.asset.json";
import mon2025_proxysurfa from "@/assets/cybermon/2025_-_cybermon_-_proxysurfa.webp.asset.json";
import badge2025 from "@/assets/cybermon/2025-badge.webp.asset.json";
import interface2025_1 from "@/assets/cybermon/2025_-_Interface_1.webp.asset.json";
import mon2026_1 from "@/assets/cybermon/2026_-_cybermon_-_glitchursus.webp.asset.json";
import mon2026_2 from "@/assets/cybermon/2026_-_cybermon_-_gatecorvus.webp.asset.json";
import mon2026_3 from "@/assets/cybermon/2026_-_cybermon_-_fangserpens.webp.asset.json";
import mon2026_4 from "@/assets/cybermon/2026_-_cybermon_-_nulltinea.webp.asset.json";
import merch2026_1 from "@/assets/cybermon/2026-merch-1.webp.asset.json";
import merch2026_2 from "@/assets/cybermon/2026-merch-2.webp.asset.json";
import interface2025_6 from "@/assets/cybermon/2025_-_Interface_6.webp.asset.json";
import cybermon2025 from "@/assets/cybermon/2025-cybermon.mp4.asset.json";
import poster2025 from "@/assets/cybermon/cybermon-2025-poster.webp.asset.json";
import cybermon2026 from "@/assets/cybermon/2026-cybermon.mp4.asset.json";
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
  /** Infographic treatment for this subsection. */
  variant?: "cards" | "badges" | "points" | "chips" | "summary";
  stats?: { value: string; label: string; note?: string }[];
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

function DetailImg({ image, className = "" }: { image: DetailImage; className?: string }) {
  return (
    <img
      loading="lazy"
      decoding="async"
      onError={useLocalImage}
      src={image.asset.url}
      alt={image.alt}
      width={image.width}
      height={image.height}
      className={`mx-auto h-auto w-full rounded-lg ${className}`}
      style={{ maxWidth: image.width }}
    />
  );
}

const medalIcons = [Medal, Trophy, Crown, Gift, Star, Award];

function splitSentence(text: string) {
  const match = text.match(/^(.+?[.!?])\s+(.*)$/s);
  return match ? [match[1], match[2]] : [text, ""];
}

function RowBody({ row }: { row: DetailRow }) {
  switch (row.variant) {
    case "cards":
      return (
        <ul className="grid gap-6 sm:grid-cols-2">
          {row.items!.map((item, index) => {
            const [name, title] = item.name.split(" — ");
            const [threat, detail] = item.text.split(" — ");
            const image = row.images?.[index];
            return (
              <li key={item.name} className="cm-card flex flex-col overflow-hidden">
                {image && <div className="bg-muted p-4"><DetailImg image={image} /></div>}
                <div className="flex flex-1 flex-col p-5">
                  <p className="cm-kicker">Cybermon {String(index + 1).padStart(2, "0")}</p>
                  <h4 className="subsection-title mt-2">{name}</h4>
                  {title && <p className="body-copy italic text-muted-foreground">{title}</p>}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {threat.split(/\s*(?:&|,)\s*/).map(tag => <span key={tag} className="cm-tag">{tag}</span>)}
                  </div>
                  {detail && <p className="body-copy mt-4 text-muted-foreground">{detail.charAt(0).toUpperCase() + detail.slice(1)}</p>}
                </div>
              </li>
            );
          })}
        </ul>
      );
    case "badges":
      return (
        <ul className="grid gap-4 sm:grid-cols-3">
          {row.table!.rows.map(([name, text], index) => {
            const Icon = medalIcons[index % medalIcons.length];
            return (
              <li key={name} className="cm-card flex flex-col items-center p-6 text-center">
                <span className="cm-medal" aria-hidden="true"><Icon size={24} /></span>
                <p className="body-copy mt-4 font-semibold text-foreground">{name}</p>
                <p className="body-copy mt-1 text-muted-foreground">{text}</p>
              </li>
            );
          })}
        </ul>
      );
    case "points":
      return (
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {row.table!.rows.map(([name, points]) => (
            <li key={name} className="cm-card p-5 text-center">
              <p className="cm-stat-value">{points}</p>
              <p className="cm-kicker mt-2">{points === "1" ? "point" : "points"}</p>
              <p className="body-copy mt-3 text-foreground">{name}</p>
            </li>
          ))}
        </ul>
      );
    case "chips":
      return (
        <ul className="flex flex-wrap gap-2">
          {row.list!.map(item => <li key={item} className="cm-tag">{item.replace(/\.$/, "")}</li>)}
        </ul>
      );
    case "summary": {
      const [lead, rest] = splitSentence(row.paragraphs?.[0] ?? "");
      return (
        <div className="cm-summary">
          <p className="essay-prose font-semibold text-foreground">{lead}</p>
          {rest && <p className="essay-prose mt-3">{editorialEmphasis(rest)}</p>}
        </div>
      );
    }
    default:
      return null;
  }
}

function DetailSection({ row }: { row: DetailRow }) {
  const custom = Boolean(row.variant);
  return (
    <section className="editorial-study-section mb-14 md:mb-20">
      <div className="mendeley-detail-row">
        {row.sub
          ? <h3 className="subsection-title">{row.title}</h3>
          : <h2 className="section-title">{row.title}</h2>}
        <div className="mendeley-detail-body">
          {row.paragraphs && row.variant !== "summary" && (
            <div className="essay-prose mb-8 space-y-5">
              {row.paragraphs.map(text => <p key={text}>{editorialEmphasis(text)}</p>)}
            </div>
          )}
          {row.stats && (
            <div className={`mb-8 grid gap-4 ${row.stats.some(stat => stat.note) ? "sm:grid-cols-2" : "grid-cols-2"}`}>
              {row.stats.map(stat => (
                <div key={stat.label} className="cm-card p-5">
                  <p className="cm-stat-value">{stat.value}</p>
                  <p className="body-copy mt-2 text-muted-foreground">{stat.label}</p>
                  {stat.note && <p className="body-copy mt-3 text-sm text-muted-foreground">{stat.note}</p>}
                </div>
              ))}
            </div>
          )}
          {custom && <RowBody row={row} />}
          {!custom && row.list && (
            <ul className="essay-prose list-disc space-y-2 pl-5">
              {row.list.map(item => <li key={item}>{editorialEmphasis(item)}</li>)}
            </ul>
          )}
          {!custom && row.items && (
            <dl className="space-y-6">
              {row.items.map(item => (
                <div key={item.name}>
                  <dt className="body-copy font-semibold text-foreground">{item.name}</dt>
                  <dd className="body-copy mt-1 text-muted-foreground">{item.text}</dd>
                </div>
              ))}
            </dl>
          )}
          {!custom && row.table && <DetailTable table={row.table} />}
          {row.images && row.variant !== "cards" && (
            <div className={row.imagesGrid ? `mt-8 grid items-start gap-6 ${row.images.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}` : "mt-8 space-y-8"}>
              {row.images.map(image => <figure key={image.asset.asset_id}><DetailImg image={image} /></figure>)}
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
    variant: "summary",
    paragraphs: [
      "Pokémon meets secure coding: four weeks, four monsters, one Cyberhero. Each week introduced a new Cybermon representing a software vulnerability. Developers completed practical coding activities to earn three points, defeat that week’s monster and collect its badge. Defeating all four earned Cyberhero status — turning security training into a challenge worth coming back for.",
    ],
  },
  {
    title: "Meet the Cybermon",
    sub: true,
    variant: "cards",
    paragraphs: [
      "The 2024 campaign featured four weekly Cybermon, each representing a common software security threat.",
    ],
    items: [
      { name: "Accessomorph", text: "Broken Access Control — exploits missing or weak checks on who can access what." },
      { name: "Injecotpus", text: "Injection — exploits untrusted data sent to interpreters, such as SQL injection." },
      { name: "Permissite", text: "Excessive Permissions — exploits accounts and services with more access than they need." },
      { name: "Xssassin", text: "Cross-Site Scripting — exploits unescaped output to run malicious scripts in the browser." },
    ],
    imagesGrid: true,
    images: [
      { asset: mon2024_accessomorph, alt: "Accessomorph, a fluffy yellow Cybermon holding a broken access icon.", width: 300, height: 200 },
      { asset: mon2024_injecotpus, alt: "Injecotpus, a pink ghost Cybermon.", width: 300, height: 200 },
      { asset: mon2024_permissite, alt: "Permissite, a grey winged mouse Cybermon.", width: 300, height: 200 },
      { asset: mon2024_xssassin, alt: "Xssassin, a blue dragon Cybermon.", width: 300, height: 200 },
    ],
  },
  {
    title: "Rewards & achievements",
    sub: true,
    variant: "badges",
    paragraphs: ["The campaign included a structured achievement system:"],
    table: {
      head: ["Achievement", "Description"],
      rows: [
        ["Weekly badges", "Limited-edition badges earned by defeating each week’s Cybermon"],
        ["Cyberhero trophy", "Defeat all four Cybermon"],
        ["Prize draw entry", "Awarded to participants who completed the campaign"],
      ],
    },
  },
  {
    title: "Learning activities",
    sub: true,
    paragraphs: [
      "Activities were designed to help developers recognise vulnerabilities, understand how they could be exploited and practise writing more secure code.",
    ],
    variant: "points",
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
    variant: "chips",
    list: [
      "Improve developer awareness of common software vulnerabilities.",
      "Encourage secure coding practices.",
      "Increase participation in cybersecurity training.",
      "Make learning interactive through gamification.",
      "Build a stronger organisational security culture.",
    ],
  },
  {
    title: "Results",
    sub: true,
    stats: [
      { value: "11,000", label: "Badges earned" },
      { value: "5,260", label: "Users" },
      { value: "350", label: "Companies" },
      { value: "95%", label: "Thumbs up" },
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
    variant: "summary",
    paragraphs: [
      "Four AI bosses turned emerging security risks into hands-on challenges. Developers worked through guided walkthroughs and high-difficulty Boss Missions to discover how attackers could manipulate AI systems, exploit weaknesses in AI applications and misuse AI agents. Defeating the bosses meant putting those lessons into practice — learning to recognise and mitigate the risks so organisations could adopt AI more securely.",
    ],
    images: [
      { asset: interface2025_1, alt: "Cybermon 2025 quest hub listing the four AI boss missions.", width: 800, height: 505 },
    ],
  },
  {
    title: "Meet the Cybermon",
    sub: true,
    variant: "cards",
    items: [
      { name: "Bypassaur", text: "Direct Prompt Injection — exploits malicious instructions supplied directly to AI models." },
      { name: "Keykraken", text: "Indirect Prompt Injection — exploits malicious instructions hidden in external content processed by AI." },
      { name: "Promptgeist", text: "Vector and Embedding Weaknesses — targets weaknesses in AI retrieval systems and vector databases." },
      { name: "Proxysurfa", text: "Excessive Agency — exploits AI agents with excessive permissions or autonomy." },
    ],
    imagesGrid: true,
    images: [
      { asset: mon2025_bypassaur, alt: "Bypassaur, an orange dinosaur Cybermon.", width: 300, height: 200 },
      { asset: mon2025_keykraken, alt: "Keykraken, a green octopus Cybermon.", width: 300, height: 200 },
      { asset: mon2025_promptgeist, alt: "Promptgeist, a purple bat-ghost Cybermon.", width: 300, height: 200 },
      { asset: mon2025_proxysurfa, alt: "Proxysurfa, a surfing Cybermon.", width: 300, height: 200 },
    ],
  },
  {
    title: "Rewards & achievements",
    sub: true,
    variant: "badges",
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
    variant: "chips",
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
    title: "Results",
    sub: true,
    stats: [
      { value: "50,000", label: "Activities completed", note: "Approximately 67% more than 2024." },
      { value: "24,000", label: "Badges earned", note: "More than double the previous year’s total." },
      { value: "355", label: "Customer organisations", note: "Participated in the campaign." },
      { value: "98%", label: "Activity-to-badge conversion", note: "Of users completing one activity went on to complete all three activities required for a badge." },
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
    variant: "summary",
    paragraphs: [
      "AI could build the software; developers still had to secure it. Over four weeks, a new Cybermon each week brought traditional application vulnerabilities and AI security risks into short coding labs and interactive challenges. Developers earned badges as they progressed, with Cyberhero status for defeating all four Cybermon. For those ready to go further, completing all four AI-focused Prime Boss missions unlocked Cyberhero Prime — an extra challenge beyond the main campaign.",
    ],
  },
  {
    title: "Meet the Cybermon",
    sub: true,
    variant: "cards",
    items: [
      { name: "Glitchrusus — The Scrap Bandit", text: "Indirect Prompt Injection & Formula Injection — focuses on malicious instructions in AI workflows and spreadsheet formula injection." },
      { name: "Gatecorvus — The Keykeeper", text: "SSRF, Data Exposure & Cryptography — focuses on server-side request forgery, sensitive data exposure, path traversal and weak cryptography." },
      { name: "Fangserpens — The Commit Devourer", text: "SQL Injection & Error Handling — focuses on SQL injection, error handling and security checks that fail open." },
      { name: "Nulltinea — The Lure", text: "Credentials, XSS & CSRF — focuses on exposed credentials, stored cross-site scripting and cross-site request forgery." },
    ],
    imagesGrid: true,
    images: [
      { asset: mon2026_1, alt: "Glitchrusus, the Scrap Bandit — a cyberpunk raccoon Cybermon.", width: 300, height: 200 },
      { asset: mon2026_2, alt: "Gatecorvus, the Keykeeper — a hooded crow Cybermon guarding a vault.", width: 300, height: 200 },
      { asset: mon2026_3, alt: "Fangserpens, the Commit Devourer — a neon serpent Cybermon.", width: 300, height: 200 },
      { asset: mon2026_4, alt: "Nulltinea, the Lure — a glowing moth Cybermon.", width: 300, height: 200 },
    ],
  },
  {
    title: "Rewards & achievements",
    sub: true,
    variant: "badges",
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
    variant: "chips",
    list: [
      "Improve awareness of vulnerabilities in AI-generated software.",
      "Reinforce traditional secure coding fundamentals.",
      "Help developers recognise emerging AI security risks.",
      "Encourage secure use of AI development tools and workflows.",
      "Measure participation and learning engagement.",
      "Build a global culture of continuous security improvement.",
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
  { id: "2024", label: "Cybermon 2024", title: "Cybermon 2024", standfirst: "Secure coding fundamentals: four weeks, four monsters, one Cyberhero.", rows: rows2024,
    theme: "Secure coding", launch: "7 October 2024", cover: crest2024 },
  { id: "2025", label: "Cybermon 2025", title: "Cybermon 2025", standfirst: "The Age of AI: four bosses, four AI security threats, one mission — beat the boss.", rows: rows2025,
    theme: "The Age of AI", launch: "6 October 2025", cover: crest2025 },
  { id: "2026", label: "Cybermon 2026", title: "Cybermon 2026", standfirst: "Built by AI. Secured by You. Four Cybermon, four weeks, one global community.", rows: [...rows2026, { title: "Results", sub: true, stats: stats2026 }] as DetailRow[],
    theme: "Built by AI. Secured by You.", launch: "5 October 2026", cover: crest2026 },
];

function jumpTo(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  event.preventDefault();
  window.history.replaceState(null, "", `#${id}`);
  scrollToSection(target, "smooth");
}

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
    <main className="case-study-editorial cm-page relative z-10 mx-auto max-w-[1200px] px-6 pb-16">
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
        <ol className="mt-12 grid gap-6 md:grid-cols-3" aria-label="Cybermon timeline">
          {years.map(year => (
            <li key={year.id} className="cm-year" data-year={year.id}>
              <a href={`#${year.id}`} onClick={event => jumpTo(event, year.id)} className="cm-card cm-timeline-card flex h-full flex-col overflow-hidden">
                <div className="flex aspect-[16/10] items-center justify-center overflow-hidden bg-muted">
                  <img src={year.cover.url} onError={useLocalImage} alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="cm-kicker">{year.launch}</p>
                  <p className="card-title cm-year-title mt-2">{year.id}</p>
                  <p className="body-copy mt-1 text-foreground">{year.theme}</p>
                  <span className="label-quiet mt-auto inline-flex items-center gap-1 pt-5">Jump to {year.id} <ArrowDown size={12} /></span>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </header>
      <SectionNavigation
        items={navItems}
        to="/work/secure-code-warrior"
      />
      {years.map((year, yearIndex) => (
        <section key={year.id} id={year.id} data-year={year.id} className="cm-year mb-20 md:mb-28">
          <p className="cm-kicker">{year.launch} · {year.theme}</p>
          <h2 className="card-title cm-year-title mt-3">{year.title}</h2>
          <p className="standfirst mt-6 mb-10">{year.standfirst}</p>
          {year.id === "2025" && (
            <figure className="mx-auto mb-10 max-w-[720px]">
              <video
                controls
                playsInline
                preload="metadata"
                poster={poster2025.url}
                src={cybermon2025.url}
                onError={useLocalVideo}
                data-local-poster="cybermon-2025-poster.webp"
                width={1138}
                height={640}
                className="h-auto w-full rounded-lg"
                aria-label="Cybermon 2025 campaign film."
              />
            </figure>
          )}
          {year.id === "2026" && (
            <figure className="mx-auto mb-10 max-w-[720px]">
              <video
                controls
                playsInline
                preload="metadata"
                poster={poster2026.url}
                src={cybermon2026.url}
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
          {yearIndex < years.length - 1 && <SectionDivider />}
        </section>
      ))}
      <SectionDivider />
      <section id="three-years" className="mb-20 md:mb-28">
        <h2 className="card-title">Three years of fun</h2>
        <p className="standfirst mt-6 mb-10">How the campaign evolved between 2024 and 2026.</p>
        <section className="editorial-study-section mb-14 md:mb-20">
          <h3 className="subsection-title mb-8">Three-year comparison</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {years.map((year, index) => (
              <div key={year.id} className="cm-year cm-card p-6" data-year={year.id}>
                <p className="card-title cm-year-title">{year.id}</p>
                <dl className="mt-5 space-y-4">
                  {comparisonTable.rows.map(row => (
                    <div key={row[0]}>
                      <dt className="cm-kicker">{row[0]}</dt>
                      <dd className="body-copy mt-1 text-foreground">{row[index + 1]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </section>
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
      <DetailSection
        row={{
          title: "Final notes",
          paragraphs: [
            "Across three campaigns, Cybermon demonstrated how gamification can help make developer security training more engaging and accessible.",
            "In 2024, the campaign reached more than 5,000 developers across 350 customer organisations, establishing a foundation for a repeatable, character-led learning experience.",
            "In 2025, engagement grew significantly, with 50,000 activities completed and approximately 24,000 badges earned. This represented a 67% increase in completed activities and more than double the badges earned compared with the previous year.",
            "By 2026, the campaign had expanded its international reach, with participants from 74 countries completing more than 42,000 activities and earning over 19,000 badges. The introduction of Cyberhero Prime also created an additional progression path for participants seeking more advanced challenges.",
            "Together, these results highlight the value of combining storytelling, bite-sized learning, visible progress and achievement-based rewards.",
            "Rather than treating cybersecurity training as a one-off learning exercise, Cybermon created a recurring experience that gave developers a reason to return, participate and challenge themselves each year.",
          ],
        }}
      />
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
