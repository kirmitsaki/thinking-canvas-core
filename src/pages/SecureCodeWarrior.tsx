import SiteNav from "@/components/SiteNav";
import ChapterTransition from "@/components/ChapterTransition";
import {
  Container,
  H1,
  Body,
  Highlight,
  SectionLabel,
  BackLink,
  ActLabel,
  ActH2,
  ActBody,
} from "@/components/editorial";
import {
  Shield, Lock, Eye, Activity, AlertTriangle, BookOpen, FileText, Users,
  Users2, Target, Rocket, Compass, Flag, CheckCircle2, Zap, Star,
  BarChart3, Database, Box, Code2, PenTool, UserCircle2, ShieldCheck,
  Sparkles,
} from "lucide-react";

/* ============================================================
   SECURE CODE WARRIOR
   Editorial leadership chapter.
   Visual language: typography, composition, restraint.
   ============================================================ */

/* legacy Figure helper removed — all figures now use DarkFigSpread */

const microMono =
  "text-[11px] md:text-[13px] tracking-[0.26em] uppercase text-meta-ink/80";
const monoFamily = { fontFamily: "ui-monospace, monospace" } as const;

/* ---------- Dark editorial spread tones ----------
   Five almost-imperceptible variations so each dark spread
   has its own atmosphere — like print spreads, not alternating
   web sections. Body ink held slightly brighter for readability. */
const darkTone = (
  bg: string,
  ink = "0 0% 97%",
  hair = "0 0% 20%"
): React.CSSProperties => ({
  ["--ink-strong" as any]: ink,
  ["--ink-body" as any]: "0 0% 84%",
  ["--muted-ink" as any]: "0 0% 70%",
  ["--meta-ink" as any]: "0 0% 66%",
  ["--hairline" as any]: hair,
  ["--background" as any]: bg,
  ["--foreground" as any]: ink,
  backgroundColor: `hsl(${bg})`,
  color: `hsl(${ink})`,
});

const tones = {
  scope:       darkTone("0 0% 7%",    "0 0% 97%",  "0 0% 19%"),
  convergence: darkTone("220 8% 8%",  "0 0% 96%",  "220 6% 20%"),
  upstream:    darkTone("30 5% 8%",   "30 4% 97%", "30 5% 20%"),
  velocity:    darkTone("210 10% 7%", "210 6% 97%","210 8% 19%"),
  distributed: darkTone("0 0% 6%",    "0 0% 96%",  "0 0% 18%"),
};

const DarkFigSpread = ({
  tone,
  fig,
  caption,
  children,
}: {
  tone: React.CSSProperties;
  fig: string;
  caption: string;
  children: React.ReactNode;
}) => (
  <div className="relative" style={tone}>
    <div className="pt-28 md:pt-40 pb-24 md:pb-32">
      <div className="mx-auto max-w-[1200px] px-8 md:px-12">
        <div className="relative">{children}</div>

      </div>
    </div>
  </div>
);

/* ============================================================
   Shared svg helpers — proper aspect ratios per figure so
   geometry doesn't distort. Text sizes lifted +15–20%.
   ============================================================ */
const SANS = "ui-sans-serif, system-ui, -apple-system, sans-serif";
const MONO = "ui-monospace, SFMono-Regular, Menlo, monospace";

/* ============================================================
   Shared helpers
   ============================================================ */
const Pill = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={`inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] md:text-[12px] text-white/85 ${className}`}
  >
    {children}
  </span>
);

const Eyebrow = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={`font-mono text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-white/55 ${className}`}
  >
    {children}
  </p>
);

/* ============================================================
   FIG 01 · Early state → Current state
   ============================================================ */
