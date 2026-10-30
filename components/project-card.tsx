import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ProjectSpark } from "./project-spark";
import { TagList } from "./tag-list";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group grid gap-6 rounded-xl border border-line p-6 transition-colors hover:border-accent sm:grid-cols-[1fr_11rem] sm:items-center"
    >
      <div>
        <h2 className="font-serif text-xl font-semibold text-foreground group-hover:text-accent">
          {project.title}
        </h2>
        <p className="mt-2 text-muted">{project.summary}</p>
        <TagList tags={project.tags} className="mt-4" />
      </div>
      <div className="max-w-[16rem] rounded-lg border border-line bg-band p-3 sm:max-w-none">
        <ProjectSpark slug={project.slug} className="w-full" />
      </div>
    </Link>
  );
}
