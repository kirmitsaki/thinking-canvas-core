import { Link, useParams } from "react-router-dom";
import { PageHeader, PageRule, PageShell } from "@/components/PageShell";
import { essays } from "@/content/essays";

const BackToWriting = ({ className = "" }: { className?: string }) => (
  <Link
    to="/writing"
    className={
      "inline-block text-[12px] uppercase tracking-[0.22em] text-[hsl(var(--meta-ink))] hover:text-[hsl(var(--ink-strong))] transition-colors " +
      className
    }
  >
    ← Writing
  </Link>
);

type EssayCfg = {
  pullQuote?: string;
  smallCaps?: string[];
  realLife?: string[];
};

const essayConfig: Record<string, EssayCfg> = {
  "building-and-leading-design-organisations": {
    pullQuote:
      "Clarity builds trust. Trust builds autonomy. Autonomy builds teams that don't need you in every decision. Which is exactly what you want.",
    smallCaps: ["The first move", "The harder work", "The moment design"],
  },
  "strategic-design-leadership": {
    pullQuote:
      "Credibility gets you into the room. But outcomes keep you there.",
    smallCaps: [
      "Most design leaders",
      "The first step",
      "The tricky thing",
      "And then there's",
    ],
    realLife: [
      "At Secure Code Warrior when the CPTO challenged me",
      "At Origin Markets the strategic contribution",
    ],
  },
  "systems-thinking": {
    pullQuote:
      "Nobody scheduled a meeting to create a permanent constraint. It just accumulated, one reasonable decision at a time, until the system had opinions of its own.",
    smallCaps: [
      "What I've come",
      "Three companies, three different expressions",
    ],
    realLife: [
      "When I joined Secure Code Warrior",
      "At Secure Code Warrior, as the team scaled",
      "At Origin Markets the fragmentation",
      "At Elsevier the challenge",
    ],
  },
  "complex-b2b-platforms": {
    pullQuote:
      "Learning that language before picking up a design tool is not optional. It's the job.",
    smallCaps: [
      "I've never found",
      "What I've learned",
      "Most designers who approach B2B",
    ],
    realLife: [
      "At Secure Code Warrior, a developer wants",
      "At Origin Markets we were helping banks",
      "The clearest example of this came at Origin Markets",
      "The same kind of hidden complexity showed up differently at Secure Code Warrior",
    ],
  },
  "workflow-transformation": {
    pullQuote:
      "People rarely resist losing a workflow. They resist losing the value that workflow provided.",
    smallCaps: [
      "Once we mapped",
      "Not all friction",
      "The people who",
    ],
    realLife: [
      "At Origin Markets, information moved",
      "We kept trying to remove that phone call",
      "At Origin Markets certain interactions existed",
    ],
  },
  "design-systems": {
    pullQuote: "Adoption is a better measure of success than quality.",
    smallCaps: [
      "What the failed system",
      "What gets lost",
    ],
    realLife: [
      "Before I joined Secure Code Warrior",
      "When I arrived I didn't push",
      "Four years later it is used by everyone",
      "The most observable change the system eventually created",
    ],
  },
  "research-led-decision-making": {
    pullQuote: "Security wasn't unclear. It was poorly timed.",
    smallCaps: [
      "Bad research looks",
      "The strongest resistance",
      "In environments where",
    ],
    realLife: ["At Secure Code Warrior, there was a strong internal assumption"],
  },
  "technical-fluency": {
    pullQuote:
      "Without that understanding, the design would have been correct at the interface level and expensive at the system level.",
    smallCaps: [
      "What designers without technical fluency",
      "There is also",
    ],
    realLife: [
      "At Origin Markets that framing surfaced early",
      "At Secure Code Warrior the technical fluency question",
    ],
  },
  "distributed-leadership": {
    pullQuote:
      "In a distributed system, ambiguity is not neutral. It travels.",
    smallCaps: [
      "I don't think",
      "What you give up",
    ],
    realLife: [
      "I experienced this directly when two parts of my team",
      "I saw that clearly in a situation where a designer",
    ],
  },
  "commercial-and-business-impact": {
    pullQuote:
      "The question I kept coming back to in those conversations was not whether we should have a design system. It was whether we could afford the cost of not having one.",
    smallCaps: [
      "What does it look",
      "There is a tension",
    ],
    realLife: [
      "The clearest example of this came from a conversation at Secure Code Warrior",
      "At Origin Markets, the commercial translation",
    ],
  },
  "ai-enabled-ways-of-working": {
    pullQuote: "Speed without understanding increases rework, not productivity.",
    smallCaps: [
      "What AI makes easier",
      "The main risk",
      "What AI is doing",
      "Responsible AI use",
    ],
    realLife: ["At Secure Code Warrior that shift is now visible"],
  },
};

type Chunk =
  | { type: "normal"; text: string }
  | { type: "smallcaps"; text: string; capsLen: number }
  | { type: "reallife"; text: string }
  | { type: "pullquote"; text: string };

type Marker = {
  pos: number;
  kind: Chunk["type"];
  matchLen: number;
  priority: number;
};

