import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imagesConfig: {
      sizes: [640, 750, 828, 1080, 1200],
      domains: [],
      minimumCacheTTL: 60,
    },
    imageService: true,
    devImageService: 'sharp',
  }),
  integrations: [react(), tailwind()],
  build: {
    format: 'directory'
  }
});