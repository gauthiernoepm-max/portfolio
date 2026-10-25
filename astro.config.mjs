import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const REPO = 'portfolio';
const USER = 'gauthiernoepm-max';

export default defineConfig({
  site: `https://${USER}.github.io`,
  base: `/${REPO}`,
  build: { format: 'directory' },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
