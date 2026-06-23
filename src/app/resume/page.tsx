import { ResumeContent } from "@/components/sections/resume-content";
import { JsonLd } from "@/components/seo/json-ld";
import { personJsonLd, profilePageJsonLd } from "@/lib/jsonld";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Resume",
  description:
    "Indexable AI Engineer resume for Syed Sajjad Hussain with LLM apps, RAG, Python, full-stack delivery, and selected project links.",
  path: "/resume",
  type: "profile"
});

export default function ResumePage() {
  return (
    <section className="section-shell py-12 md:py-16">
      <JsonLd data={[personJsonLd(), profilePageJsonLd("/resume")]} />
      <ResumeContent />
    </section>
  );
}
