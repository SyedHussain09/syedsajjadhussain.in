import { ArrowLeft, BookOpen, Clock3 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { blogPosts, getBlogPost, getPostReadingTime } from "@/data/blog";
import { allProjects } from "@/data/projects";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { createMetadata } from "@/lib/seo";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

function headingId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return createMetadata({ title: "Blog post not found", noIndex: true });

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: [post.title, ...post.tags],
    type: "article"
  });
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = allProjects.filter((project) => post.relatedProjects.includes(project.slug));

  return (
    <article className="section-shell py-12 md:py-16">
      <JsonLd
        data={[
          articleJsonLd(post),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` }
          ])
        ]}
      />
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-foreground">
        <ArrowLeft className="size-4" />
        Back to blog
      </Link>

      <header className="mt-6 overflow-hidden rounded-md border border-border bg-card shadow-sm">
        <div className="bg-[linear-gradient(135deg,#e9f7f5_0%,#fff7e8_62%,#eef2ff_100%)] p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-muted">
            <span className="inline-flex items-center gap-2">
              <BookOpen className="size-4 text-accent-2" />
              Applied AI note
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 className="size-4 text-accent-2" />
              {getPostReadingTime(post)}
            </span>
            <span>{post.publishedAt}</span>
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">{post.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{post.description}</p>
        </div>
        <div className="grid gap-5 p-6 md:grid-cols-[1fr_0.85fr] md:p-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-2">Plain-English takeaway</p>
            <p className="mt-3 text-lg leading-8">{post.takeaway}</p>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {post.tags.map((tag) => (
              <span key={tag} className="h-fit rounded-full border border-border bg-[#fffdf8] px-3 py-1 text-xs font-semibold text-muted">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-[260px_1fr] lg:items-start">
        <aside className="surface hidden rounded-md p-5 lg:sticky lg:top-24 lg:block">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-2">In this article</p>
          <nav className="mt-4 grid gap-2 text-sm">
            {post.sections.map((section) => (
              <a key={section.heading} href={`#${headingId(section.heading)}`} className="rounded-md px-3 py-2 text-muted hover:bg-[#fffdf8] hover:text-foreground">
                {section.heading}
              </a>
            ))}
          </nav>
        </aside>

        <div className="grid gap-7">
          {post.sections.map((section, index) => (
            <section key={section.heading} id={headingId(section.heading)} className="scroll-mt-28 rounded-md border border-border bg-white p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-2">
                Part {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">{section.heading}</h2>
              <div className="mt-5 grid gap-5 text-base leading-8 text-muted">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets ? (
                <ul className="mt-6 grid gap-3 text-sm leading-6 text-muted sm:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-md border border-border bg-[#fffdf8] p-3">
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </div>
      {related.length > 0 ? (
        <aside className="mt-8 rounded-md border border-border bg-card p-5 md:p-6">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-accent-2">Related projects</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {related.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="rounded-md border border-border bg-white p-4 transition hover:-translate-y-1 hover:border-accent/60">
                <span className="font-semibold">{project.title}</span>
                <span className="mt-1 block text-sm text-muted">{project.subtitle}</span>
              </Link>
            ))}
          </div>
        </aside>
      ) : null}
    </article>
  );
}
