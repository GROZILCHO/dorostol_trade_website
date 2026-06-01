# Next Actions

## Required Sequence
1. Review and approve the Romanian and Bulgarian translations in `docs/WEBSITE_COPY_MULTILINGUAL.md`.
2. Review translation accuracy, industrial terminology, and professional tone.
3. Approve the URL strategy documented in `docs/MULTILINGUAL_STRATEGY.md`.
4. Implement the multilingual content module and localized metadata handling.
5. Add the functional `EN / RO / BG` language switcher.
6. Re-run build and browser QA in English, Romanian, and Bulgarian.
7. Resume deployment hardening only after multilingual implementation is reviewed and approved.

## Additional Inputs Needed
- Approved PDF-based project claims, product names, technical descriptions, and contact details.
- Approved sustainability and market-value claims.
- Target audiences and conversion goals.
- Reviewed Romanian and Bulgarian translations.
- Approved multilingual URL strategy.
- Design-system specification derived from the reference screenshots.
- Runtime image requirements and asset ownership.
- Hosting, deployment, analytics, and form-handling requirements.
- Whether future forms, CRM, catalog, admin, API, or automation requirements justify a new backend strategy decision.
- Page-level SEO metadata and internal-linking plan.
- Final canonical domain: apex or `www`.
- Localized SEO and Open Graph metadata.
- Multilingual `robots.txt`, sitemap, canonical, and hreflang strategy after implementation.

## Implementation Gate
Do not start multilingual frontend implementation until `docs/WEBSITE_COPY_MULTILINGUAL.md`, its Romanian and Bulgarian translations, and the URL strategy are reviewed and approved. Keep the first multilingual implementation task limited to content architecture, path handling, UI language switcher, and localized metadata. Do not resume deployment hardening until multilingual implementation and QA are complete.
