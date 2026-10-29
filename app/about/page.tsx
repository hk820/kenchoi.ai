import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ken Tsai works where finance meets data and AI: treasury analytics at an insurer, AI and machine learning teaching at HKU SPACE, and research at The Hang Seng University of Hong Kong.",
};

const link = "text-accent underline-offset-4 hover:underline";

const facts = [
  { label: "Based in", value: "Hong Kong" },
  {
    label: "Education",
    value:
      "Master of Statistics (Risk Management), The University of Hong Kong; BSc (Hons) Statistics and Operations Research, Hong Kong Baptist University",
  },
  {
    label: "Qualifications",
    value: "FRM® certified; CFA® Level III candidate; SAS® certified",
  },
  {
    label: "Languages",
    value: "English, Cantonese and Mandarin",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro title="About">
        I work where finance meets data and AI: forecasting, liquidity and risk
        analytics, and AI agents that regulated firms can put to real use.
      </PageIntro>

      <div className="mt-12 space-y-6 text-lg leading-8 text-muted">
        <p>
          From August 2021 to October 2026 I was a Senior Project Data Analyst
          in an insurer&rsquo;s Group Treasury. I supported the cash flow forecasting
          and optimal cash workstreams, and the delivery of the Liquidity
          Analytics Platform on Microsoft Azure, from gathering requirements
          through testing, go-live and hypercare.
        </p>
        <p>
          Since 2023 I have{" "}
          <Link href="/teaching" className={link}>
            taught at HKU SPACE
          </Link>
          , where I design and deliver 16
          postgraduate and professional modules on AI, machine learning, big
          data and FinTech, including{" "}
          <em>Agentic AI for FinTech and Business Applications</em>. I received
          the HKU SPACE Outstanding Teacher Award for 2025–26. I also design
          and run AI training for business teams at organisations such as The
          Hong Kong Jockey Club and Sony (HK).
        </p>
        <p>
          At The Hang Seng University of Hong Kong I am a part-time Senior
          Research Analyst. My co-authored{" "}
          <Link href="/research" className={link}>
            paper on IFRS 17 adoption and insurers&rsquo; risk trade-offs
          </Link>{" "}
          is under review.
        </p>
        <p>
          The{" "}
          <Link href="/projects" className={link}>
            projects on this site
          </Link>{" "}
          follow the same approach I teach: transparent methods, tests for the
          maths, and a plain statement of what each tool leaves out.
        </p>
      </div>

      <dl className="mt-14 divide-y divide-line border-y border-line">
        {facts.map((f) => (
          <div
            key={f.label}
            className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6"
          >
            <dt className="text-sm text-muted">{f.label}</dt>
            <dd className="text-foreground">{f.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/resume"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
        >
          Read my résumé
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Get in touch
        </Link>
      </div>
    </>
  );
}
