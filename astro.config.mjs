import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    analytics: true,
    webAnalytics: {
      enabled: true,
    },
    functionPerRoute: true,
    includeFiles: ['./dist/**/*'],
    devMode: process.env.NODE_ENV === 'development'
  }),
  integrations: [react(), tailwind()]
});