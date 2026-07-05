# Agent instructions for `chrillep.github.io`

## Build, test, and lint commands

This repo is a **pnpm + Turborepo monorepo**. Use the root scripts for cross-workspace work:

| Task | Command |
| --- | --- |
| Install dependencies | `pnpm install` |
| Build all workspaces | `pnpm build` |
| Run all configured tests | `pnpm test` |
| Lint all workspaces that expose a lint script | `pnpm lint` |
| Run all dev servers through Turbo | `pnpm dev` |

Validated on the current branch:

- `pnpm install` works with **Node 24+** and **pnpm 11**, but may print non-fatal bin-link warnings from transitive dependencies.
- `pnpm --filter ui build` works.
- `pnpm --filter ui test -- --runInBand --runTestsByPath src/__tests__/index.test.tsx` works.
- `pnpm --filter ui-tailwind build` works.
- `pnpm lint` is currently **not a reliable gate**; the repo is using a root `eslint.config.js`, but `eslint-plugin-react@7.37.5` still crashes under ESLint 10 flat config with `contextOrFilename.getFilename is not a function`.

Use workspace filters when you only need one app or package:

| Task | Command |
| --- | --- |
| Build one workspace | `pnpm --filter <workspace> build` |
| Lint one workspace | `pnpm --filter <workspace> lint` |
| Start one workspace in dev mode | `pnpm --filter <workspace> dev` |
| Run Storybook locally | `pnpm --filter workshop storybook` |
| Build Storybook | `pnpm --filter workshop build-storybook` |
| Run Prisma client generation | `pnpm --filter database db:generate` |
| Push Prisma schema | `pnpm --filter database db:push` |

Current test coverage is minimal: the only checked-in test file is `packages/ui/src/__tests__/index.test.tsx`.

| Task | Command |
| --- | --- |
| Run the `ui` package tests | `cd packages/ui && pnpm test` |
| Run a single test file | `cd packages/ui && pnpm test -- --runInBand --runTestsByPath src/__tests__/index.test.tsx` |

Use **Node 24+** and **pnpm 11** to match the root `package.json`.

`pnpm-workspace.yaml` contains the pnpm build-script approvals. If `pnpm install` starts failing with `ERR_PNPM_IGNORED_BUILDS`, check that the dependency is explicitly allowed there before trying ad hoc workarounds.

## High-level architecture

This repository is organized as a set of **independent frontend apps** plus a few **shared workspace packages**:

- `apps/docs` and `apps/web` are simple **Next.js pages-router** apps that consume the shared `ui` package.
- `apps/web-tailwind` is a **Next.js pages-router** app that consumes `ui-tailwind`.
- `apps/mui` is a separate **Next.js + MUI** app under `src/pages/`; it wraps pages with Emotion/MUI providers in `src/pages/_app.tsx` and includes its own API route in `src/pages/api/me.ts`.
- `apps/blog` is a **Remix** app that also consumes `ui`.
- `apps/workshop` is a **Storybook + Vite** sandbox for the shared component libraries (`ui` and `ui-tailwind`).

Shared packages provide the reusable building blocks and repo-wide config:

- `packages/ui`: React component library built with `tsup`, tested with Jest.
- `packages/ui-tailwind`: React component library built with `tsup` plus a generated Tailwind CSS bundle.
- `packages/database`: Prisma schema/client workspace; currently just schema + Prisma scripts/tooling.
- `packages/eslint-config-custom`, `packages/tsconfig`, `packages/jest-presets`, `packages/tailwind-config`: internal config packages reused across the monorepo.

Turbo coordinates builds and tests from the root. The root `turbo.json` makes `build` depend on upstream package builds, and `test` depend on upstream builds, so package changes can affect downstream app commands even when the app code itself is untouched.

The most important dependency chains are:

- `apps/docs` and `apps/web` -> `packages/ui`
- `apps/web-tailwind` and `apps/workshop` -> `packages/ui-tailwind`
- Any root `build` or `test` command that reaches an app may first need its upstream package build to succeed because of Turbo's `dependsOn: ["^build"]`

## Key conventions

- Prefer **workspace package imports** (`ui`, `ui-tailwind`, `database`, etc.) over relative cross-package imports.
- Next.js apps extend the shared TypeScript config from `tsconfig/nextjs.json`; shared libraries extend `tsconfig/react-library.json`. Reuse those internal config packages instead of introducing app-local base configs.
- ESLint is centralized through `eslint-config-custom`, but the active ESLint 10 entry point is the root **`eslint.config.js`**. The older `.eslintrc.js` files are still present, but future lint fixes should start from the flat config path instead of adding more legacy config.
- `ui-tailwind` is not self-styling at runtime unless the consumer imports its CSS bundle. When using it in an app or Storybook, import **`ui-tailwind/styles.css`** explicitly.
- Tailwind classes inside `ui-tailwind` are intentionally **prefixed with `ui-`**. Shared Tailwind tokens such as `brandblue`, `brandred`, and the dark-mode selector live in `packages/tailwind-config` and `packages/ui-tailwind/src/styles.css`.
- The `ui-tailwind` build is intentionally two-step: Tailwind CLI writes `dist/index.css`, then `tsup` bundles the components. `tsup.config.ts` keeps `clean: false` so the generated CSS is not deleted.
- Tailwind 4 is wired through `@tailwindcss/postcss`, and the CSS entry files use `@import "tailwindcss"` / `@config ...` syntax rather than legacy `@tailwind base/components/utilities`.
- Storybook theme switching in `apps/workshop` works by setting `data-mode` on the root HTML element in `.storybook/preview.tsx`; that matches the dark-mode selector used by `ui-tailwind` styles.
- The repo mixes several app templates. Avoid “standardizing” folder layout or code style across all apps unless the change is clearly repo-wide; some apps use `pages/`, some use `src/pages/`, and the Remix app uses `app/`.
