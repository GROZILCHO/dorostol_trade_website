# GA4 Privacy Plan

## Current Status
- Site is live at `https://www.dorostol.trade/`.
- Google Search Console is active and the sitemap is processed.
- GA4 Measurement ID exists: `G-L5LCCC4CXG`.
- GA4 pageview tracking is implemented with Measurement ID `G-L5LCCC4CXG`.
- Privacy routes are implemented for `/privacy`, `/ro/privacy`, and `/bg/privacy`.
- No contact form exists.
- Contact works through direct `mailto:` and `tel:` links.

## Recommended Initial GA4 Scope
- Track page views for `/`, `/ro/`, `/bg/`, `/privacy`, `/ro/privacy`, and `/bg/privacy`.
- Keep Enhanced Measurement limited to basic web interaction where appropriate.
- Do not add Meta Pixel.
- Do not add advertising remarketing.
- Do not add heatmaps.
- Do not add unnecessary third-party scripts.

## Optional Future Events
These are optional future tracking items only and should not be added in the first implementation unless explicitly approved:
- Email link clicks.
- Phone link clicks.
- Request Project Brief CTA clicks.
- Language switcher clicks.

## Privacy Approach
- Short privacy pages are implemented in English, Romanian, and Bulgarian.
- Explain that the site is informational.
- Explain that no contact form is used.
- Explain that email and phone links open the visitor's own email or phone apps.
- Explain that Google Analytics may be used for aggregated traffic analysis.
- Keep wording conservative and avoid legal overclaiming.
- Cookie / consent banner decision remains a future decision if stricter compliance is required.

## Implemented Scope
- GA4 loads directly through the Google tag for `G-L5LCCC4CXG`.
- No Google Tag Manager is used.
- No Meta Pixel is used.
- No remarketing is configured.
- No heatmaps are used.
- No contact form is added.
- No custom click events are tracked in this task.

## Remaining Gate For Future Expansion
Do not add optional event tracking, consent tooling, marketing pixels, heatmaps, tag managers, or extra analytics vendors unless a later documented decision approves the scope.
