# Direct Primary Care Foundation — website

A faithful recreation of the original **directprimarycare.com** (previously built
in Webflow), rebuilt as a clean, self-contained static site. No build step, no
frameworks. Host it anywhere (GitHub Pages, Netlify, Cloudflare Pages, S3).

## Files

```
index.html      Home page
about.html      About page (Team, Goals, Leadership)
styles.css      Shared stylesheet
site.js         Shared behavior (footer year, scroll reveal)
images/         Original images + team headshots, saved locally
CNAME           Custom domain for GitHub Pages (dpcfoundation.org)
```

## Pages & content (recovered from the Wayback Machine)

- **Home** — Hero ("Direct Primary Care is the Future of Health"), Mission,
  "What we do to help DPC grow" (Research / Education / Direct Support).
- **About** — Hero, "Our Team" + "Our Goals", and **Our Leadership**:
  - Ben Aiken, MD — Board member — DPC Founder & CEO at Lantern Health; Head of DPC at Decent
  - Rachel Kim — Board member — Founder at Manifest Advisors
  - Nick Soman — Board member — Founder & CEO at Decent

  (The leadership section was empty in the most-recent archived snapshot; the three
  members were recovered from an earlier snapshot, Aug 2025.)

## Brand (from the original)

- Palette: navy `#002842`, blue-shade `#225372`, sky-blue `#9bd7f9`,
  pale blue `#e7f6ff`, off-white `#f1ebeb`, near-black `#1e1e1e`.
- Type: Castoro (italic headings) + Montserrat (body), via Google Fonts.
- Images: original hero, stethoscope, three "what we do" photos, and the three
  team headshots — all saved to `images/` so nothing depends on the old CDN.

## Real links (recovered)

- Contact: `mailto:hello@directprimarycare.com`
- LinkedIn: `https://linkedin.com/company/dpcfoundation`
- X: `https://x.com/DPCFoundation`
- Facebook: `https://www.facebook.com/directprimarycarefoundation`

## Deliberate improvements over the original

- Hero legibility — navy gradient scrims so the white logo, nav, and headline
  stay readable over the photos.
- Self-contained images (served locally, not from the Webflow CDN).
- Auto-updating copyright year (original was hard-coded to 2024).
- Dropped the original's third-party ad-network scripts.
- Accessible focus states, reduced-motion support, content visible without JS.

## Local preview

```bash
cd /Users/nicksoman/directprimarycare
python3 -m http.server 8777
# open http://localhost:8777
```

## Deploy (GitHub Pages)

The repo is set up to publish to **dpcfoundation.org** via the `CNAME` file. After
pushing to GitHub and enabling Pages on the default branch, point DNS at GitHub:

- Four `A` records for the apex `dpcfoundation.org` →
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- (Optional) `CNAME` for `www` → `<user>.github.io`

DNS is changed at your domain registrar and must be done by you.
