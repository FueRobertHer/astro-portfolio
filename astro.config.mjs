import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://fueher.com",
  integrations: [react()],
  // Static output: every page is prerendered and served from Vercel's CDN
  // instead of hitting a serverless function on each request. Analytics is
  // injected client-side in BaseLayout, so the adapter option isn't needed
  // (having both double-loads the script).
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
});
