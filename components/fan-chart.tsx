// Faint "fan chart" drawn behind page titles: a history line up to today,
// then a forecast with an uncertainty band that widens into the future,
// the shape of a cash flow forecast. Each page gets its own line (seeded
// from the page title). Purely decorative; animation is in globals.css.

type Point = [number, number];

const W = 640;
const H = 240;

function hash(text: string) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function random(seed: number) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const r1 = (n: number) => Math.round(n * 10) / 10;

/** Smooth line through the points (Catmull-Rom as cubic Béziers). */
function smooth(points: Point[], move = true) {
  let d = move ? `M${r1(points[0][0])},${r1(points[0][1])}` : "";
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const c1: Point = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2: Point = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${r1(c1[0])},${r1(c1[1])} ${r1(c2[0])},${r1(c2[1])} ${r1(p2[0])},${r1(p2[1])}`;
  }
  return d;
}

function build(seed: string, nowShare: number) {
  const rand = random(hash(seed));
  const nowX = W * nowShare;
  const steps = 16;
  const drift = -1.2 - rand() * 2.2; // gentle upward trend (SVG y grows downwards)
  const history: Point[] = [];
  let y = 150 + rand() * 30;
  for (let i = 0; i <= steps; i++) {
    history.push([(nowX * i) / steps, y]);
    y += drift + (rand() - 0.5) * 26;
    y = Math.min(200, Math.max(60, y));
  }
  const now = history[history.length - 1];

  const ahead = 8;
  const median: Point[] = [now];
  let my = now[1];
  for (let i = 1; i <= ahead; i++) {
    my += drift * 1.6 + (rand() - 0.5) * 6;
    median.push([nowX + ((W - nowX) * i) / ahead, my]);
  }

  const maxWidth = 52 + rand() * 26;
  const band = (share: number) => {
    const width = (p: Point) =>
      share * maxWidth * Math.sqrt((p[0] - nowX) / (W - nowX));
    const upper = median.map((p): Point => [p[0], p[1] - width(p)]);
    const lower = median.map((p): Point => [p[0], p[1] + width(p)]).reverse();
    return `${smooth(upper)}L${r1(lower[0][0])},${r1(lower[0][1])}${smooth(lower, false)}Z`;
  };

  return {
    now,
    history: smooth(history),
    median: smooth(median),
    bands: [band(1), band(0.62), band(0.3)],
  };
}

export function FanChart({
  seed,
  className = "",
  nowShare = 0.47,
}: {
  seed: string;
  className?: string;
  /** Where "today" sits across the chart, from 0 to 1. */
  nowShare?: number;
}) {
  const { now, history, median, bands } = build(seed, nowShare);
  const origin = `${r1(now[0])}px ${r1(now[1])}px`;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none print:hidden ${className}`}
      fill="none"
    >
      <g className="kc-grid" style={{ stroke: "var(--line)" }} strokeWidth="1">
        {Array.from({ length: W / 40 + 2 }, (_, i) => (
          <line key={i} x1={i * 40} y1="0" x2={i * 40} y2={H} />
        ))}
      </g>
      <g style={{ stroke: "var(--line)" }} strokeWidth="1">
        <line x1="0" y1={H * 0.25} x2={W} y2={H * 0.25} />
        <line x1="0" y1={H * 0.5} x2={W} y2={H * 0.5} />
        <line x1="0" y1={H * 0.75} x2={W} y2={H * 0.75} />
      </g>

      <line
        x1={r1(now[0])}
        y1="0"
        x2={r1(now[0])}
        y2={H}
        style={{ stroke: "var(--accent)" }}
        strokeOpacity="0.35"
        strokeDasharray="3 5"
      />

      <g className="kc-sway" style={{ transformOrigin: origin }}>
        <g className="kc-unfold" style={{ transformOrigin: origin }}>
          <g className="kc-breathe" style={{ transformOrigin: origin }}>
            {bands.map((d, i) => (
              <path
                key={i}
                d={d}
                style={{ fill: "var(--accent)" }}
                fillOpacity={[0.08, 0.1, 0.14][i]}
              />
            ))}
          </g>
          <path
            d={median}
            style={{ stroke: "var(--accent)" }}
            strokeWidth="2"
            strokeDasharray="6 6"
            strokeLinecap="round"
            strokeOpacity="0.8"
          />
        </g>
      </g>

      <path
        d={history}
        pathLength={1}
        className="kc-draw"
        style={{ stroke: "var(--muted)" }}
        strokeWidth="2"
        strokeOpacity="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx={r1(now[0])}
        cy={r1(now[1])}
        r="4"
        className="kc-status-ping"
        style={{ fill: "var(--accent)", transformBox: "fill-box", transformOrigin: "center" }}
      />
      <circle cx={r1(now[0])} cy={r1(now[1])} r="4" style={{ fill: "var(--accent)" }} />
    </svg>
  );
}
