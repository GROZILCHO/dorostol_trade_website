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

## Phase 1 Contact Strategy
Launch Phase 1 without a contact form. Keep direct `mailto:` and `tel:` links only. Do not add backend, API, PHP, or third-party form-service wiring. A contact form is deferred to Phase 2 and requires a documented decision covering spam protection, GDPR consent, data storage, and the selected delivery architecture.

## Current Gate
No implementation task should start until content from the external reference PDF is extracted, reviewed, documented, and explicitly approved.

## Reference PDF Direction
The primary planning direction is the external reference PDF for the Dorostol Trade oil and vegetable-protein plant project. Do not add the PDF to the repository unless a later explicit decision approves it. Use extracted and approved documentation before implementation.

Use `docs/PLANT_PROJECT_CONTENT.md` as the content-planning document once populated. Future assistants and Codex should place reviewed PDF-derived content there rather than committing the external reference PDF.

Use `docs/WEBSITE_CONTENT_MODEL.md` as the implementation-planning reference after approval. It defines the Phase 1 structured one-page website, section order, navigation labels, CTA strategy, entity targets, claim guardrails, and deferred content.

Use `docs/WEBSITE_COPY.md` as the public-copy reference after approval. Implementation must follow its section copy, conservative claim notes, CTA wording, and metadata unless a later documented decision changes them.

Use `docs/VISUAL_DIRECTION.md` as the visual-work reference after approval. The current leaf-style project mark is temporary and must not be treated as the official Dorostol Trade identity. Future visual work must use selected and approved official runtime logo assets and follow the documented brand, image, and phase guardrails.

Use `docs/MULTILINGUAL_STRATEGY.md` as the pre-launch language architecture reference. Deployment hardening is paused until the English, Romanian, and Bulgarian content architecture, language switcher, path handling, localized metadata, build validation, and browser QA are complete and approved.

Use `docs/WEBSITE_COPY_MULTILINGUAL.md` as the copy source for the multilingual frontend after approval. It contains the controlled English source, Romanian and Bulgarian translations, navigation labels, CTA labels, footer labels, localized metadata, claim constraints, and verification gate.

Runtime plant-project images use optimized WebP files from `dorostol-trade-website/public/assets/plant-project/`. The original PNG files remain in the same directory as source/reference runtime backups. Keep frontend runtime references on the WebP variants unless a later scoped asset decision changes the delivery strategy.

Runtime header and footer logos use optimized WebP files from `dorostol-trade-website/public/assets/brand/`. The original logo PNG files remain in the same directory as source/reference backups. Below-fold map, product, and footer-logo images use lazy loading with asynchronous decoding. The favicon uses the optimized `dorostol-mark-runtime.png` asset. Moving oversized original PNG backups outside `public/` remains an optional deployment-artifact cleanup after launch-package testing.

The approved Open Graph preview image is `dorostol-trade-website/public/assets/brand/dorostol-og-preview.png`. Use it for social-sharing metadata. It presents the plant project with the official Dorostol identity, conservative project wording, and no operating-plant implication.

`dorostol-trade-website/index.html` contains static fallback Open Graph and Twitter metadata pointing to `https://www.dorostol.trade/assets/brand/dorostol-og-preview.png` so social crawlers can read preview data from the initial HTML response. Runtime localized metadata still exists and may update title, description, canonical, hreflang, and social tags after page load for browser users.

## Phase 1.1 Refinement Backlog
Management confirmed the public project name as `Vegetable Protein and Oil Factory`, the legal company name as `Dorostol Trade SRL`, the public location wording as `Ialomita Romania` without a comma, and the existing public contacts. Potential refinement ideas are documented in `docs/PHASE_1_1_REFINEMENT_BACKLOG.md`, but additional blocks and visual proof upgrades remain blocked pending approved assets and claims.

The active public location map uses `dorostol-trade-website/public/assets/plant-project/dorostol-map-ialomita.webp` and the confirmed `Ialomita Romania` wording. The previous Andrasesti map remains as an inactive reference asset. Do not add real site photos, renders, process diagrams, detailed map or layout material, galleries, or public PDF download CTAs until management provides and approves the relevant assets.

