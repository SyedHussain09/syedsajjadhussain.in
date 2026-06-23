import Link from "next/link";
import { blogPosts, getPostReadingTime } from "@/data/blog";
import { SectionHeading } from "@/components/ui/section-heading";
import { LinkButton } from "@/components/ui/button";

export function BlogPreview() {
  return (
    <section className="section-shell py-16">
      <SectionHeading
        eyebrow="Blog"
        title="Story-led AI notes with practical takeaways."
        description="Clear posts on RAG, document AI, analytics, prompt design, evaluation, and working AI products."
      >
        <LinkButton href="/blog" variant="secondary">
          View all posts
        </LinkButton>
      </SectionHeading>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {blogPosts.slice(0, 4).map((post) => (
          <article key={post.slug} className="surface rounded-md p-5 transition hover:-translate-y-1 hover:border-[rgba(17,19,26,0.18)] hover:shadow-[0_18px_36px_rgba(17,19,26,0.075)]">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-2">
              {getPostReadingTime(post)}
            </p>
            <h3 className="mt-3 text-lg font-semibold leading-tight">
              <Link href={`/blog/${post.slug}`} className="hover:text-accent-2">
                {post.title}
              </Link>
            </h3>
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">{post.description}</p>
            <p className="mt-4 line-clamp-3 rounded-md border border-border bg-[#fffdf8] p-3 text-sm leading-6">
              {post.takeaway}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