function buildChunks(paragraph: string, cfg: EssayCfg): Chunk[] {
  const lower = paragraph.toLowerCase();
  const markers: Marker[] = [];

  if (cfg.pullQuote) {
    const i = lower.indexOf(cfg.pullQuote.toLowerCase());
    if (i >= 0)
      markers.push({
        pos: i,
        kind: "pullquote",
        matchLen: cfg.pullQuote.length,
        priority: 0,
      });
  }
  for (const prefix of cfg.realLife ?? []) {
    const i = lower.indexOf(prefix.toLowerCase());
    if (i >= 0)
      markers.push({
        pos: i,
        kind: "reallife",
        matchLen: prefix.length,
        priority: 1,
      });
  }
  for (const prefix of cfg.smallCaps ?? []) {
    const i = lower.indexOf(prefix.toLowerCase());
    if (i >= 0)
      markers.push({
        pos: i,
        kind: "smallcaps",
        matchLen: prefix.length,
        priority: 2,
      });
  }

  if (markers.length === 0) return [{ type: "normal", text: paragraph }];

  markers.sort((a, b) => a.pos - b.pos || a.priority - b.priority);

  const chunks: Chunk[] = [];
  let cursor = 0;
  for (let idx = 0; idx < markers.length; idx++) {
    const m = markers[idx];
    if (m.pos < cursor) continue;
    if (m.pos > cursor) {
      const pre = paragraph.slice(cursor, m.pos).trim();
      if (pre) chunks.push({ type: "normal", text: pre });
    }

    // find next non-overlapping marker to bound this chunk
    let nextStart = paragraph.length;
    for (let j = idx + 1; j < markers.length; j++) {
      if (markers[j].pos >= m.pos + m.matchLen) {
        nextStart = markers[j].pos;
        break;
      }
    }

    if (m.kind === "pullquote") {
      const end = m.pos + m.matchLen;
      chunks.push({
        type: "pullquote",
        text: paragraph.slice(m.pos, end).trim(),
      });
      cursor = end;
    } else if (m.kind === "reallife") {
      const text = paragraph.slice(m.pos, nextStart).trim();
      chunks.push({ type: "reallife", text });
      cursor = nextStart;
    } else {
      const text = paragraph.slice(m.pos, nextStart).trim();
      chunks.push({ type: "smallcaps", text, capsLen: m.matchLen });
      cursor = nextStart;
    }
  }
  if (cursor < paragraph.length) {
    const tail = paragraph.slice(cursor).trim();
    if (tail) chunks.push({ type: "normal", text: tail });
  }
  return chunks;
}

const baseBody =
  "text-[17px] md:text-[18px] leading-[1.7] text-[hsl(var(--ink-body))]";

function renderChunk(c: Chunk, key: string) {
  if (c.type === "pullquote") {
    return (
      <p
        key={key}
        className="font-editorial italic text-center text-[22px] md:text-[27px] leading-[1.4] text-[hsl(var(--accent-stone))] my-[72px] md:my-[80px] mx-auto max-w-[600px]"
      >
        {c.text}
      </p>
    );
  }
  if (c.type === "reallife") {
    return (
      <p
        key={key}
        className={`${baseBody} my-[40px] border-l-[3px] border-[hsl(var(--accent-stone))] pl-5`}
      >
        {c.text}
      </p>
    );
  }
  if (c.type === "smallcaps") {
    const head = c.text.slice(0, c.capsLen);
    const tail = c.text.slice(c.capsLen);
    return (
      <p key={key} className={`mb-6 ${baseBody}`}>
        <span
          style={{
            fontVariant: "small-caps",
            letterSpacing: "0.05em",
          }}
        >
          {head}
        </span>
        {tail}
      </p>
    );
  }
  return (
    <p key={key} className={`mb-6 ${baseBody}`}>
      {c.text}
    </p>
  );
}

export default function Essay() {
  const { slug } = useParams();
  const essay = slug ? essays[slug] : undefined;

  if (!essay) {
    return (
      <PageShell>
        <section className="py-32 max-w-[900px]">
          <p className="font-editorial text-3xl text-[hsl(var(--ink-strong))]">
            Not found.
          </p>
          <BackToWriting className="mt-6" />
        </section>
      </PageShell>
    );
  }

  const cfg = (slug && essayConfig[slug]) || {};
  const [hook, ...rest] = essay.paragraphs;
  const closing = rest.length ? rest[rest.length - 1] : undefined;
  const middle = rest.length ? rest.slice(0, -1) : [];

  return (
    <PageShell>
      <div className="pt-10 md:pt-14">
        <BackToWriting />
      </div>

      <PageHeader title={essay.title} size="essay" />

      <PageRule />

      <article className="py-14 md:py-20 max-w-[680px]">
        {hook && (
          <p className="font-editorial italic text-[24px] md:text-[30px] leading-[1.35] text-[hsl(var(--accent-stone))] mb-[60px] md:mb-[72px]">
            {hook}
          </p>
        )}

        {middle.map((p, i) => {
          const chunks = buildChunks(p, cfg);
          return (
            <div key={i}>
              {chunks.map((c, j) => renderChunk(c, `${i}-${j}`))}
            </div>
          );
        })}

        {closing && (
          <p className="italic text-center text-[19px] md:text-[21px] leading-[1.55] text-[hsl(var(--ink-body))] mt-[60px] md:mt-[72px]">
            {closing}
          </p>
        )}

        <BackToWriting className="mt-20" />
      </article>
    </PageShell>
  );
}
