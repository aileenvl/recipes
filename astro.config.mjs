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
    functionPerRoute: true,
    routes: [
      {
        src: '/recipe/[id]',
        dest: '/recipe/[id].astro'
      }
    ]
  }),
  integrations: [react(), tailwind()]
});