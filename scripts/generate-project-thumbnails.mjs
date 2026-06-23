import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outputDir = join(root, "public", "projects", "thumbnails");

const projects = [
  ["financeiq", "FinanceIQ", "AI finance dashboard", "#dff7ed", "#0f8a6d", "#2d6cdf", "dashboard"],
  ["lexiq", "LexiQ", "Legal document AI", "#edf5ff", "#315f9c", "#14a38b", "document"],
  ["saveiq", "SaveIQ", "Media intelligence", "#fff0ea", "#c85f38", "#4467b0", "media"],
  ["findyourpeace", "FindYourPeace", "Quran-based guidance", "#eef9ef", "#3b7b4d", "#b68a2e", "book"],
  ["dadima-superfood", "DadiMa", "Superfood commerce", "#fff3df", "#9b5d1f", "#0f8a6d", "commerce"],
  ["syed-sajjad-hussain-portfolio", "Portfolio", "AI engineer system", "#eef2ff", "#5262a6", "#0f8a6d", "portfolio"],
  ["tna-interior", "TNA Interior", "Interior services", "#f3efe8", "#8d6847", "#3b6ea8", "interior"],
  ["home-interior-designer", "Home Interior", "Design catalog", "#f7efe7", "#a15f39", "#537d8f", "interior"],
  ["zia-dental-consultants", "Zia Dental", "Clinic website", "#eaf8fb", "#287f9d", "#63b7a4", "clinic"],
  ["voco-rooftop", "VOCO Rooftop", "Restaurant landing", "#fff1e4", "#bd5d35", "#314d77", "restaurant"],
  ["royal-grain-pakistan", "Royal Grain", "Rice store", "#fff8df", "#b8872d", "#43805b", "commerce"],
  ["gujranwala-rice-house", "Rice House", "Pricing catalog", "#f5f9e8", "#6d8a2d", "#a96b16", "commerce"],
  ["urbanstep-pakistan", "UrbanStep", "Shoes commerce", "#eef2f7", "#3c4d63", "#c05f42", "shoes"],
  ["ah-interiors", "AH Interiors", "Construction services", "#f1eee6", "#75624b", "#3b6ea8", "interior"],
  ["idrees-realtor", "Idrees Realtor", "Real estate advisor", "#edf7f4", "#287a66", "#b8872d", "realestate"],
  ["ayesha-nouman-wedding", "Wedding Invite", "Digital invitation", "#fff0f3", "#b55c72", "#b8872d", "wedding"],
  ["socially-hygge", "Socially Hygge", "Creator portfolio", "#f4eefb", "#7a5aa6", "#d07d43", "social"],
  ["falak-iftikhar-portfolio", "Falak Portfolio", "Developer profile", "#edf3ff", "#3b62a0", "#0f8a6d", "code"],
  ["glowluxe", "GlowLuxe", "Beauty clinic", "#fff1ec", "#b96955", "#9a7bb8", "beauty"],
  ["velvet-beauty", "Velvet Beauty", "Salon booking", "#f9eef5", "#a75882", "#c58b38", "beauty"]
];

