import type { Metadata } from "next";
import Link from "next/link";
import { contact } from "@/lib/site";
import { projects } from "@/lib/projects";
import {
  awards,
  certifications,
  corporateTraining,
  education,
  experience,
  headline,
  languages,
  modules,
  partTime,
  research,
  skills,
  summary,
  talks,
  type Role,
} from "@/lib/resume";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Ken Choi's résumé: AIA Group Treasury, HKU SPACE lecturer in AI and machine learning, corporate AI training, research and qualifications.",
};

const link = "text-accent underline-offset-4 hover:underline";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14 border-t border-line pt-8">
      <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function RoleItem({ role }: { role: Role }) {
  return (
    <div className="mt-6 first:mt-0">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="font-semibold text-foreground">{role.title}</h3>
        <p className="shrink-0 text-sm text-muted tabular-nums">
          {role.dates}
        </p>
      </div>
      <p className="mt-0.5 text-muted">{role.org}</p>
      <ul className="mt-3 space-y-2.5 pl-5 leading-7 text-muted marker:text-accent [list-style-type:disc]">
        {role.points.map((point) => (
          <li key={point.text}>
            {point.label && (
              <span className="font-medium text-foreground">
                {point.label}:{" "}
              </span>
            )}
            {point.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ResumePage() {
  return (
    <>
      <header>
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {contact.name}
        </h1>
        <p className="mt-4 max-w-prose text-lg leading-8 text-muted">
          {headline}
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <li className="text-muted">{contact.location}</li>
          <li>
            <a href={contact.phoneHref} className={link}>
              {contact.phone}
            </a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`} className={link}>
              {contact.email}
            </a>
          </li>
          <li>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={link}
            >
              {contact.linkedinLabel}
            </a>
          </li>
          <li>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className={link}
            >
              {contact.githubLabel}
            </a>
          </li>
        </ul>
        <p className="mt-4 text-sm text-muted">
          <span className="font-medium text-foreground">Languages:</span>{" "}
          {languages}
        </p>
      </header>

      <Section title="Summary">
        <p className="leading-7 text-muted">{summary}</p>
      </Section>

      <Section title="Experience">
        {experience.map((role) => (
          <RoleItem key={role.title} role={role} />
        ))}
      </Section>

      <Section title="Part-time roles">
        {partTime.map((role) => (
          <RoleItem key={role.title} role={role} />
        ))}
      </Section>

      <Section title="Teaching at HKU SPACE">
        <p className="leading-7 text-muted">
          {modules.length} postgraduate and professional modules:
        </p>
        <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {modules.map((m) => (
            <li key={m.code} className="text-sm leading-6">
              <span className="font-mono text-xs text-accent">{m.code}</span>
              <span className="block text-foreground">{m.title}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Public talks at HKU SPACE">
        <ul className="space-y-5">
          {talks.map((talk) => (
            <li key={talk.url}>
              <p className="text-sm text-muted tabular-nums">{talk.year}</p>
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
        </ul>
      </Section>

      <Section title="Corporate AI training">
        <p className="leading-7 text-muted">
          AI training designed and delivered to drive AI adoption by business
          staff:
        </p>
        <ul className="mt-4 divide-y divide-line rounded-xl border border-line">
          {corporateTraining.map((c) => (
            <li
              key={c.org}
              className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:justify-between"
            >
              <span className="font-medium text-foreground">{c.org}</span>
              <span className="text-sm text-muted tabular-nums">
                {c.years}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Selected projects">
        <ul className="space-y-4">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link href={`/projects/${p.slug}`} className={`font-medium ${link}`}>
                {p.title}
              </Link>
              <p className="mt-1 leading-7 text-muted">{p.summary}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Research">
        <p className="font-medium text-foreground italic">{research.title}</p>
        <p className="mt-1 leading-7 text-muted">{research.detail}</p>
      </Section>

      <Section title="Education and qualifications">
        <ul className="space-y-4">
          {education.map((e) => (
            <li key={e.degree}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <p className="font-medium text-foreground">{e.degree}</p>
                <p className="shrink-0 text-sm text-muted tabular-nums">
                  {e.years}
                </p>
              </div>
              <p className="text-muted">{e.school}</p>
            </li>
          ))}
        </ul>
        <ul className="mt-6 flex flex-wrap gap-2">
          {certifications.map((c) => (
            <li
              key={c}
              className="rounded-full border border-line px-3 py-1 text-xs text-muted"
            >
              {c}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Awards and recognition">
        <ul className="space-y-2">
          {awards.map((a) => (
            <li key={a.name} className="leading-7">
              <span className="font-medium text-foreground">{a.name}</span>
              <span className="text-muted"> · {a.from}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Skills">
        <dl className="space-y-5">
          {skills.map((s) => (
            <div key={s.area}>
              <dt className="font-medium text-foreground">{s.area}</dt>
              <dd className="mt-1 text-sm leading-6 text-muted">{s.items}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  );
}
