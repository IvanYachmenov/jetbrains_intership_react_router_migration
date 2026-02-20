# Kotlin homepage migration to React Router 7

JetBrains internship project: migration of the Kotlin site to React Router 7 (Framework Mode) with SSR. React Router 7, TypeScript, Vite, Tailwind CSS, SASS, `@jetbrains/kotlin-web-site-ui` and RescUI components.

## How to run

**Docker (recommended):**

```bash
docker compose up
```

Open `http://localhost:3000`. First run builds the image (may take a few minutes).

**Local (without Docker):**

```bash
cd jetbrains_intership_react_router_migration
npm install
npm run dev
```

Open `http://localhost:5173`. If `npm install` fails with peer dependency errors, use `npm install --legacy-peer-deps`.

## Features

- Server-side rendering
- Hot Module Replacement (HMR)
- TypeScript, Tailwind CSS v4, SASS

## Description (more detailed)

This project is a migration of the Kotlin homepage to **React Router 7** in Framework Mode. The app uses file-based routing under `app/routes/`, a root layout with Header and Footer from `@jetbrains/kotlin-web-site-ui`, and page content built with RescUI and custom components. Styles are handled by Tailwind CSS v4 and SASS; the build is Vite-based. Header and footer are loaded on the client to avoid SSR issues with the shared UI package.

[React Router docs](https://reactrouter.com/)

