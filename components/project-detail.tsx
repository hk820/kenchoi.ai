import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject } from "@/lib/projects";
import { PageIntro } from "./page-intro";
import { TagList } from "./tag-list";

export function ProjectDetail({ slug }: { slug: string }) {
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article>
      <Link
        href="/projects"
        className="text-sm text-muted transition-colors hover:text-accent"
      >
        ← All projects
      </Link>
      <div className="mt-8">
        <PageIntro title={project.title}>
          Overview of the problem, approach and results for this project.
        </PageIntro>
      </div>
      <TagList tags={project.tags} className="mt-8" />
      <div className="mt-10 flex flex-wrap gap-3">
        {project.demo && (
          <a
            href={project.demo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
          >
            {project.demo.label}
            <span aria-hidden="true">↗</span>
          </a>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          View code on GitHub
          <span aria-hidden="true">↗</span>
        </a>
      </div>
      {project.demo && (
        <p className="mt-4 text-sm text-muted">{project.demo.note}</p>
      )}
    </article>
  );
}
