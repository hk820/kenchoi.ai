import Link from "next/link";
import { PageIntro } from "@/components/page-intro";

export default function Home() {
  return (
    <>
      <PageIntro title="Ken Choi">
        A short introduction: finance and AI professional based in Hong Kong,
        and what you can find on this site.
      </PageIntro>
      <div className="mt-10 flex flex-wrap gap-4 text-sm font-medium">
        <Link
          href="/projects"
          className="rounded-lg bg-accent px-5 py-3 text-on-accent transition-opacity hover:opacity-90"
        >
          View projects
        </Link>
        <Link
          href="/work-with-me"
          className="rounded-lg border border-line px-5 py-3 text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Work with me
        </Link>
      </div>
    </>
  );
}
