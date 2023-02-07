import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), sitemap()],
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  },
});