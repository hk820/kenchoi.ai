// Small looping illustrations for the three projects (animation in
// globals.css). They show the idea of each tool, not real results.

type Point = [number, number];

function path(points: Point[]) {
  return points.map((p, i) => `${i ? "L" : "M"}${p[0]},${p[1]}`).join("");
}

function lengthTo(points: Point[], index: number) {
  let total = 0;
  for (let i = 1; i <= index; i++) {
    total += Math.hypot(points[i][0] - points[i - 1][0], points[i][1] - points[i - 1][1]);
  }
  return total;
}

/** Portfolio value: steady, a crisis shock, then recovery. */
function StressTest() {
  const points: Point[] = [
    [4, 40], [24, 36], [44, 41], [62, 35], [80, 40], [96, 80],
    [112, 70], [130, 58], [150, 50], [172, 44], [196, 36],
  ];
  const trough = 5;
  const share = lengthTo(points, trough) / lengthTo(points, points.length - 1);
  // The line draws over the first 60% of a 5 s loop (linear), so it
  // reaches the trough at 3 s × share; the marker peaks 6% into its loop.
  const delay = 5 * 0.6 * share - 0.3;
  return (
    <>
      <rect x="86" y="8" width="18" height="84" rx="3" style={{ fill: "var(--alert)" }} fillOpacity="0.1" />
      <line x1="4" y1="40" x2="196" y2="40" style={{ stroke: "var(--muted)" }} strokeOpacity="0.5" strokeDasharray="3 4" />
      <path
        d={path(points)}
        pathLength={1}
        className="kc-trace"
        style={{ stroke: "var(--accent)", animationTimingFunction: "linear" }}
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle
        cx={points[trough][0]}
        cy={points[trough][1]}
        r="5"
        className="kc-pop"
        style={{ fill: "var(--alert)", animationDelay: `${delay.toFixed(2)}s` }}
      />
    </>
  );
}

/** Asset weights drift from their targets, then rebalance back. */
function Rebalancing() {
  const bars = [
    { x: 18, target: 56, drift: 1.28, opacity: 1 },
    { x: 66, target: 36, drift: 0.66, opacity: 0.75 },
    { x: 114, target: 46, drift: 1.18, opacity: 0.55 },
    { x: 162, target: 26, drift: 0.72, opacity: 0.4 },
  ];
  const base = 90;
  return (
    <>
      <line x1="6" y1={base} x2="194" y2={base} style={{ stroke: "var(--line)" }} strokeWidth="1.5" />
      {bars.map((b) => (
        <g key={b.x}>
          <rect
            x={b.x}
            y={base - b.target}
            width="24"
            height={b.target}
            rx="3"
            className="kc-rebal"
            style={{ fill: "var(--accent)", fillOpacity: b.opacity, ["--kc-drift" as string]: b.drift }}
          />
          <line
            x1={b.x - 5}
            y1={base - b.target}
            x2={b.x + 29}
            y2={base - b.target}
            style={{ stroke: "var(--foreground)" }}
            strokeOpacity="0.7"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
        </g>
      ))}
    </>
  );
}

/** Requests pass through the guardrails; one that breaks a rule is stopped. */
function Guardrail() {
  const start = 12;
  return (
    <>
      <line x1="6" y1="50" x2="194" y2="50" style={{ stroke: "var(--line)" }} strokeWidth="1.5" strokeDasharray="4 4" />
      <path
        d="M128 26l18 7v14c0 12-8 20-18 25c-10-5-18-13-18-25V33z"
        className="kc-shield-hit"
        style={{ fill: "var(--background)", stroke: "var(--accent)", animationDelay: "2.4s" }}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M121 49l5 5l9-10" style={{ stroke: "var(--accent)" }} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {[0, 1.2].map((d) => (
        <circle
          key={d}
          cx={start}
          cy="50"
          r="5"
          className="kc-pass"
          style={{ fill: "var(--accent)", animationDelay: `${d}s`, ["--kc-dist" as string]: "180px" }}
        />
      ))}
      <circle
        cx={start}
        cy="50"
        r="5"
        className="kc-block"
        style={{ fill: "var(--accent)", animationDelay: "2.4s", ["--kc-stop" as string]: "91px" }}
      />
    </>
  );
}

const charts: Record<string, () => React.ReactElement> = {
  "portfolio-stress-testing": StressTest,
  "portfolio-review-rebalancing": Rebalancing,
  "ai-agent-guardrail-lab": Guardrail,
};

export const sparkCaptions: Record<string, string> = {
  "portfolio-stress-testing":
    "Illustration: a portfolio hit by a crisis shock, then recovering. The tool replays paths like this for eight past crises.",
  "portfolio-review-rebalancing":
    "Illustration: holdings drift away from their target weights (dashed lines), then rebalancing brings them back.",
  "ai-agent-guardrail-lab":
    "Illustration: requests pass through the guardrails; one that breaks a rule is stopped.",
};

export function ProjectSpark({ slug, className = "" }: { slug: string; className?: string }) {
  const Chart = charts[slug];
  if (!Chart) return null;
  return (
    <svg viewBox="0 0 200 100" aria-hidden="true" focusable="false" fill="none" className={className}>
      <Chart />
    </svg>
  );
}
