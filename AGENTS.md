# chrillep.github.io AI Context
## Tech Stack
- Node 24 LTS | pnpm 11 | Turbo 2
- Next.js 16 | React 19 | TS 6.0
- Tailwind v4 (Prefix: ui-)
- Storybook 10 (ESM Only)

## Custom Build Rules
- packages/ui-tailwind: Build CSS via @tailwindcss/cli BEFORE tsup.
- All tsconfigs use "ignoreDeprecations": "6.0".
