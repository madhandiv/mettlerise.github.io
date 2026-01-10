// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://siliconsenthil.github.io',
  base: '/it-firm-website',
  vite: {
    plugins: [tailwindcss()]
  }
});