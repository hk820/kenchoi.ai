import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Work with me" };

export default function WorkWithMePage() {
  return (
    <PageIntro title="Work with me">
      The kinds of engagements on offer, who they suit, and how to get started.
    </PageIntro>
  );
}
