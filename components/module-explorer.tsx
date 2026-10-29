"use client";

import { useState } from "react";
import { modules } from "@/lib/resume";
import { moduleTopic, topics, type Topic } from "@/lib/teaching";

type Filter = "All" | Topic;

/** HKU SPACE modules with topic filters; the list fades in again on each change. */
export function ModuleExplorer() {
  const [filter, setFilter] = useState<Filter>("All");
  const shown =
    filter === "All"
      ? modules
      : modules.filter((m) => moduleTopic[m.code] === filter);

  const filters: Filter[] = ["All", ...topics];

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter modules by topic">
        {filters.map((f) => {
          const count =
            f === "All"
              ? modules.length
              : modules.filter((m) => moduleTopic[m.code] === f).length;
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={active}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors duration-200 ${
                active
                  ? "border-accent bg-accent text-on-accent"
                  : "border-line text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {f} <span className="opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-muted" aria-live="polite">
        Showing {shown.length} of {modules.length} modules
      </p>

      <ul key={filter} className="mt-4 grid gap-3 sm:grid-cols-2">
        {shown.map((m, i) => (
          <li
            key={m.code}
            className="kc-fade rounded-xl border border-line bg-background p-4 transition-colors hover:border-accent"
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <p className="flex items-center justify-between gap-3">
              <span className="font-mono text-xs text-accent">{m.code}</span>
              <span className="text-[11px] text-muted">{moduleTopic[m.code]}</span>
            </p>
            <p className="mt-1.5 text-sm leading-6 font-medium text-foreground">
              {m.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
