import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Syed Sajjad Hussain | Applied AI Engineer",
    short_name: "SSH AI",
    description:
      "Applied AI Engineer portfolio for LLM apps, RAG systems, AI evaluation, Python, full-stack delivery, and SEO-structured products.",
    start_url: "/",
    display: "standalone",
    background_color: "#eef2ec",
    theme_color: "#0a1020",
    icons: [
      {
        src: "/favicon-48.png",
        sizes: "48x48",
        type: "image/png"
      },
      {
        src: "/logo-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/logo-512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
