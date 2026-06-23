import { ArrowUpRight, BookOpen, Clock3 } from "lucide-react";
import Link from "next/link";
import { blogPosts, getPostReadingTime } from "@/data/blog";
import { SectionHeading } from "@/components/ui/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Simple technical blog posts by Syed Sajjad Hussain on RAG, fine-tuning, vector databases, AI analytics, prompt engineering, and applied AI projects.",
  path: "/blog"
});

export default function BlogPage() {
  const featured = blogPosts[0];
  const posts = blogPosts.slice(1);
  if (!featured) return null;

  return (
    <section className="section-shell py-12 md:py-16">
      <SectionHeading
        eyebrow="Blog"
        title="Useful AI writing, explained through build stories."
        description="Practical notes on RAG, LLM evaluation, analytics, prompt design, and applied AI products. Written for fast understanding, not buzzwords."
      />

      <article className="surface overflow-hidden rounded-md">
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[linear-gradient(135deg,#e9f7f5_0%,#fff7e8_58%,#eef2ff_100%)] p-6 md:p-8">
            <div className="grid h-full min-h-64 content-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-accent-2">
                <BookOpen className="size-5" />
                Featured article
              </div>
              <div className="mt-16">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
                  {featured.tags.join(" / ")}
                </p>
                <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight md:text-4xl">
                  {featured.title}
                </h2>
              </div>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <p className="text-lg leading-8 text-muted">{featured.description}</p>
            <div className="mt-5 rounded-md border border-border bg-[#fffdf8] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-2">Core idea</p>
              <p className="mt-2 leading-7">{featured.takeaway}</p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={`/blog/${featured.slug}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-white px-4 text-sm font-semibold transition hover:border-[rgba(17,19,26,0.18)] hover:bg-[#f6fbf9]"
              >
                Read article
                <ArrowUpRight className="size-4" />
              </Link>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-muted">
                <Clock3 className="size-4" />
                {getPostReadingTime(featured)}
              </span>
            </div>
          </div>
        </div>
      </article>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post, index) => (
          <article key={post.slug} className="surface flex h-full flex-col rounded-md p-5 transition hover:-translate-y-1 hover:border-[rgba(17,19,26,0.18)] hover:shadow-[0_18px_36px_rgba(17,19,26,0.075)]">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full border border-border bg-[#fffdf8] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-muted">
                Story {String(index + 2).padStart(2, "0")}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted">
                <Clock3 className="size-4" />
                {getPostReadingTime(post)}
              </span>
            </div>
            <h2 className="mt-5 text-xl font-semibold leading-tight">
              <Link href={`/blog/${post.slug}`} className="hover:text-accent-2">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">{post.description}</p>
            <p className="mt-4 rounded-md border border-border bg-[#fffdf8] p-3 text-sm leading-6">
              {post.takeaway}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold text-muted">
                  {tag}
                </span>
              ))}
            </div>
            <Link href={`/blog/${post.slug}`} className="mt-auto inline-flex pt-5 text-sm font-semibold text-accent-2 hover:text-foreground">
              Read the story
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
