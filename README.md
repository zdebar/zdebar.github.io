# Zdeněk Barth — Portfolio

Minimal static portfolio built with Eleventy, Nunjucks, and Tailwind CSS. Eleventy renders the templates and project data into static files; Tailwind compiles utility classes into a CSS asset. The published site does not need JavaScript.

## Run locally

1. Install Node.js 22 or newer.
2. Run `npm install` the first time.
3. Run `npm start` and open the local address printed in the terminal.
4. Run `npm run build` to generate the production site in `_site`.

## Publish with GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the site when changes are pushed to `master`. In the repository's Settings → Pages, choose **GitHub Actions** as the source.

## Code structure

- `index.njk` contains the page sections.
- `_includes/layouts/base.njk` is the shared HTML page layout.
- `_includes/components/` holds the shared header, footer, and project-card templates.
- `_data/projects.json` contains the project content and technology lists.
- `style.css` contains the Tailwind entry point and the site's color and font definitions.
- Tailwind generates `assets/site.css` during the build; the compiled file is copied into `_site` with the image assets.

Project cards are rendered from the project data, so their markup and styling stay consistent. Add or edit project content in `_data/projects.json`.
