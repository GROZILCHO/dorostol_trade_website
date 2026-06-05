# Next Actions

## Required Sequence
1. Review and approve the Romanian and Bulgarian translations in `docs/WEBSITE_COPY_MULTILINGUAL.md`.
2. Confirm public approval of the direct email and phone contact details.
3. Open Graph preview image completed: use `dorostol-trade-website/public/assets/brand/dorostol-og-preview.png`.
4. Image optimization completed: runtime map and product images use WebP variants. Keep the original PNG files as source/reference backups.
5. Runtime logo optimization and lazy loading completed: header and footer use smaller runtime WebP logos; below-fold images load lazily.
6. Complete the privacy / legal minimum for the static Phase 1 launch.
7. Google Search Console profile is active; keep GA4 pending until a separate analytics and privacy decision is made.
8. SuperHosting.bg / cPanel upload and core live QA are completed; keep only explicitly pending post-launch checks open.

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
- Completed: Google Search Console profile is active.
- Completed: initial SuperHosting.bg / cPanel deployment is live at `https://www.dorostol.trade/`.
- Completed: live `robots.txt` is publicly accessible and references `https://www.dorostol.trade/sitemap.xml`.
- Completed: live `sitemap.xml` is publicly accessible and includes `/`, `/ro/`, and `/bg/`.
- Completed: SuperHosting live QA passed for `/`, `/ro/`, `/bg/`, direct `/ro/` and `/bg/` refreshes, redirects, contact links, language switcher, and mobile menu.
- Completed: Google Search Console sitemap submission succeeded. GSC discovered `3` pages and `0` videos.
- Pending: final Romanian and Bulgarian translation approval.
- Pending: GA4 decision and privacy / legal minimum.
- Pending: real site photos, approved renders, process diagrams, and a public PDF if management wants a future proof upgrade.

## Deployment Checklist
- Use `docs/DEPLOYMENT_CHECKLIST.md` for the SuperHosting.bg / cPanel manual upload sequence.
- Completed: upload the contents of `dorostol-trade-website/dist/` to the production document root.
- Completed: site is live at `https://www.dorostol.trade/`.
- Completed: live `robots.txt` and `sitemap.xml` are publicly accessible.
- Completed: hidden `.htaccess` fallback behavior verified through direct `/ro/` and `/bg/` refresh tests.
- Completed: test `https://www.dorostol.trade/ro/` and `https://www.dorostol.trade/bg/`.
- Completed: test direct refresh on `/ro/` and `/bg/`.
- Completed: test `https://dorostol.trade/` redirects to `https://www.dorostol.trade/`.
- Completed: test HTTP to HTTPS redirects from `http://dorostol.trade/` and `http://www.dorostol.trade/`.
- Pending: confirm HTTPS has no certificate warning.
- Completed: submit the live sitemap in Google Search Console.
- Completed: GSC reports sitemap processed successfully, with `3` discovered pages, `0` discovered videos, and last read `05/06/2026`.
- Completed: test contact email and phone links.
- Completed: test language switcher and mobile menu.
- Completed: live Lighthouse baseline observed on `https://www.dorostol.trade/`: Performance `100`, Accessibility `95`, Best Practices `100`, SEO `100`.
- Pending: test social preview after deployment.
- Optional pending: check compression headers, cache headers, and server response time on the live host.

## Performance Validation
- Do not use Lighthouse results from the Vite dev server at `http://localhost:5173/` for launch decisions.
- Production preview at `http://localhost:4173/` achieved Lighthouse scores: Performance `99`, Accessibility `95`, Best Practices `100`, and SEO `100`.
- Live SuperHosting.bg / cPanel deployment at `https://www.dorostol.trade/` achieved Lighthouse scores: Performance `100`, Accessibility `95`, Best Practices `100`, and SEO `100`.
- Optional pending: check hosting compression, cache headers, and server response time if deeper production performance validation is needed.

## Additional Inputs Needed
- Approved PDF-based project claims, product names, technical descriptions, and contact details.
- Approved sustainability and market-value claims.
- Target audiences and conversion goals.
- Reviewed Romanian and Bulgarian translations.
- Approved multilingual URL strategy.
- Design-system specification derived from the reference screenshots.
- Runtime image requirements and asset ownership.
- Hosting, deployment, and analytics requirements. Google Search Console is active; GA4 remains pending.
- Phase 1 uses direct `mailto:` and `tel:` links only. A contact form is deferred to Phase 2.
- Whether future forms, CRM, catalog, admin, API, or automation requirements justify a new backend strategy decision.
- Page-level SEO metadata and internal-linking plan.
- Canonical production host: `https://www.dorostol.trade/`.
- Localized SEO and Open Graph metadata.
- GA4 setup decision and production verification.
- Optional after launch-package testing: move oversized original PNG source backups outside `public/` so they are not copied into deployment artifacts.

## Implementation Gate
Phase 1 must remain a static multilingual site with direct `mailto:` and `tel:` contact links only. Do not add a contact form, backend, API wiring, or form service until a documented Phase 2 decision approves the scope. Complete the remaining pre-launch review and production-host validation before public launch.

Do not implement additional Phase 1.1 frontend refinements until the remaining management answers and assets are received, reviewed by the PM, and converted into a scoped task with approved claims and explicit source-file changes.
