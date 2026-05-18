ARC bicycle hub website source code - refined version

Updated scope:
1. Rebuilt the visual style into a premium industrial dark theme with ARC red and metallic gold accents.
2. Adjusted homepage, product, factory, about and contact content according to public ARC website information.
3. Added official contact details and updated the static inquiry form email to ARC_bike@126.com.
4. Improved responsive navigation, cards, CTA sections, product hierarchy and B2B inquiry guidance.

Open index.html in a browser to preview the website.
For production, connect the contact form to a real backend or form service if server-side submission is required.


2026-05-17 readability revision:
- Strengthened contrast for dark sections, inquiry area, CTA band and product cards.
- Improved hero layout, card hierarchy, mobile spacing and B2B visual tone.
- Replaced technical form note with a customer-facing message.

V3 readability adjustment:
- Fixed feature-item contrast on custom-bicycle-hubs.html and other normal white sections.
- Audited dark backgrounds, product label blocks, CTA panels, contact panels and form/table text colors.
- Default card/feature styles now use stable light backgrounds; dark styles only apply inside .section-dark, .inquiry and .cta-band.
- This is more suitable for later WordPress conversion because sections can be pasted independently without relying on fragile translucent text effects.

V5 uploaded-base adjustment notes:
- This version is based on arc_bicycle_hub_website_wp_readability_v3(1).zip.
- Homepage hero background now uses assets/images/hero-cyclist.svg for a bicycle/cycling visual.
- Full-site text/background contrast has been re-audited.
- feature-item is light by default and only turns dark inside explicit dark sections, which is safer for WordPress page conversion.
- Dark sections, CTA, contact panels, cards, tables, FAQ, product blocks and forms have clearer color rules.
- The design keeps a consistent premium industrial tone using dark graphite, ARC red and low-saturation gold.
