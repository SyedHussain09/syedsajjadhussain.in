import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { allProjects } from "@/data/projects";
import { profile } from "@/data/profile";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const contentUpdatedAt = new Date("2026-06-23");

const staticRoutes = [
  "/",
  "/resume",
  "/projects",
  "/experience",
  "/blog",
  "/certificates",
  "/contact"
];

const indexableFiles = [profile.resumePath];

export default function sitemap(): MetadataRoute.Sitemap {
  const pageRoutes: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: absoluteUrl(path),
    lastModified: contentUpdatedAt
  }));

  const projectRoutes: MetadataRoute.Sitemap = allProjects.map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}`),
    lastModified: contentUpdatedAt
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.updatedAt || post.publishedAt)
  }));

  const fileRoutes: MetadataRoute.Sitemap = indexableFiles.map((path) => ({
    url: absoluteUrl(path),
    lastModified: contentUpdatedAt
  }));

  return [...pageRoutes, ...projectRoutes, ...blogRoutes, ...fileRoutes];
}
