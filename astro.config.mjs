import { defineConfig } from 'astro/config';

// The repository is a project site under the camlin-tan GitHub account.
// Override SITE_URL when using a custom domain or another host.
const site = new URL(process.env.SITE_URL || 'https://camlin-tan.github.io/camlin.github.io/');

export default defineConfig({
  site: site.origin,
  base: site.pathname,
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
