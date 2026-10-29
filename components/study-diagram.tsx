"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const measures = [
  {
    name: "Asset risk",
    text: "How risky the investment portfolio is, with each asset class weighted by its risk-based capital charge.",
  },
  {
    name: "Product risk",
    text: "How volatile underwriting results are, measured by the variability of the claims ratio over a rolling three-year window.",
  },
  {
    name: "Financial risk",
    text: "How heavily the balance sheet relies on leverage rather than equity.",
  },
];

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(reducedMotionQuery);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

type Layout = {
  width: number;
  height: number;
  x0: number; // track start
  x1: number; // track end
  y: { period: number; label1: number; track1: number; label2: number; track2: number; lineEnd: number; adopt: number };
};

const wide: Layout = {
  width: 640,
  height: 230,
  x0: 40,
  x1: 600,
  y: { period: 22, label1: 70, track1: 92, label2: 142, track2: 164, lineEnd: 196, adopt: 216 },
};

const narrow: Layout = {
  width: 340,
  height: 240,
  x0: 20,
  x1: 320,
  y: { period: 22, label1: 64, track1: 86, label2: 138, track2: 160, lineEnd: 196, adopt: 220 },
};

function Timeline({ l, className }: { l: Layout; className: string }) {
  const xm = (l.x0 + l.x1) / 2;
  const travel = { "--kc-dist": `${l.x1 - l.x0}px` } as React.CSSProperties;
  return (
    <svg
      viewBox={`0 0 ${l.width} ${l.height}`}
      className={className}
      role="img"
      aria-label="Two groups of insurers are followed over time. Insurers that adopted IFRS 17 in 2023 switch to the new standard at the midpoint; comparison insurers on other standards do not. The study compares how each group's risk-taking changes after 2023."
    >
      {/* period labels */}
      <text x={(l.x0 + xm) / 2} y={l.y.period} textAnchor="middle" className="font-mono text-[12px] tracking-wider uppercase" style={{ fill: "var(--muted)" }}>
        Before
      </text>
      <text x={(xm + l.x1) / 2} y={l.y.period} textAnchor="middle" className="font-mono text-[12px] tracking-wider uppercase" style={{ fill: "var(--muted)" }}>
        After
      </text>
      {/* adoption line */}
      <line x1={xm} y1={34} x2={xm} y2={l.y.lineEnd} strokeDasharray="4 5" style={{ stroke: "var(--accent)", strokeWidth: 1.5 }} />
      <text x={xm} y={l.y.adopt} textAnchor="middle" className="text-[12px] font-medium" style={{ fill: "var(--accent)" }}>
        2023: IFRS 17 and IFRS 9 adopted
      </text>

      {/* adopters track */}
      <text x={l.x0} y={l.y.label1} className="text-[13px] font-medium" style={{ fill: "var(--foreground)" }}>
        Insurers that adopted IFRS 17
      </text>
      <line x1={l.x0} y1={l.y.track1} x2={l.x1} y2={l.y.track1} style={{ stroke: "var(--line)", strokeWidth: 3, strokeLinecap: "round" }} />
      <line x1={xm} y1={l.y.track1} x2={l.x1} y2={l.y.track1} style={{ stroke: "var(--accent)", strokeWidth: 3, strokeLinecap: "round", opacity: 0.55 }} />
      <circle cx={xm} cy={l.y.track1} r={8} className="kc-cross" style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
      <circle cx={l.x0} cy={l.y.track1} r={8} className="kc-travel kc-treat" style={{ ...travel, fill: "var(--muted)" }} />

      {/* comparison track */}
      <text x={l.x0} y={l.y.label2} className="text-[13px] font-medium" style={{ fill: "var(--foreground)" }}>
        Comparison insurers on other standards
      </text>
      <line x1={l.x0} y1={l.y.track2} x2={l.x1} y2={l.y.track2} style={{ stroke: "var(--line)", strokeWidth: 3, strokeLinecap: "round" }} />
      <circle cx={l.x0} cy={l.y.track2} r={8} className="kc-travel" style={{ ...travel, fill: "var(--muted)" }} />
    </svg>
  );
}

/** Animated sketch of the study design: adopters vs a comparison group, before and after 2023. */
export function StudyTimeline() {
  return (
    <figure>
      <Timeline l={narrow} className="w-full sm:hidden" />
      <Timeline l={wide} className="hidden w-full sm:block" />
      <figcaption className="mt-4 text-sm leading-6 text-muted">
        The study compares how risk-taking changed after 2023 for insurers that
        adopted IFRS 17 with the change over the same period for insurers that
        did not (a difference-in-differences design).
      </figcaption>
    </figure>
  );
}

/** The three risk measures; the highlight moves from one to the next. */
export function MeasureCards() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(reducedMotionQuery).matches,
    () => false,
  );
  const moving = !reducedMotion && !hovered;

  useEffect(() => {
    if (!moving) return;
    const timer = window.setInterval(
      () => setIndex((i) => (i + 1) % measures.length),
      3000,
    );
    return () => window.clearInterval(timer);
  }, [moving]);

  return (
    <ul
      className="grid gap-4 sm:grid-cols-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {measures.map((m, i) => {
        const active = !reducedMotion && i === index;
        return (
          <li
            key={m.name}
            className={`rounded-xl border p-5 transition-all duration-500 ${
              active
                ? "-translate-y-1 border-accent bg-accent-soft shadow-sm"
                : "border-line bg-background"
            }`}
          >
            <p className="flex items-center gap-2 font-serif text-lg font-semibold text-foreground">
              <span
                aria-hidden="true"
                className={`h-2 w-2 rounded-full transition-colors duration-500 ${
                  active ? "bg-accent" : "bg-line"
                }`}
              />
              {m.name}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted">{m.text}</p>
          </li>
        );
      })}
    </ul>
  );
}
