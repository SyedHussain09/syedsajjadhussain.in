import type { NextConfig } from "next";

const isStaticExport = process.env.NEXT_OUTPUT_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: "export" as const, trailingSlash: true } : {}),
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"]
  },
  images: {
    ...(isStaticExport ? { unoptimized: true } : {}),
    remotePatterns: [
      { protocol: "https", hostname: "**.streamlit.app" },
      { protocol: "https", hostname: "**.netlify.app" },
      { protocol: "https", hostname: "**.vercel.app" },
      { protocol: "https", hostname: "tnainterior.com" },
      { protocol: "https", hostname: "homeinteriordesigner.pk" },
      { protocol: "https", hostname: "ziadentalconsultants.me" },
      { protocol: "https", hostname: "syedsajjadhussain.in" }
    ]
  },
  poweredByHeader: false,
  reactStrictMode: true
};

export default nextConfig;
