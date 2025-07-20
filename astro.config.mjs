import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [mdx(), sitemap(), tailwind()],
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
