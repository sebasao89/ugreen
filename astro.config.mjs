import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  publicPath: "/public",
  site: 'https://sebasao89.github.io',
  base: '/ugreen',
  integrations: [tailwind()]
});