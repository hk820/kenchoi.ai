import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, type Block } from "@/lib/projects";
import { PageIntro } from "./page-intro";
import { ProjectSpark, sparkCaptions } from "./project-spark";
import { TagList } from "./tag-list";

function BlockContent({ block }: { block: Block }) {
  if ("ul" in block) {
    return (
      <ul className="mt-4 space-y-2.5 pl-5 leading-7 text-muted marker:text-accent [list-style-type:disc]">
        {block.ul.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p className="mt-4 leading-7 text-muted">{block.p}</p>;
}

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
        <PageIntro title={project.title}>{project.summary}</PageIntro>
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
          className={
            project.demo
              ? "inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              : "inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
          }
        >
          View code on GitHub
          <span aria-hidden="true">↗</span>
        </a>
      </div>
      {project.demo && (
        <p className="mt-4 text-sm text-muted">{project.demo.note}</p>
      )}

      <figure className="mt-12 rounded-2xl border border-line bg-band p-5 sm:p-8">
        <ProjectSpark slug={project.slug} className="mx-auto w-full max-w-lg" />
        <figcaption className="mt-4 text-sm leading-6 text-muted">
          {sparkCaptions[project.slug]}
        </figcaption>
      </figure>

      {project.facts && (
        <ul className="mt-12 grid gap-3 sm:grid-cols-3">
          {project.facts.map((fact) => (
            <li
              key={fact.label}
              className="rounded-xl border border-line bg-band p-4 sm:p-5"
            >
              <p className="font-serif text-2xl font-semibold text-accent">
                {fact.value}
              </p>
              <p className="mt-1.5 text-sm leading-6 text-muted">
                {fact.label}
              </p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4">
        {project.sections.map((section) => (
          <section key={section.heading} className="mt-12">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              {section.heading}
            </h2>
            {section.blocks.map((block, i) => (
              <BlockContent key={i} block={block} />
            ))}
          </section>
        ))}
      </div>

      <p className="mt-12 border-t border-line pt-6 text-sm text-muted">
        <span className="font-medium text-foreground">Built with:</span>{" "}
        {project.builtWith}
      </p>
    </article>
  );
}
