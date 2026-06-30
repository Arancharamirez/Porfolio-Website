import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Set site and base for GitHub Pages.
// Change REPO_NAME to your actual GitHub repository name.
// If the repo is at https://github.com/yourusername/arancha-portfolio,
// then base should be '/arancha-portfolio'
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/arancha-portfolio',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