function escapeXml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function motif(type, accent, accent2) {
  const commonStroke = `stroke="${accent}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"`;
  const soft = `fill="${accent2}" opacity=".18"`;

  switch (type) {
    case "dashboard":
      return `
        <rect x="142" y="355" width="616" height="260" rx="28" fill="#fff" stroke="${accent}" stroke-opacity=".22"/>
        <path d="M195 535C265 458 326 520 392 448C468 365 540 430 704 382" ${commonStroke}/>
        <rect x="206" y="575" width="78" height="86" rx="14" ${soft}/>
        <rect x="320" y="510" width="78" height="151" rx="14" ${soft}/>
        <rect x="434" y="552" width="78" height="109" rx="14" ${soft}/>
        <rect x="548" y="475" width="78" height="186" rx="14" ${soft}/>`;
    case "document":
      return `
        <rect x="210" y="286" width="360" height="430" rx="26" fill="#fff" stroke="${accent}" stroke-opacity=".2"/>
        <rect x="280" y="230" width="360" height="430" rx="26" fill="#fff" stroke="${accent}" stroke-opacity=".34"/>
        <path d="M340 330H565M340 388H585M340 446H510M340 565H568" ${commonStroke}/>
        <circle cx="338" cy="655" r="30" fill="${accent2}" opacity=".24"/>
        <path d="M325 655L338 668L363 638" ${commonStroke}/>`;
    case "media":
      return `
        <rect x="155" y="300" width="590" height="330" rx="34" fill="#fff" stroke="${accent}" stroke-opacity=".25"/>
        <path d="M405 400L535 465L405 530Z" fill="${accent}"/>
        <rect x="190" y="662" width="520" height="18" rx="9" fill="${accent2}" opacity=".18"/>
        <rect x="190" y="662" width="285" height="18" rx="9" fill="${accent}"/>
        <rect x="168" y="230" width="162" height="42" rx="21" fill="${accent2}" opacity=".18"/>`;
    case "book":
      return `
        <path d="M172 355C270 310 355 320 450 382V690C355 635 270 622 172 660Z" fill="#fff" stroke="${accent}" stroke-opacity=".32" stroke-width="8"/>
        <path d="M450 382C545 320 630 310 728 355V660C630 622 545 635 450 690Z" fill="#fff" stroke="${accent}" stroke-opacity=".32" stroke-width="8"/>
        <path d="M270 438H385M270 500H385M515 438H632M515 500H632" ${commonStroke}/>
        <circle cx="450" cy="316" r="54" fill="${accent2}" opacity=".2"/>`;
    case "commerce":
      return `
        <rect x="180" y="304" width="176" height="310" rx="34" fill="#fff" stroke="${accent}" stroke-opacity=".28"/>
        <rect x="390" y="260" width="176" height="354" rx="34" fill="#fff" stroke="${accent}" stroke-opacity=".28"/>
        <rect x="600" y="334" width="116" height="280" rx="30" fill="#fff" stroke="${accent}" stroke-opacity=".28"/>
        <path d="M225 430H314M435 420H522M628 450H688" ${commonStroke}/>
        <circle cx="478" cy="340" r="36" fill="${accent2}" opacity=".22"/>`;
    case "portfolio":
      return `
        <rect x="160" y="270" width="580" height="380" rx="32" fill="#fff" stroke="${accent}" stroke-opacity=".25"/>
        <rect x="205" y="330" width="170" height="120" rx="20" fill="${accent}" opacity=".16"/>
        <rect x="405" y="330" width="290" height="30" rx="15" fill="${accent2}" opacity=".25"/>
        <rect x="405" y="385" width="235" height="24" rx="12" fill="${accent}" opacity=".18"/>
        <rect x="205" y="490" width="490" height="100" rx="20" fill="${accent2}" opacity=".14"/>`;
    case "interior":
      return `
        <rect x="150" y="260" width="600" height="390" rx="34" fill="#fff" stroke="${accent}" stroke-opacity=".24"/>
        <path d="M205 610H695M250 610V430H520V610M520 495H650V610" ${commonStroke}/>
        <rect x="280" y="460" width="198" height="120" rx="18" fill="${accent2}" opacity=".16"/>
        <circle cx="610" cy="390" r="58" fill="${accent2}" opacity=".18"/>`;
    case "clinic":
      return `
        <rect x="170" y="290" width="560" height="330" rx="34" fill="#fff" stroke="${accent}" stroke-opacity=".25"/>
        <path d="M450 365V548M358 456H542" ${commonStroke}/>
        <rect x="240" y="655" width="420" height="28" rx="14" fill="${accent2}" opacity=".2"/>
        <circle cx="450" cy="456" r="142" fill="${accent2}" opacity=".1"/>`;
    case "restaurant":
      return `
        <rect x="154" y="312" width="592" height="300" rx="34" fill="#fff" stroke="${accent}" stroke-opacity=".24"/>
        <path d="M245 562H660M310 562C310 480 380 426 450 426C520 426 590 480 590 562" ${commonStroke}/>
        <path d="M210 405H300M600 405H690M450 338V395" ${commonStroke}/>
        <circle cx="450" cy="330" r="70" fill="${accent2}" opacity=".18"/>`;
    case "shoes":
      return `
        <rect x="160" y="300" width="580" height="330" rx="34" fill="#fff" stroke="${accent}" stroke-opacity=".22"/>
        <path d="M250 520C340 560 480 580 635 550C682 540 690 490 650 470C585 438 545 405 500 368C430 432 340 468 250 480Z" fill="${accent2}" opacity=".18" stroke="${accent}" stroke-width="10" stroke-linejoin="round"/>
        <path d="M360 470L410 500M420 445L470 485M482 422L532 465" ${commonStroke}/>`;
    case "realestate":
      return `
        <rect x="176" y="300" width="550" height="340" rx="34" fill="#fff" stroke="${accent}" stroke-opacity=".24"/>
        <path d="M250 565V430L450 320L650 430V565" ${commonStroke}/>
        <rect x="390" y="470" width="120" height="95" rx="18" fill="${accent2}" opacity=".18"/>
        <path d="M300 565H600" ${commonStroke}/>`;
    case "wedding":
      return `
        <rect x="210" y="290" width="480" height="350" rx="34" fill="#fff" stroke="${accent}" stroke-opacity=".24"/>
        <path d="M240 330L450 500L660 330M240 600L395 470M660 600L505 470" ${commonStroke}/>
        <circle cx="294" cy="275" r="48" fill="${accent2}" opacity=".18"/>
        <circle cx="606" cy="665" r="42" fill="${accent}" opacity=".14"/>`;
    case "social":
      return `
        <rect x="310" y="240" width="280" height="470" rx="44" fill="#fff" stroke="${accent}" stroke-opacity=".28"/>
        <rect x="350" y="310" width="200" height="130" rx="24" fill="${accent2}" opacity=".18"/>
        <circle cx="450" cy="515" r="58" fill="${accent}" opacity=".18"/>
        <path d="M378 620H522M378 655H480" ${commonStroke}/>`;
    case "code":
      return `
        <rect x="150" y="290" width="600" height="320" rx="32" fill="#fff" stroke="${accent}" stroke-opacity=".24"/>
        <path d="M300 405L235 470L300 535M600 405L665 470L600 535M410 552L500 388" ${commonStroke}/>
        <rect x="205" y="240" width="260" height="40" rx="20" fill="${accent2}" opacity=".16"/>`;
    case "beauty":
      return `
        <rect x="200" y="305" width="500" height="300" rx="150" fill="#fff" stroke="${accent}" stroke-opacity=".24"/>
        <circle cx="365" cy="455" r="78" fill="${accent2}" opacity=".18"/>
        <circle cx="535" cy="455" r="78" fill="${accent}" opacity=".16"/>
        <path d="M310 620C400 690 510 690 600 620" ${commonStroke}/>`;
    default:
      return `<rect x="180" y="300" width="540" height="330" rx="34" fill="#fff" stroke="${accent}" stroke-opacity=".25"/>`;
  }
}

