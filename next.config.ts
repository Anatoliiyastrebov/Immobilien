import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` writes plain HTML/CSS/JS to `out/`,
  // which Cloudflare Workers serves as static assets (see wrangler.jsonc).
  output: "export",
  turbopack: {
    root: process.cwd(),
  },
  images: {
    // No Next.js image optimizer in a static export — the loader picks
    // one of the pre-sized copies in public/images.
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
};

export default nextConfig;
