import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Résumé" };

export default function ResumePage() {
  return (
    <PageIntro title="Résumé">
      A summary of roles, skills and qualifications, with a downloadable copy.
    </PageIntro>
  );
}
