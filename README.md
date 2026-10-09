# Skinjet Kozmetika

Responsive static website with separate client-side pages for Skinjet Kozmetika in Budapest. Built with React, TypeScript, and Vite.

## Requirements

- Node.js 22.12 or newer
- npm

## Development

```sh
npm install
npm run dev
```

## Checks and production build

```sh
npm run lint
npm run build
npm run preview
```

Treatment descriptions and the published price list are kept in `src/data/content.ts`. Shared navigation and routing live in `src/SiteRouter.tsx`, with page components under `src/pages/`; styles live in `src/site.css` and `src/index.css`.

Internal Rocky Linux deployment is documented in [deploy/README.md](deploy/README.md).

## Current Deployment

The current deployment was built on `domaacer`, the local Linux workstation
running VS Code, in `/home/doma/git/skinjetkozmetika`. The build commands were
`npm ci`, `npm run lint`, and `npm run build`.

The generated `dist/` files were copied over SSH to `ares.szilva13.com`, under
`/srv/media/www/skinjetkozmetika/releases/`. Ares only serves those static files
through Nginx; it does not build the site or run a Node.js application server.
The internal test URL is <http://ares.szilva13.com:9000/>.

No separate build server or automated GitLab/GitHub runner is configured.
Pushing a commit does not deploy it automatically; subsequent releases must be
built and published manually following the deployment instructions.

The page uses Google Fonts and Unsplash-hosted photography, so those assets require an internet connection.
