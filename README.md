# Event Radar Web

An all in one event management system made easy for the modern era to manage events, attendees, and more.

This is the user facing ReactJS frontend application, API backend is available at
[Event Radar API](https://github.com/abhiyaantrix/event-radar-api)

Both can be independently deployed and scaled separately.

## Why

Started this project with two purposes

1. Brush up on my ReactJS skills
2. Portfolio project

## Development

### Prerequisites

- NodeJS 22+
- npm 10+

Use docker setup for local development to avoid dealing with dependencies.

### Local development with docker

```bash
docker-compose up --watch

# Or if you want to rebuild everything
docker compose up --watch --remove-orphans --build --force-recreate
```

ReactJS application will be available on <http://localhost:3001>

### Local development without docker

These steps are only for reference, prefer docker based setup for local development.

Install NodeJS 22+ using [nvm](https://github.com/nvm-sh/nvm) and then install npm dependencies

```bash
npm install
```

Start the development server

```bash
npm start
```

ReactJS application will be available on <http://localhost:3001>

### Testing

Run unit tests

```bash
npm test
```

Run integration tests powered by [Playwright](https://playwright.dev/)

```bash
npm run test:e2e:headless

# or to run with UI
npm run test:e2e:open
```

### Code quality and best practices

```bash
# Single point to auto fix all linting issues
npm run lint:fix
```

### Commit messages

We use [commitlint](https://commitlint.js.org) to enforce commit message best practices.

```bash
# Check commit message format
npm run lint:commit

# Check commit message format from specific commit
npm run lint:commit:head
```

## User guide

TODO: Link to user guide

## Concepts

Check [Concepts Overview](https://github.com/abhiyaantrix/event-radar-api/blob/main/docs/concepts/entities.md) for more details.
