import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const output = join(root, "public", "resume", "syed-sajjad-hussain-ai-engineer.pdf");

const pageWidth = 595;
const pageHeight = 842;
const marginX = 45;
const topY = 794;
const bottomY = 34;
const contentWidth = pageWidth - marginX * 2;

const colors = {
  ink: [0.05, 0.055, 0.07],
  muted: [0.20, 0.23, 0.29],
  lightMuted: [0.40, 0.43, 0.50],
  link: [0.02, 0.20, 0.76],
  rule: [0.06, 0.06, 0.06]
};

const profile = {
  name: "Syed Sajjad Hussain",
  role: "Applied AI Engineer | GenAI / LLMs | RAG | Fine-tuning | Agentic AI",
  availability: "Open to Global Relocation | Immediate Joiner",
  email: "syedsajjadhussain0014@gmail.com",
  phone: "+91 9641149521",
  linkedin: "https://www.linkedin.com/in/syedhussain014/",
  github: "https://github.com/SyedHussain09",
  portfolio: "https://syedsajjadhussain.in/"
};

const summary =
  "Applied AI Engineer and B.Tech CSE graduate focused on LLM applications, RAG workflows, prompt evaluation, fine-tuning concepts, and Python AI systems. Built legal document AI, financial analytics, media intelligence, portfolio systems, and client product platforms with clear documentation, remote collaboration, and independent delivery.";

const skillGroups = [
  {
    label: "AI & LLMs:",
    body: "Prompt engineering/refinement, LLM evaluation, response ranking, AI QA, RAG, LangChain, LangGraph, vector embeddings, fine-tuning concepts, LoRA / QLoRA, agentic workflows."
  },
  {
    label: "Python / Data:",
    body: "Python, FastAPI, Streamlit, Pandas, NumPy, Scikit-learn, forecasting, anomaly detection, Plotly, PDF/report generation."
  },
  {
    label: "Data & Vector DBs:",
    body: "ChromaDB, vector databases, SQLite, PostgreSQL, semantic search, document parsing, cited answers, structured data."
  },
  {
    label: "Development:",
    body: "React, Next.js, TypeScript, JavaScript, Vite, Tailwind CSS, REST APIs, admin CRUD, responsive UI, production handoff, SEO-ready structure."
  },
  {
    label: "Soft Skills:",
    body: "Remote collaboration, client communication, stakeholder updates, leadership ownership, documentation, structured feedback, problem solving, product thinking."
  }
];

const experiences = [
  {
    title: "Full Stack Developer / Product Platform Developer (Contract)",
    company: "Econ Building Center / DadiMa Superfood",
    companyUrl: "https://dadimasuperfood.netlify.app/",
    dates: "Jun 2026 - Present",
    bullets: [
      "Built a responsive product catalog platform with categories, variants, product detail pages, cart-style flow, compliance pages, and distributor/customer CTAs.",
      "Owned admin-supported product/category workflows, client review preparation, metadata, release readiness, and business-ready handoff."
    ],
    stack: "Frontend engineering, admin CRUD, catalog UX, responsive UI, production handoff"
  },
  {
    title: "Applied AI Engineer (Contract)",
    company: "micro1",
    dates: "Apr 2026 - May 2026",
    bullets: [
      "Created, tested, and refined prompts to improve LLM response quality, instruction following, clarity, completeness, task relevance, and response usefulness.",
      "Reviewed model outputs for accuracy, safety, consistency, tone, reasoning quality, and delivered structured annotation and response-ranking feedback."
    ],
    stack: "Prompt engineering, LLM evaluation, response ranking, AI QA"
  },
  {
    title: "AI Full Stack Developer (Freelance / Remote)",
    company: "Xbot Startup",
    dates: "Jan 2026 - Present",
    bullets: [
      "Delivered responsive client websites across interiors, dental, restaurant, ecommerce, real estate, creator, portfolio, and invitation use cases.",
      "Worked with a small remote team while handling frontend implementation, testing, client communication, stakeholder updates, and technical handoff."
    ],
    stack: "React, Next.js, Vite, TypeScript, JavaScript, Tailwind CSS, responsive frontend delivery"
  },
  {
    title: "Applied AI Engineer (Remote)",
    company: "Product R&D",
    dates: "Jan 2024 - Jan 2026",
    bullets: [
      "Built Python-first AI product prototypes for legal document intelligence, financial analytics, and media/content intelligence workflows.",
      "Designed LLM user flows with document parsing, retrieval, prompt orchestration, AI analysis, data visualization, cited outputs, and PDF reporting."
    ],
    stack: "Python, Streamlit, FastAPI, LangGraph, ChromaDB, Pandas, Plotly, ReportLab"
  }
];

