# event-radar-web

React SPA (Vite + TypeScript) — frontend for an event management system. The backend (event-radar-api) is a separate service.

## Key files

- `src/index.tsx` — entry point
- `src/app/App.tsx` — root component
- `src/app.config.ts` — environment config (port, API URL); import individual vars, not the config object

## Commands

```bash
# Development (hot-reload via Docker watch)
docker-compose up --watch # preferred dev mode, serves on localhost:3001

# Without Docker
npm start # vite --host on port 3001

# Build
npm run build # tsc + vite build

# Test
npm test                  # Vitest unit tests (watch mode)
npm run test:e2e:headless # Playwright e2e tests

# Lint / format
npm run lint:fix # ESLint + Prettier (run after edits)

# Commit validation
npm run lint:commit # validate commit message format
```

## Path aliases

- `app/` → `src/app/` (configured via vite-tsconfig-paths + tsconfig baseUrl)

## Project conventions

- **Commits**: Conventional commits enforced by commitlint + Husky pre-commit hook (`feat:`, `fix:`, `chore:`, etc.)
- **Styling**: Tailwind CSS + DaisyUI; styles in `src/styles/tailwind.css`
- **Tests**: Unit tests in `src/tests/unit/`, e2e in `src/tests/playwright/`
- **Env vars**: Loaded via dotenv; define in `.env`, access through `src/app.config.ts`
- **Dependencies**: Keep runtime deps minimal (React + dotenv); tooling goes in devDependencies

## Code quality

ESLint with react-hooks and react-refresh plugins; Prettier with tailwind plugin. lint-staged runs on pre-commit. Always run `npm run lint:fix` before committing.
