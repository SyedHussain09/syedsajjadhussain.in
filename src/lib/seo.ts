import type { Metadata } from "next";
import { profile } from "@/data/profile";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || profile.siteUrl;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

type MetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description = profile.seo.description,
  path = "/",
  image = "/opengraph-image",
  type = "website",
  noIndex = false
}: MetadataInput = {}): Metadata {
  const finalTitle = title
    ? `${title} | Syed Sajjad Hussain`
    : profile.seo.title;
  const canonical = absoluteUrl(path);

  return {
    title: finalTitle,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
    category: "technology",
    keywords: [
      profile.name,
      profile.shortName,
      "Syed Sajjad Hussain Applied AI Engineer",
      "Syed Sajjad Hussain portfolio",
      "Applied AI Engineer",
      "Generative AI Engineer",
      "LLM Engineer",
      "RAG Engineer",
      "AI Evaluation",
      "Prompt Engineering",
      "Fine-tuning",
      "LangGraph",
      "ChromaDB",
      "Python AI Engineer",
      "FastAPI",
      "Streamlit",
      "Next.js"
    ],
    openGraph: {
      title: finalTitle,
      description,
      url: canonical,
      siteName: profile.name,
      type,
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: `${profile.name} portfolio preview`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description,
      images: [absoluteUrl(image)]
    }
  };
}
