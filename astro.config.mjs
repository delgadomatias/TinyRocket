import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";
import pagefind from "astro-pagefind";
import { defineConfig } from "astro/config";
// https://astro.build/config
export default defineConfig({
  site: "https://tinyrocket.pages.dev",
  integrations: [preact(), tailwind(), sitemap(), mdx(), pagefind()],
  legacy: {
    astroFlavoredMarkdown: true,
  },
  build: {
    format: "file",
  },
});
