export type Experience = {
  title: string;
  company: string;
  dates: string;
  location: string;
  summary: string;
  bullets: string[];
  skills: string[];
};

export const experiences: Experience[] = [
  {
    title: "Applied AI Engineer (Remote)",
    company: "Product R&D",
    dates: "Jan 2024 - Jan 2026",
    location: "Remote",
    summary:
      "Built practical AI product prototypes while deepening GenAI, LLM, RAG, analytics, and Python engineering skills through market-oriented projects.",
    bullets: [
      "Designed and shipped AI applications for legal document intelligence, financial analytics, and media/content intelligence using Python-first workflows.",
      "Built LLM-powered user flows with document parsing, retrieval, prompt orchestration, AI analysis, visualization, and explainable outputs.",
      "Worked with tools such as Streamlit, LangGraph, ChromaDB, OpenAI/Anthropic APIs, PyMuPDF, Pandas, NumPy, Scikit-learn, Plotly, and ReportLab.",
      "Focused on real problems: reducing manual document review, simplifying financial analysis, and converting media into structured content assets."
    ],
    skills: [
      "Python",
      "LLM Apps",
      "RAG",
      "LangGraph",
      "ChromaDB",
      "Streamlit",
      "Prompt Engineering",
      "AI Product Thinking",
      "Data Visualization"
    ]
  },
  {
    title: "AI Full Stack Developer (Freelance / Remote)",
    company: "Xbot Startup",
    dates: "Jan 2026 - Present",
    location: "Remote / International client work",
    summary:
      "Worked in a small 3-person international setup delivering client websites, SEO-structured business pages, WhatsApp automation flows, product catalogs, and deployment support.",
    bullets: [
      "Owned design, frontend development, testing, deployment, technical SEO assets, and client-facing UI polish for multiple business websites.",
      "Built dynamic and conversion-focused websites for interiors, dental, restaurant, rice, shoes, real estate, social media, portfolio, and invitation use cases.",
      "Added business-friendly features such as WhatsApp deep-link messages, product/service pages, mobile-first catalogs, consultation CTAs, admin-editable content where applicable, and SEO-focused page structure.",
      "Collaborated with team members handling client discovery, cold outreach, and social media while translating client needs into deployed websites."
    ],
    skills: [
      "React",
      "Vite/Next.js",
      "TypeScript",
      "JavaScript",
      "Responsive UI",
      "SEO",
      "Production Handoff",
      "WhatsApp Automation",
      "Client Communication"
    ]
  },
  {
    title: "Applied AI Engineer (Contract)",
    company: "micro1",
    dates: "Apr 2026 - May 2026",
    location: "Remote",
    summary:
      "Supported AI development workflows through prompt improvement, LLM response evaluation, response ranking, data annotation, structured feedback, and quality assurance.",
    bullets: [
      "Created, tested, and refined prompts to improve LLM response quality, instruction following, clarity, completeness, and task relevance across assigned business/productivity scenarios.",
      "Reviewed model outputs against task requirements, comparing alternative responses and identifying issues in accuracy, safety, consistency, tone, usefulness, and reasoning quality.",
      "Provided structured feedback through response ranking, data annotation, AI quality assurance, documentation, and deadline-based remote task delivery.",
      "Collaborated remotely with team members and senior engineers through structured project workflows and review cycles."
    ],
    skills: [
      "Prompt Engineering",
      "Generative AI",
      "LLM Evaluation",
      "AI Training",
      "AI Quality Assurance",
      "Data Annotation",
      "Remote Collaboration"
    ]
  },
  {
    title: "Full Stack Developer / SEO Engineer (Contract, Ongoing)",
    company: "Econ Building Center / DadiMa Superfood",
    dates: "Jun 2026 - Present",
    location: "Remote / Client project",
    summary:
      "Built and deployed a full-stack e-commerce style platform for DadiMa Superfood with admin support, product catalog structure, CRUD workflows, SEO content, and technical SEO readiness.",
    bullets: [
      "Built a fast, responsive product catalog experience with categories, variants, stock-style display, product details, cart flow, compliance pages, and distributor/customer CTAs.",
      "Implemented admin support for managing product/category-style content and client-side business operations.",
      "Created SEO-oriented content structure, metadata, and business-friendly landing pages for indexing readiness.",
      "Deployed the project to a live subdomain for client review and ongoing iteration."
    ],
    skills: [
      "Full Stack Development",
      "E-commerce UI",
      "Admin CRUD",
      "SEO Content",
      "Technical SEO",
      "Production Handoff",
      "Responsive Design"
    ]
  }
];

export const genAiTraining = {
  title: "Live Generative AI Engineering Program - Educosys",
  summary:
    "Completed a live project-based Generative AI program covering AI foundations, deep generative models, transformers, LLMs, fine-tuning, LangChain, LangGraph, vector databases, RAG, AI agents, MCP, Ollama, multimodal models, diffusion, CLIP, and prompt engineering.",
  weeks: [
    {
      title: "AI Foundations",
      topics:
        "AI foundations, math foundations, probability/statistics/linear algebra, neural networks, gradient descent, feedforward/RNN/CNN, TensorFlow neural network, MNIST autoencoder."
    },
    {
      title: "Generative Models",
      topics:
        "GANs, VAEs, probabilistic generation, TensorBoard metrics, handwritten digit GAN, CelebA face VAE."
    },
    {
      title: "Transformers and LLMs",
      topics:
        "RNN/LSTM, transformers, attention, positional encoding, encoder-decoder, MLM/CLM, GPT/BERT, Transformer from scratch, BERT sentiment analysis."
    },
    {
      title: "Fine-tuning and Agent Workflows",
      topics:
        "Fine-tuning, LoRA, QLoRA, Hugging Face, summarization/QA, LangChain prompts/memory/chains/agents, LangGraph nodes/state/workflows, Q&A app."
    },
    {
      title: "RAG and Vector Search",
      topics:
        "Vector databases, ChromaDB, RAG pipelines, Streamlit frontend, end-to-end chatbot with LangGraph/ChromaDB/WebSearch/memory/LLMs, image/caption/video caption generation app."
    },
    {
      title: "Local Models and MCP",
      topics:
        "MCP, Ollama, Unsloth fine-tuning, Mixture of Experts, Chain-of-Thought concepts, DeepSeek architecture."
    },
    {
      title: "Multimodal AI",
      topics:
        "Distillation, diffusion models, Vision Transformers, multimodal models, CLIP, prompt engineering."
    }
  ],
  skills: [
    "Transformers",
    "LLMs",
    "RAG",
    "LangGraph",
    "LangChain",
    "Vector DBs",
    "Fine-tuning",
    "LoRA/QLoRA",
    "Hugging Face",
    "MCP",
    "Ollama",
    "Unsloth",
    "GANs",
    "VAEs",
    "Diffusion",
    "ViT",
    "CLIP",
    "Prompt Engineering"
  ]
};
