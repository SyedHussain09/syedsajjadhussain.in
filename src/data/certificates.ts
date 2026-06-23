export type Certificate = {
  slug: string;
  issuer: string;
  title: string;
  date: string;
  relevance: string;
  category: "AI" | "Startup" | "Web" | "ML" | "Hackathon" | "Python" | "Training";
  assetPath?: string;
  assetType?: "image" | "pdf";
  previewPath?: string;
  verificationUrl?: string;
  status?: "verified-asset" | "course-record";
};

export const certificateFilters = [
  "All",
  "AI",
  "Startup",
  "Web",
  "ML",
  "Hackathon",
  "Python",
  "Training"
] as const;

export const certificates: Certificate[] = [
  {
    slug: "micro1-applied-ai-engineer",
    issuer: "micro1",
    title: "Certified by micro1 as Applied AI Engineer",
    date: "April 13, 2026",
    relevance: "AI engineering workflow record: prompt engineering, evaluation, and quality review.",
    category: "AI",
    assetPath: "/certificates/micro1-startup.jpg",
    assetType: "image",
    status: "verified-asset"
  },
  {
    slug: "google-startup-school",
    issuer: "Google for Startups",
    title: "Startup School: Prompt to Prototype",
    date: "December 23, 2025",
    relevance: "Product-building and prototype thinking for AI-enabled startup workflows.",
    category: "Startup",
    assetPath: "/certificates/Google%20for%20StartUp.pdf",
    assetType: "pdf",
    previewPath: "/certificates/previews/google-startup-school.png",
    status: "verified-asset"
  },
  {
    slug: "udemy-complete-web-development",
    issuer: "Udemy",
    title: "Complete Web Development Course",
    date: "May 21, 2026",
    relevance: "100 total hours covering modern web development foundations and delivery practice.",
    category: "Web",
    assetPath: "/certificates/Complete%20web%20development.pdf",
    assetType: "pdf",
    previewPath: "/certificates/previews/udemy-complete-web-development.png",
    status: "verified-asset"
  },
  {
    slug: "coursera-machine-learning-overview",
    issuer: "Coursera / Politecnico di Milano",
    title: "Machine Learning: an overview",
    date: "March 14, 2024",
    relevance: "Machine learning foundations that support practical AI application development.",
    category: "ML",
    assetPath: "/certificates/Coursera%20ML%20certificate.pdf",
    assetType: "pdf",
    previewPath: "/certificates/previews/coursera-machine-learning-overview.png",
    verificationUrl: "https://coursera.org/verify/5BWHS5B4PG68",
    status: "verified-asset"
  },
  {
    slug: "udemy-python3-beginner-to-pro",
    issuer: "Udemy",
    title: "Python3: From Beginner to Pro",
    date: "February 21, 2023",
    relevance: "30 total hours of Python programming foundations for AI and automation workflows.",
    category: "Python",
    assetPath: "/certificates/py%203.pdf",
    assetType: "pdf",
    previewPath: "/certificates/previews/udemy-python3-beginner-to-pro.png",
    status: "verified-asset"
  },
  {
    slug: "ghci-25-hackathon",
    issuer: "AnitaB.org India / Backbase / mycareernet",
    title: "Unbound with GenAI: Breaking Barriers, Creating Impact",
    date: "2025",
    relevance: "GenAI hackathon participation and applied problem-solving exposure.",
    category: "Hackathon",
    assetPath: "/certificates/coding%20competition.jpeg",
    assetType: "image",
    status: "verified-asset"
  },
  {
    slug: "educosys-genai-live-course",
    issuer: "Educosys",
    title: "Live Generative AI Engineering Program",
    date: "Completed training",
    relevance: "Project-based training across LLMs, RAG, LangGraph, vector databases, fine-tuning, MCP, and multimodal AI.",
    category: "Training",
    assetPath: "/certificates/previews/educosys-genai-training-record.png",
    assetType: "image",
    previewPath: "/certificates/previews/educosys-genai-live-course.png",
    status: "course-record"
  }
];
