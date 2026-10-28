import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fixed at build time and used for the footer's copyright year.
  env: {
    SITE_BUILD_YEAR: String(new Date().getFullYear()),
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
