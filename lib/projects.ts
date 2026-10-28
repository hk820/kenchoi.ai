export type Project = {
  slug: string;
  title: string;
  summary: string;
  githubUrl: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "portfolio-stress-testing",
    title: "Portfolio Stress Testing",
    summary: "[PLACEHOLDER] One-line summary of the stress-testing project.",
    githubUrl: "https://github.com/hk820/portfolio-stress-testing",
    tags: ["Risk", "Python", "Scenario analysis"],
  },
  {
    slug: "portfolio-review-rebalancing",
    title: "Portfolio Review & Rebalancing",
    summary: "[PLACEHOLDER] One-line summary of the review and rebalancing project.",
    githubUrl: "https://github.com/hk820/portfolio-review-rebalancing",
    tags: ["Portfolio management", "Python", "Automation"],
  },
  {
    slug: "ai-agent-guardrail-lab",
    title: "AI Agent Guardrail Lab",
    summary: "[PLACEHOLDER] One-line summary of the AI agent guardrail project.",
    githubUrl: "https://github.com/hk820/AI_Agent_Guardrail_Lab",
    tags: ["AI agents", "Safety", "LLMs"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
