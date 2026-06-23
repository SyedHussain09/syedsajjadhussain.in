export type ProjectCategory =
  | "AI"
  | "GenAI"
  | "RAG"
  | "LLM Evaluation"
  | "Full-Stack"
  | "SEO"
  | "Client"
  | "E-commerce"
  | "Portfolio"
  | "Experiment";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  adminUrl?: string;
  date?: string;
  problem?: string;
  solution?: string;
  techStack: string[];
  highlights: string[];
  tags: ProjectCategory[];
  role: string;
  featured?: boolean;
  result?: string;
  respectfulNote?: string;
};

export const projectFilters: Array<ProjectCategory | "All"> = [
  "All",
  "AI",
  "GenAI",
  "RAG",
  "LLM Evaluation",
  "Full-Stack",
  "SEO",
  "Client",
  "E-commerce",
  "Portfolio",
  "Experiment"
];

export const featuredProjects: Project[] = [
  {
    slug: "financeiq",
    title: "FinanceIQ",
    subtitle: "AI-Powered Financial Analytics",
    liveUrl: "https://finance-iq.streamlit.app/",
    githubUrl: "https://github.com/SyedHussain09/Finance-IQ",
    category: "AI / Finance / Analytics",
    summary:
      "FinanceIQ turns transaction CSVs into AI-assisted financial intelligence with forecasting, anomaly detection, financial health scoring, interactive charts, and PDF reporting.",
    problem:
      "Financial analysis usually requires manual spreadsheets, time, and technical knowledge.",
    solution:
      "Users upload transaction data and receive structured insights, forecasts, anomalies, charts, and reports through an AI-assisted Streamlit interface.",
    techStack: [
      "Python",
      "Streamlit",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "SciPy",
      "SQLite",
      "Plotly",
      "Matplotlib",
      "ReportLab",
      "AI/NLP API"
    ],
    highlights: [
      "Smart CSV parsing",
      "Adaptive transaction analytics",
      "Context-aware AI advisor",
      "7/30/90 day forecasting",
      "Anomaly detection",
      "Financial health score",
      "Professional PDF reports"
    ],
    tags: ["AI", "GenAI", "Full-Stack"],
    role: "Python AI product engineering, analytics UX, reporting workflow",
    featured: true,
    result:
      "Converts messy transaction data into clear AI analytics outputs with charts and PDF reports."
  },
  {
    slug: "lexiq",
    title: "LexiQ",
    subtitle: "AI Legal Document Intelligence",
    liveUrl: "https://lexiq-ai.streamlit.app/",
    githubUrl: "https://github.com/SyedHussain09/LexiQ",
    category: "AI / LegalTech / RAG",
    summary:
      "LexiQ helps users understand contracts by uploading PDFs, asking plain-English questions, and receiving cited answers with risk flags.",
    problem:
      "Legal documents are long, dense, and risk-heavy; manual review is slow and expensive.",
    solution:
      "PDF upload, semantic retrieval, LLM answers, page citations, and risk levels make document review faster and clearer.",
    techStack: ["Python", "Streamlit", "LangGraph", "ChromaDB", "OpenAI GPT-4o", "PyMuPDF"],
    highlights: [
      "PDF parsing",
      "Document Q&A",
      "Source citations",
      "Page references",
      "High/medium/low risk flags",
      "Privacy-conscious local-first processing concept"
    ],
    tags: ["AI", "GenAI", "RAG"],
    role: "RAG workflow, prompt orchestration, document intelligence UX",
    featured: true,
    result:
      "Shows practical RAG thinking: parsing, retrieval, cited answers, and risk-aware output design."
  },
  {
    slug: "saveiq",
    title: "SaveIQ",
    subtitle: "Media Intelligence Platform",
    liveUrl: "https://saveiq.streamlit.app/",
    githubUrl: "https://github.com/SyedHussain09/SaveiQ",
    category: "AI / Media / Content Automation",
    summary:
      "SaveIQ transforms long-form video content into structured insights, summaries, blog drafts, social threads, and content ideas.",
    problem:
      "Creators and marketing teams spend hours watching videos and manually repurposing content.",
    solution:
      "An AI workflow extracts media, analyses transcripts, estimates performance signals, and generates structured content assets.",
    techStack: [
      "Python",
      "Streamlit",
      "yt-dlp",
      "Anthropic Claude API",
      "python-dotenv",
      "requests",
      "watchdog",
      "tenacity"
    ],
    highlights: [
      "Media extraction from 50+ platforms",
      "Transcript understanding",
      "Viral potential estimation",
      "Blog draft generation",
      "Social media threads",
      "Retry logic and fault tolerance"
    ],
    tags: ["AI", "GenAI", "Full-Stack"],
    role: "AI workflow design, content automation, reliability handling",
    featured: true,
    result:
      "Connects AI analysis with practical creator and marketing workflows instead of a one-off prompt demo."
  },
  {
    slug: "findyourpeace",
    title: "FindYourPeace",
    subtitle: "Quran-Based Emotional Guidance",
    liveUrl: "https://find-your-peace.vercel.app/",
    category: "AI / Spiritual Companion / Emotional Guidance",
    summary:
      "FindYourPeace is a spiritual companion that gives authentic Quranic verses based on how a user is feeling.",
    techStack: ["Python", "FastAPI", "React.js", "Vite", "Axios", "CSS3"],
    date: "Sep 2025 - Oct 2025",
    highlights: [
      "Emotion-led user flow",
      "FastAPI backend",
      "React/Vite frontend",
      "Calm mobile UI",
      "Verse-focused retrieval concept"
    ],
    tags: ["AI", "Full-Stack", "Experiment"],
    role: "Full-stack prototype, API integration, respectful UX",
    featured: true,
    respectfulNote:
      "For reflection and spiritual support, not a replacement for qualified religious guidance.",
    result:
      "Demonstrates sensitivity around AI product design where tone, trust, and boundaries matter."
  },
  {
    slug: "dadima-superfood",
    title: "DadiMa Superfood",
    subtitle: "Full-Stack E-commerce & Admin-Managed Product Platform",
    liveUrl: "https://dadimasuperfood.netlify.app/",
    adminUrl: "https://dadimasuperfood.netlify.app/admin/",
    category: "Full Stack / E-commerce / Client",
    summary:
      "DadiMa Superfood is a fast, responsive food-processing brand website with dynamic product categories, variants, stock-style catalog, cart flow, compliance pages, distributor CTA, and admin-supported content management.",
    problem:
      "The client needed a trustworthy brand/product platform that could present food-processing products clearly and support ongoing business updates.",
    solution:
      "Built a polished catalog, product pages, compliance content, distributor journey, cart-style flow, admin support, and structured product pages.",
    techStack: [
      "Frontend Engineering",
      "Admin CRUD",
      "Product Catalog",
      "Content structure",
      "Product page system",
      "Production Handoff",
      "Responsive UI"
    ],
    highlights: [
      "Admin-managed catalog concept",
      "Categories and variants",
      "Stock-style product display",
      "Cart flow",
      "Compliance pages",
      "Distributor CTA",
      "Clear product detail structure"
    ],
    tags: ["Full-Stack", "E-commerce", "Client"],
    role: "Client delivery, responsive UX, admin/catalog structure",
    featured: true,
    result:
      "Shows client-grade product structure, admin thinking, and release-ready product discipline."
  },
  {
    slug: "syed-sajjad-hussain-portfolio",
    title: "Syed Sajjad Hussain Portfolio",
    subtitle: "AI Engineer Portfolio + SEO System",
    liveUrl: "https://syedsajjadhussain.in/",
    category: "Portfolio / SEO / Next.js",
    summary:
      "This website is a portfolio system with structured project data, blog, resume PDF, JSON-LD, Open Graph, and Search Console support.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion", "SEO", "JSON-LD"],
    highlights: [
      "Typed content system",
      "Project and blog detail pages",
      "Resume PDF and HTML resume",
      "Structured data",
      "Indexing assets",
      "Fast project filtering",
      "Site search"
    ],
    tags: ["Portfolio", "SEO", "Full-Stack"],
    role: "Product design, frontend architecture, SEO, performance engineering",
    featured: true,
    result:
      "Turns the portfolio into a searchable project and resume system instead of a static brochure."
  }
];

