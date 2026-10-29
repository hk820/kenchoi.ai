import type { Metadata } from "next";
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

      <ul className="mt-12 divide-y divide-line rounded-2xl border border-line">
        {channels.map((c) => (
          <li key={c.label}>
            <a
              href={c.href}
              {...(c.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex flex-col gap-1 px-5 py-5 transition-colors hover:bg-band sm:flex-row sm:items-center sm:justify-between sm:px-6"
            >
              <span className="text-sm text-muted">{c.label}</span>
              <span className="font-medium break-all text-foreground group-hover:text-accent">
                {c.value}
                {c.external && <span aria-hidden="true"> ↗</span>}
              </span>
            </a>
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
