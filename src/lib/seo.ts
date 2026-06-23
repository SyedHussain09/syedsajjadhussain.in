import type { Metadata } from "next";
import { profile } from "@/data/profile";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || profile.siteUrl;

const filePathPattern = /\.[a-z0-9]+$/i;
const extensionlessAssetRoutes = new Set(["/apple-icon", "/icon", "/opengraph-image"]);

function normalizeCanonicalPath(path = "/") {
  const [pathWithQuery, hash = ""] = path.split("#");
  const [pathname = "/", query = ""] = pathWithQuery.split("?");
  const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const suffix = `${query ? `?${query}` : ""}${hash ? `#${hash}` : ""}`;

  if (cleanPath === "/") return `/${suffix}`;
  if (extensionlessAssetRoutes.has(cleanPath)) return `${cleanPath}${suffix}`;
  if (filePathPattern.test(cleanPath)) return `${cleanPath}${suffix}`;
  return `${cleanPath.endsWith("/") ? cleanPath : `${cleanPath}/`}${suffix}`;
}

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${normalizeCanonicalPath(path)}`;
}

type MetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article" | "profile";
  noIndex?: boolean;
};

function cleanDescription(value: string, maxLength = 165) {
  if (value.length <= maxLength) return value;
  const truncated = value.slice(0, maxLength - 1);
  return `${truncated.slice(0, truncated.lastIndexOf(" "))}.`;
}

export function createMetadata({
  title,
  description = profile.seo.description,
  path = "/",
  image = "/opengraph-image",
  keywords = [],
  type = "website",
  noIndex = false
}: MetadataInput = {}): Metadata {
  const finalTitle = title
    ? `${title} | Syed Sajjad Hussain`
    : profile.seo.title;
  const finalDescription = cleanDescription(description);
  const canonical = absoluteUrl(path);
  const finalKeywords = Array.from(
    new Set([
      profile.name,
      profile.shortName,
      "Syed Sajjad Hussain Applied AI Engineer",
      "Syed Sajjad Hussain portfolio",
      ...keywords,
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
    ])
  );

  return {
    title: finalTitle,
    description: finalDescription,
    metadataBase: new URL(siteUrl),
    authors: [{ name: profile.name, url: siteUrl }],
    creator: profile.name,
    publisher: profile.name,
    referrer: "origin-when-cross-origin",
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
    keywords: finalKeywords,
    openGraph: {
      title: finalTitle,
      description: finalDescription,
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
      description: finalDescription,
      images: [absoluteUrl(image)]
    }
  };
}
