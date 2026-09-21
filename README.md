# Camlin Tan — software engineering portfolio

A fast, accessible, résumé-first portfolio built with Astro, TypeScript, and plain CSS. Static HTML, self-hosted Inter and JetBrains Mono, and a small script for theme preference, mobile navigation, active section tracking, and copying an email address. No client-side framework or external font requests.

## Run locally

Use the latest Node.js 22 LTS release (22.19+ recommended for all transitive dependencies) and npm. The build and browser checks were also verified on the existing Node.js 22.15.1 installation.

```sh
npm ci
npm run dev
```

Open **http://localhost:4321/camlin.github.io/**.

```sh
npm run build     # Type-check and generate dist/
npm run preview   # Serve the production build locally
npm test          # Desktop and mobile browser checks
```

Tests use installed Microsoft Edge locally and Playwright Chromium in CI. On a machine without Edge, install Chromium with `npx playwright install chromium` and set `CI=1` when testing. Automated checks cover accessibility in both themes, keyboard controls, mobile navigation, clipboard success/failure, the résumé download, reduced motion, 320–1440px layouts, and use without JavaScript.

## Update content

- `src/data/portfolio.ts` — project descriptions, optional GitHub/demo URLs, experience, skills, and contact details.
- `src/pages/index.astro` — hero, education, about text, and page structure.
- `src/styles/global.css` — design tokens, both themes, component styles, responsive and print layouts.
- `public/camlin-tan-resume.pdf` — the original supplied résumé, served without alteration.
- `public/og-image.svg` and `public/og-image.png` — editable social preview and its raster version.

Project cards render `github` and `demo` links automatically when verified URLs are added to their data. HealthNote's source-code link was verified against [its public README](https://github.com/camlin-tan/tp). The remaining project URLs were not supplied and have not been invented. The GitHub profile link comes from this repository's remote. Project illustrations are conceptual graphics, not application screenshots.

The quant data engine is explicitly **in progress**; its unconfirmed features are described as planned. The downloadable PDF is the original and still contains its original wording about that project. Update that PDF separately when the résumé changes.

## Deploy

The existing remote is `github.com/camlin-tan/camlin.github.io`. Because the repository name differs from the account name, this is a **project Pages site**, with the default URL `https://camlin-tan.github.io/camlin.github.io/`.

The Pages workflow is manual. After pushing the reviewed code, select **Settings → Pages → Source: GitHub Actions**, then run **Actions → Deploy portfolio to GitHub Pages**. Nothing is published by a local build. The separate CI workflow runs build and browser checks on pushes and pull requests.

For a custom domain or a different hosting path, set `SITE_URL` to the full public URL at build time, including a trailing slash. The Astro config derives the asset base path from that URL. For root hosting, for example, `SITE_URL=https://example.com/`. Update the deployment workflow environment to match. Deploy the generated `dist/` directory to any static host.

All résumé content is present in the initial HTML. Native project disclosures work without JavaScript. Animation is limited to short hover transitions and native smooth scrolling, with reduced-motion preferences respected.
