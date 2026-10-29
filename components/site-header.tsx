import Link from "next/link";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/work-with-me", label: "Work with me" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Résumé" },
  { href: "/photos", label: "Photos" },
  { href: "/youtube", label: "YouTube" },
  { href: "/teaching", label: "Teaching" },
  { href: "/research", label: "Research" },
  { href: "/corporate-training", label: "Corp Training" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-6 py-6">
        <Link
          href="/"
          className="shrink-0 font-serif text-xl font-semibold tracking-tight whitespace-nowrap text-foreground"
        >
          Ken Tsai
        </Link>
        <nav aria-label="Main">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
