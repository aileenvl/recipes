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
    // Add specific handling for the recipe route
    routes: [
      {
        src: '/recipe/:path*',
        dest: '/recipe/[id].astro',
      }
    ],
    // Ensure dynamic routes are handled properly
    isr: {
      // Enable Incremental Static Regeneration
      enabled: true,
      // Cache duration in seconds
      expiration: 60,
    }
  }),
  integrations: [react(), tailwind()]
});