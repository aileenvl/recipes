import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    maxDuration: 8,
    devImageService: 'sharp',
    // Add specific route handling
    routes: [
      {
        src: '/recipe/:id',
        dest: '/recipe/[id]'
      }
    ]
  }),
  integrations: [react(), tailwind()]
});