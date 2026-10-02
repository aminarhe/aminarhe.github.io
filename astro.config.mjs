// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aminarhe.me',
  output: 'static',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
});
