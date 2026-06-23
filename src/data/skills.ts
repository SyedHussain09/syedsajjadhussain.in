export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Generative AI & LLM Engineering",
    description: "LLM product workflows, retrieval, prompting, and evaluation.",
    skills: [
      "LLM application design",
      "Prompt engineering",
      "RAG pipelines",
      "LangChain",
      "LangGraph",
      "Vector databases",
      "ChromaDB",
      "Embeddings",
      "LLM evaluation",
      "Response ranking",
      "AI quality assurance",
      "Fine-tuning concepts",
      "LoRA / QLoRA",
      "Hugging Face",
      "MCP",
      "Ollama",
      "Unsloth basics"
    ]
  },
  {
    title: "Python / ML / Data",
    description: "Python-first AI apps, analytics, and reporting workflows.",
    skills: [
      "Python",
      "FastAPI",
      "Streamlit",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "SciPy",
      "TensorFlow",
      "ML pipelines",
      "Forecasting",
      "Anomaly detection",
      "Data visualization",
      "PDF/report generation"
    ]
  },
  {
    title: "Full Stack / Web",
    description: "Modern web apps, client platforms, admin flows, and SEO.",
    skills: [
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "CSS3",
      "REST APIs",
      "Responsive UI",
      "SEO",
      "Admin CRUD",
      "Client dashboards",
      "PostgreSQL",
      "SQLite",
      "Deployment"
    ]
  },
  {
    title: "Tools / Platforms",
    description: "Repository, indexing, QA, and performance tooling.",
    skills: [
      "Git",
      "GitHub",
      "Streamlit Cloud",
      "Google Search Console",
      "Technical SEO",
      "robots.txt",
      "Open Graph",
      "Lighthouse"
    ]
  },
  {
    title: "Professional Strengths",
    description: "The collaboration layer that makes technical work usable.",
    skills: [
      "Client communication",
      "Remote collaboration",
      "Technical documentation",
      "Cross-functional collaboration",
      "Problem-solving",
      "Product thinking",
      "Clear explanation to technical and non-technical stakeholders"
    ]
  }
];

export const proofMap = [
  {
    skill: "RAG",
    proof: "LexiQ",
    description: "PDF parsing, semantic retrieval, cited answers, and risk flags.",
    href: "/projects/lexiq"
  },
  {
    skill: "SEO",
    proof: "Client Delivery Lab",
    description: "Business websites with indexing assets, service pages, and WhatsApp CTAs.",
    href: "/projects?filter=SEO"
  },
  {
    skill: "LLM Evaluation",
    proof: "micro1",
    description: "Prompt design, response ranking, AI QA, and safety/relevance review.",
    href: "/experience"
  },
  {
    skill: "Analytics",
    proof: "FinanceIQ",
    description: "Forecasting, anomaly flags, financial health scoring, dashboards, and PDF reports.",
    href: "/projects/financeiq"
  },
  {
    skill: "Full Stack",
    proof: "DadiMa Superfood",
    description: "Catalog, product pages, admin support, SEO content, and release-ready handoff.",
    href: "/projects/dadima-superfood"
  },
  {
    skill: "Prompt Engineering",
    proof: "SaveIQ + micro1",
    description: "Content-intelligence prompts, response evaluation, and practical AI workflow design.",
    href: "/projects/saveiq"
  }
];
