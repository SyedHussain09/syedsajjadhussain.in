import { allProjects } from "@/data/projects";
import { profile } from "@/data/profile";
import { siteUrl, absoluteUrl } from "@/lib/seo";

const logoUrl = absoluteUrl("/logo.png");
const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;
const organizationId = `${siteUrl}/#organization`;
const profileModifiedAt = "2026-06-23T00:00:00+05:30";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: profile.name,
    legalName: profile.name,
    url: siteUrl,
    logo: logoUrl,
    image: logoUrl,
    email: profile.email,
    sameAs: [profile.links.portfolio, profile.links.linkedin, profile.links.github],
    description: profile.seo.description,
    founder: {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      jobTitle: "Applied AI Engineer",
      url: siteUrl
    }
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: profile.name,
    alternateName: ["Syed Hussain", "Syed Sajjad", "Syed Sajjad Hussain AI Engineer"],
    url: siteUrl,
    mainEntityOfPage: siteUrl,
    jobTitle: [
      "Applied AI Engineer",
      "Generative AI Engineer",
      "LLM Engineer",
      "RAG Engineer"
    ],
    email: profile.email,
    telephone: profile.phone,
    image: logoUrl,
    sameAs: [profile.links.portfolio, profile.links.linkedin, profile.links.github],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "MAKAUT"
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Applied AI Engineer",
      occupationalCategory: "Software and AI Engineering",
      skills: profile.knowsAbout.join(", ")
    },
    knowsAbout: profile.knowsAbout,
    knowsLanguage: ["English", "Hindi", "Urdu"],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Applied AI Engineer",
        credentialCategory: "Professional certificate",
        recognizedBy: {
          "@type": "Organization",
          name: "micro1"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Live Generative AI Engineering Program",
        credentialCategory: "Professional training",
        recognizedBy: {
          "@type": "Organization",
          name: "Educosys"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Startup School: Prompt to Prototype",
        credentialCategory: "Professional training",
        recognizedBy: {
          "@type": "Organization",
          name: "Google for Startups"
        }
      }
    ],
    description: profile.seo.description
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: profile.name,
    alternateName: [
      "Syed Sajjad Hussain Portfolio",
      "Syed Sajjad Hussain AI Engineer Portfolio"
    ],
    url: siteUrl,
    description: profile.seo.description,
    publisher: {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      image: logoUrl
    },
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/projects?query={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function profilePageJsonLd(path = "/resume") {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${absoluteUrl(path)}#profile-page`,
    url: absoluteUrl(path),
    dateModified: profileModifiedAt,
    mainEntity: {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      alternateName: ["Syed Hussain", "Syed Sajjad"],
      description: profile.seo.description,
      image: logoUrl,
      sameAs: [profile.links.portfolio, profile.links.linkedin, profile.links.github]
    }
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function projectJsonLd(slug: string) {
  const project = allProjects.find((item) => item.slug === slug);
  if (!project) return null;

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "@id": absoluteUrl(`/projects/${project.slug}#software-source-code`),
    name: project.title,
    description: project.summary,
    codeRepository: project.githubUrl,
    url: absoluteUrl(`/projects/${project.slug}`),
    sameAs: [project.liveUrl, project.githubUrl].filter(Boolean),
    programmingLanguage: project.techStack,
    keywords: project.tags.join(", "),
    dateModified: "2026-06-23",
    creator: {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      url: siteUrl
    }
  };
}

export function itemListJsonLd(
  name: string,
  items: Array<{ title: string; slug: string; summary: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/projects/${item.slug}`),
      name: item.title,
      description: item.summary
    }))
  };
}

export function articleJsonLd(post: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": absoluteUrl(`/blog/${post.slug}#article`),
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    image: absoluteUrl("/opengraph-image"),
    author: {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      url: siteUrl
    },
    publisher: {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      image: logoUrl
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`)
  };
}
