# Copilot instructions — frontend

Purpose: quick reference for Copilot sessions working on this Vite + React frontend.

## Build, run & lint
- Install: npm install
- Start dev server: npm run dev  # runs `vite`
- Build for production: npm run build  # `vite build`
- Preview built site: npm run preview  # `vite preview`
- Lint whole repo: npm run lint  # runs `eslint .`
- Lint a single file: npx eslint src/App.jsx  (or `npm run lint -- src/App.jsx`)

## Tests
- No test runner is configured in this repo currently.
- If tests are added, typical choices and single-test commands:
  - Vitest: `npx vitest run path/to/file.test.js` or `npx vitest -t "test name"`
  - Jest: `npx jest path/to/file.test.js -t "test name"`

## High-level architecture
- Vite-based React app (entry: `src/main.jsx`) that mounts `<App />` from `src/App.jsx`.
- Styling: `src/index.css` imports Tailwind (`@import "tailwindcss"`). Tailwind is enabled via `@tailwindcss/vite` in `vite.config.js`.
- Build tooling: `vite` with plugins `@vitejs/plugin-react` and `@tailwindcss/vite` (see `vite.config.js`).
- ESLint is declared in devDependencies; rules live with project ESLint config when present.
- Static assets live under `public/`.

## Key conventions and repo-specific notes
- Files use .jsx for React components (project uses React 19 and createRoot API).
- package.json sets `type: "module"` — code uses ESM imports/exports.
- Tailwind is integrated via plugin; if adding components that rely on Tailwind utilities, ensure `index.css` keeps the Tailwind import or add an explicit `tailwind.config.js` when needed.
- Linting: run `npm run lint` before merging changes; use `npx eslint <file>` to target a single file during iterative edits.

## Helpful files to open quickly
- vite.config.js — Vite plugins and build hooks
- package.json — scripts and deps
- src/main.jsx, src/App.jsx, src/index.css
- public/ — static assets (icons, favicon)

## AI assistant / Copilot tips
- For feature changes: run `npm run dev` and test in the browser. Small frontend edits are safe to apply and test locally.
- No repository-specific AI rules detected (CLAUDE.md, .cursorrules, AGENTS.md, etc.).

---

If you want this file adjusted (more detail on ESLint rules, Tailwind config, or test setup) or want Copilot configured to run Playwright/other MCP servers, say which services to add.
