import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { StrandsDiagram } from "@/components/strands-diagram";

const photoSrc = "/images/ken.jpg";
const stressTestPreviewSrc = "/images/stress-test-preview.png";

// Images are optional: anything not yet in /public is left out of the page.
function hasPublicFile(src: string) {
  return fs.existsSync(path.join(process.cwd(), "public", src));
}

const stats = [
  {
    value: "15+ years",
    label: "in data analytics, forecasting and machine learning",
  },
  { value: "16 modules", label: "taught at HKU SPACE on AI, data and FinTech" },
  { value: "Outstanding Teacher", label: "HKU SPACE award, 2025–26" },
  {
    value: "4 organisations",
    label: "trained in AI, including The Hong Kong Jockey Club and Sony",
  },
];

const services = [
  {
    title: "Treasury and liquidity analytics",
    text: "Cash flow forecasting, liquidity optimisation and automated reporting.",
    links: [{ href: "/resume", label: "See experience" }],
  },
  {
    title: "Portfolio and risk analysis",
    text: "Stress tests, scenario analysis, VaR and rebalancing.",
    links: [
      { href: "/projects/portfolio-stress-testing", label: "Stress testing" },
      {
        href: "/projects/portfolio-review-rebalancing",
        label: "Portfolio review",
      },
    ],
  },
  {
    title: "AI agents with guardrails",
    text: "Tool-using agents with approval steps, limits and audit logs, built for regulated finance.",
    links: [
      { href: "/projects/ai-agent-guardrail-lab", label: "AI Agent Guardrail Lab" },
    ],
  },
  {
    title: "AI training for business teams",
    text: "Hands-on AI and agentic AI training, delivered for The Hong Kong Jockey Club, Sony (HK) and others.",
    links: [{ href: "/corporate-training", label: "Training clients" }],
  },
];

const primaryButton =
  "inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-on-accent transition-opacity hover:opacity-90";
const outlineButton =
  "inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent";
const sectionHeading =
  "font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl";

export default function Home() {
  const hasPhoto = hasPublicFile(photoSrc);
  const hasPreview = hasPublicFile(stressTestPreviewSrc);

  return (
    <>
      <section
        className={`pb-16 sm:pb-24 ${hasPhoto ? "sm:grid sm:grid-cols-[1fr_13rem] sm:items-center sm:gap-10" : ""}`}
      >
        {hasPhoto && (
          <div className="relative mb-8 aspect-[4/5] w-36 overflow-hidden rounded-2xl border border-line shadow-sm sm:order-last sm:mb-0 sm:w-full">
            <Image
              src={photoSrc}
              alt="Ken Tsai"
              fill
              preload
              sizes="(min-width: 640px) 208px, 144px"
              className="object-cover"
            />
          </div>
        )}
        <div>
          <h1 className="font-serif text-3xl leading-tight font-semibold tracking-tight text-balance text-foreground sm:text-4xl sm:leading-tight">
            Practical analytics and AI tools for finance teams, built by
            someone who has worked inside one.
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-8 text-muted">
            15+ years in data analytics, forecasting and machine learning,
            most recently in Group Treasury at AIA. I build forecasting models,
            risk tools and AI agents, and teach Agentic AI for FinTech at HKU
            SPACE.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/projects" className={primaryButton}>
              View projects
            </Link>
            <Link href="/work-with-me" className={outlineButton}>
              Work with me
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="strands-heading" className="pb-16 sm:pb-24">
        <p className="font-mono text-xs font-medium tracking-widest text-accent uppercase">
          How it fits together
        </p>
        <h2 id="strands-heading" className={`${sectionHeading} mt-3`}>
          Machine learning, data science and agentic AI
        </h2>
        <div className="mt-10">
          <StrandsDiagram />
        </div>
      </section>

      <section aria-label="Highlights" className="band py-12 sm:py-16">
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <li
              key={stat.value}
              className="rounded-xl border border-line bg-background p-4 sm:p-5"
            >
              <p className="font-serif text-xl font-semibold text-accent">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">{stat.label}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="featured-heading" className="py-16 sm:py-24">
        <p className="font-mono text-xs font-medium tracking-widest text-accent uppercase">
          Featured project
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-line">
          {hasPreview && (
            <div className="relative aspect-[16/9] border-b border-line bg-band">
              <Image
                src={stressTestPreviewSrc}
                alt="Preview of the portfolio stress testing report"
                fill
                sizes="(min-width: 768px) 720px, 100vw"
                className="object-cover object-top"
              />
            </div>
          )}
          <div className="p-6 sm:p-8">
            <h2 id="featured-heading" className={sectionHeading}>
              Portfolio stress testing
            </h2>
            <p className="mt-4 max-w-prose leading-7 text-muted">
              Replays 8 past crises and runs what-if shocks on a $1M
              multi-asset portfolio. Drag the sliders to test your own
              scenario.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/demos/portfolio-stress-test.html"
                target="_blank"
                rel="noopener noreferrer"
                className={primaryButton}
              >
                Try the interactive report
                <span aria-hidden="true">↗</span>
              </a>
              <Link
                href="/projects/portfolio-stress-testing"
                className={outlineButton}
              >
                Read the write-up
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="services-heading" className="band py-16 sm:py-24">
        <h2 id="services-heading" className={sectionHeading}>
          What I do
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <li
              key={service.title}
              className="flex flex-col rounded-xl border border-line bg-background p-6"
            >
              <h3 className="font-serif text-lg leading-snug font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                {service.text}
              </p>
              <ul className="mt-5 space-y-1.5 border-t border-line pt-4 text-sm font-medium">
                {service.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-accent transition-opacity hover:opacity-80"
                    >
                      {link.label} <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="pt-16 sm:pt-24">
        <div className="rounded-2xl bg-accent-soft p-8 sm:p-10">
          <p className="max-w-prose font-serif text-xl leading-snug font-semibold text-balance text-foreground sm:text-2xl sm:leading-snug">
            Hiring for a data or AI role in financial services, or need help
            with a finance analytics problem? Let&rsquo;s talk.
          </p>
          <Link href="/contact" className={`${primaryButton} mt-8`}>
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