function svg([, title, subtitle, bg, accent, accent2, type]) {
  return `<svg width="900" height="900" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="900" height="900" fill="${bg}"/>
  <path d="M0 760C170 665 318 825 486 732C656 638 710 542 900 592V900H0V760Z" fill="${accent2}" opacity=".12"/>
  <path d="M0 148C124 86 205 137 315 92C433 44 510 48 630 88C752 128 803 88 900 42V0H0V148Z" fill="#fff" opacity=".55"/>
  <rect x="60" y="58" width="780" height="784" rx="52" fill="#ffffff" opacity=".72" stroke="#ffffff" stroke-width="2"/>
  <circle cx="748" cy="154" r="72" fill="${accent}" opacity=".12"/>
  <circle cx="176" cy="704" r="92" fill="${accent2}" opacity=".12"/>
  ${motif(type, accent, accent2)}
  <rect x="112" y="106" width="230" height="54" rx="27" fill="#fff" stroke="${accent}" stroke-opacity=".22"/>
  <circle cx="145" cy="133" r="9" fill="${accent}"/>
  <circle cx="174" cy="133" r="9" fill="${accent2}"/>
  <circle cx="203" cy="133" r="9" fill="${accent}" opacity=".35"/>
  <text x="112" y="752" fill="#11131a" font-family="Inter, Arial, sans-serif" font-size="50" font-weight="800">${escapeXml(title)}</text>
  <text x="114" y="804" fill="#626775" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="650">${escapeXml(subtitle)}</text>
</svg>`;
}

mkdirSync(outputDir, { recursive: true });

for (const project of projects) {
  writeFileSync(join(outputDir, `${project[0]}.svg`), svg(project));
}

console.log(`Generated ${projects.length} project thumbnails in ${outputDir}`);
