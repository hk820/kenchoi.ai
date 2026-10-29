import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Finance and AI tools by Ken Tsai: portfolio stress testing, portfolio review and rebalancing, and an AI agent guardrail lab.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro title="Projects">
        Tools I&rsquo;ve built in Python for finance and AI. Each one is public
        on GitHub, with tests for the maths and a plain statement of what it
        leaves out.
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
