import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'hybrid',
  trailingSlash: 'never',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    trailingSlash: false,
    routes: [
      { 
        src: '/recipe/(?<id>[^/]+)', 
        dest: '/recipe/[id]',
        has: [
          {
            type: 'query'
          }
        ]
      }
    ],
    functionPerRoute: true
  }),
  integrations: [react(), tailwind()]
});