## Phase 1.2 Credibility Refinement
The one-page frontend includes conservative project-status and investment-highlight blocks plus a direct `mailto:` project-brief request CTA. The status wording explicitly treats production and capacity values as Year 5 targets rather than current operational output. The partner area clarifies appropriate inquiry types: partnership discussions, investor communication, supplier cooperation, and industrial or commercial inquiries.

Do not replace the mailto CTA with a file download, contact form, backend, API, or third-party form service unless a later documented decision approves the scope. Keep future real-photo, render, process-diagram, gallery, and public-PDF work blocked until assets and claims are approved.

## Performance Validation
Lighthouse results from the Vite dev server at `http://localhost:5173/` are not used for launch decisions. Production preview at `http://localhost:4173/` achieved Performance `99`, Accessibility `95`, Best Practices `100`, and SEO `100`.

The site is live on SuperHosting.bg / cPanel at `https://www.dorostol.trade/`. Live Lighthouse baseline on the deployed domain achieved Performance `100`, Accessibility `95`, Best Practices `100`, and SEO `100`.

SuperHosting live QA passed for `/`, `/ro/`, `/bg/`, direct refresh on `/ro/` and `/bg/`, non-www to www redirect, HTTP to HTTPS redirects, contact email and phone links, language switcher, and mobile menu.

Canonical redirect audit passed for all tested root and language URL variants. The official canonical and sharing URL is `https://www.dorostol.trade/`. Root variants `http://dorostol.trade/`, `http://www.dorostol.trade/`, and `https://dorostol.trade/` redirect with a single `301` to `https://www.dorostol.trade/`; the canonical URL returns `200`. Language variants canonicalize to `https://www.dorostol.trade/ro/` and `https://www.dorostol.trade/bg/`; direct refresh on both language paths returns `200`.

No `.htaccess` fix is needed for canonical redirects. Bare-domain text such as `dorostol.trade` may not reliably trigger previews in messaging apps if the app does not auto-link it, but all real HTTP/HTTPS URL variants redirect correctly.

Social preview validation passed after deploying the updated static metadata fallback. Meta/Facebook Sharing Debugger detects `og:image`, `og:title`, and `og:description`; the missing `fb:app_id` warning is non-blocking for this Phase 1 static site. WhatsApp preview works when sharing the full canonical URL `https://www.dorostol.trade/`.

Continue remaining post-launch validation for optional LinkedIn preview testing if needed. Compression headers, cache headers, and server response time checks remain optional if deeper production performance validation is needed.

## Deployment Status
Google Search Console profile is active for the Dorostol Trade site. The live `robots.txt` is publicly accessible and references `https://www.dorostol.trade/sitemap.xml`. The live `sitemap.xml` is publicly accessible and includes `https://www.dorostol.trade/`, `https://www.dorostol.trade/ro/`, and `https://www.dorostol.trade/bg/`.

The sitemap was submitted successfully in Google Search Console. GSC reports the sitemap processed successfully, with `3` discovered pages and `0` discovered videos. Last read: `05/06/2026`.

Deployment target is SuperHosting.bg / cPanel static Apache hosting. Initial upload is completed and the site is live. Redirects, multilingual refresh paths, and Meta/Facebook plus WhatsApp social previews work. Use `docs/DEPLOYMENT_CHECKLIST.md` for remaining QA: optional LinkedIn preview testing, plus optional compression headers, cache headers, and server response time checks.

GA4 is not confirmed. Add analytics only through a separate implementation task after the privacy/legal decision is documented.

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
11. `docs/WEBSITE_COPY_MULTILINGUAL.md`
12. `docs/PHASE_1_1_REFINEMENT_BACKLOG.md`
13. `docs/ISSUES_LOG.md`
14. `docs/DECISIONS_LOG.md`
15. `docs/DEPLOYMENT_CHECKLIST.md`

## Next Recommended Task
Complete the remaining post-launch checks in `docs/DEPLOYMENT_CHECKLIST.md`, review and approve the Romanian and Bulgarian translations, and decide GA4 / privacy scope if needed.
