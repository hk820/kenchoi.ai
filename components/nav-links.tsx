"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

type NavLink = { href: string; label: string };

/** Main menu. An amber bar slides under the tab you're on. */
export function NavLinks({ links }: { links: NavLink[] }) {
  const pathname = usePathname();
  const wrapRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const placed = useRef(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const bar = barRef.current;
    if (!wrap || !bar) return;

    const place = () => {
      const active = wrap.querySelector<HTMLElement>('a[aria-current="page"]');
      if (!active) {
        bar.style.opacity = "0";
        return;
      }
      const wrapBox = wrap.getBoundingClientRect();
      const box = active.getBoundingClientRect();
      // No slide on first placement, only when moving between tabs.
      if (!placed.current) bar.style.transition = "none";
      bar.style.width = `${box.width}px`;
      bar.style.transform = `translate(${box.left - wrapBox.left}px, ${box.bottom - wrapBox.top + 4}px)`;
      bar.style.opacity = "1";
      if (!placed.current) {
        void bar.offsetWidth;
        bar.style.transition = "";
        placed.current = true;
      }
    };

    place();
    const observer = new ResizeObserver(place);
    observer.observe(wrap);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div ref={wrapRef} className="relative">
      <ul className="flex flex-wrap gap-x-5 gap-y-3 text-base text-muted md:gap-x-6 md:text-lg">
        {links.map((link) => {
          const active = isActive(link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`transition-colors hover:text-accent ${active ? "text-foreground" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <span
        ref={barRef}
        aria-hidden="true"
        className="kc-navbar pointer-events-none absolute top-0 left-0 h-0.5 w-0 rounded-full bg-accent opacity-0"
      />
    </div>
  );
}
