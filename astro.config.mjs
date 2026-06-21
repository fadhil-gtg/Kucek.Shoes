import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fadhil-gtg.github.io',
  base: '/Kucek.Shoes',
  integrations: [tailwind(), sitemap()],
  output: 'static',
  devToolbar: {
    enabled: false,
  },
});
