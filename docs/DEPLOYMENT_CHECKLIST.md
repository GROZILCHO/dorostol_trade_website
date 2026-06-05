# Deployment Checklist

## Status
- Google Search Console profile is active for the Dorostol Trade site.
- Site is live on SuperHosting.bg / cPanel at `https://www.dorostol.trade/`.
- Live Lighthouse baseline on the deployed domain: Performance `100`, Accessibility `95`, Best Practices `100`, SEO `100`.
- Live `robots.txt` is publicly accessible and references `https://www.dorostol.trade/sitemap.xml`.
- Live `sitemap.xml` is publicly accessible and includes `https://www.dorostol.trade/`, `https://www.dorostol.trade/ro/`, and `https://www.dorostol.trade/bg/`.
- Google Search Console sitemap submission succeeded. GSC discovered `3` pages and `0` videos. Last read: `05/06/2026`.
- GA4 is not yet confirmed and remains pending until a separate analytics and privacy decision is made.
- Phase 1 remains a static Apache/cPanel deployment with no backend and no contact form.

## SuperHosting.bg / cPanel Upload
- Completed: run `npm.cmd run build` from `dorostol-trade-website/`.
- Completed: upload the contents of `dorostol-trade-website/dist/` to the production document root.
- Completed: hidden `.htaccess` fallback behavior verified through direct `/ro/` and `/bg/` refresh tests.
- Confirmed rule for future uploads: do not upload the repository root.
- Confirmed rule for future uploads: do not upload `node_modules/`.
- Confirmed rule for future uploads: do not upload `dorostol-trade-backend/`.
- Confirmed rule for future uploads: do not upload the `dist/` parent folder itself.

## Production URL Tests
- Completed: test `https://www.dorostol.trade/`.
- Completed: test `https://www.dorostol.trade/ro/`.
- Completed: test `https://www.dorostol.trade/bg/`.
- Completed: refresh directly on `/ro/`.
- Completed: refresh directly on `/bg/`.
- Completed: test `https://dorostol.trade/` redirects to `https://www.dorostol.trade/`.
- Completed: test `http://dorostol.trade/` redirects to `https://www.dorostol.trade/`.
- Completed: test `http://www.dorostol.trade/` redirects to `https://www.dorostol.trade/`.

## Indexing Files
- Completed: open `https://www.dorostol.trade/robots.txt`.
- Completed: open `https://www.dorostol.trade/sitemap.xml`.
- Completed: submit `https://www.dorostol.trade/sitemap.xml` in Google Search Console.
- Completed: Google Search Console reports the sitemap processed successfully.
- Completed: Google Search Console discovered `3` pages.
- Completed: Google Search Console discovered `0` videos.
- Completed: Google Search Console last read date recorded as `05/06/2026`.

## Functional Checks
- Completed: test contact email link.
- Completed: test phone links.
- Completed: test language switcher.
- Completed: test mobile menu.
- Completed locally: add static Open Graph and Twitter fallback metadata to `dorostol-trade-website/index.html`.
- Pending after redeploy: test Facebook preview.
- Pending after redeploy: test WhatsApp preview.
- Pending after redeploy: test LinkedIn preview.

## Post-Upload Technical Checks
- Optional pending: check compression headers.
- Optional pending: check cache headers.
- Optional pending: check server response time.
- Completed: run live Lighthouse after upload.

## Analytics Note
GA4 can be added later with a separate implementation task and privacy/legal decision. Do not add analytics tracking during deployment unless that decision is documented first.
