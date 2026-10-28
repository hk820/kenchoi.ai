import type { Metadata } from "next";
import { ProjectDetail } from "@/components/project-detail";

export const metadata: Metadata = { title: "Portfolio Stress Testing" };

export default function Page() {
  return <ProjectDetail slug="portfolio-stress-testing" />;
}
