import { ResumeContent } from "@/components/sections/resume-content";
import { JsonLd } from "@/components/seo/json-ld";
import { personJsonLd, profilePageJsonLd } from "@/lib/jsonld";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Resume: Applied AI Engineer",
  description:
    "Resume for Syed Sajjad Hussain, Applied AI Engineer with LLM apps, RAG systems, AI evaluation, Python, Streamlit, FastAPI, and project links.",
  path: "/resume",
  keywords: ["Syed Sajjad Hussain resume", "Applied AI Engineer resume", "GenAI resume", "RAG engineer resume"],
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
