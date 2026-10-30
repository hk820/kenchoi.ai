// Small looping icons for the Work with me page (animation in globals.css).

export type ServiceIconKind = "training" | "agent" | "forecast";

function Training() {
  return (
    <>
      <rect x="8" y="10" width="40" height="28" rx="3" style={{ stroke: "var(--muted)" }} strokeWidth="2" />
      <path d="M28 38v8M20 46h16" style={{ stroke: "var(--muted)" }} strokeWidth="2" strokeLinecap="round" />
      {[17, 24, 31].map((y, i) => (
        <path
          key={y}
          d={`M14 ${y}h${[26, 20, 14][i]}`}
          pathLength={1}
          className="kc-write"
          style={{ stroke: "var(--accent)", animationDelay: `${i * 0.45}s` }}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ))}
    </>
  );
}

function Agent() {
  return (
    <>
      <defs>
        <clipPath id="kc-shield-clip">
          <path d="M28 7l16 6v12c0 11-7 18-16 23c-9-5-16-12-16-23V13z" />
        </clipPath>
      </defs>
      <path
        d="M28 7l16 6v12c0 11-7 18-16 23c-9-5-16-12-16-23V13z"
        style={{ stroke: "var(--muted)" }}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <g clipPath="url(#kc-shield-clip)">
        <rect x="10" y="12" width="36" height="2.5" className="kc-scan" style={{ fill: "var(--accent)" }} opacity="0.6" />
      </g>
      <path
        d="M21 28l5 5l10-11"
        pathLength={1}
        className="kc-write"
        style={{ stroke: "var(--accent)" }}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );
}

function Forecast() {
  return (
    <>
      <path d="M6 36l6-4l5 3l6-7l5 2" style={{ stroke: "var(--muted)" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <g className="kc-breathe" style={{ transformOrigin: "28px 30px", animationDelay: "0s" }}>
        <path d="M28 30L50 18V42Z" style={{ fill: "var(--accent)" }} fillOpacity="0.22" />
        <path d="M28 30L50 24V36Z" style={{ fill: "var(--accent)" }} fillOpacity="0.3" />
      </g>
      <path d="M28 30L50 27" style={{ stroke: "var(--accent)" }} strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="28" cy="30" r="2.6" style={{ fill: "var(--accent)" }} />
    </>
  );
}

const icons = { training: Training, agent: Agent, forecast: Forecast };

export function ServiceIcon({ kind, className = "" }: { kind: ServiceIconKind; className?: string }) {
  const Icon = icons[kind];
  return (
    <svg viewBox="0 0 56 56" aria-hidden="true" focusable="false" fill="none" className={className}>
      <Icon />
    </svg>
  );
}
