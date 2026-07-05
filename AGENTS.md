# chrillep.github.io AI Context

## Technical Baseline
- **Node:** v24 LTS (Strict)
- **pnpm:** v11.10.0 (Using onlyBuiltDependencies in package.json)
- **Turbo:** v2.10.3 (Using "tasks" schema)
- **TypeScript:** v6.0 (Strict mode + ignoreDeprecations: 6.0)
- **Next.js:** v16.2.10 (Turbopack enabled)
- **Tailwind CSS:** v4.3.2 (CSS-first configuration)
- **Storybook:** v10.4.6 (ESM-only, no legacy plugins)

## Critical Build Rules
1. **packages/ui-tailwind:** 
   - Uses hyphenated prefixes: `ui-bg-slate-800`.
   - Build Pipeline: `tailwindcss -i ./src/styles.css -o ./dist/index.css && tsup`.
   - `tsup` is configured to ignore CSS imports; CSS is built via CLI.
2. **TypeScript:** 
   - All tsconfigs must set `"moduleResolution": "bundler"`.
   - All tsconfigs must set `"ignoreDeprecations": "6.0"`.
3. **Dependencies:** 
   - Always use `workspace:*` for internal links.
   - Run `pnpm approve-builds` after adding packages with post-install scripts.
