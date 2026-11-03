import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Custom domain on GitHub Pages: no `base` needed.
export default defineConfig({
  site: 'https://blog.dikenyt.my.id',
  integrations: [sitemap()],
});
