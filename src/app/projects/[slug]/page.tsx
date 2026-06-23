import { ArrowUpRight, Code2 } from "lucide-react";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/project/project-visual";
import { JsonLd } from "@/components/seo/json-ld";
import { LinkButton } from "@/components/ui/button";
import { allProjects, getProjectBySlug } from "@/data/projects";
import { breadcrumbJsonLd, projectJsonLd } from "@/lib/jsonld";
import { createMetadata } from "@/lib/seo";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return createMetadata({ title: "Project not found", noIndex: true });

  return createMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="section-shell py-12 md:py-16">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: project.title, path: `/projects/${project.slug}` }
          ]),
          projectJsonLd(project.slug)
        ].filter(Boolean) as Array<Record<string, unknown>>}
      />
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <ProjectVisual project={project} />
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-2">{project.category}</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">{project.title}</h1>
          <p className="mt-3 text-xl font-semibold text-muted">{project.subtitle}</p>
          <p className="mt-5 text-lg leading-8 text-muted">{project.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.liveUrl ? (
              <LinkButton href={project.liveUrl} external>
                Live demo
                <ArrowUpRight className="size-4" />
              </LinkButton>
            ) : null}
            {project.githubUrl ? (
              <LinkButton href={project.githubUrl} external variant="dark">
                <Code2 className="size-4" />
                GitHub
              </LinkButton>
            ) : null}
            {project.adminUrl ? (
              <LinkButton href={project.adminUrl} external variant="secondary">
                Admin / services route
              </LinkButton>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <section className="surface rounded-md p-5">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-accent-2">Problem</h2>
          <p className="mt-3 leading-7 text-muted">
            {project.problem || "A practical product or client delivery challenge that needed clear structure, responsive UI, and deployable execution."}
          </p>
        </section>
        <section className="surface rounded-md p-5">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-accent-2">Solution</h2>
          <p className="mt-3 leading-7 text-muted">
            {project.solution || project.result || "Built a focused web experience with clear user journeys, structured content, and production-facing implementation."}
          </p>
        </section>
        <section className="surface rounded-md p-5">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-accent-2">Syed&apos;s Role</h2>
          <p className="mt-3 leading-7 text-muted">{project.role}</p>
        </section>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <section className="surface rounded-md p-5">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-accent-2">Highlights</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {project.highlights.map((highlight) => (
              <div key={highlight} className="rounded-md border border-border bg-white p-4 text-sm font-semibold">
                {highlight}
              </div>
            ))}
          </div>
        </section>
        <section className="surface rounded-md p-5">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-accent-2">Tech Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="rounded-full border border-border bg-white px-3 py-1 text-sm font-semibold">
                {tech}
              </span>
            ))}
          </div>
          {project.respectfulNote ? (
            <p className="mt-5 rounded-md border border-border bg-white p-4 text-sm leading-6 text-muted">
              {project.respectfulNote}
            </p>
          ) : null}
          {project.liveUrl?.includes("streamlit.app") ? (
            <p className="mt-5 rounded-md border border-border bg-white p-4 text-sm leading-6 text-muted">
              Live Streamlit apps may wake on open depending on host sleep state.
            </p>
          ) : null}
        </section>
      </div>
    </article>
  );
}
