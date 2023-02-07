import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'http://127.0.0.1:3000/',
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
  output: "static",
  adapter: vercel()
});