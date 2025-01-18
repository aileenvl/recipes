import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server', // Change to server output
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    isr: false // Disable ISR for now
  }),
  integrations: [react(), tailwind()]
});