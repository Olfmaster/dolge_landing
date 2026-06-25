import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone-Build für den Hostinger-VPS (per PM2 -> `node .next/standalone/server.js`)
  output: "standalone",
};

export default nextConfig;
