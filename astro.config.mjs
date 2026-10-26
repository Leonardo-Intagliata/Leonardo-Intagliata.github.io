// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Indirizzo pubblico del sito su GitHub Pages
  site: 'https://leonardo-intagliata.github.io',
  // Nasconde la barra degli strumenti di Astro durante lo sviluppo
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
