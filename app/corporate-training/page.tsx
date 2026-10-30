import type { Metadata } from "next";
import Link from "next/link";
import { LogoStrip } from "@/components/logo-strip";
import { PageIntro } from "@/components/page-intro";
import { TrainingTimeline } from "@/components/training-timeline";
import { approach, clients, years } from "@/lib/training";

export const metadata: Metadata = {
  title: "Corp Training",
  description:
    "Corporate AI training by Ken Choi for The Hong Kong Jockey Club, Sony (HK), AEL Engineering and Chance Century Education and Training.",
};

const sectionHeading =
  "font-serif text-2xl font-semibold tracking-tight text-foreground";

const returning = clients.filter((c) => c.years.length > 1).length;
const longest = Math.max(...clients.map((c) => c.years.length));

const stats = [
  { n: clients.length, label: "organisations trained in AI" },
  { n: years.length, label: `years of training, ${years[0]}–${years[years.length - 1]}` },
  { n: returning, label: "clients came back for more" },
  { n: longest, label: "years in a row with The Hong Kong Jockey Club" },
];

export default function CorporateTrainingPage() {
  return (
    <>
      <div className="kc-fade">
        <PageIntro title="Corp Training">
          I design and deliver AI training that helps business staff use AI in
          their own work, safely and with confidence.
        </PageIntro>
      </div>

      <section
        aria-label="Organisations I have trained"
        className="kc-fade mt-10"
        style={{ animationDelay: "60ms" }}
      >
        <p className="mb-4 font-mono text-xs font-medium tracking-widest text-accent uppercase">
          Organisations I have trained
        </p>
        <LogoStrip clients={clients.map(({ org, logo }) => ({ org, logo }))} />
      </section>

      <ul
        className="kc-fade mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
        style={{ animationDelay: "100ms" }}
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

      <section className="kc-fade mt-14" style={{ animationDelay: "200ms" }}>
        <h2 className={sectionHeading}>Year by year</h2>
        <p className="mt-2 mb-6 text-muted">
          Who I trained each year. Two clients have come back more than once.
        </p>
        <TrainingTimeline
          years={years}
          clients={clients.map(({ org, years }) => ({ org, years }))}
        />
      </section>

      <section className="kc-fade mt-14" style={{ animationDelay: "300ms" }}>
        <h2 className={sectionHeading}>Clients</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {clients.map((c) => (
            <li
              key={c.org}
              className="group flex flex-col rounded-2xl border border-line p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-sm"
            >
              <p className="font-mono text-[11px] tracking-wider text-accent uppercase">
                {c.sector}
              </p>
              <h3 className="mt-2 font-serif text-xl leading-snug font-semibold text-foreground">
                {c.org}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted">{c.text}</p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {c.years.map((y) => (
                  <li
                    key={y}
                    className="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-xs text-accent"
                  >
                    {y}
                  </li>
                ))}
                {c.years.length > 1 && (
                  <li className="rounded-full border border-accent px-2.5 py-0.5 text-xs text-accent">
                    Returning client
                  </li>
                )}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className={sectionHeading}>How I run training</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2">
          {approach.map((a, i) => (
            <li key={a.title} className="flex gap-4 rounded-xl bg-band p-5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent font-mono text-sm text-on-accent">
                {i + 1}
              </span>
              <div>
                <p className="font-medium text-foreground">{a.title}</p>
                <p className="mt-1 text-sm leading-6 text-muted">{a.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-muted">
          Delivered in Cantonese, English or Mandarin. I also teach these topics
          at HKU SPACE;{" "}
          <Link
            href="/teaching"
            className="text-accent underline-offset-4 hover:underline"
          >
            see my teaching
          </Link>
          .
        </p>
      </section>

      <section className="mt-14 rounded-2xl bg-accent-soft p-6 sm:p-8">
        <h2 className={sectionHeading}>Training for your team?</h2>
        <p className="mt-4 max-w-prose leading-7 text-muted">
          Tell me about your team, what they work on and what you&rsquo;d like
          them to be able to do with AI. I&rsquo;ll suggest a format and
          outline.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
          <Link
            href="/work-with-me"
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Work with me
          </Link>
        </div>
      </section>
    </>
  );
}
