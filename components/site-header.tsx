import Link from "next/link";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/resume", label: "Résumé" },
  { href: "/photos", label: "Photos" },
  { href: "/youtube", label: "YouTube" },
  { href: "/teaching", label: "Teaching" },
  { href: "/research", label: "Research" },
  { href: "/corporate-training", label: "Corp Training" },
  { href: "/projects", label: "Projects" },
  { href: "/work-with-me", label: "Work with me" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-line bg-background print:hidden">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-6 py-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="shrink-0 font-serif text-2xl font-semibold tracking-tight whitespace-nowrap text-foreground"
          >
            Ken Choi
          </Link>
          <ThemeToggle />
        </div>
        <nav aria-label="Main">
          <NavLinks links={navLinks} />
        </nav>
      </div>
    </header>
  );
}
