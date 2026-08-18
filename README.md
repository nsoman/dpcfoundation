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
CNAME           Custom domain for GitHub Pages (directprimarycare.com)
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

The repo publishes to **directprimarycare.com** via the `CNAME` file. DNS for that
domain lives in **Cloudflare**; point it at GitHub Pages:

- Four `A` records for the apex `directprimarycare.com` →
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `CNAME` for `www` → `nsoman.github.io`
- Set all of the above to **DNS only** (grey cloud). Cloudflare's proxy blocks
  GitHub's Let's Encrypt cert issuance; re-enable the orange cloud afterward if
  desired, with SSL mode set to Full.

Leave the `MX` and SPF `TXT` records alone — they run Cloudflare Email Routing for
`hello@directprimarycare.com` and are independent of the web records.

**dpcfoundation.org** (registrar: GoDaddy) is kept as a 301 redirect to the apex.
