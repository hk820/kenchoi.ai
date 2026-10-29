import fs from "node:fs";
import path from "node:path";

type Client = { org: string; logo: string };

const extensions = ["svg", "png", "webp", "jpg"];

// Finds public/logos/<slug>.<ext>; returns null if the file isn't there yet.
function findLogo(slug: string): string | null {
  for (const ext of extensions) {
    const file = path.join(process.cwd(), "public", "logos", `${slug}.${ext}`);
    if (fs.existsSync(file)) return `/logos/${slug}.${ext}`;
  }
  return null;
}

function Tile({ org, src }: { org: string; src: string | null }) {
  return (
    <li className="flex h-32 w-44 shrink-0 flex-col items-center justify-center gap-2.5 rounded-2xl border border-line bg-white px-5 shadow-sm sm:h-36 sm:w-52">
      {src ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element -- small local logo files, shown as supplied */}
          <img src={src} alt="" className="h-12 w-auto max-w-full object-contain sm:h-14" />
          <span className="text-center text-[11px] leading-tight text-neutral-600">
            {org}
          </span>
        </>
      ) : (
        <span className="text-center font-serif text-sm leading-snug font-semibold text-neutral-800">
          {org}
        </span>
      )}
    </li>
  );
}

/** Client logos scrolling in a loop; pauses on hover, static for reduced motion. */
export function LogoStrip({ clients }: { clients: Client[] }) {
  const items = clients.map((c) => ({ org: c.org, src: findLogo(c.logo) }));
  return (
    <div className="kc-marquee-wrap relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="kc-marquee flex gap-4">
        <ul className="flex gap-4" aria-label="Organisations I have trained">
          {items.map((i) => (
            <Tile key={i.org} {...i} />
          ))}
        </ul>
        <ul className="kc-marquee-dup flex gap-4" aria-hidden="true">
          {items.map((i) => (
            <Tile key={i.org} {...i} />
          ))}
        </ul>
      </div>
    </div>
  );
}
