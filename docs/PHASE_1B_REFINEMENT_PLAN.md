# Phase 1B Refinement Plan

## Status
This document records the visual audit of the Phase 1A frontend and proposes the next refinement scope. It is a planning document only. It does not approve source-code changes or runtime assets.

## Audit Basis
The review is based on:
- `docs/VISUAL_DIRECTION.md`;
- the current Phase 1A implementation;
- QA screenshots at `375px`, `768px`, `1024px`, and `1440px`;
- mobile screenshots for the navigation menu, capacity cards, and contact / footer area.

## What Works in Phase 1A
- The official Dorostol Trade phoenix / tower identity has replaced the temporary leaf-style project identity in the header, footer, and favicon.
- Dark blue now acts as the main brand anchor and orange is used as a restrained CTA and accent color.
- Green is no longer the dominant site identity and remains appropriate as a supporting sustainability color.
- The hero has a credible industrial baseline without pretending that project photography already exists.
- The one-page hierarchy is clear: overview, market, location, products, capacity, sustainability, partnership CTA, and contact.
- Capacity cards remain explicit Year 5 targets and do not imply current production.
- The header, mobile menu, anchor navigation, contact links, and footer remain usable and conservative.
- Mobile stacking is readable and no section depends on desktop-only layout behavior.

## Visual Weaknesses
- The site still relies heavily on text, cards, icons, and background color. It is credible but visually abstract.
- The hero's technical grid and focus card are suitable placeholders, but they do not yet communicate the plant project with enough specificity.
- The header logo is readable but visually small relative to the navigation and CTA, especially at desktop widths.
- The desktop hero uses a large amount of empty dark space. This is acceptable in Phase 1A but should be used more intentionally in Phase 1B.
- Several middle sections risk becoming visually repetitive because they use similar card grids without distinct project-specific assets.
- The location section would benefit from a real location visual rather than text-only advantage cards.
- The products section needs product-specific visual cues to distinguish proteins, isolate, and oils.
- The technology section needs a controlled technical visual before it can feel fully investment-grade.
- The sustainability section should remain restrained and evidence-led; it should not drift toward generic eco-marketing.

## Header and Logo Improvements
- Preserve the official horizontal logo asset and its proportions.
- Increase desktop logo presence modestly only if navigation spacing remains stable.
- Confirm whether the slogan remains legible at the selected header size. Do not force the slogan into every context.
- Keep the compact mobile header treatment. The current mobile logo and menu balance is acceptable.
- Continue using the dark horizontal logo variant in the footer.
- Continue using the mark-only asset for favicon and genuinely small contexts.
- Do not crop, stretch, recolor, animate, shadow, or decorate any logo asset.
- Do not add an oversized phoenix / tower mark as decorative filler.

## Hero Visual Strategy
Phase 1B should preserve the current premium dark-blue hero structure and add one controlled visual layer.

Preferred hero options, in order:
1. An approved architectural or industrial plant render clearly classified as a render.
2. An approved actual site photo from Andrasesti with restrained technical overlays.
3. A rights-cleared abstract industrial / agricultural composite that does not imply a completed plant.
4. A layout-only fallback using the current technical grid, refined spacing, and a stronger investment snapshot block.

Hero rules:
- Keep the approved heading, description, CTAs, location, and raw-material facts.
- Maintain strong text contrast.
- Use a dark overlay or contained visual panel when required for readability.
- Do not use a fake futuristic factory image.
- Do not present illustrative imagery as the completed Dorostol Trade plant.

## Section-Level Image Opportunities
| Section | Phase 1B Opportunity | Priority |
| --- | --- | --- |
| Hero | One approved render, site image, or abstract industrial / agricultural composite | High |
| Project Overview | Compact investment snapshot or identity block; optional restrained project-detail visual | Medium |
| Market Opportunity | Rights-cleared soybean, sunflower, or rapeseed detail; optional regional context overlay | Medium |
| Plant Location | Stylized Romania map showing Andrasesti, Bucharest, and Constanta | High |
| Products | Three consistent texture images: plant protein, protein isolate, and vegetable oil | High |
| Capacity & Operations | Keep technical stat cards; optional subtle technical background only | Low |
| Technology & Processing | Approved food-grade processing detail or verified process diagram | Medium |
| Sustainability & Impact | Resource-efficiency or agricultural by-product visual with conservative framing | Medium |
| Investor / Partner CTA | Restrained corporate background or no image | Low |
| Contact | Keep clean and functional; no decorative image required | Low |

