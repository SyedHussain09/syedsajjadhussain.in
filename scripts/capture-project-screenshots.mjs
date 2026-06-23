import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outputDir = join(root, "public", "projects", "screenshots");

const targets = [
  ["financeiq", "https://finance-iq.streamlit.app/"],
  ["lexiq", "https://lexiq-ai.streamlit.app/"],
  ["saveiq", "https://saveiq.streamlit.app/"],
  ["findyourpeace", "https://find-your-peace.vercel.app/"],
  ["dadima-superfood", "https://dadimasuperfood.netlify.app/"],
  ["home-interior-designer", "https://homeinteriordesigner.pk/"],
  ["zia-dental-consultants", "https://ziadentalconsultants.me/"],
  ["tna-interior", "https://tnainterior.com/"],
  ["voco-rooftop", "https://vocorooftop.netlify.app/"],
  ["royal-grain-pakistan", "https://royalrice.netlify.app/"],
  ["falak-iftikhar-portfolio", "https://falakiftikhar.netlify.app/"],
  ["glowluxe", "https://glowluxes.netlify.app/"],
  ["velvet-beauty", "https://velvetsbeauty.netlify.app/"],
  ["gujranwala-rice-house", "https://ricewala.netlify.app/"],
  ["urbanstep-pakistan", "https://gujranwalashoes.netlify.app/"],
  ["ah-interiors", "https://interiorsdesigners.netlify.app/"],
  ["ah-interiors-services", "https://ah-interior.netlify.app/services"],
  ["idrees-realtor", "https://islamabadrealestateadvisor.netlify.app/"],
  ["ayesha-nouman-wedding", "https://ayeshanouman.netlify.app/"],
  ["socially-hygge", "https://sociallyhygge.netlify.app/"]
];

function fallbackSvg(slug, url) {
  return `<svg width="1400" height="900" viewBox="0 0 1400 900" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1400" height="900" fill="#0A1020"/>
  <path d="M0 0H1400V900H0z" fill="url(#g)"/>
  <path d="M80 120H1320M80 240H1320M80 360H1320M80 480H1320M80 600H1320M80 720H1320" stroke="rgba(255,255,255,.08)"/>
  <path d="M160 80V820M320 80V820M480 80V820M640 80V820M800 80V820M960 80V820M1120 80V820M1280 80V820" stroke="rgba(255,255,255,.08)"/>
  <rect x="130" y="150" width="1140" height="600" rx="18" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.16)"/>
  <circle cx="185" cy="205" r="10" fill="#FF6B6B"/>
  <circle cx="220" cy="205" r="10" fill="#FFD166"/>
  <circle cx="255" cy="205" r="10" fill="#06D6A0"/>
  <text x="180" y="390" fill="#85FFF3" font-family="Arial" font-size="42" font-weight="700">${slug}</text>
  <text x="180" y="458" fill="rgba(255,255,255,.82)" font-family="Arial" font-size="28">${url}</text>
  <text x="180" y="535" fill="rgba(255,255,255,.58)" font-family="Arial" font-size="24">Fallback project card. Run with Playwright installed to capture the live site.</text>
  <defs><linearGradient id="g" x1="0" y1="0" x2="1400" y2="900"><stop stop-color="rgba(0,184,169,.24)"/><stop offset=".55" stop-color="rgba(55,85,255,.2)"/><stop offset="1" stop-color="rgba(216,169,56,.2)"/></linearGradient></defs>
</svg>`;
}

mkdirSync(outputDir, { recursive: true });

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  chromium = null;
}

if (!chromium) {
  for (const [slug, url] of targets) {
    writeFileSync(join(outputDir, `${slug}.svg`), fallbackSvg(slug, url));
  }
  console.log("Playwright is not installed. Wrote fallback SVG project cards instead.");
  process.exit(0);
}

const browser = await chromium.launch();
const failures = [];
try {
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  for (const [slug, url] of targets) {
    let captured = false;
    for (let attempt = 1; attempt <= 2; attempt += 1) {
      try {
        await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });
        await page.screenshot({ path: join(outputDir, `${slug}.png`), fullPage: false });
        captured = true;
        break;
      } catch (error) {
        if (attempt === 2) failures.push(`${slug}: ${error.message}`);
      }
    }
    if (!captured) {
      writeFileSync(join(outputDir, `${slug}.svg`), fallbackSvg(slug, url));
    }
  }
} finally {
  await browser.close();
}

if (failures.length) {
  writeFileSync(join(outputDir, "capture-failures.txt"), failures.join("\n"));
  console.log(`Completed with ${failures.length} fallback(s). See public/projects/screenshots/capture-failures.txt`);
} else {
  console.log("Captured all project screenshots.");
}
