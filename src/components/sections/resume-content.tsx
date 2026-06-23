import { profile } from "@/data/profile";
import { LinkButton } from "@/components/ui/button";

const technicalSkills = [
  {
    title: "Generative AI & LLMs",
    items: [
      "Prompt engineering",
      "Prompt refinement",
      "LLM response evaluation",
      "Response ranking",
      "AI quality assurance",
      "RAG pipelines",
      "LangChain",
      "LangGraph",
      "Vector embeddings",
      "Fine-tuning concepts",
      "LoRA / QLoRA"
    ]
  },
  {
    title: "Python, ML & Data",
    items: [
      "Python",
      "FastAPI",
      "Streamlit",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "SciPy",
      "TensorFlow basics",
      "Forecasting",
      "Anomaly detection",
      "Data visualization",
      "PDF/report generation"
    ]
  },
  {
    title: "Databases & Retrieval",
    items: [
      "ChromaDB",
      "Vector databases",
      "SQLite",
      "PostgreSQL",
      "Document parsing",
      "Semantic search",
      "Cited answer design",
      "Structured data"
    ]
  },
  {
    title: "Full-Stack Development",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "REST APIs",
      "Admin CRUD",
      "Responsive UI",
      "Production handoff",
      "SEO-ready structure"
    ]
  },
  {
    title: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Streamlit Cloud",
      "OpenAI API",
      "Anthropic Claude API",
      "Hugging Face",
      "Ollama",
      "MCP concepts",
      "Google Search Console"
    ]
  },
  {
    title: "Professional Skills",
    items: [
      "Remote collaboration",
      "Client communication",
      "Stakeholder updates",
      "Technical documentation",
      "Leadership ownership",
      "Structured feedback",
      "Task ownership",
      "Problem solving",
      "Clear explanation",
      "Product thinking"
    ]
  }
];

const resumeExperience = [
  {
    title: "Full Stack Developer / Product Platform Developer (Contract)",
    company: "Econ Building Center / DadiMa Superfood",
    dates: "Jun 2026 - Present",
    scope: "Client product platform, catalog workflow, admin support, and release-ready handoff.",
    bullets: [
      "Built a responsive product catalog platform with categories, variants, stock-style product display, product detail pages, cart-style flow, compliance pages, and distributor/customer CTAs.",
      "Implemented admin-supported content workflows for managing product and category-style business data.",
      "Prepared the platform for client review with clean page structure, metadata, release readiness, and business-ready handoff."
    ],
    stack: "Frontend engineering, admin CRUD, catalog UX, responsive UI, production handoff"
  },
  {
    title: "Applied AI Engineer (Contract)",
    company: "micro1",
    dates: "Apr 2026 - May 2026",
    scope: "Prompt improvement, LLM response quality review, and AI task evaluation.",
    bullets: [
      "Created, tested, and refined prompts to improve LLM response quality, instruction following, clarity, completeness, and task relevance across assigned business/productivity scenarios.",
      "Reviewed model outputs against task requirements, comparing alternative responses and identifying issues in accuracy, safety, consistency, tone, usefulness, and reasoning quality.",
      "Provided structured feedback for prompt and response improvement through annotation, response ranking, AI QA, documentation, and deadline-based remote task delivery."
    ],
    stack: "Prompt engineering, LLM evaluation, response ranking, data annotation, AI QA"
  },
  {
    title: "AI Full Stack Developer (Freelance / Remote)",
    company: "Xbot Startup",
    dates: "Jan 2026 - Present",
    scope: "Client-facing web delivery for business websites, product pages, and conversion flows.",
    bullets: [
      "Delivered responsive client websites and business platforms across interiors, dental, restaurant, ecommerce, real estate, creator, portfolio, and invitation use cases.",
      "Translated client requirements into production UI, reusable page sections, service/catalog flows, WhatsApp inquiry paths, mobile-first layouts, and deployment-ready pages.",
      "Worked with a small remote team while handling frontend implementation, testing, client communication, stakeholder updates, and technical handoff."
    ],
    stack: "React, Next.js, Vite, TypeScript, JavaScript, Tailwind CSS, responsive frontend delivery"
  },
  {
    title: "Applied AI Engineer (Remote)",
    company: "Product R&D",
    dates: "Jan 2024 - Jan 2026",
    scope: "Hands-on AI product development across LLM apps, RAG, analytics, and reporting systems.",
    bullets: [
      "Built practical AI product prototypes for legal document intelligence, financial analytics, and media/content intelligence using Python-first workflows.",
      "Designed LLM-powered user flows with document parsing, retrieval, prompt orchestration, AI analysis, data visualization, cited outputs, and PDF reporting.",
      "Focused on applied use cases: reducing manual document review, simplifying financial analysis, and turning long-form media into structured content assets."
    ],
    stack: "Python, Streamlit, FastAPI, LangGraph, ChromaDB, Pandas, Plotly, ReportLab"
  }
];

