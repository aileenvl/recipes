import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'hybrid',  // Use hybrid mode
  adapter: vercel(), // Keep it simple
  integrations: [react(), tailwind()]
});