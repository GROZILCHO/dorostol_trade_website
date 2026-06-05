# Deployment Checklist

## Status
- Google Search Console profile is active for the Dorostol Trade site.
- GA4 is not yet confirmed and remains pending until a separate analytics and privacy decision is made.
- Phase 1 remains a static Apache/cPanel deployment with no backend and no contact form.

## SuperHosting.bg / cPanel Upload
- Run `npm.cmd run build` from `dorostol-trade-website/`.
- Upload the contents of `dorostol-trade-website/dist/` to the production document root.
- Confirm the hidden `.htaccess` file is uploaded.
- Do not upload the repository root.
- Do not upload `node_modules/`.
- Do not upload `dorostol-trade-backend/`.
- Do not upload the `dist/` parent folder itself.

## Production URL Tests
- Test `https://www.dorostol.trade/`.
- Test `https://www.dorostol.trade/ro/`.
- Test `https://www.dorostol.trade/bg/`.
- Refresh directly on `/ro/` and `/bg/`.
- Test `https://dorostol.trade/` redirects to `https://www.dorostol.trade/`.
- Confirm HTTPS has no certificate warning.

## Indexing Files
- Open `https://www.dorostol.trade/robots.txt`.
- Open `https://www.dorostol.trade/sitemap.xml`.
- Submit `https://www.dorostol.trade/sitemap.xml` in Google Search Console.

## Functional Checks
- Test contact email links.
- Test phone links.
- Test social preview after deployment.

## Post-Upload Technical Checks
- Check compression headers.
- Check cache headers.
- Check server response time.
- Check asset loading.
- Run live Lighthouse / PageSpeed after upload.

## Analytics Note
GA4 can be added later with a separate implementation task and privacy/legal decision. Do not add analytics tracking during deployment unless that decision is documented first.
