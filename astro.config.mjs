import { readFile, writeFile } from "node:fs/promises";
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Security headers for every response. The Vercel adapter generates the
// deployment's routing in .vercel/output/config.json, so they're added there.
// The adapter's hooks run before other integrations', so the file exists by
// the time this one runs.
const securityHeaders = {
  name: "security-headers",
  hooks: {
    "astro:build:done": async () => {
      const file = new URL("./.vercel/output/config.json", import.meta.url);
      const config = JSON.parse(await readFile(file, "utf-8"));
      config.routes.unshift({
        src: "^/.*$",
        headers: {
          "x-content-type-options": "nosniff",
          "referrer-policy": "strict-origin-when-cross-origin",
          "permissions-policy":
            "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
          "x-frame-options": "DENY",
          "content-security-policy": "frame-ancestors 'none'",
        },
        continue: true,
      });
      await writeFile(file, JSON.stringify(config, null, "\t"));
    },
  },
};

// https://astro.build/config
export default defineConfig({
  site: "https://fueher.com",
  integrations: [
    // The playground is a hidden page, so it stays out of the sitemap.
    sitemap({ filter: (page) => !page.includes("/playground") }),
    securityHeaders,
  ],
  // Fetch a page once its link scrolls into view, so navigation between the
  // few pages here feels instant. Hover-based prefetch never fires on phones.
  // Astro skips prefetching with Data Saver on or on 2G connections.
  prefetch: { prefetchAll: true, defaultStrategy: "viewport" },
  // Static output: every page is prerendered and served from Vercel's CDN
  // instead of hitting a serverless function on each request. Analytics is
  // injected client-side in BaseLayout, so the adapter option isn't needed
  // (having both double-loads the script).
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
});
