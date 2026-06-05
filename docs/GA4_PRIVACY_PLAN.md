# GA4 Privacy Plan

## Current Status
- Site is live at `https://www.dorostol.trade/`.
- Google Search Console is active and the sitemap is processed.
- GA4 Measurement ID exists: `G-L5LCCC4CXG`.
- GA4 code is not yet implemented unless a later implementation task adds it.
- No contact form exists.
- Contact works through direct `mailto:` and `tel:` links.

## Recommended Initial GA4 Scope
- Track page views for `/`, `/ro/`, and `/bg/`.
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
- Add a short privacy page or privacy section in English, Romanian, and Bulgarian.
- Explain that the site is informational.
- Explain that no contact form is used.
- Explain that email and phone links open the visitor's own email or phone apps.
- Explain that Google Analytics may be used for aggregated traffic analysis.
- Keep wording conservative and avoid legal overclaiming.
- Cookie / consent banner decision remains pending unless PM approves immediate implementation.

## Implementation Gate
No GA4 code should be added until:
- PM confirms whether GA4 should load immediately or after consent.
- PM confirms whether a privacy page is required before or with implementation.
- PM confirms whether basic pageview tracking only is enough for the first implementation.

## First Implementation Recommendation
Use the existing static site architecture and add only the minimal Google tag required for `G-L5LCCC4CXG`, after the implementation gate is cleared. Avoid marketing pixels, heatmaps, tag managers, and extra analytics vendors unless a later documented decision approves them.