const projectExperience = [
  {
    title: "DadiMa Superfood",
    url: "https://dadimasuperfood.netlify.app/",
    problem: "The client needed a trustworthy product platform for food-processing products and distributor/customer inquiries.",
    built: "Built an admin-supported product catalog with categories, variants, product pages, compliance content, distributor CTA, and responsive production handoff.",
    stack: "Frontend engineering, admin CRUD, product catalog UX, responsive UI, production handoff"
  },
  {
    title: "LexiQ",
    url: "https://lexiq-ai.streamlit.app/",
    problem: "Legal documents are long, risk-heavy, and difficult to review manually.",
    built: "Built a legal document intelligence app with PDF upload, parsing, semantic retrieval, cited answers, page references, and risk flags.",
    stack: "Python, Streamlit, LangGraph, ChromaDB, OpenAI GPT-4o, PyMuPDF"
  },
  {
    title: "FinanceIQ",
    url: "https://finance-iq.streamlit.app/",
    problem: "Financial CSVs are hard to analyze quickly without manual spreadsheet work.",
    built: "Built an AI-assisted analytics app for transaction ingestion, dashboards, forecasting, anomaly detection, financial health scoring, and PDF reports.",
    stack: "Python, Streamlit, Pandas, NumPy, Scikit-learn, Plotly, SQLite, ReportLab"
  },
  {
    title: "SaveIQ",
    url: "https://saveiq.streamlit.app/",
    problem: "Creators and teams spend too much time extracting useful insights from long-form videos.",
    built: "Built a media intelligence workflow for transcript analysis, structured summaries, content ideas, social outputs, and prompt-driven analysis.",
    stack: "Python, Streamlit, Anthropic Claude API, yt-dlp, requests, retry handling"
  },
  {
    title: "AI Engineer Portfolio System",
    url: "https://syedsajjadhussain.in/",
    problem: "Project proof, resume content, writing, and contact paths needed one clear professional system.",
    built: "Built a searchable portfolio with typed project data, blog, HTML/PDF resume, project detail pages, JSON-LD, Open Graph assets, and fast filtering.",
    stack: "Next.js, React, TypeScript, Tailwind CSS, structured data, performance optimization"
  }
];

const resumeCertifications = [
  "micro1 Applied AI Engineer",
  "Educosys Live Generative AI Engineering Program",
  "Google for Startups - Startup School: Prompt to Prototype",
  "Coursera / Politecnico di Milano - Machine Learning: an overview"
];

const resumeRoleLine = "Applied AI Engineer | GenAI / LLMs | RAG | Fine-tuning | Agentic AI";
const resumeAvailability = "Open to Global Relocation | Immediate Joiner";
const resumeEducationSchool = "MAKAUT";

