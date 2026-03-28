# AGENTS.md

## Architecture

- Single-page React application built with Vite and TypeScript, serving as frontend for event management system.
- Backend API is separate (event-radar-api), deployed independently.
- Key files: `src/index.tsx` (entry), `src/app/App.tsx` (main component), `src/app.config.ts` (config with port 3001).
- Uses Tailwind CSS with DaisyUI for styling; styles in `src/styles/tailwind.css`.
- Environment variables loaded via dotenv; config in `src/app.config.ts`.

## Workflows

- Development: Use `docker-compose up --watch` for hot-reload dev server on localhost:3001.
- Build: `npm run build` (tsc + vite build).
- Test: Unit with `npm test` (Vitest), e2e with `npm run test:e2e:headless` (Playwright, baseURL from config).
- Lint: `npm run lint:fix` (ESLint + Prettier on src/, with plugins for React, imports).
- Commit: Enforce conventional commits with commitlint; check with `npm run lint:commit`.

## Conventions

- Path aliases: Use `app/` for `src/app/`, configured via vite-tsconfig-paths.
- Testing: Unit tests in `src/tests/unit/`, e2e in `src/tests/playwright/`, setup in `src/tests/setupTests.ts`.
- Code quality: ESLint with react-hooks, react-refresh; Prettier with tailwind plugin; lint-staged on pre-commit.
- Docker: Entrypoint `docker-entrypoint.sh`, volumes for node_modules.

## Patterns

- Config: Prefer importing individual vars from `src/app.config.ts` over config object.
- Dependencies: Minimal runtime deps (React, dotenv); extensive dev deps for tooling.</content>
  <parameter name="filePath">/Volumes/Data/personal/event-radar-web/AGENTS.md
