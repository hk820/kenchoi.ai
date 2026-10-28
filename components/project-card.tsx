import Link from "next/link";
import type { Project } from "@/lib/projects";
import { TagList } from "./tag-list";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-xl border border-line p-6 transition-colors hover:border-accent"
    >
      <h2 className="font-serif text-xl font-semibold text-foreground group-hover:text-accent">
        {project.title}
      </h2>
      <p className="mt-2 text-muted">{project.summary}</p>
      <TagList tags={project.tags} className="mt-4" />
    </Link>
  );
}
