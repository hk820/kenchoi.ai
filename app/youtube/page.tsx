import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { VideoPlayer } from "@/components/video-player";
import { talks } from "@/lib/resume";
import { channel, videoDetails } from "@/lib/videos";

export const metadata: Metadata = {
  title: "YouTube",
  description:
    "Ken Choi's public talks for HKU SPACE on generative AI, Web3, AI agents and the future of finance, on YouTube.",
};

const facts = [
  "Free public talks in HKU SPACE's Open SPACE series",
  "In Cantonese, about one hour each",
  "Held in Admiralty, streamed live on YouTube",
];

export default function YouTubePage() {
  // Newest first.
  const videos = [...talks]
    .reverse()
    .map((t) => ({ ...t, ...videoDetails[t.url] }))
    .filter((v) => v.id);

  return (
    <>
      <div className="kc-fade">
        <PageIntro title="YouTube">
          Three public talks on AI, Web3 and the future of finance, published
          on the {channel.name} YouTube channel.
        </PageIntro>
      </div>

      <ul
        className="kc-fade mt-8 flex flex-wrap gap-2"
        style={{ animationDelay: "100ms" }}
      >
        {facts.map((f) => (
          <li
            key={f}
            className="rounded-full border border-line px-3 py-1 text-xs text-muted"
          >
            {f}
          </li>
        ))}
      </ul>

      <ol className="mt-12 space-y-16">
        {videos.map((v, i) => (
          <li
            key={v.id}
            className="kc-fade"
            style={{ animationDelay: `${200 + i * 120}ms` }}
          >
            <article>
              <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs tracking-wider text-accent uppercase">
                <span>{v.date}</span>
                <span aria-hidden="true" className="text-line">
                  /
                </span>
                <span>{v.series}</span>
                {i === 0 && (
                  <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] text-on-accent">
                    Latest
                  </span>
                )}
              </p>
              <h2
                lang="zh-HK"
                className="mt-3 text-2xl leading-snug font-semibold tracking-tight text-foreground"
              >
                {v.zh}
              </h2>
              <p className="mt-1 text-muted">{v.en}</p>

              <div className="mt-6">
                <VideoPlayer id={v.id} title={v.zh} />
              </div>

              <p className="mt-6 leading-7 text-muted">{v.summary}</p>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <ul className="flex flex-wrap gap-2">
                  {v.topics.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-accent-soft px-3 py-1 text-xs text-accent"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
                >
                  Watch on YouTube ↗
                </a>
              </div>
            </article>
          </li>
        ))}
      </ol>

      <section className="mt-16 rounded-2xl bg-accent-soft p-6 sm:p-8">
        <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
          Want a talk like this for your team?
        </h2>
        <p className="mt-4 max-w-prose leading-7 text-muted">
          I give talks and hands-on training on AI, AI agents and the future of
          finance, in Cantonese, English or Mandarin.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
          <a
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {channel.name} on YouTube ↗
          </a>
        </div>
      </section>
    </>
  );
}
