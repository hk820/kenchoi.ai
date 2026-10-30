"use client";

import { useSyncExternalStore } from "react";

function subscribe(onTick: () => void) {
  const id = window.setInterval(onTick, 1000);
  return () => window.clearInterval(id);
}
const nowInSeconds = () => Math.floor(Date.now() / 1000);
const noTimeOnServer = () => 0;

const format = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Hong_Kong",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});
const weekday = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Hong_Kong",
  weekday: "long",
});

const HK_OFFSET = 8 * 3600;

/** A small ticking clock showing the time in Hong Kong. */
export function HkClock() {
  const secs = useSyncExternalStore(subscribe, nowInSeconds, noTimeOnServer);
  const local = secs ? secs + HK_OFFSET : 10 * 3600 + 10 * 60; // 10:10 before the page loads

  const second = (local % 60) * 6;
  const minute = ((local % 3600) / 3600) * 360;
  const hour = ((local % 43200) / 43200) * 360;

  const hand = (deg: number, length: number, width: number, colour: string, tick = false) => (
    <line
      x1="24"
      y1="24"
      x2="24"
      y2={24 - length}
      strokeWidth={width}
      strokeLinecap="round"
      style={{
        stroke: colour,
        transform: `rotate(${deg}deg)`,
        transformOrigin: "24px 24px",
        transition: tick && deg !== 0 ? "transform 0.25s cubic-bezier(0.4, 2.2, 0.6, 1)" : "none",
      }}
    />
  );

  return (
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-14 w-14 shrink-0">
        <circle cx="24" cy="24" r="22" style={{ fill: "var(--band)", stroke: "var(--line)" }} strokeWidth="1.5" />
        {Array.from({ length: 12 }, (_, i) => (
          <line
            key={i}
            x1="24"
            y1="4.5"
            x2="24"
            y2={i % 3 ? "6.5" : "8"}
            strokeWidth="1.5"
            style={{ stroke: "var(--muted)", transform: `rotate(${i * 30}deg)`, transformOrigin: "24px 24px" }}
          />
        ))}
        {hand(hour, 10, 2.6, "var(--foreground)")}
        {hand(minute, 15, 2, "var(--foreground)")}
        {secs ? hand(second, 17, 1.2, "var(--accent)", true) : null}
        <circle cx="24" cy="24" r="2" style={{ fill: "var(--accent)" }} />
      </svg>
      <p className="leading-6 text-muted">
        {secs ? (
          <>
            It&rsquo;s{" "}
            <span className="font-medium text-foreground tabular-nums">
              {format.format(secs * 1000)}
            </span>{" "}
            on {weekday.format(secs * 1000)} in Hong Kong
          </>
        ) : (
          <>Hong Kong time</>
        )}
        <span className="block text-sm">HKT, UTC+8</span>
      </p>
    </div>
  );
}
