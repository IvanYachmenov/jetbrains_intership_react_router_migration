# Kotlin homepage on React Router 7

JetBrains internship project: migration of the Kotlin site to React Router 7 (Framework Mode) with SSR. Stack: React Router 7, TypeScript, Vite, Tailwind CSS v4, SASS, `@jetbrains/kotlin-web-site-ui` and RescUI components.

## How to run

**Docker (recommended):**

```bash
docker compose up
```

Open `http://localhost:3000`. First run builds the image (may take a few minutes).

**Local:**

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

**Production build:**

```bash
npm run build
npm run start
```

## Features

- Server-side rendering
- Hot Module Replacement (HMR)
- TypeScript, Tailwind CSS v4, SASS
- [React Router docs](https://reactrouter.com/)

## Deployment

### Docker

Build and run with Docker Compose:

```bash
docker compose up
```