## Approved Image Types
Images may be considered for Phase 1B only when they are classified internally and approved for runtime use.

Allowed categories:
- actual site photos from Andrasesti;
- approved architectural or industrial plant renders;
- rights-cleared soybean, sunflower, and rapeseed macro photography;
- rights-cleared vegetable-oil close-ups;
- rights-cleared plant-protein or protein-isolate powder textures;
- clean food-grade industrial equipment details;
- stainless-steel piping and processing-line details;
- industrial laboratory or sample-container visuals;
- stylized map and location graphics based on verified geography;
- verified process diagrams;
- restrained abstract technical overlays.

Required internal classification:
- actual site;
- approved render;
- reference image;
- illustrative stock;
- AI-generated concept.

Reference images and AI-generated concepts are not automatically approved runtime assets.

## Forbidden Image Types
- generic handshake imagery;
- fake employees or staged corporate-team imagery;
- unrelated factories presented as Dorostol Trade facilities;
- AI-generated machinery with impossible geometry;
- visible fake text, labels, logos, or watermarks;
- stock farming cliches without project relevance;
- consumer wellness or organic-food lifestyle imagery;
- animal-protein imagery;
- images implying that the plant is completed or operational unless verified;
- images without confirmed public usage rights;
- unapproved PDF, reference, or design-screenshot assets copied into runtime use.

## Phase 1B Recommendation
Phase 1B should be **image-supported, but asset-gated**.

The recommended implementation is not a broad visual redesign. It should preserve the Phase 1A structure and integrate a small approved asset set:
- one hero visual;
- one stylized location visual;
- three product texture visuals;
- optionally one technology visual and one sustainability visual.

If approved assets are not available, Phase 1B should remain layout-only:
- refine header logo sizing;
- improve hero spacing and investment snapshot hierarchy;
- add reserved visual containers only where they remain useful without placeholder imagery;
- avoid adding generic stock images merely to fill space.

## Exact Future Implementation Scope
### Required Before Implementation
1. Create or update an image asset register with source, rights, classification, approval status, intended section, and filename.
2. Select the exact Phase 1B runtime images.
3. Approve the runtime asset folder and filenames.
4. Confirm whether the hero visual is an actual site photo, approved render, illustrative stock image, or abstract composite.
5. Confirm whether the location visual and any process diagram are approved for public use.

### Proposed Source Files
The first Phase 1B implementation task should be limited to:
- `dorostol-trade-website/src/pages/Home.jsx`;
- `dorostol-trade-website/src/components/layout/Navbar.jsx` only if header logo sizing is adjusted;
- `dorostol-trade-website/src/index.css` only if one or more approved visual tokens are added;
- explicitly approved new files under `dorostol-trade-website/public/assets/`.

### Files That Should Remain Out of Scope
- backend files;
- package files;
- build configuration;
- routing files;
- deferred pages;
- `components/ui/*`;
- documentation other than an approved asset register update;
- reference PDFs;
- design-reference screenshots;
- unapproved uploaded or generated images.

### Implementation Constraints
- Keep the current one-page section order and anchor navigation.
- Keep contact links direct and do not add a backend form.
- Do not add search, blog, newsletter, social links, old routes, or language-switcher behavior.
- Do not introduce unsupported business, market, sustainability, or technical claims.
- Do not optimize, crop, recolor, or rewrite approved images unless a later scoped task explicitly permits it.
- Validate the result with build, `git diff --check`, and browser QA at `375px`, `768px`, `1024px`, and `1440px`.

## Implementation Gate
Do not start Phase 1B source changes until:
- this plan is reviewed;
- the image-supported or layout-only path is explicitly selected;
- the exact runtime assets are approved;
- public usage rights and image classifications are recorded;
- the first implementation task defines a strict file scope.
