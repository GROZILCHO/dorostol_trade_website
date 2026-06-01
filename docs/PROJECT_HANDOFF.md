# Project Handoff

## Current Phase
Documentation bootstrap / pre-implementation.

## Repository Layout
- `dorostol-trade-website/`: React/Vite frontend prototype.
- `dorostol-trade-backend/`: archived Flask/Python legacy/reference code only; not active architecture.
- `docs/design-reference/`: reference screenshots only.
- `docs/`: project workflow and decision records.

## Completed
- Repository hygiene audit completed.
- `.gitignore` repaired and committed as `95ab6e2dc33d0d6bc59048969b4fb413e3e54761`.
- Minimum documentation baseline created.
- Existing Flask/Python backend classified as archived legacy/reference code.
- Industrial B2B positioning and lead-generation purpose documented.
- Initial sitemap documented: Home, About, Solutions, Industries, and Contact.
- Language rollout documented: English, then Romanian, with Bulgarian deferred unless commercially justified.
- SEO / GEO / XEO planning baseline documented.

## Backend Guardrail
Do not modify, extend, deploy, or connect `dorostol-trade-backend/` to frontend features. A future documented PM decision may define a new backend strategy if forms, CRM, catalog, admin, API, or automation requirements justify backend work.

## Current Gate
No implementation task should start until these planning decisions are committed, the remaining planning inputs are reviewed, and the next scope is approved.

## Deferred Sections
Do not implement Projects / Capabilities, Trade & Transport, Partners, or News / Insights until enough real content, assets, and business decisions exist.

## Review Order
1. `docs/PROJECT_BRIEF.md`
2. `docs/PROJECT_RULES.md`
3. `docs/SITE_STRUCTURE.md`
4. `docs/CURRENT_STATUS.md`
5. `docs/NEXT_ACTIONS.md`
6. `docs/ISSUES_LOG.md`
7. `docs/DECISIONS_LOG.md`

## Next Recommended Task
Commit and review the documented planning baseline, then establish the approved content baseline before preparing any implementation task.
