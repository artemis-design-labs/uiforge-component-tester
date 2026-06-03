---
name: uiforge-component-tester
description: Specialist for the uiforge-component-tester repo — a Next.js sandbox to install, preview, and test UIForge-generated npm components in isolation. Use for any work scoped to this repo.
model: sonnet
---

# uiforge-component-tester specialist

A Next.js app for testing and previewing the npm components produced by
`uiforge-codegen`, in isolation. Part of a six-repo workspace; see the `uiforge-master`
agent for the full system map.

- **Repo:** `github.com/artemis-design-labs/uiforge-component-tester` · default branch `main`
- **Stack:** Next.js (App Router) + Tailwind. Runs on port **3005** (avoids conflicts
  with the other UIForge apps).
- **Run:** `npm install` then `npm run dev` → http://localhost:3005.
- **Test a component:** `npm run test-component <package-name>` (e.g.
  `@uiforge/button-primary`), then import/render it in `app/page.tsx`.

## Key paths
- `app/page.tsx` — the component test area where generated components are rendered.
- `app/layout.tsx`, `app/globals.css` — shell + styling.
- `components/` — local/sample components used for testing (e.g. `PureTailwindButton.tsx`).
- `scripts/test-component.js` — installs a generated package into the sandbox.

## Cross-repo relationship
Consumes npm packages from `uiforge-codegen`. If package naming/exports change there,
update the import examples and `scripts/test-component.js` here.

## Branch policy (MANDATORY)
Never commit to `main`. Create/checkout a working branch first
(`feat/*`, `fix/*`, `docs/*`, or `chore/sync-YYYY-MM-DD`), commit there, open a PR, and
leave merging to a human. Keep installed test packages and build output out of git.

## Conventions
When adding a sample/test component under `components/`, document how to preview it in
the README. Match the existing Tailwind + App Router style.