const projects = [
  {
    title: "DadiMa Superfood - Client Product Platform",
    url: "https://dadimasuperfood.netlify.app/",
    stack: "Next.js, responsive catalog UX, admin-supported content flow, production handoff",
    bullets: [
      "Built product catalog, variant-style product pages, compliance content, distributor/customer CTAs, and business-ready deployment."
    ]
  },
  {
    title: "LexiQ - Legal Document AI",
    url: "https://lexiq-ai.streamlit.app/",
    stack: "Python, Streamlit, LangGraph, ChromaDB, OpenAI GPT-4o, PyMuPDF",
    bullets: [
      "Analyzes uploaded legal documents with parsing, semantic retrieval, cited answers, page references, and risk flags."
    ]
  },
  {
    title: "FinanceIQ - Financial Analytics AI",
    url: "https://finance-iq.streamlit.app/",
    stack: "Python, Streamlit, Pandas, Scikit-learn, Plotly, SQLite, ReportLab",
    bullets: [
      "Turns transaction CSVs into dashboards, forecasting, anomaly detection, financial health scoring, and PDF reports."
    ]
  },
  {
    title: "SaveIQ - Media Intelligence Tool",
    url: "https://saveiq.streamlit.app/",
    stack: "Python, Streamlit, Anthropic Claude API, yt-dlp, retry handling",
    bullets: [
      "Processes video/transcript inputs into summaries, content ideas, social outputs, and prompt-driven media analysis."
    ]
  }
];

const education = "B.Tech in Computer Science & Engineering (2022-26) | MAKAUT | CGPA: 7.8/10 | Graduated June 2026";
const certifications =
  "micro1 Applied AI Engineer | Educosys Live GenAI Engineering Program | Google Startup School | Coursera Machine Learning Overview";
const achievements =
  "National Rank 162 / 18,773, Top 1%, Naukri CodeQuezt #23 | 97/100 Mathematics | 92/100 English";

const page = { content: ["0.62 w"], annotations: [] };
let y = topY;

