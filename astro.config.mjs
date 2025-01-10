import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [react(), tailwind()],
  vite: {
    define: {
      'process.env.PUBLIC_ORAMA_ENDPOINT': JSON.stringify(process.env.PUBLIC_ORAMA_ENDPOINT),
      'process.env.PUBLIC_ORAMA_API_KEY': JSON.stringify(process.env.PUBLIC_ORAMA_API_KEY)
    }
  }
});