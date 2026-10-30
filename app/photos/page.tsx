import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Photos",
  description: "Photos of Ken Tsai teaching, speaking and running AI training in Hong Kong.",
};

export default function PhotosPage() {
  return (
    <>
      <PageIntro title="Photos">
        Teaching, talks and AI training sessions.
      </PageIntro>
      <ul className="mt-12 grid gap-8 sm:grid-cols-2">
        {photos.map((photo, i) => (
          <li key={photo.src}>
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-band">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 360px, 100vw"
                  className={`object-cover ${i % 2 ? "kc-kenburns-b" : "kc-kenburns-a"}`}
                />
              </div>
              <figcaption className="mt-3 text-sm leading-6 text-muted">
                {photo.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </>
  );
}