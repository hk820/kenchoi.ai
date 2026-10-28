import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <PageIntro title="Contact">
      The best way to get in touch, and what to include in your message.
    </PageIntro>
  );
}
