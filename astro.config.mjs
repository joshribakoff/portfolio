import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://joshribakoff.github.io',
  integrations: [mdx()],
});
