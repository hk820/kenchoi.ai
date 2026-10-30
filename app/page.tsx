import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { FanChart } from "@/components/fan-chart";
import { StrandsDiagram } from "@/components/strands-diagram";

const roles = ["Forward Deployed Engineer (FDE)", "Data Scientist", "Agentic AI Developer"];

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
      {/* Hero: wider than the page column. */}
      <section className="relative isolate left-1/2 w-[min(72rem,calc(100vw-3rem))] -translate-x-1/2 pb-20 sm:pb-28">
        <FanChart
          seed="Ken Choi"
          nowShare={0.42}
          className="kc-fan-mask absolute -top-24 -right-40 -z-10 w-[40rem] sm:-top-28 md:-top-10 md:-right-64 md:w-[64rem]"
        />
        <div
          className={
            hasPhoto
              ? "md:grid md:grid-cols-[1fr_16rem] md:items-center md:gap-14 lg:grid-cols-[1fr_19rem]"
              : ""
          }
        >
          {hasPhoto && (
            <div className="relative mb-10 aspect-[4/5] w-40 overflow-hidden rounded-[1.75rem] border border-line ring-1 ring-accent/40 ring-offset-8 ring-offset-background sm:w-48 md:order-last md:mb-0 md:w-full">
              <Image
                src={photoSrc}
                alt="Ken Choi"
                fill
                preload
                sizes="(min-width: 1024px) 304px, (min-width: 768px) 256px, 192px"
                className="object-cover"
              />
            </div>
          )}
          <div>
            <p className="flex flex-wrap gap-x-2.5 gap-y-1 text-base text-muted sm:text-lg">
              {roles.map((role, i) => (
                <span key={role} className="whitespace-nowrap">
                  {role}
                  {i < roles.length - 1 && (
                    <span aria-hidden="true" className="pl-2.5 text-accent">
                      /
                    </span>
                  )}
                </span>
              ))}
            </p>
            <h1 className="mt-5 font-serif text-4xl leading-[1.08] font-semibold tracking-tight text-balance text-foreground sm:text-5xl sm:leading-[1.05] lg:text-[4rem]">
              Practical analytics and AI tools for finance teams, built by
              someone who has worked inside one.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
              15+ years in data analytics, forecasting and machine learning,
              most recently in Group Treasury at an insurer. I build
              forecasting models, risk tools and AI agents, and teach Agentic
              AI for FinTech at HKU SPACE.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/projects" className={`${primaryButton} sm:px-6 sm:py-3.5 sm:text-base`}>
                View projects
              </Link>
              <Link href="/work-with-me" className={`${outlineButton} bg-background sm:px-6 sm:py-3.5 sm:text-base`}>
                Work with me
              </Link>
            </div>
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
