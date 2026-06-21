import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://fadhil-gtg.github.io',
  base: '/Kucek.Shoes',
  integrations: [tailwind()],
  output: 'static',
  devToolbar: {
    enabled: false,
  },
});
