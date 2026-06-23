import { readingTime } from "@/lib/utils";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  takeaway: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  relatedProjects: string[];
  sections: Array<{
    heading: string;
    body: string[];
    bullets?: string[];
  }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "rag-in-simple-english",
    title: "RAG in Simple English: The Moment a Chatbot Learns to Check the File",
    description:
      "A clear story about retrieval augmented generation, why it matters, and how it changes a chatbot from guessing to looking things up.",
    takeaway:
      "RAG is not magic. It is a disciplined way to let an AI answer from the right documents instead of relying only on memory.",
    publishedAt: "2026-06-22",
    tags: ["RAG", "LLMs", "Document AI"],
    relatedProjects: ["lexiq"],
    sections: [
      {
        heading: "The Problem I Kept Seeing",
        body: [
          "Imagine uploading a long contract and asking, \"What happens if I terminate early?\" A normal chatbot may answer confidently, but the confidence is not enough. The user needs the exact clause, the page, and the surrounding context.",
          "That is where RAG becomes useful. Before the model answers, the app searches the uploaded document, pulls the most relevant passages, and gives those passages to the model as context."
        ]
      },
      {
        heading: "The Simple Workflow",
        body: [
          "A RAG app first breaks documents into smaller pieces. Each piece becomes an embedding, which is a numeric representation of meaning. Those pieces are stored in a vector database. When a user asks a question, the app retrieves the closest pieces and asks the LLM to answer from them.",
          "The important product decision is not only retrieval. It is showing the user why the answer should be trusted."
        ],
        bullets: [
          "Parse the file into readable text",
          "Split the text into meaningful chunks",
          "Store the chunks in a vector database",
          "Retrieve the chunks most related to the question",
          "Ask the LLM to answer using only the retrieved context",
          "Show citations, pages, or source snippets when possible"
        ]
      },
      {
        heading: "How This Shaped LexiQ",
        body: [
          "LexiQ is built around that trust problem. The app is not just a chat box beside a PDF. It is a document workflow: upload, retrieve, answer, cite, and flag risk.",
          "That structure makes the AI more useful because the user can inspect the path from question to answer instead of accepting a loose summary."
        ]
      }
    ]
  },
  {
    slug: "fine-tuning-vs-rag",
    title: "Fine-Tuning vs RAG: The Builder's First Fork in the Road",
    description:
      "A practical decision story for builders choosing between training a model and giving the model better context.",
    takeaway:
      "Start with RAG when the problem depends on fresh documents. Consider fine-tuning later when the behavior itself needs to change.",
    publishedAt: "2026-06-22",
    tags: ["Fine-tuning", "RAG", "LLMs"],
    relatedProjects: ["lexiq", "financeiq"],
    sections: [
      {
        heading: "The Temptation",
        body: [
          "When people first hear about fine-tuning, it sounds like the serious option. It feels like teaching the model deeply. But many real product problems are not about teaching style or behavior. They are about giving the model the missing facts.",
          "If the question is about a contract, a report, a policy, or a CSV, the model does not need a personality transplant. It needs the right source material."
        ]
      },
      {
        heading: "When RAG Is the Better First Build",
        body: [
          "RAG is usually the better starting point when the source information changes, belongs to the user, or needs to remain inspectable. You can debug retrieval, view the source chunks, and improve the prompt without creating a training dataset.",
          "It also ships faster. A useful prototype can be built with parsing, chunking, retrieval, prompt design, and a clear interface."
        ],
        bullets: [
          "Use RAG for private or changing documents",
          "Use RAG when citations matter",
          "Use RAG when the answer must be tied to visible evidence",
          "Use fine-tuning when you need a repeated behavior, tone, or task pattern",
          "Use fine-tuning only when you have a strong dataset and evaluation process"
        ]
      },
      {
        heading: "The Decision I Use",
        body: [
          "My first question is simple: does the model know the answer but behave badly, or does the model lack the context? If it lacks context, I reach for retrieval. If it knows the context but must learn a pattern, then fine-tuning becomes worth discussing.",
          "That thinking keeps the engineering practical and prevents the project from becoming expensive before it becomes useful."
        ]
      }
    ]
  },
  {
    slug: "how-i-built-lexiq",
    title: "How I Built LexiQ: From Long Legal PDFs to Cited AI Answers",
    description:
      "A build story about turning dense legal documents into a usable RAG workflow with citations, risk flags, and careful output design.",
    takeaway:
      "The hardest part of legal AI is not calling a model. It is making the answer inspectable, cautious, and useful.",
    publishedAt: "2026-06-22",
    tags: ["LexiQ", "RAG", "LegalTech"],
    relatedProjects: ["lexiq"],
    sections: [
      {
        heading: "The Starting Point",
        body: [
          "Legal PDFs create a very specific kind of friction. The user is not asking for entertainment. They are trying to understand responsibility, risk, dates, penalties, rights, and obligations.",
          "A loose summary can be dangerous here. The app needs to point back to the document and avoid sounding more certain than the source allows."
        ]
      },
      {
        heading: "The Product Shape",
        body: [
          "LexiQ follows a simple path: upload a PDF, extract text, retrieve relevant chunks, ask the LLM a focused question, and return an answer with page references and risk labels.",
          "The design goal is review speed. A user should be able to scan the answer, check the evidence, and decide whether to inspect the original page."
        ],
        bullets: [
          "PyMuPDF for PDF parsing",
          "ChromaDB for semantic retrieval",
          "LangGraph for orchestration",
          "Focused prompts for cautious answers",
          "Citations and page references for review",
          "Risk flags to guide attention"
        ]
      },
      {
        heading: "What I Learned",
        body: [
          "The model call is only one part of the system. The real engineering is in boundaries: what to retrieve, what to show, what to avoid, and how to make the answer easy to challenge.",
          "That is the difference between a demo and a product workflow."
        ]
      }
    ]
  },
  {
    slug: "financeiq-ai-analytics-lessons",
    title: "What FinanceIQ Taught Me About Making AI Analytics Understandable",
    description:
      "Lessons from building a transaction analytics app that turns CSVs into forecasts, anomalies, charts, and reports.",
    takeaway:
      "AI analytics works best when the interface first makes the data structure obvious.",
    publishedAt: "2026-06-22",
    tags: ["FinanceIQ", "Analytics", "Python"],
    relatedProjects: ["financeiq"],
    sections: [
      {
        heading: "The Messy File Problem",
        body: [
          "Most finance work begins with a messy file. A CSV may have unclear columns, inconsistent values, or enough rows to make manual reading painful. If the app cannot organize that input, the AI layer becomes decoration.",
          "FinanceIQ starts by turning the upload into structured analytics. Only then does AI become useful."
        ]
      },
      {
        heading: "The Useful Output",
        body: [
          "The app creates forecasts, anomaly flags, health scoring, charts, and PDF reports. Each output has a job: help the user understand what changed, what looks unusual, and what needs attention.",
          "The important lesson is that a good AI analytics app should not simply produce text. It should produce a readable decision surface."
        ],
        bullets: [
          "CSV parsing and cleaning",
          "Forecast windows",
          "Anomaly detection",
          "Health score summary",
          "Plotly charts for scanning",
          "ReportLab PDF output for sharing"
        ]
      },
      {
        heading: "The Product Lesson",
        body: [
          "For analytics, trust comes from clarity. The user should understand the input, see the transformation, and recognize the output.",
          "That is why FinanceIQ combines data processing, visual charts, and report generation instead of hiding everything behind a single AI response."
        ]
      }
    ]
  },
  {
    slug: "prompt-engineering-is-clear-problem-design",
    title: "Prompt Engineering Is Clear Problem Design, Not Magic Words",
    description:
      "A grounded explanation of prompt engineering as task design, constraints, examples, evaluation, and output structure.",
    takeaway:
      "A prompt is good when it makes the task testable, repeatable, and easy to evaluate.",
    publishedAt: "2026-06-22",
    tags: ["Prompt Engineering", "LLM Evaluation"],
    relatedProjects: ["saveiq"],
    sections: [
      {
        heading: "The Wrong Mental Model",
        body: [
          "Prompt engineering is often presented like a secret phrase. That is the wrong mental model. In real work, a prompt is closer to a product brief written for a model.",
          "It explains the job, context, constraints, output format, and failure cases. The clearer the brief, the easier the system is to test."
        ]
      },
      {
        heading: "What Good Prompts Actually Do",
        body: [
          "A good prompt reduces ambiguity. It tells the model what role it is playing, what information matters, what format to return, and what not to do.",
          "The next step is evaluation. If the response changes too much between runs, ignores the source, or sounds confident without evidence, the prompt is not finished."
        ],
        bullets: [
          "Define the task plainly",
          "Separate context from instruction",
          "Specify the output format",
          "Add constraints and refusal boundaries",
          "Test repeated examples",
          "Rank outputs for accuracy, clarity, and usefulness"
        ]
      },
      {
        heading: "Where I Used This Thinking",
        body: [
          "SaveIQ uses prompt design to turn media transcripts into structured summaries, content ideas, and social assets. micro1 evaluation work sharpened the same muscle from another angle: judge whether outputs are accurate, relevant, and safe.",
          "That combination matters because prompt engineering without evaluation is just guessing."
        ]
      }
    ]
  },
  {
    slug: "vector-databases-library-story",
    title: "Vector Databases Explained Like a Library That Understands Meaning",
    description:
      "A friendly story for understanding embeddings, semantic search, and why vector databases matter in RAG apps.",
    takeaway:
      "Vector search helps an app find related meaning, even when the user's words do not exactly match the document.",
    publishedAt: "2026-06-22",
    tags: ["Vector Databases", "Embeddings", "RAG"],
    relatedProjects: ["lexiq"],
    sections: [
      {
        heading: "The Library Story",
        body: [
          "Imagine walking into a library and asking for books about starting a small business. A keyword system looks only for those exact words. A good librarian understands nearby meaning: entrepreneurship, registration, finance, taxes, and operations.",
          "A vector database gives software a version of that semantic search."
        ]
      },
      {
        heading: "What Embeddings Do",
        body: [
          "Embeddings turn text into numbers that represent meaning. Similar ideas end up close to each other in vector space. When a user asks a question, the app converts that question into an embedding and retrieves nearby document chunks.",
          "That is why RAG can find useful context even if the user asks in everyday language."
        ],
        bullets: [
          "Text becomes embeddings",
          "Embeddings are stored in a vector database",
          "Questions become embeddings too",
          "The closest chunks are retrieved",
          "The LLM answers with the retrieved context"
        ]
      },
      {
        heading: "Why It Matters",
        body: [
          "Without semantic retrieval, document AI feels brittle. With it, the app can connect the user's intent to the right source material.",
          "The result is a more natural workflow: ask like a human, retrieve like a search system, answer like an assistant."
        ]
      }
    ]
  },
  {
    slug: "ai-apps-for-hiring-teams-working-projects",
    title: "Why Working AI Projects Explain More Than a Skill List",
    description:
      "A practical view of why live AI demos, case studies, and code links communicate engineering ability better than long stacks of badges.",
    takeaway:
      "A working project shows judgment: what problem was chosen, how the workflow behaves, and whether the result can be inspected.",
    publishedAt: "2026-06-22",
    tags: ["Career", "AI Engineer", "Projects"],
    relatedProjects: ["financeiq", "lexiq", "saveiq"],
    sections: [
      {
        heading: "The Skill List Problem",
        body: [
          "A skill list can say Python, RAG, LangGraph, Streamlit, and evaluation. That is useful, but it does not show how the pieces come together.",
          "A working project does. It shows the input, the workflow, the output, the user interface, and the tradeoffs."
        ]
      },
      {
        heading: "What a Strong Project Reveals",
        body: [
          "A strong project explains the problem before the stack. It makes the user journey visible. It shows whether the builder can think about reliability, output quality, deployment, and review.",
          "That is why I structure projects as case studies instead of just screenshots."
        ],
        bullets: [
          "Clear problem framing",
          "Usable input and output flow",
          "Technical choices with purpose",
          "Live demo or code link",
          "Readable explanation of tradeoffs",
          "Evidence that the result can be reviewed"
        ]
      },
      {
        heading: "My Portfolio Standard",
        body: [
          "FinanceIQ, LexiQ, and SaveIQ are useful because each connects AI to a real workflow: finance analysis, legal document review, and media intelligence.",
          "That is the standard I want the portfolio to communicate: practical AI, not only AI vocabulary."
        ]
      }
    ]
  },
  {
    slug: "what-practical-ai-teams-look-for",
    title: "What Practical AI Teams Look For in Applied AI Engineers",
    description:
      "A clear explanation of the signals that matter in applied AI engineering: working systems, product thinking, evaluation, and communication.",
    takeaway:
      "Applied AI teams need builders who can turn models into reliable workflows people can actually use.",
    publishedAt: "2026-06-22",
    tags: ["AI Engineer", "Career", "Projects"],
    relatedProjects: ["financeiq", "lexiq", "dadima-superfood"],
    sections: [
      {
        heading: "The Real Question",
        body: [
          "The real question is not whether someone has tried an AI API. The question is whether they can turn an AI capability into a useful product flow.",
          "That requires engineering, product judgment, interface clarity, evaluation, and communication."
        ]
      },
      {
        heading: "The Signals That Matter",
        body: [
          "Practical AI work has visible signals. Can the app handle real inputs? Does it explain outputs clearly? Can a reviewer inspect the answer? Is the system designed around the user instead of the model demo?",
          "Those signals show up in working projects more clearly than in claims."
        ],
        bullets: [
          "Python AI engineering",
          "RAG and vector retrieval",
          "Prompt evaluation",
          "Full-stack product delivery",
          "Clear documentation",
          "Role fit and availability"
        ]
      },
      {
        heading: "How I Position My Work",
        body: [
          "I focus on roles where LLM apps, RAG pipelines, evaluation, analytics, and product-facing interfaces matter together.",
          "The strongest work happens when AI is treated as part of a complete system: data in, workflow in the middle, trustworthy output at the end."
        ]
      }
    ]
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostReadingTime(post: BlogPost) {
  return readingTime(
    [
      post.title,
      post.description,
      post.takeaway,
      ...post.sections.flatMap((section) => [
        section.heading,
        ...section.body,
        ...(section.bullets || [])
      ])
    ].join(" ")
  );
}
