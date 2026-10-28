import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageIntro title="Projects">
        A short note on the kinds of projects collected here.
      </PageIntro>
      <ul className="mt-12 grid gap-6">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </>
  );
}