export function ResumeContent({ print = false }: { print?: boolean }) {
  return (
    <article className="print-page mx-auto max-w-5xl bg-white p-5 text-foreground md:p-8">
      <header className="border-b border-border pb-5 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-2">Applied AI Engineer</p>
        <h1 className="mt-2 text-3xl font-semibold uppercase md:text-5xl">{profile.name}</h1>
        <p className="mt-2 text-base font-semibold text-foreground md:text-lg">{resumeRoleLine}</p>
        <p className="mt-1 text-sm font-medium text-foreground md:text-base">{resumeAvailability}</p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-muted">
          <span>{profile.phone}</span>
          <a href={`mailto:${profile.email}`} className="font-semibold text-accent-2">{profile.email}</a>
        </div>
        <div className="mt-1 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-muted">
          <a href={profile.links.portfolio} className="font-semibold text-accent-2">Portfolio</a>
          <a href={profile.links.linkedin} className="font-semibold text-accent-2">LinkedIn</a>
          <a href={profile.links.github} className="font-semibold text-accent-2">GitHub</a>
        </div>
        <div className="mx-auto mt-4 max-w-3xl">
          <p className="leading-7 text-muted">
            Applied AI Engineer and B.Tech CSE graduate focused on LLM product workflows,
            prompt improvement, RAG systems, AI evaluation, Python applications, and full-stack
            delivery. Built practical projects across legal document AI, financial analytics,
            media intelligence, portfolio systems, and client product platforms.
          </p>
        </div>
      </header>

      {!print ? (
        <div className="no-print mt-5 flex flex-wrap gap-2">
          <LinkButton href={profile.resumePath} external>
            Download PDF
          </LinkButton>
          <LinkButton href="/contact" variant="secondary">
            Contact
          </LinkButton>
        </div>
      ) : null}

      <section className="mt-6">
        <h2 className="border-b border-foreground pb-1 text-base font-bold uppercase">Technical Skills</h2>
        <div className="mt-2 grid gap-1 text-sm leading-6">
          {technicalSkills.map((group) => (
            <p key={group.title}>
              <span className="font-bold">{group.title}:</span> {group.items.join(", ")}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="border-b border-foreground pb-1 text-base font-bold uppercase">Experience</h2>
        <div className="mt-2 grid gap-4">
          {resumeExperience.map((experience) => (
            <article key={`${experience.company}-${experience.dates}`}>
              <div className="flex flex-col gap-1 md:flex-row md:justify-between">
                <h3 className="font-semibold">
                  {experience.title} | {experience.company}
                </h3>
                <p className="text-sm font-semibold text-muted">{experience.dates}</p>
              </div>
              <p className="mt-2 text-sm font-semibold text-accent-2">{experience.scope}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-muted">
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                Main stack: <span className="normal-case tracking-normal">{experience.stack}</span>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="border-b border-foreground pb-1 text-base font-bold uppercase">Project Experience</h2>
        <div className="mt-2 grid gap-3">
          {projectExperience.map((project) => (
            <article key={project.title}>
              <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                <h3 className="font-semibold">
                  <a className="text-accent-2 underline underline-offset-2" href={project.url}>
                    {project.title}
                  </a>
                </h3>
                <a className="text-sm font-semibold text-accent-2" href={project.url}>
                  Live project
                </a>
              </div>
              <div className="mt-2 grid gap-1 text-sm leading-6 text-muted">
                <p><span className="font-semibold text-foreground">Problem solved:</span> {project.problem}</p>
                <p><span className="font-semibold text-foreground">Built:</span> {project.built}</p>
                <p><span className="font-semibold text-foreground">Tech stack:</span> {project.stack}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="border-b border-foreground pb-1 text-base font-bold uppercase">Education</h2>
        <div className="mt-2">
          <p className="mt-2 font-semibold">{profile.education.degree}</p>
          <p className="text-sm leading-6 text-muted">
            {resumeEducationSchool} | {profile.education.dates} | CGPA: {profile.education.cgpa} |
            Graduated {profile.education.graduated}
          </p>
        </div>
      </section>

      <section className="mt-6">
          <h2 className="border-b border-foreground pb-1 text-base font-bold uppercase">Certifications & Achievements</h2>
          <p className="mt-2 text-sm leading-6 text-muted">{profile.achievements.join(" | ")}</p>
          <p className="mt-3 text-sm leading-6 text-muted">
            <span className="font-semibold text-foreground">Certifications:</span> {resumeCertifications.join(" | ")}
          </p>
      </section>
    </article>
  );
}
