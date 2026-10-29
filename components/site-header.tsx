import Link from "next/link";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/work-with-me", label: "Work with me" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Résumé" },
  { href: "/photos", label: "Photos" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-tight text-foreground"
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
