import type { Metadata } from "next";
import Link from "next/link";
import { ModuleExplorer } from "@/components/module-explorer";
import { PageIntro } from "@/components/page-intro";
import { corporateTraining, modules, partTime, talks } from "@/lib/resume";
import { labs } from "@/lib/teaching";

export const metadata: Metadata = {
  title: "Teaching",
  description:
    "Ken Tsai teaches AI, machine learning, big data and FinTech at HKU SPACE, gives public talks and runs corporate AI training in Hong Kong.",
};

const sectionHeading =
  "font-serif text-2xl font-semibold tracking-tight text-foreground";
const link = "text-accent underline-offset-4 hover:underline";

const lecturer = partTime.find((r) => r.org.startsWith("HKU SPACE"));

const stats = [
  { n: modules.length, label: "modules at HKU SPACE" },
  { n: talks.length, label: "public talks" },
  { n: corporateTraining.length, label: "organisations trained in AI" },
  { n: labs.length, label: "open-source teaching labs" },
];

export default function TeachingPage() {
  return (
    <>
      <div className="kc-fade">
        <PageIntro title="Teaching">
          I teach AI, machine learning, big data and FinTech at HKU SPACE, The
          University of Hong Kong, give public talks, and run AI training for
          business teams.
        </PageIntro>
      </div>

      <div
        className="kc-fade kc-shine mt-10 flex items-center gap-4 rounded-2xl border border-accent bg-accent-soft p-5 sm:p-6"
        style={{ animationDelay: "100ms" }}
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-10 w-10 shrink-0"
          style={{ fill: "var(--accent)" }}
        >
          <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9L12 2.5z" />
        </svg>
        <div>
          <p className="font-serif text-lg font-semibold text-foreground sm:text-xl">
            Outstanding Teacher Award 2025–2026
          </p>
          <p className="text-sm text-muted">HKU SPACE</p>
        </div>
      </div>

      <ul
        className="kc-fade mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4"
        style={{ animationDelay: "200ms" }}
      >
        {stats.map((s) => (
          <li key={s.label} className="rounded-xl border border-line p-4">
            <p className="font-serif text-3xl font-semibold text-accent tabular-nums">
              <span
                aria-hidden="true"
                className="kc-count"
                style={{ "--kc-target": String(s.n) } as React.CSSProperties}
              />
              <span className="sr-only">{s.n}</span>
            </p>
            <p className="mt-1 text-sm leading-5 text-muted">{s.label}</p>
          </li>
        ))}
      </ul>

      {lecturer && (
        <section className="kc-fade mt-14" style={{ animationDelay: "300ms" }}>
          <h2 className={sectionHeading}>Lecturer at HKU SPACE</h2>
          <p className="mt-2 text-sm text-muted">
            {lecturer.title} · {lecturer.org} · {lecturer.dates}
          </p>
          <div className="mt-4 space-y-4 leading-7 text-muted">
            {lecturer.points.map((p) => (
              <p key={p.text}>{p.text}</p>
            ))}
            <p>
              Students learn by building: they design LLM and AI-agent
              prototypes with tool calling, and work through open-source labs
              on GitHub that include security controls and automated
              adversarial tests.
            </p>
          </div>
        </section>
      )}

      <section className="kc-fade mt-14" style={{ animationDelay: "400ms" }}>
        <h2 className={sectionHeading}>Modules</h2>
        <p className="mt-2 mb-6 text-muted">
          Filter by topic to see what each area covers.
        </p>
        <ModuleExplorer />
      </section>

      <section className="mt-14">
        <h2 className={sectionHeading}>Hands-on labs</h2>
        <p className="mt-2 text-muted">
          Open-source projects that students download, run in VS Code and
          change.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {labs.map((lab) => (
            <li key={lab.href}>
              <Link
                href={lab.href}
                className="group flex h-full flex-col rounded-xl border border-line p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-sm"
              >
                <span className="font-serif text-lg font-semibold text-foreground group-hover:text-accent">
                  {lab.title}
                </span>
                <span className="mt-2 flex-1 text-sm leading-6 text-muted">
                  {lab.text}
                </span>
                <span className="mt-4 text-sm font-medium text-accent">
                  See the project{" "}
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className={sectionHeading}>Public talks at HKU SPACE</h2>
        <ol className="mt-6 border-l-2 border-line pl-6">
          {talks.map((talk) => (
            <li key={talk.url} className="relative pb-8 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[31px] h-3 w-3 rounded-full border-2 border-accent bg-background"
              />
              <p className="font-mono text-xs text-accent">{talk.year}</p>
              <p lang="zh-HK" className="mt-1 font-medium text-foreground">
                {talk.zh}
              </p>
              <p className="text-muted">{talk.en}</p>
              <a
                href={talk.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-1 inline-block text-sm ${link}`}
              >
                Watch on YouTube ↗
              </a>
            </li>
          ))}
        </ol>
        <Link href="/youtube" className={`mt-6 inline-block text-sm ${link}`}>
          Watch all three on the YouTube page →
        </Link>
      </section>

      <section className="mt-14">
        <h2 className={sectionHeading}>Corporate AI training</h2>
        <p className="mt-2 text-muted">
          AI training designed and delivered to help business staff adopt AI in
          their own work.
        </p>
        <ul className="mt-6 divide-y divide-line rounded-xl border border-line">
          {corporateTraining.map((c) => (
            <li
              key={c.org}
              className="flex flex-col gap-1 px-5 py-4 transition-colors hover:bg-band sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="font-medium text-foreground">{c.org}</span>
              <span className="flex flex-wrap gap-1.5">
                {c.years.split(", ").map((y) => (
                  <span
                    key={y}
                    className="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-xs text-accent"
                  >
                    {y}
                  </span>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 rounded-2xl bg-accent-soft p-6 sm:p-8">
        <h2 className={sectionHeading}>Training for your team?</h2>
        <p className="mt-4 max-w-prose leading-7 text-muted">
          I design hands-on AI and agentic AI training around your
          team&rsquo;s own tasks.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/work-with-me"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
          >
            Work with me
          </Link>
          <Link
            href="/photos"
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            See photos
          </Link>
        </div>
      </section>
    </>
  );
}
