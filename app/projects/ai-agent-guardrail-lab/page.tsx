import type { Metadata } from "next";
import { ProjectDetail } from "@/components/project-detail";

export const metadata: Metadata = { title: "AI Agent Guardrail Lab" };

export default function Page() {
  return <ProjectDetail slug="ai-agent-guardrail-lab" />;
}
