"use client";

import { useState } from "react";

type VideoPlayerProps = {
  id: string;
  title: string;
};

/**
 * Shows the YouTube thumbnail with a play button, and only loads the YouTube
 * player (privacy-enhanced mode) when someone clicks it.
 */
export function VideoPlayer({ id, title }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);
  const [failed, setFailed] = useState(false);
  const fallback = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  if (playing) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-xl border border-line bg-black">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className="group relative block aspect-video w-full overflow-hidden rounded-xl border border-line bg-band"
    >
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element -- YouTube thumbnail, loaded directly from YouTube
        <img
          src={thumb}
          alt=""
          loading="lazy"
          decoding="async"
          onLoad={(e) => {
            // YouTube returns a tiny placeholder when there is no HD thumbnail.
            if (e.currentTarget.naturalWidth < 200 && thumb !== fallback) setThumb(fallback);
          }}
          onError={() => {
            if (thumb !== fallback) setThumb(fallback);
            else setFailed(true);
          }}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent"
      />
      <span aria-hidden="true" className="absolute inset-0 grid place-items-center">
        <span className="relative grid h-16 w-16 place-items-center sm:h-20 sm:w-20">
          <span className="kc-play-ring absolute inset-0 rounded-full border-2 border-white" />
          <span className="kc-play-ring absolute inset-0 rounded-full border-2 border-white [animation-delay:0.9s]" />
          <span className="relative grid h-full w-full place-items-center rounded-full bg-white/95 shadow-lg transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 sm:h-8 sm:w-8" style={{ fill: "#0f766e" }}>
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </span>
        </span>
      </span>
      <span className="absolute bottom-3 left-3 rounded-md bg-black/60 px-2 py-1 text-xs font-medium text-white">
        Click to play
      </span>
    </button>
  );
}
