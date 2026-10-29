"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

type Props = {
  years: string[];
  clients: { org: string; years: string[] }[];
};

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
const STEP_MS = 2600;

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(reducedMotionQuery);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

/** One column per year; the highlight moves from year to year. */
export function TrainingTimeline({ years, clients }: Props) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(reducedMotionQuery).matches,
    () => false,
  );
  const moving = !reducedMotion && !hovered;

  useEffect(() => {
    if (!moving) return;
    const timer = window.setInterval(
      () => setIndex((i) => (i + 1) % years.length),
      STEP_MS,
    );
    return () => window.clearInterval(timer);
  }, [moving, years.length]);

  return (
    <ol
      className="grid gap-4 sm:grid-cols-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {years.map((year, i) => {
        const active = !reducedMotion && i === index;
        const that = clients.filter((c) => c.years.includes(year));
        return (
          <li
            key={year}
            className={`relative overflow-hidden rounded-2xl border p-5 transition-all duration-500 ${
              active
                ? "-translate-y-1 border-accent bg-accent-soft shadow-sm"
                : "border-line bg-background"
            }`}
          >
            <p className="flex items-baseline justify-between">
              <span
                className={`font-serif text-3xl font-semibold transition-colors duration-500 ${
                  active ? "text-accent" : "text-foreground"
                }`}
              >
                {year}
              </span>
              <span className="text-xs text-muted">
                {that.length} {that.length === 1 ? "client" : "clients"}
              </span>
            </p>
            <ul className="mt-4 space-y-2">
              {that.map((c, j) => (
                <li
                  key={c.org}
                  className={`rounded-lg border px-3 py-2 text-sm leading-5 transition-all duration-500 ${
                    active
                      ? "border-accent/40 bg-background text-foreground"
                      : "border-line text-muted"
                  }`}
                  style={{ transitionDelay: active ? `${j * 90}ms` : "0ms" }}
                >
                  {c.org}
                </li>
              ))}
            </ul>
            {active && (
              <span
                key={`bar-${index}`}
                aria-hidden="true"
                className="kc-progress absolute bottom-0 left-0 h-1 bg-accent"
                style={{ animationDuration: `${STEP_MS}ms` }}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
