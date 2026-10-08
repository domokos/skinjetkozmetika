# Skinjet Kozmetika

Responsive, static single-page website for Skinjet Kozmetika in Budapest. Built with React, TypeScript, and Vite.

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

Treatment descriptions and the published price list are kept in `src/data/content.ts`. The page is rendered from `src/Site.tsx`; styles live in `src/site.css` and `src/index.css`.

The page uses Google Fonts and Unsplash-hosted photography, so those assets require an internet connection.