function escapePdf(value) {
  return String(value).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function colorCommand(color, operator = "rg") {
  return `${color.map((item) => item.toFixed(3)).join(" ")} ${operator}`;
}

function charFactor(char) {
  if (char === " ") return 0.29;
  if ("ilI.,:;!|'`".includes(char)) return 0.25;
  if ("mwMW@#%&".includes(char)) return 0.80;
  if (/[A-Z]/.test(char)) return 0.62;
  if (/[0-9]/.test(char)) return 0.54;
  if (/[()[\]{}]/.test(char)) return 0.35;
  return 0.50;
}

function textWidth(text, size, bold = false) {
  const base = [...String(text)].reduce((sum, char) => sum + charFactor(char), 0) * size;
  return bold ? base * 1.045 : base;
}

function wrapText(text, size, width, bold = false) {
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let line = "";

  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (textWidth(next, size, bold) <= width) {
      line = next;
    } else {
      if (line) lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines.length ? lines : [""];
}

function addAnnotation(x, yBottom, width, height, url) {
  page.annotations.push({ rect: [x, yBottom, x + width, yBottom + height], url });
}

function drawText(text, x, baseline, options = {}) {
  const { size = 8.6, bold = false, color = colors.ink, link, underline = false } = options;
  const font = bold ? "F2" : "F1";
  const width = textWidth(text, size, bold);
  page.content.push(`${colorCommand(color)} BT /${font} ${size} Tf ${x.toFixed(2)} ${baseline.toFixed(2)} Td (${escapePdf(text)}) Tj ET`);
  if (underline) drawLine(x, baseline - 1.4, x + width, baseline - 1.4, color, 0.35);
  if (link) addAnnotation(x, baseline - 2.2, width, size + 3.8, link);
  return width;
}

function drawCenteredText(text, baseline, options = {}) {
  const { size = 8.6, bold = false } = options;
  const width = textWidth(text, size, bold);
  return drawText(text, (pageWidth - width) / 2, baseline, options);
}

function drawLine(x1, y1, x2, y2, color = colors.rule, width = 0.55) {
  page.content.push(`q ${colorCommand(color, "RG")} ${width} w ${x1.toFixed(2)} ${y1.toFixed(2)} m ${x2.toFixed(2)} ${y2.toFixed(2)} l S Q`);
}

function addLink(label, url, x, baseline, size = 8.2, options = {}) {
  return drawText(label, x, baseline, {
    size,
    bold: options.bold ?? true,
    color: colors.link,
    link: url,
    underline: true
  });
}

function addCenteredContactLine(parts, baseline, size = 8.0) {
  const separator = " | ";
  const pad = 5;
  const totalWidth = parts.reduce((sum, part, index) => {
    return sum + textWidth(part.label, size, Boolean(part.bold)) + (index > 0 ? textWidth(separator, size) + pad * 2 : 0);
  }, 0);
  let x = (pageWidth - totalWidth) / 2;

  parts.forEach((part, index) => {
    if (index > 0) {
      x += pad;
      x += drawText(separator, x, baseline, { size, color: colors.muted });
      x += pad;
    }
    if (part.url) {
      x += addLink(part.label, part.url, x, baseline, size, { bold: false });
    } else {
      x += drawText(part.label, x, baseline, { size, color: colors.muted });
    }
  });
}

function addParagraph(text, options = {}) {
  const {
    x = marginX,
    width = contentWidth,
    size = 8.55,
    lineHeight = 11,
    color = colors.ink,
    bold = false
  } = options;
  const lines = wrapText(text, size, width, bold);
  lines.forEach((line) => {
    drawText(line, x, y, { size, color, bold });
    y -= lineHeight;
  });
  return lines.length;
}

function addLabeledParagraph(label, body) {
  const size = 8.32;
  const lineHeight = 10.0;
  const gap = 9;
  const labelWidth = drawText(label, marginX, y, { size, bold: true, color: colors.ink });
  const firstWidth = contentWidth - labelWidth - gap;
  const firstLines = wrapText(body, size, firstWidth);
  drawText(firstLines[0] ?? "", marginX + labelWidth + gap, y, { size, color: colors.ink });
  y -= lineHeight;

  const remaining = firstLines.slice(1);
  remaining.forEach((line) => {
    drawText(line, marginX, y, { size, color: colors.ink });
    y -= lineHeight;
  });
}

function addSection(title, gap = 9) {
  y -= gap;
  drawText(title.toUpperCase(), marginX, y, { size: 9.75, bold: true, color: colors.ink });
  drawLine(marginX, y - 5.2, pageWidth - marginX, y - 5.2, colors.rule, 0.6);
  y -= 13;
}

function addBullet(text, options = {}) {
  const {
    x = marginX + 10,
    width = contentWidth - 16,
    size = 8.35,
    lineHeight = 9.65,
    color = colors.ink
  } = options;
  drawText("-", marginX, y, { size, bold: true, color: colors.ink });
  const lines = wrapText(text, size, width);
  lines.forEach((line, index) => {
    drawText(line, index === 0 ? x : x, y, { size, color });
    y -= lineHeight;
  });
}

function addHeader() {
  drawCenteredText(profile.name.toUpperCase(), y, { size: 15.4, bold: true, color: colors.ink });
  y -= 17;
  drawCenteredText(profile.role, y, { size: 10.1, bold: true, color: colors.ink });
  y -= 15.2;
  drawCenteredText(profile.availability, y, { size: 9.2, bold: true, color: colors.ink });
  y -= 15;
  addCenteredContactLine([
    { label: profile.phone },
    { label: profile.email, url: `mailto:${profile.email}` },
    { label: "Portfolio", url: profile.portfolio },
    { label: "LinkedIn", url: profile.linkedin },
    { label: "GitHub", url: profile.github }
  ], y, 8.25);
  y -= 13;
}

function addExperience(item) {
  if (item.companyUrl) {
    const titleWidth = drawText(`${item.title} |  `, marginX, y, { size: 8.75, bold: true, color: colors.ink });
    const x = marginX + titleWidth + 5;
    addLink(item.company, item.companyUrl, x, y, 8.75);
  } else {
    drawText(`${item.title} |  ${item.company}`, marginX, y, { size: 8.75, bold: true, color: colors.ink });
  }
  y -= 11.2;
  drawText(item.dates, marginX, y, { size: 8.15, color: colors.ink });
  y -= 10.2;
  item.bullets.forEach((bullet) => addBullet(bullet));
  drawText(`Stack: ${item.stack}`, marginX + 10, y, { size: 7.65, color: colors.lightMuted });
  y -= 8.5;
}

function addProject(project) {
  addLink(`${project.title} [Live]`, project.url, marginX, y, 8.65);
  y -= 10.8;
  drawText(project.stack, marginX, y, { size: 8.1, color: colors.ink });
  y -= 9.6;
  project.bullets.forEach((bullet) => addBullet(bullet));
}

addHeader();

addSection("Professional Summary", 4);
addParagraph(summary, { size: 8.45, lineHeight: 10.55, color: colors.ink });

addSection("Technical Skills", 8);
skillGroups.forEach((skill) => addLabeledParagraph(skill.label, skill.body));

addSection("Experience", 8);
experiences.forEach(addExperience);

addSection("Projects", 6);
projects.forEach(addProject);

addSection("Education", 6);
addParagraph(education, { size: 8.45, lineHeight: 10.7, color: colors.ink, bold: true });

addSection("Certifications & Achievements", 7);
addBullet(`Certifications: ${certifications}`, { size: 8.15, lineHeight: 10.25 });
addBullet(`Achievements: ${achievements}`, { size: 8.15, lineHeight: 10.25 });

if (y < bottomY) {
  console.warn(`Resume content is below the bottom margin: y=${y.toFixed(2)}`);
}

const objects = [
  "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj",
  "2 0 obj << /Type /Pages /Kids [5 0 R] /Count 1 >> endobj",
  "3 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj",
  "4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >> endobj"
];

let nextObjectId = 7;
for (const annotation of page.annotations) {
  annotation.id = nextObjectId++;
}

const stream = page.content.join("\n");
const annotRefs = page.annotations.length
  ? ` /Annots [${page.annotations.map((annotation) => `${annotation.id} 0 R`).join(" ")}]`
  : "";

objects.push(
  `5 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}]${annotRefs} /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents 6 0 R >> endobj`
);
objects.push(`6 0 obj << /Length ${Buffer.byteLength(stream)} >> stream\n${stream}\nendstream endobj`);

for (const annotation of page.annotations) {
  const rect = annotation.rect.map((value) => value.toFixed(2)).join(" ");
  objects.push(
    `${annotation.id} 0 obj << /Type /Annot /Subtype /Link /Rect [${rect}] /Border [0 0 0] /A << /S /URI /URI (${escapePdf(annotation.url)}) >> >> endobj`
  );
}

let pdf = "%PDF-1.4\n";
const offsets = [0];
for (const object of objects) {
  offsets.push(Buffer.byteLength(pdf));
  pdf += `${object}\n`;
}
const xref = Buffer.byteLength(pdf);
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (let i = 1; i < offsets.length; i += 1) {
  pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;

mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, pdf, "binary");
console.log(`Wrote ${output}`);
