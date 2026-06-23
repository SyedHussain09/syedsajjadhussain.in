import { About } from "@/components/sections/about";
import { BlogPreview } from "@/components/sections/blog-preview";
import { ContactCta } from "@/components/sections/contact-cta";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { Hero } from "@/components/sections/hero";
import { SkillsProof } from "@/components/sections/skills-proof";
import { FeaturedProjectsSlider } from "@/components/project/featured-projects-slider";
import { ProjectCard } from "@/components/project/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import { featuredProjects, clientProjects } from "@/data/projects";
import { createMetadata } from "@/lib/seo";
import { itemListJsonLd } from "@/lib/jsonld";
import { LinkButton } from "@/components/ui/button";

export const metadata = createMetadata();

export default function HomePage() {
  return (
    <>
      <JsonLd data={itemListJsonLd("Featured AI and full-stack projects", featuredProjects)} />
      <Hero />
      <About />
      <section className="section-shell py-16">
        <SectionHeading
          eyebrow="Selected Projects"
          title="Live work, code links, and case studies."
          description="A focused set of AI and full-stack projects with clear problem, solution, stack, and links."
        />
        <FeaturedProjectsSlider projects={featuredProjects} />
      </section>
      <section className="section-shell py-16">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills connected to the work that demonstrates them."
          description="The portfolio avoids long badge lists. Each key skill points to a project, contract, or training artifact."
        />
        <SkillsProof />
      </section>
      <section className="section-shell py-16">
        <SectionHeading
          eyebrow="Experience"
          title="AI product R&D, evaluation work, and client delivery."
          description="Concise timeline of practical AI, LLM evaluation, full-stack websites, and SEO-oriented business platforms."
        >
          <LinkButton href="/experience" variant="secondary">
            Full timeline
          </LinkButton>
        </SectionHeading>
        <ExperienceTimeline compact />
      </section>
      <section className="section-shell py-16">
        <SectionHeading
          eyebrow="Client Work"
          title="Business websites and commerce-style interfaces."
          description="Selected delivery work across service pages, product catalogs, WhatsApp flows, mobile layouts, and technical SEO structure."
        >
          <LinkButton href="/projects?filter=Client" variant="secondary">
            View client work
          </LinkButton>
        </SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {clientProjects.slice(0, 8).map((project) => (
            <ProjectCard key={project.slug} project={project} compact />
          ))}
        </div>
      </section>
      <BlogPreview />
      <ContactCta />
    </>
  );
}