const PlatformLandscape = () => {
  const nodes = [
    { key: "gov", label: "Governance", Icon: Shield, color: "#a78bfa", x: 36, y: 30 },
    { key: "obs", label: "Observability", Icon: BarChart3, color: "#60a5fa", x: 64, y: 30 },
    { key: "lrn", label: "Learning", Icon: BookOpen, color: "#5eead4", x: 36, y: 62 },
    { key: "rsk", label: "Risk", Icon: AlertTriangle, color: "#fbbf24", x: 64, y: 62 },
  ];
  // Mesh links between every pair
  const links: Array<[number, number]> = [];
  for (let i = 0; i < nodes.length; i++)
    for (let j = i + 1; j < nodes.length; j++) links.push([i, j]);

  const outerPills = [
    { label: "Standards", x: 30, y: 8 },
    { label: "Controls", x: 50, y: 6 },
    { label: "Telemetry", x: 78, y: 8 },
    { label: "Policy", x: 14, y: 22 },
    { label: "Signals", x: 86, y: 22 },
    { label: "Compliance", x: 12, y: 48 },
    { label: "Detection", x: 88, y: 48 },
    { label: "Insights", x: 18, y: 84 },
    { label: "Automation", x: 50, y: 88 },
    { label: "Reporting", x: 80, y: 84 },
  ];

  return (
    <div className="grid grid-cols-12 gap-6 items-center">
      {/* Early state */}
      <div className="col-span-12 md:col-span-4">
        <Eyebrow className="text-center">Early state</Eyebrow>
        <p className="text-center text-white/70 text-[13px] mt-1">Focused product</p>
        <div className="relative mt-6 aspect-square max-w-[260px] mx-auto">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
            {[
              [50, 50, 28, 18],
              [50, 50, 78, 50],
              [50, 50, 22, 50],
              [50, 50, 35, 82],
              [50, 50, 65, 82],
            ].map(([x1, y1, x2, y2], i) => (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="white"
                strokeOpacity="0.25"
                strokeWidth="0.4"
                strokeDasharray="1.2 1.6"
              />
            ))}
            <circle cx="50" cy="50" r="14" fill="hsl(0 0% 10%)" stroke="white" strokeOpacity="0.55" strokeWidth="0.6" />
          </svg>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <Shield className="w-5 h-5 text-white/85" />
            <span className="mt-1 text-[11px] text-white/90">Core Product</span>
          </div>
          <span className="absolute left-[16%] top-[8%]"><Pill>Learning</Pill></span>
          <span className="absolute right-[2%] top-[42%]"><Pill className="text-amber-300/90 border-amber-300/30">Risk</Pill></span>
          <span className="absolute left-[-4%] top-[42%]"><Pill>Governance</Pill></span>
          <span className="absolute left-[14%] bottom-[6%]"><Pill className="text-blue-300/90 border-blue-300/30">Reporting</Pill></span>
          <span className="absolute right-[14%] bottom-[6%]"><Pill className="text-blue-300/90 border-blue-300/30">Policy</Pill></span>
        </div>
      </div>

      {/* Arrow */}
      <div className="hidden md:flex col-span-1 justify-center text-white/40 text-2xl">→</div>

      {/* Current state */}
      <div className="col-span-12 md:col-span-7">
        <Eyebrow className="text-center">Current state</Eyebrow>
        <p className="text-center text-white/70 text-[13px] mt-1">Integrated platform ecosystem</p>
        <div className="relative mt-6 aspect-[16/10]">
          <svg viewBox="0 0 100 60" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <defs>
              {nodes.map((n) => (
                <radialGradient key={n.key} id={`g-${n.key}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={n.color} stopOpacity="0.55" />
                  <stop offset="100%" stopColor={n.color} stopOpacity="0.05" />
                </radialGradient>
              ))}
            </defs>
            {/* dense mesh */}
            {links.map(([a, b], i) => {
              const A = nodes[a], B = nodes[b];
              // multiple curves between same nodes for density
              return [0, 1, 2, 3, 4].map((k) => {
                const t = (k - 2) * 3;
                const mx = (A.x + B.x) / 2 + t;
                const my = (A.y + B.y) / 2 + (k % 2 === 0 ? -t : t);
                return (
                  <path
                    key={`${i}-${k}`}
                    d={`M ${A.x} ${A.y} Q ${mx} ${my} ${B.x} ${B.y}`}
                    fill="none"
                    stroke={k % 2 === 0 ? A.color : B.color}
                    strokeOpacity="0.28"
                    strokeWidth="0.25"
                  />
                );
              });
            })}
            {/* dots along curves */}
            {Array.from({ length: 60 }).map((_, i) => {
              const x = 20 + Math.random() * 60;
              const y = 15 + Math.random() * 35;
              return <circle key={i} cx={x} cy={y} r="0.35" fill="white" fillOpacity="0.35" />;
            })}
          </svg>
          {/* Colored nodes */}
          {nodes.map((n) => (
            <div
              key={n.key}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              <div
                className="w-[68px] h-[68px] md:w-[84px] md:h-[84px] rounded-full flex flex-col items-center justify-center border"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${n.color}40, ${n.color}10 70%, transparent)`,
                  borderColor: `${n.color}55`,
                  boxShadow: `0 0 24px ${n.color}30`,
                }}
              >
                <n.Icon className="w-5 h-5" style={{ color: n.color }} />
                <span className="text-[10px] md:text-[11px] mt-1 text-white/90">{n.label}</span>
              </div>
            </div>
          ))}
          {/* outer pills */}
          {outerPills.map((p) => (
            <span
              key={p.label}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            >
              <Pill>{p.label}</Pill>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   FIG 02 · Operating model — eight systems → Product Outcomes
   ============================================================ */
const OperatingModel = () => {
  const systems = [
    { label: "Governance", Icon: Shield, color: "#a78bfa", caption: "Defines standards, policies and accountability." },
    { label: "Controls", Icon: Lock, color: "#22d3ee", caption: "Ensure actions are implemented consistently." },
    { label: "Visibility", Icon: Eye, color: "#34d399", caption: "Make the right information available." },
    { label: "Telemetry", Icon: Activity, color: "#60a5fa", caption: "Capture system and user behaviour." },
    { label: "Risk", Icon: AlertTriangle, color: "#fbbf24", caption: "Assess and prioritise what matters." },
    { label: "Learning", Icon: BookOpen, color: "#f472b6", caption: "Build capability and drive secure behaviour." },
    { label: "Policy", Icon: FileText, color: "#fb923c", caption: "Establish rules for the platform and organisation." },
    { label: "Org. Structure", Icon: Users, color: "#c084fc", caption: "Shapes ownership, coordination and decision rights." },
  ];

  return (
    <div className="relative">
      {/* Top row of systems */}
      <div className="grid grid-cols-4 md:grid-cols-8 gap-3 md:gap-4">
        {systems.map((s) => (
          <div key={s.label} className="flex flex-col items-center text-center">
            <s.Icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: s.color }} />
            <p className="mt-2 text-[12px] md:text-[13px] font-medium text-white">{s.label}</p>
            <p className="mt-1 text-[10px] md:text-[11px] leading-snug text-white/55">{s.caption}</p>
          </div>
        ))}
      </div>

      {/* Curves down to outcomes */}
      <div className="relative h-[120px] md:h-[140px] mt-4">
        <svg viewBox="0 0 800 140" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {systems.map((s, i) => {
            const x1 = 50 + i * (700 / 7);
            const x2 = 400;
            return (
              <path
                key={i}
                d={`M ${x1} 0 C ${x1} 70, ${x2} 70, ${x2} 130`}
                fill="none"
                stroke={s.color}
                strokeOpacity="0.7"
                strokeWidth="1.4"
              />
            );
          })}
          {/* arrowheads at bottom */}
          {systems.map((s, i) => {
            return (
              <path
                key={`a-${i}`}
                d="M -3 -4 L 0 0 L 3 -4"
                transform={`translate(400 130)`}
                fill="none"
                stroke={s.color}
                strokeOpacity="0.8"
                strokeWidth="1"
              />
            );
          })}
        </svg>
      </div>

      {/* Bottom row: side pills + center outcomes */}
      <div className="grid grid-cols-12 gap-4 items-center -mt-2">
        <div className="col-span-3">
          <div className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.04] px-3 py-2">
            <UserCircle2 className="w-4 h-4 text-white/70" />
            <span className="text-[12px] text-white/85 leading-tight">User Needs<br/>& Context</span>
          </div>
        </div>
        <div className="col-span-6 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-lg border border-white/20 bg-white/[0.06] px-5 py-3">
            <Star className="w-5 h-5 text-white" />
            <div>
              <p className="text-[14px] md:text-[15px] text-white font-medium">Product Outcomes</p>
              <p className="text-[11px] text-white/55">(Adoption, Impact, Trust)</p>
            </div>
          </div>
        </div>
        <div className="col-span-3 flex justify-end">
          <div className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.04] px-3 py-2">
            <Database className="w-4 h-4 text-white/70" />
            <span className="text-[12px] text-white/85 leading-tight">Technology<br/>& Architecture</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   FIG 03 · From insight to direction
   ============================================================ */
const ConvergenceFlow = () => {
  const inputs = [
    { label: "Customer Insight", caption: "Research, interviews, feedback", Icon: Users2, color: "#a78bfa" },
    { label: "Operational Signals", caption: "Usage, support, system data", Icon: Activity, color: "#60a5fa" },
    { label: "Validation", caption: "Prototypes, tests, experiments", Icon: CheckCircle2, color: "#34d399" },
    { label: "Business Priorities", caption: "Goals, constraints, trade-offs", Icon: Target, color: "#fbbf24" },
    { label: "Product Strategy", caption: "Market, roadmap, strategic bets", Icon: Compass, color: "#fb923c" },
  ];

  return (
    <div className="grid grid-cols-12 gap-4 items-center">
      {/* Left: cards */}
      <div className="col-span-12 md:col-span-4 space-y-3">
        {inputs.map((i) => (
          <div key={i.label} className="flex items-start gap-3 rounded-md border border-white/12 bg-white/[0.04] px-3 py-2">
            <i.Icon className="w-4 h-4 mt-0.5 shrink-0" style={{ color: i.color }} />
            <div>
              <p className="text-[12px] md:text-[13px] text-white font-medium leading-tight">{i.label}</p>
              <p className="text-[10px] md:text-[11px] text-white/55 leading-tight mt-0.5">{i.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Middle: convergence */}
      <div className="hidden md:block col-span-4 relative h-[260px]">
        <svg viewBox="0 0 200 260" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {inputs.map((s, i) => {
            const y1 = 20 + i * 55;
            return (
              <g key={i}>
                <path
                  d={`M 0 ${y1} C 80 ${y1}, 120 130, 170 130`}
                  fill="none"
                  stroke={s.color}
                  strokeOpacity="0.7"
                  strokeWidth="1.2"
                />
                {Array.from({ length: 22 }).map((_, k) => {
                  const t = k / 22;
                  const x = t * 170;
                  const y = y1 + (130 - y1) * (t * t);
                  return <circle key={k} cx={x} cy={y} r="0.9" fill={s.color} fillOpacity="0.7" />;
                })}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Right: hubs */}
      <div className="col-span-12 md:col-span-4 flex items-center justify-between gap-2">
        {[
          { label: "Shared Understanding", caption: "Clarity through alignment and synthesis", Icon: Users },
          { label: "Product Direction", caption: "Where to focus and why", Icon: Target },
          { label: "Delivery", caption: "Build the right things", Icon: Rocket },
        ].map((h, i, arr) => (
          <div key={h.label} className="flex flex-col items-center text-center flex-1">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/25 bg-white/[0.04] flex items-center justify-center">
              <h.Icon className="w-5 h-5 text-white/90" />
            </div>
            <p className="mt-2 text-[11px] md:text-[12px] text-white font-medium leading-tight">{h.label}</p>
            <p className="text-[10px] text-white/55 leading-tight mt-0.5 max-w-[100px]">{h.caption}</p>
            {i < arr.length - 1 && (
              <div className="hidden" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ============================================================
   FIG 04 · Many perspectives → Aligned direction
   ============================================================ */
const SharedUnderstandingFlow = () => {
  const perspectives = [
    { label: "Product", Icon: Box, color: "#a78bfa" },
    { label: "Engineering", Icon: Code2, color: "#60a5fa" },
    { label: "Design", Icon: PenTool, color: "#34d399" },
    { label: "Data", Icon: BarChart3, color: "#fbbf24" },
    { label: "Customer Success", Icon: UserCircle2, color: "#fb923c" },
    { label: "Security", Icon: ShieldCheck, color: "#f472b6" },
  ];
  const outcomes = [
    { label: "Clear Priorities", Icon: Flag },
    { label: "Confident Decisions", Icon: CheckCircle2 },
    { label: "Focused Execution", Icon: Zap },
    { label: "Better Outcomes", Icon: Star },
  ];

  return (
    <div className="grid grid-cols-12 gap-4 items-center">
      {/* Left perspectives */}
      <div className="col-span-12 md:col-span-3">
        <Eyebrow className="mb-3">Many Perspectives</Eyebrow>
        <div className="space-y-2.5">
          {perspectives.map((p) => (
            <div key={p.label} className="flex items-center gap-2">
              <p.Icon className="w-4 h-4" style={{ color: p.color }} />
              <span className="text-[12px] md:text-[13px] text-white/90">{p.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Middle: tangle → hub → aligned arrows */}
      <div className="hidden md:block col-span-6 relative h-[240px]">
        <svg viewBox="0 0 400 240" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {/* Tangled curves from left to hub */}
          {perspectives.map((p, i) => {
            const y1 = 20 + i * 36;
            return Array.from({ length: 3 }).map((_, k) => {
              const cx1 = 60 + k * 30;
              const cy1 = 40 + ((i + k) * 53) % 180;
              const cx2 = 140 + k * 20;
              const cy2 = 40 + ((i * 2 + k * 3) * 41) % 180;
              return (
                <path
                  key={`${i}-${k}`}
                  d={`M 0 ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, 200 120`}
                  fill="none"
                  stroke={p.color}
                  strokeOpacity="0.6"
                  strokeWidth="1"
                />
              );
            });
          })}
          {/* Aligned arrows out */}
          {outcomes.map((_, i) => {
            const y = 60 + i * 35;
            const color = perspectives[i % perspectives.length].color;
            return (
              <g key={i}>
                <line x1="232" y1={y} x2="390" y2={y} stroke={color} strokeOpacity="0.85" strokeWidth="1.2" />
                <path d={`M 385 ${y - 4} L 392 ${y} L 385 ${y + 4}`} fill="none" stroke={color} strokeWidth="1.2" />
              </g>
            );
          })}
        </svg>
        {/* Hub */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[120px] h-[120px] rounded-full border border-white/30 bg-white/[0.05] flex flex-col items-center justify-center text-center"
            style={{ boxShadow: "0 0 36px rgba(96,165,250,0.25)" }}>
            <Users className="w-5 h-5 text-white/90" />
            <p className="text-[12px] text-white font-medium mt-1">Shared</p>
            <p className="text-[12px] text-white font-medium leading-tight">Understanding</p>
            <p className="text-[9px] text-white/55 mt-1">Context. Priorities.<br/>Trade-offs.</p>
          </div>
        </div>
      </div>

      {/* Right outcomes panel */}
      <div className="col-span-12 md:col-span-3">
        <Eyebrow className="mb-3 text-right">Aligned Direction</Eyebrow>
        <div className="rounded-md border border-white/15 bg-white/[0.04] p-3 space-y-2.5">
          {outcomes.map((o) => (
            <div key={o.label} className="flex items-center gap-2">
              <o.Icon className="w-4 h-4 text-white/80" />
              <span className="text-[12px] md:text-[13px] text-white/90">{o.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   FIG 05 · Distributed leadership
   ============================================================ */
const LeverageModel = () => {
  const teams = [
    { label: "Team A", color: "#a78bfa" },
    { label: "Team B", color: "#60a5fa" },
    { label: "Team C", color: "#34d399" },
    { label: "Team D", color: "#fb923c" },
  ];
  const outcomes = [
    { label: "Customer Impact", Icon: Users },
    { label: "Platform Growth", Icon: BarChart3 },
    { label: "Operational Excellence", Icon: Shield },
    { label: "Sustainable Advantage", Icon: Star },
  ];

  return (
    <div className="grid grid-cols-12 gap-6 items-start">
      <div className="col-span-12 md:col-span-9 relative">
        {/* Shared Principles header */}
        <div className="flex items-start gap-3 justify-center">
          <div className="w-12 h-12 rounded-full border border-white/25 bg-white/[0.04] flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5 text-white/90" />
          </div>
          <div>
            <p className="text-[14px] md:text-[15px] text-white font-medium">Shared Principles</p>
            <p className="text-[11px] text-white/60 max-w-[280px]">Values, standards, and ways of working guide every team.</p>
          </div>
        </div>

        {/* Dotted connectors */}
        <svg viewBox="0 0 800 60" className="w-full h-[60px] mt-2" preserveAspectRatio="none">
          {[100, 300, 500, 700].map((x, i) => (
            <path
              key={i}
              d={`M 400 0 Q ${(400 + x) / 2} 30 ${x} 55`}
              fill="none"
              stroke="white"
              strokeOpacity="0.3"
              strokeWidth="0.8"
              strokeDasharray="2 3"
            />
          ))}
        </svg>

        {/* Teams row */}
        <div className="grid grid-cols-4 gap-3 -mt-2">
          {teams.map((t, i) => (
            <div key={t.label} className="flex flex-col items-center text-center relative">
              <div
                className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center border"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${t.color}40, ${t.color}08 70%, transparent)`,
                  borderColor: `${t.color}66`,
                  boxShadow: `0 0 18px ${t.color}30`,
                }}
              >
                <Users className="w-5 h-5" style={{ color: t.color }} />
              </div>
              <p className="mt-1 text-[12px] text-white font-medium" style={{ color: t.color }}>{t.label}</p>
              <div className="mt-2 text-[11px] text-white/65 leading-snug">
                <p>Local Context</p>
                <p>Local Decisions</p>
                <p>Local Ownership</p>
              </div>
              {i < teams.length - 1 && (
                <span className="absolute right-[-12px] top-[28px] text-white/40 text-sm">↔</span>
              )}
            </div>
          ))}
        </div>

        {/* Shared Direction */}
        <div className="mt-8 rounded-lg border border-white/15 bg-white/[0.03] px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-white/25 bg-white/[0.04] flex items-center justify-center shrink-0">
            <Target className="w-4 h-4 text-white/90" />
          </div>
          <div>
            <p className="text-[13px] md:text-[14px] text-white font-medium">Shared Direction</p>
            <p className="text-[11px] text-white/60">Outcomes we are working towards together.</p>
          </div>
        </div>
      </div>

      {/* Right: aligned outcomes panel */}
      <div className="col-span-12 md:col-span-3">
        <div className="rounded-md border border-white/15 bg-white/[0.04] p-4">
          <p className="text-[13px] text-white font-medium mb-3">Aligned Outcomes</p>
          <div className="space-y-2.5">
            {outcomes.map((o) => (
              <div key={o.label} className="flex items-center gap-2">
                <o.Icon className="w-4 h-4 text-white/75" />
                <span className="text-[12px] text-white/90">{o.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};




const SecureCodeWarrior = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <BackLink to="/work" />
      

      {/* HERO */}
      <Container className="pt-[64px] pb-[120px]">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <div className="mb-6">
              <SectionLabel>
                Chapter 3: Leading and defining product direction
              </SectionLabel>
            </div>
            <H1>Secure Code Warrior</H1>
            <Highlight className="mt-16">
              Shaping product direction across governance, observability, learning, and risk.
            </Highlight>
            <div className="mt-16 space-y-6">
              <Body muted>
                Secure Code Warrior sits at an interesting point of growth. Governance, observability, learning, and risk are evolving into a broader platform, creating new challenges around alignment, ownership, and product direction.
              </Body>
              <Body muted>
                As Head of Product Design across EMEA and APAC, the work centres on helping products, teams, and decision-making evolve together as the organisation grows.
              </Body>
            </div>
            <p className="mt-12 text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-meta-ink/70 font-mono">
              2023–Present · Head of Product Design · B2B SaaS / AI Software Governance
            </p>
          </div>
        </div>
      </Container>

      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 hidden md:block"
        >
          <div className="mx-auto max-w-[1200px] h-full px-8 md:px-12 relative">
            <div className="absolute inset-y-0 left-[8.333%] w-px bg-hairline/70" />
            <div className="absolute inset-y-0 left-[41.666%] w-px bg-hairline/40" />
            <div className="absolute inset-y-0 right-[8.333%] w-px bg-hairline/30" />
          </div>
        </div>

        {/* I · OPERATIONAL SCOPE */}
        <section className="relative border-t border-hairline">
          <p
            aria-hidden
            className="pointer-events-none hidden md:block absolute left-[-2vw] top-[8%] text-[13vw] leading-[0.8] tracking-[-0.06em] text-ink-strong/[0.014] font-medium select-none whitespace-nowrap"
          >
            scope
          </p>

          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pt-28 md:pt-44 pb-12 md:pb-16">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
              <ActLabel numeral="I" label="Platform" />
              <div className="col-span-12 md:col-span-9 md:col-start-3">
                <ActH2 className="max-w-[26ch]">
                  Products rarely become
                  <span className="text-meta-ink/45">
                    {" "}
                    simpler as they grow.
                  </span>
                </ActH2>
              </div>
            </div>

            <div className="mt-16 md:mt-24 grid grid-cols-12 gap-x-6 md:gap-x-10">
              <div className="col-span-12 md:col-span-7 md:col-start-3 pt-8 md:pt-10 space-y-6">
                <ActBody>
                  New capabilities emerge. Teams expand. Decisions become more distributed.
                </ActBody>
                <ActBody>
                  Complexity accumulates naturally over time. The challenge is rarely removing it. It is creating enough clarity for people to understand how the pieces fit together and where they are heading.
                </ActBody>
                <ActBody>
                  A large part of the work focuses on creating a shared view of the platform, connecting governance, observability, learning, and risk into a clearer operational model.
                </ActBody>
              </div>
            </div>
          </div>

          <DarkFigSpread
            tone={tones.scope}
            fig="Fig. 01"
            caption="Shared platform model: governance, observability, learning, risk."
          >
            <PlatformLandscape />
          </DarkFigSpread>

          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pt-12 md:pt-16 pb-4">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
              <div className="col-span-12 md:col-span-7 md:col-start-3">
                <p className="text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-meta-ink/55 font-mono mb-3">Outcome</p>
                <ActBody>
                  A clearer understanding of how capabilities connect across the platform and where they contribute to customer value.
                </ActBody>
              </div>
            </div>
          </div>
        </section>

        {/* II · SHARED UNDERSTANDING */}
        <section className="relative">
          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pt-28 md:pt-44 pb-12 md:pb-16">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
              <ActLabel numeral="II" label="Alignment" />
              <div className="col-span-12 md:col-span-9 md:col-start-3">
                <ActH2 className="max-w-[28ch]">
                  Most product problems
                  <span className="text-meta-ink/45">
                    {" "}
                    are not design problems.
                  </span>
                </ActH2>
              </div>
            </div>

            <div className="mt-16 md:mt-24 grid grid-cols-12 gap-x-6 md:gap-x-10">
              <div className="col-span-12 md:col-span-7 md:col-start-3 pt-8 md:pt-10 space-y-6">
                <ActBody>
                  By the time a challenge reaches design, it is often carrying questions about priorities, ownership, customer needs, or organisational direction.
                </ActBody>
                <ActBody>
                  Design is most effective when it helps teams build a shared understanding of those questions before moving towards solutions.
                </ActBody>
                <ActBody>
                  The work increasingly involves creating alignment across Product, Design, and Engineering, helping decisions move forward with greater clarity and confidence.
                </ActBody>
              </div>
            </div>
          </div>

          <DarkFigSpread
            tone={tones.convergence}
            fig="Fig. 02"
            caption="Operating model: nine contributing systems shaping product outcomes."
          >
            <OperatingModel />
          </DarkFigSpread>

          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pt-12 md:pt-16 pb-4">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
              <div className="col-span-12 md:col-span-7 md:col-start-3">
                <p className="text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-meta-ink/55 font-mono mb-3">Outcome</p>
                <ActBody>
                  Stronger alignment around priorities, responsibilities, and long-term product direction.
                </ActBody>
              </div>
            </div>
          </div>
        </section>

        {/* III · UPSTREAM */}
        <section className="relative">
          <p
            aria-hidden
            className="pointer-events-none hidden md:block absolute right-[-3vw] top-[20%] text-[14vw] leading-[0.8] tracking-[-0.06em] text-ink-strong/[0.016] font-medium select-none"
          >
            upstream
          </p>

          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pt-28 md:pt-44 pb-12 md:pb-16 relative">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
              <ActLabel numeral="III" label="Decisions" />
              <div className="col-span-12 md:col-span-9 md:col-start-3">
                <ActH2 className="max-w-[26ch]">
                  Better decisions
                  <span className="text-meta-ink/45">
                    {" "}
                    start earlier.
                  </span>
                </ActH2>
              </div>
            </div>

            <div className="mt-16 md:mt-24 grid grid-cols-12 gap-x-6 md:gap-x-10">
              <div className="col-span-12 md:col-span-7 md:col-start-3 pt-8 md:pt-10 space-y-6">
                <ActBody>
                  The most valuable design work rarely happens at the end of a process.
                </ActBody>
                <ActBody>
                  It happens while teams are still exploring opportunities, validating assumptions, and deciding where to invest effort.
                </ActBody>
                <ActBody>
                  That means spending more time in discovery, customer conversations, rapid prototyping, and collaborative exploration, helping shape direction before delivery begins.
                </ActBody>
              </div>
            </div>
          </div>

          <DarkFigSpread
            tone={tones.upstream}
            fig="Fig. 03"
            caption="From insight to direction: a product decision framework."
          >
            <ConvergenceFlow />
          </DarkFigSpread>

          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pt-12 md:pt-16 pb-4">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
              <div className="col-span-12 md:col-span-7 md:col-start-3">
                <p className="text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-meta-ink/55 font-mono mb-3">Outcome</p>
                <ActBody>
                  Earlier validation, stronger product decisions, and greater confidence in what enters delivery.
                </ActBody>
              </div>
            </div>
          </div>
        </section>

        {/* IV · VELOCITY */}
        <section className="relative">
          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pt-28 md:pt-44 pb-12 md:pb-16">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
              <ActLabel numeral="IV" label="Coordination" />
              <div className="col-span-12 md:col-span-9 md:col-start-3">
                <ActH2 className="max-w-[28ch]">
                  Speed only matters if people
                  <span className="text-meta-ink/45">
                    {" "}
                    move in the same direction.
                  </span>
                </ActH2>
              </div>
            </div>


            <div className="mt-16 md:mt-24 grid grid-cols-12 gap-x-6 md:gap-x-10">
              <div className="col-span-12 md:col-span-7 md:col-start-3 pt-8 md:pt-10 space-y-6">
                <ActBody>
                  As organisations grow, coordination becomes as important as execution.
                </ActBody>
                <ActBody>
                  The challenge is not increasing activity. It is improving visibility.
                </ActBody>
                <ActBody>
                  Helping teams understand dependencies, priorities, and the broader impact of their decisions creates the conditions for faster progress without sacrificing coherence.
                </ActBody>
              </div>
            </div>

          </div>

          <DarkFigSpread
            tone={tones.velocity}
            fig="Fig. 04"
            caption="Decision flow: from signals to direction."
          >
            <SharedUnderstandingFlow />
          </DarkFigSpread>

          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pt-12 md:pt-16 pb-4">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
              <div className="col-span-12 md:col-span-7 md:col-start-3">
                <p className="text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-meta-ink/55 font-mono mb-3">Outcome</p>
                <ActBody>
                  Improved collaboration, clearer decision-making, and faster movement from idea to validated direction.
                </ActBody>
              </div>
            </div>
          </div>
        </section>

        {/* V · DISTRIBUTED LEADERSHIP */}
        <section className="relative">
          <p
            aria-hidden
            className="pointer-events-none hidden md:block absolute left-[-2vw] top-[10%] text-[13vw] leading-[0.8] tracking-[-0.06em] text-ink-strong/[0.014] font-medium select-none whitespace-nowrap"
          >
            distributed
          </p>

          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pt-28 md:pt-44 pb-12 md:pb-16 relative">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
              <ActLabel numeral="V" label="Leadership" />
              <div className="col-span-12 md:col-span-9 md:col-start-3">
                <ActH2 className="max-w-[28ch]">
                  Leadership scales
                  <span className="text-meta-ink/45">
                    {" "}
                    differently than design.
                  </span>
                </ActH2>
              </div>
            </div>

            <div className="mt-16 md:mt-24 grid grid-cols-12 gap-x-6 md:gap-x-10">
              <div className="col-span-12 md:col-span-7 md:col-start-3 pt-8 md:pt-10 space-y-6">
                <ActBody>
                  Design systems can be documented.
                </ActBody>
                <ActBody>
                  Leadership cannot.
                </ActBody>
                <ActBody>
                  Supporting teams across EMEA and APAC requires shared principles, strong communication, and environments where good decisions can happen without centralised control.
                </ActBody>
                <ActBody>
                  The goal is not consistency for its own sake. It is helping teams operate with confidence while remaining connected to a common direction.
                </ActBody>
              </div>
            </div>
          </div>

          <DarkFigSpread
            tone={tones.distributed}
            fig="Fig. 05"
            caption="Distributed leadership model: shared principles, shared direction, local autonomy."
          >
            <LeverageModel />
          </DarkFigSpread>

          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pt-12 md:pt-16 pb-4">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
              <div className="col-span-12 md:col-span-7 md:col-start-3">
                <p className="text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-meta-ink/55 font-mono mb-3">Outcome</p>
                <ActBody>
                  A stronger leadership foundation supporting collaboration across regions, teams, and product areas.
                </ActBody>
              </div>
            </div>
          </div>
        </section>


        {/* VI · WHAT IS CHANGING */}
        <section className="relative">
          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pt-28 md:pt-44 pb-24 md:pb-40">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 mb-16 md:mb-24">
              <ActLabel numeral="VI" label="Now" />
              <div className="col-span-12 md:col-span-8 md:col-start-3">
                <ActH2 className="max-w-[24ch]">
                  What is
                  <span className="text-meta-ink/45"> changing.</span>
                </ActH2>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 mb-16 md:mb-20">
              <div className="col-span-12 md:col-span-7 md:col-start-3 space-y-6">
                <ActBody>
                  As governance, observability, learning, and risk continue to evolve, the challenge becomes less about individual product areas and more about how they work together as a platform.
                </ActBody>
                <ActBody>
                  The work continues to focus on creating clarity across product direction, discovery, decision-making, and leadership while the organisation grows.
                </ActBody>
                <ActBody>
                  Current areas of focus include:
                </ActBody>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
              <div className="col-span-12 md:col-span-9 md:col-start-3 ">
                {[
                  "Aligning product direction across platform capabilities",
                  "Embedding customer insight earlier in decision-making",
                  "Improving collaboration across Product, Design, and Engineering",
                  "Expanding leadership capability across EMEA and APAC",
                  "Exploring how AI can accelerate product discovery and validation",
                ].map((item, i) => (
                  <div
                    key={item}
                    className="grid grid-cols-12 gap-x-6 md:gap-x-10 py-7 md:py-9 border-b border-hairline"
                  >
                    <div className="col-span-2 md:col-span-1">
                      <p className="text-[10px] tracking-[0.28em] uppercase text-meta-ink/55 font-mono tabular-nums">
                        № {String(i + 1).padStart(2, "0")}
                      </p>
                    </div>
                    <div className="col-span-10 md:col-span-11">
                      <p className="text-[17px] md:text-[20px] leading-[1.45] tracking-[-0.01em] text-ink-strong font-medium max-w-[48ch]">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CODA · WHAT STAYS CONSTANT */}
        <section className="relative">
          <div className="mx-auto max-w-[1200px] px-8 md:px-12 pt-32 md:pt-52 pb-[140px] md:pb-[220px]">
            <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
              <div className="col-span-12 md:col-span-1">
                <p className="text-[10px] tracking-[0.28em] uppercase text-meta-ink/55 font-mono">
                  VII
                </p>
                <p className="mt-2 text-[10px] tracking-[0.28em] uppercase text-meta-ink/40 font-mono">
                  Constant
                </p>
              </div>
              <div className="col-span-12 md:col-span-8 md:col-start-3">
                <ActH2 className="max-w-[24ch] mb-12 md:mb-16">
                  What stays
                  <span className="text-meta-ink/45"> constant.</span>
                </ActH2>

                <div className="space-y-6 max-w-[52ch]">
                  <ActBody>The platform continues to evolve.</ActBody>
                  <ActBody>The organisation continues to evolve.</ActBody>
                  <ActBody>The products continue to evolve.</ActBody>
                  <ActBody>What remains constant is the need for clarity.</ActBody>
                  <ActBody>Not certainty. Not control.</ActBody>
                  <ActBody>
                    Just enough shared understanding for teams to make good decisions and keep moving forward together.
                  </ActBody>
                </div>

                <p className="mt-16 md:mt-20 text-[20px] md:text-[24px] leading-[1.4] tracking-[-0.01em] text-ink-strong/80 font-medium max-w-[40ch]">
                  That remains the thread running through the work today.
                </p>

                <div className="mt-32 md:mt-44 flex items-center gap-6 max-w-[60%]">
                  <div className="h-px w-16 md:w-24 bg-ink-strong/40" />
                  <div className="h-px flex-1 bg-gradient-to-r from-ink-strong/20 to-transparent" />
                </div>

                <p className="mt-10 text-[10px] tracking-[0.28em] uppercase text-meta-ink/35 font-mono">
                  end of essay · secure code warrior
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ChapterTransition current={3} />
    </main>
  );
};

export default SecureCodeWarrior;
