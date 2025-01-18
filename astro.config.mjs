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
    routes: [
      { 
        src: '/recipe/(?<id>[^/]+)', 
        dest: '/recipe/[id]'
      }
    ],
    functionPerRoute: true,
    includeFiles: ['**/*'],
    maxDuration: 60
  }),
  integrations: [react(), tailwind()]
});