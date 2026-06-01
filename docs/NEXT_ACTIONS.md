# Next Actions

## Required Sequence
1. Review and approve the Romanian and Bulgarian translations in `docs/WEBSITE_COPY_MULTILINGUAL.md`.
2. Confirm public approval of the direct email and phone contact details.
3. Open Graph preview image completed: use `dorostol-trade-website/public/assets/brand/dorostol-og-preview.png`.
4. Image optimization completed: runtime map and product images use WebP variants. Keep the original PNG files as source/reference backups.
5. Runtime logo optimization and lazy loading completed: header and footer use smaller runtime WebP logos; below-fold images load lazily.
6. Complete the privacy / legal minimum for the static Phase 1 launch.
7. Choose analytics and GA / Search Console setup, or explicitly launch without analytics where applicable.
8. Validate Apache/cPanel deployment, HTTPS, `www` redirects, direct `/ro/` and `/bg/` refreshes, and production metadata.

## Additional Inputs Needed
- Approved PDF-based project claims, product names, technical descriptions, and contact details.
- Approved sustainability and market-value claims.
- Target audiences and conversion goals.
- Reviewed Romanian and Bulgarian translations.
- Approved multilingual URL strategy.
- Design-system specification derived from the reference screenshots.
- Runtime image requirements and asset ownership.
- Hosting, deployment, and analytics requirements.
- Phase 1 uses direct `mailto:` and `tel:` links only. A contact form is deferred to Phase 2.
- Whether future forms, CRM, catalog, admin, API, or automation requirements justify a new backend strategy decision.
- Page-level SEO metadata and internal-linking plan.
- Canonical production host: `https://www.dorostol.trade/`.
- Localized SEO and Open Graph metadata.
- GA / Search Console setup decision and production verification.
- Optional after launch-package testing: move oversized original PNG source backups outside `public/` so they are not copied into deployment artifacts.

## Implementation Gate
Phase 1 must remain a static multilingual site with direct `mailto:` and `tel:` contact links only. Do not add a contact form, backend, API wiring, or form service until a documented Phase 2 decision approves the scope. Complete the remaining pre-launch review and production-host validation before public launch.
