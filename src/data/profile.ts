export const profile = {
  name: "Syed Sajjad Hussain",
  shortName: "Syed Hussain",
  role: "Applied AI Engineer",
  headline: "Applied AI Engineer building LLM, RAG, and evaluation systems.",
  subtitle:
    "I build practical AI workflows that connect prompts, retrieval, model evaluation, fine-tuning concepts, Python services, and product-grade interfaces.",
  siteUrl: "https://syedsajjadhussain.in",
  email: "syedsajjadhussain0014@gmail.com",
  phone: "+91 9641149521",
  location: "India",
  availability: "Available for applied AI and full-stack AI product roles",
  targetRoles: ["AI Engineer", "Generative AI Engineer", "Applied AI Engineer"],
  targetMarkets: ["Applied AI", "Generative AI", "Full-stack AI products"],
  resumePath: "/resume/syed-sajjad-hussain-ai-engineer.pdf",
  whatsappUrl:
    "https://wa.me/919641149521?text=Hi%20Syed%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20AI%20Engineer%20opportunity.",
  links: {
    linkedin: "https://www.linkedin.com/in/syedhussain014/",
    github: "https://github.com/SyedHussain09",
    portfolio: "https://syedsajjadhussain.in/"
  },
  seo: {
    title: "Syed Sajjad Hussain | Applied AI Engineer, GenAI, RAG & LLM Evaluation",
    description:
      "Syed Sajjad Hussain is an Applied AI Engineer building LLM apps, RAG workflows, AI evaluation systems, Python products, and full-stack web systems."
  },
  badges: [
    "Applied AI Engineer",
    "LLM Apps / Prompt Engineering",
    "RAG & Vector Databases",
    "Fine-tuning / LoRA Concepts",
    "Python + FastAPI + Streamlit",
    "React / Next.js / TypeScript",
    "AI evaluation"
  ],
  proofStats: [
    {
      label: "Hands-on delivery",
      value: "2.5+ years",
      note: "AI products, client platforms, and remote delivery"
    },
    {
      label: "Education",
      value: "B.Tech CSE",
      note: "MAKAUT | 2022-26"
    },
    {
      label: "AI product portfolio",
      value: "3 live AI systems",
      note: "LexiQ, FinanceIQ, and SaveIQ"
    },
    {
      label: "Client-ready work",
      value: "AI + Web",
      note: "RAG, analytics, catalogs, and case studies"
    }
  ],
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    school: "MAKAUT",
    dates: "2022-26",
    cgpa: "7.8/10",
    graduated: "June 2026"
  },
  achievements: [
    "National Rank 162 / 18,773, Top 1% in Naukri CodeQuezt #23",
    "Google Startup School Certified",
    "Academic Excellence: 97/100 Mathematics, 92/100 English in State Boards"
  ],
  knowsAbout: [
    "Python",
    "Generative AI",
    "Large Language Models",
    "RAG",
    "LangChain",
    "LangGraph",
    "ChromaDB",
    "FastAPI",
    "Streamlit",
    "Prompt Engineering",
    "Fine-tuning",
    "LoRA",
    "QLoRA",
    "LLM Evaluation",
    "React",
    "Next.js",
    "TypeScript",
    "SEO"
  ]
} as const;

export const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
  { href: "/certificates", label: "Certificates" },
  { href: "/contact", label: "Contact" }
] as const;

export const hiringPanel = [
  { label: "Target role", value: "AI Engineer / GenAI Engineer / Applied AI Engineer" },
  { label: "Primary stack", value: "Python, LLM apps, RAG, React, Next.js" },
  { label: "Project focus", value: "Document AI, analytics, media intelligence" },
  { label: "Work style", value: "Remote collaboration, clear documentation" },
  { label: "Experience", value: "2.5+ years hands-on" },
  { label: "Email", value: profile.email },
  { label: "LinkedIn", value: profile.links.linkedin },
  { label: "GitHub", value: profile.links.github }
] as const;
