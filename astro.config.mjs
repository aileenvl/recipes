import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// Choose adapter based on environment
const adapter = process.env.VERCEL ? vercel() : node({
  mode: 'standalone'
});

export default defineConfig({
  output: 'server',
  adapter,
  integrations: [react(), tailwind()]
});