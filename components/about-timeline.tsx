// About page: milestones since 2021. A comet runs along the line and
// lights each year as it passes (animation in globals.css).

const milestones = [
  { year: "2021", text: "Joined an insurer's Group Treasury" },
  { year: "2023", text: "Lecturer at HKU SPACE; researcher at HSUHK" },
  { year: "2024", text: "First corporate AI training and public talk" },
  { year: "2025", text: "AI workshops for Sony (HK)" },
  { year: "2026", text: "Outstanding Teacher Award; IFRS 17 paper under review" },
];

const LOOP = 7; // seconds, matches .kc-run-x / .kc-run-y / .kc-hit
const ROW = 5; // rem, height of each row on phones (h-20 below)

export function AboutTimeline() {
  const n = milestones.length;
  const edge = `calc(${50 / n}% - 8px)`;

  return (
    <section aria-labelledby="timeline-heading" className="mt-14">
      <h2
        id="timeline-heading"
        className="font-serif text-2xl font-semibold tracking-tight text-foreground"
      >
        Since 2021
      </h2>
      <div className="relative mt-8">
        {/* Line across (tablet and desktop) */}
        <div
          aria-hidden="true"
          className="absolute top-0 hidden h-4 overflow-hidden sm:block"
          style={{ left: edge, right: edge }}
        >
          <span className="absolute inset-x-2 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-line" />
          <span className="kc-run-x absolute inset-0">
            <span className="absolute top-1/2 right-2 h-0.5 w-1/3 -translate-y-1/2 bg-gradient-to-r from-transparent to-accent" />
            <span className="absolute top-1/2 right-0.5 h-3 w-3 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_14px_var(--accent)]" />
          </span>
        </div>
        {/* Line down (phones) */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 w-4 overflow-hidden sm:hidden"
          style={{ height: `calc(${(n - 1) * ROW}rem + 1rem)` }}
        >
          <span className="absolute inset-y-2 left-1/2 w-0.5 -translate-x-1/2 rounded-full bg-line" />
          <span className="kc-run-y absolute inset-0">
            <span className="absolute bottom-2 left-1/2 h-1/3 w-0.5 -translate-x-1/2 bg-gradient-to-b from-transparent to-accent" />
            <span className="absolute bottom-0.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_14px_var(--accent)]" />
          </span>
        </div>

        <ol className="sm:grid sm:grid-cols-5 sm:gap-3">
          {milestones.map((m, i) => (
            <li
              key={m.year}
              className="flex h-20 gap-4 sm:h-auto sm:flex-col sm:items-center sm:gap-3 sm:text-center"
            >
              <span
                aria-hidden="true"
                className="kc-hit relative z-10 h-4 w-4 shrink-0 rounded-full border-2 border-accent bg-background"
                style={{ animationDelay: `${(i / (n - 1)) * LOOP}s` }}
              />
              <div className="-mt-1 sm:mt-0">
                <p className="font-mono text-sm text-accent">{m.year}</p>
                <p className="mt-1 text-sm leading-5 text-muted">{m.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
