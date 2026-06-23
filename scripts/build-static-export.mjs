import { spawnSync } from "node:child_process";
import path from "node:path";

const nextBin = path.join(process.cwd(), "node_modules", "next", "dist", "bin", "next");

const result = spawnSync(process.execPath, [nextBin, "build"], {
  cwd: process.cwd(),
  env: {
    ...process.env,
    NEXT_OUTPUT_EXPORT: "1"
  },
  stdio: "inherit"
});

process.exit(result.status ?? 1);
