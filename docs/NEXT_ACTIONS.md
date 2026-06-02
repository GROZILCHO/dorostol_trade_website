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

## Phase 1.1 Refinement Backlog
- Management confirmed the public project name, legal company spelling, public location wording, and existing contacts. Review the recorded decision in `docs/DECISIONS_LOG.md`.
- Map review and replacement completed: the active public map uses the optimized `dorostol-map-ialomita.webp` asset and the confirmed `Ialomita Romania` wording.
- Request real site photos, an approved plant render, a process diagram, detailed map or layout material, and a public PDF or project brief if management wants a Phase 1.2 proof upgrade.
- Continue without new visual sections, timeline, process diagram, gallery, or download CTA until assets and claims are approved.
- Decide whether Phase 1.1 refinements are needed.
- Only then prepare a scoped Codex implementation task.

## Phase 1.2 Credibility Refinement
- Completed: added a conservative project-status mini-block.
- Completed: added four concise investment highlights using approved facts only.
- Completed: strengthened partnership and investor inquiry guidance.
- Completed: added a direct `mailto:` project-brief request CTA without a file download, form, backend, or API.
- Pending: final Romanian and Bulgarian translation approval.
- Pending: Search Console setup.
- Pending: GA4 decision and privacy / legal minimum.
- Pending: real cPanel deployment QA.
- Pending: real site photos, approved renders, process diagrams, and a public PDF if management wants a future proof upgrade.

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

Do not implement additional Phase 1.1 frontend refinements until the remaining management answers and assets are received, reviewed by the PM, and converted into a scoped task with approved claims and explicit source-file changes.
