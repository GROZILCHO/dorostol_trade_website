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
- Plant-project direction documented: extraction and processing of vegetable proteins, protein isolate, and oils from soybean, sunflower, and rapeseed.
- Structure options documented: compact multi-page or structured one-page project site, pending management confirmation.
- Pre-launch multilingual requirement documented: English, Romanian, and Bulgarian are required for the Phase 1 launch.
- SEO / GEO / XEO planning baseline documented.

## Backend Guardrail
Do not modify, extend, deploy, or connect `dorostol-trade-backend/` to frontend features. A future documented PM decision may define a new backend strategy if forms, CRM, catalog, admin, API, or automation requirements justify backend work.

## Current Gate
No implementation task should start until content from the external reference PDF is extracted, reviewed, documented, and explicitly approved.

## Reference PDF Direction
The primary planning direction is the external reference PDF for the Dorostol Trade oil and vegetable-protein plant project. Do not add the PDF to the repository unless a later explicit decision approves it. Use extracted and approved documentation before implementation.

Use `docs/PLANT_PROJECT_CONTENT.md` as the content-planning document once populated. Future assistants and Codex should place reviewed PDF-derived content there rather than committing the external reference PDF.

Use `docs/WEBSITE_CONTENT_MODEL.md` as the implementation-planning reference after approval. It defines the Phase 1 structured one-page website, section order, navigation labels, CTA strategy, entity targets, claim guardrails, and deferred content.

Use `docs/WEBSITE_COPY.md` as the public-copy reference after approval. Implementation must follow its section copy, conservative claim notes, CTA wording, and metadata unless a later documented decision changes them.

Use `docs/VISUAL_DIRECTION.md` as the visual-work reference after approval. The current leaf-style project mark is temporary and must not be treated as the official Dorostol Trade identity. Future visual work must use selected and approved official runtime logo assets and follow the documented brand, image, and phase guardrails.

Use `docs/MULTILINGUAL_STRATEGY.md` as the pre-launch language architecture reference. Deployment hardening is paused until the English, Romanian, and Bulgarian content architecture, language switcher, path handling, localized metadata, build validation, and browser QA are complete and approved.

## Positioning Guardrail
Future assistants and Codex must treat the reference PDF plant project as the primary source of direction. Do not reintroduce engineering-led corporate-site positioning, broad trade, general transport, or generic corporate services unless a later documented management decision explicitly approves them.

## Review Order
1. `docs/PROJECT_BRIEF.md`
2. `docs/PROJECT_RULES.md`
3. `docs/SITE_STRUCTURE.md`
4. `docs/CURRENT_STATUS.md`
5. `docs/NEXT_ACTIONS.md`
6. `docs/PLANT_PROJECT_CONTENT.md`
7. `docs/WEBSITE_CONTENT_MODEL.md`
8. `docs/WEBSITE_COPY.md`
9. `docs/VISUAL_DIRECTION.md`
10. `docs/MULTILINGUAL_STRATEGY.md`
11. `docs/ISSUES_LOG.md`
12. `docs/DECISIONS_LOG.md`

## Next Recommended Task
Draft and review Romanian and Bulgarian translations from the approved English source copy, approve the multilingual URL strategy, and then prepare a strictly scoped multilingual frontend implementation task.
