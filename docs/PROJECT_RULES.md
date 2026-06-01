# Project Rules

## Source Control
- GitHub is the source of truth.
- Start each task by checking `git status --short`.
- Do not commit generated, dependency, cache, runtime, local database, editor, or archive files.
- Keep commits limited to the approved task scope.

## Documentation Bootstrap
- Do not edit implementation files during documentation bootstrap.
- Record unknown information as unknown. Do not invent facts to fill gaps.

## Architecture
- Treat the website as a frontend-focused React/Vite prototype.
- Do not treat the Flask backend as approved production architecture.
- Backend changes require explicit approval.
- Do not invent architecture, integrations, or deployment behavior.

## Content And Routes
- Do not invent business claims, final routes, SEO metadata, contact details, translations, or legal text.
- Existing prototype routes and copy are observations, not approvals.

## Design References
- Files under `docs/design-reference/` are source references only.
- Do not use reference screenshots as runtime assets unless a later task explicitly approves that use.

## Protected Areas
Do not change application source, backend source, package files, build configuration, generated files, assets, or deployment behavior unless a later task explicitly authorizes those changes.
