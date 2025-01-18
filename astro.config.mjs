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
    edge: false,
    functionPerRoute: true,
    isr: {
      enabled: true,
      expiration: 60
    }
  }),
  integrations: [react(), tailwind()]
});