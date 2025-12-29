# Repository Guidelines

## Project Structure & Module Organization
- Source lives under `miniprogram/` and follows WeChat Mini Program conventions.
- App entry files: `miniprogram/app.ts`, `miniprogram/app.json`, `miniprogram/app.wxss`.
- Pages are grouped by directory under `miniprogram/pages/` (for example, `miniprogram/pages/index/`), with matching `.ts`, `.wxml`, `.wxss`, and `.json` files.
- Reusable UI lives in `miniprogram/components/` (for example, `miniprogram/components/navigation-bar/`).
- Shared helpers are in `miniprogram/utils/` (for example, `miniprogram/utils/util.ts`).
- Tooling/config: `project.config.json`, `project.private.config.json`, `tsconfig.json`, and `typings/` for type roots.

## Build, Test, and Development Commands
- `npm install`: installs dev dependencies such as `miniprogram-api-typings`.
- WeChat DevTools is the primary runner. Open the project with the root at `miniprogram/` and use DevTools for build, preview, and upload.
- TypeScript compilation is handled by the DevTools TypeScript compiler plugin configured in `project.config.json`.

## Coding Style & Naming Conventions
- Indentation: 2 spaces (see `project.config.json` editor settings).
- Use strict TypeScript settings defined in `tsconfig.json`; avoid `any` and unused variables.
- Name page/component directories with lower-case and use matching basenames across `.ts`, `.wxml`, `.wxss`, and `.json` (example: `pages/logs/logs.ts`).

## Testing Guidelines
- No test framework or test directories are present. If you add tests, keep them near the related module (e.g., `miniprogram/utils/`) and document the runner you chose.

## Commit & Pull Request Guidelines
- No Git history is available in this repository, so commit conventions are unknown. Follow your team’s standard if one exists.
- For PRs: include a short description, steps to validate in WeChat DevTools, and screenshots for UI changes.

## Configuration & Security Notes
- `project.private.config.json` stores local DevTools preferences. Avoid placing secrets in source control; use platform-provided secure storage for tokens or keys.
