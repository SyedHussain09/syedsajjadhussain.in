import { Suspense } from "react";
import { ProjectsExplorer } from "@/components/project/projects-explorer";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionHeading } from "@/components/ui/section-heading";
import { allProjects } from "@/data/projects";
import { itemListJsonLd } from "@/lib/jsonld";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "AI, GenAI, RAG, full-stack, SEO, e-commerce, portfolio, and client projects by Syed Sajjad Hussain.",
  path: "/projects"
});

export default function ProjectsPage() {
  return (
    <section className="section-shell py-12 md:py-16">
      <JsonLd data={itemListJsonLd("Syed Sajjad Hussain projects", allProjects)} />
      <SectionHeading
        eyebrow="Projects"
        title="Project library for AI products, RAG systems, analytics, and client delivery."
        description="Filter by AI, GenAI, RAG, LLM evaluation, full-stack, SEO, client work, e-commerce, portfolio, and experiments."
      />
      <Suspense fallback={<div className="surface rounded-md p-6 text-muted">Loading project filters...</div>}>
        <ProjectsExplorer projects={allProjects} />
      </Suspense>
    </section>
  );
}
