"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

type Strand = "finance" | "ai" | "teaching";

const strands: {
  id: Strand;
  label: string;
  cx: number;
  cy: number;
  drift: string;
  labelX: number;
  labelY: number;
  anchor: "start" | "middle" | "end";
}[] = [
  { id: "finance", label: "Finance & risk", cx: 122, cy: 118, drift: "kc-drift-1", labelX: 34, labelY: 24, anchor: "start" },
  { id: "ai", label: "AI engineering", cx: 198, cy: 118, drift: "kc-drift-2", labelX: 286, labelY: 24, anchor: "end" },
  { id: "teaching", label: "Teaching & research", cx: 160, cy: 184, drift: "kc-drift-3", labelX: 160, labelY: 300, anchor: "middle" },
];

const highlights: {
  value: string;
  text: string;
  strands: Strand[];
  href: string;
  cta: string;
}[] = [
  {
    value: "5 years",
    text: "in AIA Group Treasury, supporting cash flow forecasting and liquidity analytics.",
    strands: ["finance"],
    href: "/resume",
    cta: "See experience",
  },
  {
    value: "8 crises",
    text: "replayed on a $1M portfolio in my stress-testing tool, with sliders to try your own shocks.",
    strands: ["finance"],
    href: "/projects/portfolio-stress-testing",
    cta: "See the project",
  },
  {
    value: "10 guardrails",
    text: "categories enforced in code around a tool-calling AI agent, with adversarial tests.",
    strands: ["ai", "teaching"],
    href: "/projects/ai-agent-guardrail-lab",
    cta: "See the project",
  },
  {
    value: "Agentic AI",
    text: "for FinTech and Business Applications, one of the HKU SPACE modules I design and teach.",
    strands: ["finance", "ai", "teaching"],
    href: "/resume",
    cta: "See teaching",
  },
  {
    value: "3 talks",
    text: "at HKU SPACE on GenAI, Web3, AI agents and the future of finance.",
    strands: ["teaching", "ai"],
    href: "/resume",
    cta: "Watch the talks",
  },
  {
    value: "IFRS 17",
    text: "co-authored research on insurers' risk trade-offs, now under review.",
    strands: ["finance", "teaching"],
    href: "/resume",
    cta: "See research",
  },
];

const strandName = Object.fromEntries(strands.map((s) => [s.id, s.label])) as Record<Strand, string>;

const INTERVAL_MS = 4500;

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(reducedMotionQuery);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

export function StrandsDiagram() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  // null until the visitor presses Play or Pause.
  const [choice, setChoice] = useState<boolean | null>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(reducedMotionQuery).matches,
    () => false,
  );
  // People who ask for reduced motion start paused.
  const playing = choice ?? !reducedMotion;

  useEffect(() => {
    if (!playing || hovered) return;
    const timer = window.setInterval(
      () => setIndex((i) => (i + 1) % highlights.length),
      INTERVAL_MS,
    );
    return () => window.clearInterval(timer);
  }, [playing, hovered]);

  const current = highlights[index];
  const isActive = (id: Strand) => current.strands.includes(id);

  return (
    <div
      className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <svg
        viewBox="0 0 320 312"
        className="mx-auto w-full max-w-[320px]"
        role="img"
        aria-label="Three overlapping circles: finance and risk, AI engineering, and teaching and research. The highlighted circles show where the current example comes from."
      >
        {strands.map((s) => (
          <g key={s.id} className={s.drift}>
            <circle
              cx={s.cx}
              cy={s.cy}
              r={86}
              className="transition-[fill-opacity,stroke] duration-700"
              style={{
                fill: "var(--accent)",
                fillOpacity: isActive(s.id) ? 0.2 : 0.04,
                stroke: isActive(s.id) ? "var(--accent)" : "var(--line)",
                strokeWidth: 1.5,
              }}
            />
          </g>
        ))}
        {strands.map((s) => (
          <text
            key={`${s.id}-label`}
            x={s.labelX}
            y={s.labelY}
            textAnchor={s.anchor}
            className="font-mono text-[11px] tracking-wider uppercase transition-colors duration-700"
            style={{ fill: isActive(s.id) ? "var(--accent)" : "var(--muted)" }}
          >
            {s.label}
          </text>
        ))}
        <circle
          cx={160}
          cy={140}
          r={6}
          className="kc-pulse"
          style={{ fill: "var(--accent)" }}
        />
      </svg>

      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Examples from my work"
        className="flex min-h-[17rem] flex-col rounded-2xl border border-line bg-background p-6 sm:p-7"
      >
        <div aria-live={playing && !hovered ? "off" : "polite"} className="flex-1">
          <p
            key={`strands-${index}`}
            className="kc-fade font-mono text-[11px] tracking-wider text-accent uppercase"
          >
            {current.strands.map((s) => strandName[s]).join(" · ")}
          </p>
          <p
            key={`value-${index}`}
            className="kc-fade mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground"
          >
            {current.value}
          </p>
          <p key={`text-${index}`} className="kc-fade mt-3 leading-7 text-muted">
            {current.text}
          </p>
          <Link
            key={`link-${index}`}
            href={current.href}
            className="kc-fade mt-4 inline-block text-sm font-medium text-accent transition-opacity hover:opacity-80"
          >
            {current.cta} <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex gap-1">
            {highlights.map((h, i) => (
              <button
                key={h.value}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show example ${i + 1} of ${highlights.length}: ${h.value}`}
                aria-current={i === index ? "true" : undefined}
                className="grid h-7 w-7 place-items-center rounded-full"
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-5 bg-accent" : "w-2 bg-line hover:bg-muted"
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setChoice(!playing)}
            className="rounded-md px-2 py-1 font-mono text-xs text-muted transition-colors hover:text-accent"
          >
            {playing ? "Pause" : "Play"}
          </button>
        </div>
      </div>
    </div>
  );
}
