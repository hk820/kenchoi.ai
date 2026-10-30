import { CopyrightYear } from "./copyright-year";

const socialLinks = [
  { href: "https://www.linkedin.com/in/k820", label: "LinkedIn" },
  { href: "https://github.com/hk820", label: "GitHub" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line print:hidden">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © <CopyrightYear /> Ken Choi
        </p>
        <ul className="flex gap-5">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
