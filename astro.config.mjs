import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://codefounders.nl',
  // Same scoping approach as the original Astro 0.x site (class-based),
  // so styles keep the same specificity.
  scopedStyleStrategy: 'class',
  build: {
    // Keep stylesheets as separate files, like the original build.
    inlineStylesheets: 'never',
  },
});
