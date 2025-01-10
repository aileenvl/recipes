import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    analytics: true,
    webAnalytics: {
      enabled: true
    }
  }),
  integrations: [react(), tailwind()]
});