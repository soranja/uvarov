import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [react(), tailwind(), mdx(), sitemap()],
  vite: {
    server: {
      watch: { usePolling: true },
      hmr: {
        protocol: "ws",
        host: "localhost",
      },
    },
  },
});
