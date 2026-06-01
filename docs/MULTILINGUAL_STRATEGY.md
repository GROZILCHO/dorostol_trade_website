# Multilingual Strategy

## Status
This document defines the pre-launch multilingual strategy for the Dorostol Trade Phase 1 website. It is a planning reference, not an implementation task.

## Languages
Required Phase 1 launch languages:
- English (`EN`);
- Romanian (`RO`);
- Bulgarian (`BG`).

## Recommended URL Strategy
Use static language paths:

| Path | Language |
| --- | --- |
| `/` | English default |
| `/ro/` | Romanian |
| `/bg/` | Bulgarian |

An alternative structure was considered:
- `/en/`;
- `/ro/`;
- `/bg/`.

The default-root English approach is preferred because the current one-page app already works at `/`. It minimizes change risk and preserves the existing English URL while adding explicit Romanian and Bulgarian paths.

## Language Detection
Do not add automatic browser-language redirects in Phase 1.

Reasons:
- avoid SEO ambiguity;
- avoid redirect loops;
- keep static deployment simple;
- allow users and crawlers to access each language directly.

## Language Switcher
The header and mobile menu should include a functional language switcher:
- `EN`;
- `RO`;
- `BG`.

Rules:
- Each label must navigate to the matching language path.
- Preserve the current anchor target where practical.
- The switcher must be functional, not decorative.
- Do not use flags as the primary language labels.

## Content Architecture
Recommended implementation:
- create a central content module such as `src/content/siteContent.js`;
- store section copy, navigation labels, CTA labels, SEO metadata, footer labels, contact labels, and image labels per language;
- make `Home`, `Navbar`, and `Footer` consume content from this module;
- avoid duplicating full page components per language;
- avoid adding a heavy i18n dependency for Phase 1.

The content model should preserve the existing one-page structure and approved plant-project positioning.

## Routing / Path Handling
For the static Vite frontend:
- parse `window.location.pathname`;
- if the path starts with `/ro`, use Romanian content;
- if the path starts with `/bg`, use Bulgarian content;
- otherwise use English content;
- keep anchor navigation compatible with each language path.

The hosting setup must serve the same built app for `/`, `/ro/`, and `/bg/`.

## Translation Rules
- Translate public copy conservatively.
- Keep the company name, location names, contact emails, phone numbers, project budget, capacity targets, and technical figures unchanged.
- Do not invent claims in translations.
- Preserve the meaning of "Year 5 target" in every language.
- Romanian must use professional business and industrial Romanian.
- Bulgarian must use modern standard Bulgarian with a professional B2B tone.
- Avoid over-marketing, wellness language, and unsupported leadership claims.

## SEO / GEO Requirements
Each language requires:
- a localized title;
- a localized meta description;
- a localized Open Graph title and description;
- the correct `html lang` value;
- hreflang entries in the future head and sitemap strategy;
- a canonical URL strategy after the final domain is confirmed.

The future metadata implementation should avoid unverified structured data.

## Sitemap / Robots Impact
Deployment hardening must be revisited after multilingual implementation:
- `sitemap.xml` must include the English, Romanian, and Bulgarian URLs;
- hreflang relationships should be included in the sitemap or head strategy;
- `robots.txt` must point to the final sitemap URL;
- canonical URLs must use the confirmed production domain and correct language paths.

## Implementation Gate
Do not implement the multilingual frontend until:
- the current English source copy is confirmed;
- Romanian and Bulgarian translations are drafted and reviewed;
- the URL strategy is approved;
- the implementation scope is limited to content architecture, UI language switcher, path handling, and metadata handling.

Do not resume deployment hardening until the multilingual implementation is complete and approved.
