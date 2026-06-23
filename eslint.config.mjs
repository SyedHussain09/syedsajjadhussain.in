import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextVitals,
  ...nextTypescript,
  {
    ignores: [
      ".next/**",
      ".tmp/**",
      "node_modules/**",
      "public/**",
      "scripts/generated/**"
    ]
  }
];

export default eslintConfig;
