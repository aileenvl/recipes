import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/hybrid';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    }
  }),
  integrations: [react(), tailwind()]
});