import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Work with me",
  description:
    "Corporate AI training, AI agent prototypes with guardrails, and forecasting, risk and analytics tools for finance teams in Hong Kong.",
};

const offers = [
  {
    title: "Corporate AI training",
    text: "Hands-on AI and agentic AI training that gets business staff using AI in their own work, designed around your team's tasks.",
    proof:
      "Delivered for The Hong Kong Jockey Club (2024–2026), Sony (HK) Limited (2025–2026), AEL Engineering Limited (2024) and Chance Century Education and Training (2026).",
    link: { href: "/corporate-training", label: "See training clients" },
  },
  {
    title: "AI agent prototypes with guardrails",
    text: "Tool-calling AI agents for finance and operations workflows, with permission checks, human approval, budget caps and audit logs designed in from the start.",
    proof:
      "The AI Agent Guardrail Lab shows the approach: ten categories of controls and automated adversarial tests.",
    link: {
      href: "/projects/ai-agent-guardrail-lab",
      label: "See the Guardrail Lab",
    },
  },
  {
    title: "Forecasting, risk and analytics tools",
    text: "Cash flow forecasting, stress testing, portfolio risk analysis and management dashboards in Python and Power BI, built to be explained and checked.",
    proof:
      "Five years in AIA Group Treasury supporting forecasting and liquidity analytics, plus open projects on stress testing and portfolio review.",
    link: { href: "/projects", label: "See the projects" },
  },
];

export default function WorkWithMePage() {
  return (
    <>
      <PageIntro title="Work with me">
        I help finance teams and businesses in Hong Kong put AI and analytics
        to practical use, through training, prototypes and tools.
      </PageIntro>

      <ul className="mt-12 grid gap-5">
        {offers.map((o) => (
          <li key={o.title} className="rounded-2xl border border-line p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              {o.title}
            </h2>
            <p className="mt-3 leading-7 text-muted">{o.text}</p>
            <p className="mt-4 rounded-lg bg-band px-4 py-3 text-sm leading-6 text-foreground">
              {o.proof}
            </p>
            <Link
              href={o.link.href}
              className="mt-5 inline-block text-sm font-medium text-accent transition-opacity hover:opacity-80"
            >
              {o.link.label} <span aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ul>

      <section className="mt-14 rounded-2xl bg-accent-soft p-8 sm:p-10">
        <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
          Getting started
        </h2>
        <p className="mt-4 max-w-prose leading-7 text-muted">
          Send a few lines about your team, the problem or audience, and your
          timeline. I&rsquo;ll reply with whether and how I can help.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
        >
          Get in touch
        </Link>
      </section>
    </>
  );
}
