import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { MeasureCards, StudyTimeline } from "@/components/study-diagram";
import { research } from "@/lib/resume";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Ken Tsai's research on IFRS 17 adoption and insurers' risk trade-offs, with The Hang Seng University of Hong Kong.",
};

const sectionHeading =
  "font-serif text-2xl font-semibold tracking-tight text-foreground";

export default function ResearchPage() {
  return (
    <>
      <div className="kc-fade">
        <PageIntro title="Research">
          Applied quantitative research at The Hang Seng University of Hong
          Kong, where I am a part-time Senior Research Analyst.
        </PageIntro>
      </div>

      <article
        className="kc-fade mt-12 rounded-2xl border border-line p-6 sm:p-8"
        style={{ animationDelay: "120ms" }}
      >
        <p className="flex items-center gap-2.5 font-mono text-xs font-medium tracking-widest text-accent uppercase">
          <span aria-hidden="true" className="relative inline-flex h-2.5 w-2.5">
            <span className="kc-status-ping absolute inset-0 rounded-full bg-accent" />
            <span className="relative inline-block h-2.5 w-2.5 rounded-full bg-accent" />
          </span>
          Working paper · {research.status}
        </p>
        <h2 className="mt-4 font-serif text-2xl leading-snug font-semibold tracking-tight text-balance text-foreground sm:text-3xl sm:leading-snug">
          {research.title}
        </h2>
        <p className="mt-3 text-muted">
          Joint work with faculty at The Hang Seng University of Hong Kong.
        </p>
      </article>

      <section className="kc-fade mt-14" style={{ animationDelay: "220ms" }}>
        <h2 className={sectionHeading}>The question</h2>
        <div className="mt-4 space-y-4 leading-7 text-muted">
          <p>
            IFRS 17, which took effect on 1 January 2023, changed how insurers
            measure and report their insurance contracts. Most insurers adopted
            IFRS 9, the standard for financial instruments, at the same time.
          </p>
          <p>
            Insurers can balance one kind of risk against another: more risk in
            the investment portfolio, for example, and less in underwriting. The
            paper asks whether adopting the new standards changed that balance.
          </p>
        </div>
      </section>

      <section className="kc-fade mt-14" style={{ animationDelay: "320ms" }}>
        <h2 className={sectionHeading}>How the study works</h2>
        <div className="mt-6 rounded-2xl border border-line bg-band p-5 sm:p-8">
          <StudyTimeline />
        </div>
        <ul className="mt-6 space-y-3 pl-5 leading-7 text-muted marker:text-accent [list-style-type:disc]">
          <li>
            Listed insurers in markets that adopted IFRS 17 in 2023 are compared
            with insurers in markets that did not, before and after adoption.
          </li>
          <li>
            Three risk measures are estimated together, because a change in one
            can be offset by a change in another.
          </li>
          <li>Life and non-life insurers are analysed separately.</li>
          <li>Further tests check that any change begins at adoption, not before.</li>
        </ul>
      </section>

      <section className="kc-fade mt-14" style={{ animationDelay: "420ms" }}>
        <h2 className={sectionHeading}>What is measured</h2>
        <div className="mt-6">
          <MeasureCards />
        </div>
      </section>

      <section className="kc-fade mt-14" style={{ animationDelay: "520ms" }}>
        <h2 className={sectionHeading}>Why it matters</h2>
        <p className="mt-4 leading-7 text-muted">
          For regulators, investors and insurers&rsquo; own risk teams, the
          question is whether a new reporting standard changes how insurers take
          risk, or only how that risk is reported.
        </p>
      </section>

      <section
        className="kc-fade mt-14 rounded-2xl bg-accent-soft p-6 sm:p-8"
        style={{ animationDelay: "620ms" }}
      >
        <h2 className={sectionHeading}>Status</h2>
        <p className="mt-4 leading-7 text-muted">
          The paper is under review at an academic journal. I&rsquo;ll add the
          findings here once it is published.
        </p>
        <Link
          href="/resume"
          className="mt-6 inline-block text-sm font-medium text-accent transition-opacity hover:opacity-80"
        >
          See my résumé <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  );
}
