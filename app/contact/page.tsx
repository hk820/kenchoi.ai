import type { Metadata } from "next";
import { CopyButton } from "@/components/copy-button";
import { HkClock } from "@/components/hk-clock";
import { PageIntro } from "@/components/page-intro";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ken Tsai about data and AI roles in financial services, consulting, or corporate AI training in Hong Kong.",
};

const channels = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    external: false,
  },
  {
    label: "Phone",
    value: contact.phone,
    href: contact.phoneHref,
    external: false,
  },
  {
    label: "LinkedIn",
    value: contact.linkedinLabel,
    href: contact.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: contact.githubLabel,
    href: contact.github,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro title="Contact">
        Based in Hong Kong. Happy to talk in English, Cantonese or Mandarin.
      </PageIntro>

      <div className="mt-10">
        <HkClock />
      </div>

      <ul className="mt-10 divide-y divide-line overflow-hidden rounded-2xl border border-line">
        {channels.map((c) => (
          <li key={c.label} className="flex items-center">
            <a
              href={c.href}
              {...(c.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex min-w-0 flex-1 flex-col gap-1 px-5 py-5 transition-colors hover:bg-band sm:flex-row sm:items-center sm:justify-between sm:px-6"
            >
              <span className="text-sm text-muted">{c.label}</span>
              <span className="font-medium break-all text-foreground group-hover:text-accent">
                {c.value}
                {c.external && <span aria-hidden="true"> ↗</span>}
              </span>
            </a>
            {c.label === "Email" && (
              <span className="pr-4 sm:pr-5">
                <CopyButton text={c.value} label="email address" />
              </span>
            )}
          </li>
        ))}
      </ul>

      <section className="mt-14">
        <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
          What to include
        </h2>
        <ul className="mt-5 space-y-3 pl-5 leading-7 text-muted marker:text-accent [list-style-type:disc]">
          <li>
            <span className="font-medium text-foreground">For a role:</span>{" "}
            the job description, the team, and how data or AI fits into it.
          </li>
          <li>
            <span className="font-medium text-foreground">
              For a project or training:
            </span>{" "}
            your organisation, the problem or audience, and your timeline.
          </li>
        </ul>
      </section>
    </>
  );
}