export const clientProjects: Project[] = [
  {
    slug: "tna-interior",
    title: "TNA Interior",
    subtitle: "SEO business website / interior services",
    liveUrl: "https://tnainterior.com/",
    category: "Client / Interior Services",
    summary:
      "Interior services website with service pages, product/service categories, WhatsApp quote CTAs, refined UI, and SEO-structured pages.",
    techStack: ["Responsive UI", "SEO-structured pages", "WhatsApp CTA", "Service taxonomy"],
    highlights: ["Service pages", "Quote CTAs", "Refined interior UI", "SEO-structured pages"],
    tags: ["Client", "SEO", "Full-Stack"],
    role: "Frontend delivery and SEO-structured service pages"
  },
  {
    slug: "home-interior-designer",
    title: "Home Interior Designer",
    subtitle: "SEO business website / interior design",
    liveUrl: "https://homeinteriordesigner.pk/",
    category: "Client / Interior Design",
    summary:
      "Interior design platform with large service/product taxonomy, flooring, blinds, wall-covering pages, WhatsApp quote flows, and local SEO style content.",
    techStack: ["Responsive UI", "SEO content", "WhatsApp flows", "Service catalog"],
    highlights: ["Large taxonomy", "Service pages", "Quote flows", "Local SEO style content"],
    tags: ["Client", "SEO", "Full-Stack"],
    role: "Business website UX and service catalog structure"
  },
  {
    slug: "zia-dental-consultants",
    title: "Zia Dental Consultants",
    subtitle: "Dental clinic website",
    liveUrl: "https://ziadentalconsultants.me/",
    category: "Client / Healthcare",
    summary:
      "Dental clinic website with clinic presentation, service flow, responsive UI, and clear appointment-oriented structure.",
    techStack: ["Responsive UI", "Clinic pages", "Service flow", "CTA design"],
    highlights: ["Clinic presentation", "Service flow", "Mobile responsive UI"],
    tags: ["Client", "Full-Stack"],
    role: "Clinic website UI and service structure"
  },
  {
    slug: "voco-rooftop",
    title: "VOCO Rooftop",
    subtitle: "Restaurant landing page",
    liveUrl: "https://vocorooftop.netlify.app/",
    category: "Client / Restaurant",
    summary:
      "Rooftop restaurant landing page with menu sections, WhatsApp reservation flows, and mobile-first local business design.",
    techStack: ["Landing page", "Responsive UI", "WhatsApp reservation", "Menu UX"],
    highlights: ["Menu sections", "Reservation flow", "Mobile-first design"],
    tags: ["Client", "Full-Stack"],
    role: "Local business landing page and conversion flow"
  },
  {
    slug: "royal-grain-pakistan",
    title: "Royal Grain Pakistan",
    subtitle: "Rice e-commerce demo",
    liveUrl: "https://royalrice.netlify.app/",
    category: "E-commerce / Demo",
    summary:
      "Premium rice store demo with product catalog, shopping flow, and polished food-commerce presentation.",
    techStack: ["Product catalog", "Shopping flow", "Responsive UI"],
    highlights: ["Catalog", "Shopping flow", "Premium rice store UI"],
    tags: ["E-commerce", "Client", "Full-Stack"],
    role: "Product catalog UX and storefront design"
  },
  {
    slug: "gujranwala-rice-house",
    title: "Gujranwala Rice House",
    subtitle: "Rice catalog / pricing calculator",
    liveUrl: "https://ricewala.netlify.app/",
    category: "E-commerce / Catalog",
    summary:
      "Rice catalog concept with live PKR pricing, quantity selector, WhatsApp order summary, and bulk order flow.",
    techStack: ["Pricing UI", "Quantity selector", "WhatsApp checkout", "Catalog UX"],
    highlights: ["Pricing concept", "Quantity selector", "Order summary", "Bulk flow"],
    tags: ["E-commerce", "Client", "Full-Stack"],
    role: "Commerce interaction design and order flow"
  },
  {
    slug: "urbanstep-pakistan",
    title: "UrbanStep Pakistan",
    subtitle: "Shoes e-commerce demo",
    liveUrl: "https://gujranwalashoes.netlify.app/",
    category: "E-commerce / Demo",
    summary:
      "Shoes e-commerce demo with product catalog, filters, size selection, and WhatsApp checkout flow.",
    techStack: ["Product filters", "Size selection", "WhatsApp checkout", "Responsive UI"],
    highlights: ["Catalog", "Filters", "Size selection", "Checkout flow"],
    tags: ["E-commerce", "Client", "Full-Stack"],
    role: "Storefront UX and product selection flow"
  },
  {
    slug: "ah-interiors",
    title: "AH Interiors",
    subtitle: "Interior/construction website",
    liveUrl: "https://interiorsdesigners.netlify.app/",
    adminUrl: "https://ah-interior.netlify.app/services",
    category: "Client / Interior Construction",
    summary:
      "Interior and construction website with CMS-managed services concept, WhatsApp consultation, and services/project pages.",
    techStack: ["Services UI", "CMS concept", "WhatsApp consultation", "Responsive UI"],
    highlights: ["Services pages", "Consultation CTA", "Project/service presentation"],
    tags: ["Client", "Full-Stack"],
    role: "Service website structure and consultation UX"
  },
  {
    slug: "idrees-realtor",
    title: "Idrees Realtor",
    subtitle: "Real estate advisor website",
    liveUrl: "https://islamabadrealestateadvisor.netlify.app/",
    category: "Client / Real Estate",
    summary:
      "Real estate advisor website with property filters, WhatsApp inquiry, investment/project cards, and local business UX.",
    techStack: ["Property filters", "Inquiry CTA", "Project cards", "Responsive UI"],
    highlights: ["Property filters", "WhatsApp inquiry", "Investment cards"],
    tags: ["Client", "Full-Stack"],
    role: "Real estate UX and lead inquiry flow"
  },
  {
    slug: "ayesha-nouman-wedding",
    title: "Ayesha & Nouman Wedding Invitation",
    subtitle: "Mobile-first digital invitation",
    liveUrl: "https://ayeshanouman.netlify.app/",
    category: "Client / Invitation",
    summary:
      "Custom mobile-first digital invitation with invitation reveal, client-specific design, and lightweight event presentation.",
    techStack: ["Mobile-first UI", "Invitation reveal", "Custom design"],
    highlights: ["Mobile UI", "Invitation reveal", "Client-specific design"],
    tags: ["Client", "Experiment"],
    role: "Mobile-first visual experience"
  },
  {
    slug: "socially-hygge",
    title: "Socially Hygge",
    subtitle: "Creator/social media portfolio",
    liveUrl: "https://sociallyhygge.netlify.app/",
    category: "Client / Creator Portfolio",
    summary:
      "Creator brand site with social-first aesthetic, service cards, strategic copy, and redirect automation.",
    techStack: ["Brand site", "Service cards", "Redirect automation", "Responsive UI"],
    highlights: ["Aesthetic brand site", "Service cards", "Strategic copy"],
    tags: ["Client", "Portfolio"],
    role: "Creator brand positioning and portfolio UX"
  },
  {
    slug: "falak-iftikhar-portfolio",
    title: "Falak Iftikhar Portfolio",
    subtitle: "Developer portfolio",
    liveUrl: "https://falakiftikhar.netlify.app/",
    category: "Portfolio / Developer",
    summary:
      "Flutter developer portfolio with positioning, project modules, and WhatsApp CTA.",
    techStack: ["Portfolio UI", "Project modules", "WhatsApp CTA"],
    highlights: ["Developer positioning", "Project modules", "CTA design"],
    tags: ["Client", "Portfolio", "Full-Stack"],
    role: "Portfolio design and project presentation"
  },
  {
    slug: "glowluxe",
    title: "GlowLuxe",
    subtitle: "Beauty/dermatology demo",
    liveUrl: "https://glowluxes.netlify.app/",
    category: "Demo / Beauty",
    summary:
      "Premium clinic UI demo with treatments, testimonials, booking CTA, and polished visual direction.",
    techStack: ["Clinic UI", "Booking CTA", "Responsive UI"],
    highlights: ["Treatments", "Testimonials", "Booking flow"],
    tags: ["Client", "Full-Stack"],
    role: "Premium service UI and conversion-focused layout"
  },
  {
    slug: "velvet-beauty",
    title: "Velvet Beauty",
    subtitle: "Salon/beauty demo",
    liveUrl: "https://velvetsbeauty.netlify.app/",
    category: "Demo / Beauty",
    summary:
      "Salon and beauty demo with service presentation, results, booking flow, and polished visuals.",
    techStack: ["Service UI", "Booking flow", "Responsive UI"],
    highlights: ["Services", "Results", "Booking flow"],
    tags: ["Client", "Full-Stack"],
    role: "Beauty service UI and booking-oriented UX"
  }
];

export const allProjects = [...featuredProjects, ...clientProjects];

export function getProjectBySlug(slug: string) {
  return allProjects.find((project) => project.slug === slug);
}
