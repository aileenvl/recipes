import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    edge: false,
    // Include specific error logging
    functionPerRoute: true,
    includeFiles: ['**/*.{js,json}'],
    // Handle 404s explicitly
    routes: [
      {
        src: '/recipe/:path*',
        status: 404,
        dest: '/404'
      }
    ]
  }),
  integrations: [react(), tailwind()]
});