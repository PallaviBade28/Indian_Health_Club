# Indian Health Club — Research brief

**Client:** Client 3  
**Last updated:** 2026-08-01  
**Status:** Kickoff — fill gaps from public research + prior spike agents

## Business

| Item | Notes | Certainty |
|------|-------|-----------|
| Name | Indian Health Club | Confirmed |
| Location | Beed, Maharashtra | Confirmed |
| Category | Gym / health club | Confirmed |
| Owner name | TBD | Open |
| Phone | **9504414141** | Confirmed (Saloni 2026-08-01) |
| WhatsApp | Assume same as phone | Assumed — change later if wrong |
| Existing website / Google listing / Instagram | TBD — research or ask POC | Open |
| Domain owned? | TBD | Open |
| Brand colors (from logo) | Orange + black + white (not spike `#00ff88`) | From assets |

## Brand assets on disk

| File | Path | Notes |
|------|------|-------|
| Logo | `Client 3/assets/Logo.png` | “INDIAN HEALTH CLUB BEED”; orange/black/white |
| Poster | `Client 3/assets/IMG_8912.JPG.jpeg` | General membership price list |
| Poster | `Client 3/assets/IMG_8913.JPG.jpeg` | Ladies special (+30% off messaging) |
| Poster | `Client 3/assets/IMG_8914.JPG.jpeg` | Gold / Diamond personal training rates |

See dump **2026-08-01 — asset review** below for extracted tables.

## Commercial framing

- Owner eager; pays **resources** (hosting, domain, any paid APIs later).
- Synctra: **min / no development fee** — portfolio / case study (Saloni OK).
- Still write a short SOW so scope does not creep into V2 features unpaid.

## V1 vs V2 (direction only)

| Phase | In | Out |
|-------|----|-----|
| **V1** | Marketing site, few pages | Booking systems, membership CRM, AI assistant |
| **V2** | More pages, WhatsApp, AI assistant, other features | Not started until V1 live + new agreement |

## Prior Explore work (not this brand’s production)

- Folder: `prototypes/gym-website-poc/`
- Validated: fixed bg + scroll-scrub video, Next.js MVP basics
- Reference vibe during spike: Sun Fitness Beed (competitor-style feel) — **do not copy their brand/copy**
- See `spike-handoff.md` for technical handoff

## Open research tasks

- [ ] Confirm legal/display name spelling and any tagline
- [ ] Find existing social / Maps presence
- [ ] Confirm programs offered (gym, PT, cardio, etc.)
- [ ] Confirm address, hours, enquiry WhatsApp
- [ ] Domain preference (`.in` / `.com` / other)

## Agent dump zone

### 2026-08-01 — Explore spike agent (public + spike context)

#### Indian Health Club (Client 3)

| Item | Detail | Tag |
|------|--------|-----|
| Business name | Indian Health Club | confirmed |
| City | Beed, Maharashtra | confirmed |
| V1 direction | Marketing website, few pages | confirmed |
| V2 (later) | More pages, WhatsApp, AI assistant | confirmed |
| Synctra dev fee | Min / no fee — portfolio case study | confirmed |
| Owner pays | Hosting, domain, tool subscriptions (Model B) | confirmed |
| Intro path | Saloni ↔ friend (POC) ↔ gym owner | confirmed |
| Owner name | Not yet captured | open |
| Phone / WhatsApp / address / hours | Not yet captured | open |
| Domain | Not yet captured | open |

#### Brand assets on disk (Client 3 — not used in spike)

| File | Size (approx) | Tag |
|------|---------------|-----|
| `Client 3/assets/Logo.png` | ~732 KB | confirmed |
| `Client 3/assets/IMG_8912.JPG.jpeg` | ~2.8 MB | confirmed |
| `Client 3/assets/IMG_8913.JPG.jpeg` | ~2.6 MB | confirmed |
| `Client 3/assets/IMG_8914.JPG.jpeg` | ~2.8 MB | confirmed |

Spike did **not** integrate IHC logo/photos — used placeholder copy and AI/stock-style video in POC — **from spike**.

#### Competitor reference (vibe only — **not** IHC brand)

**Sun Fitness** (sunfitnessgym.com) — Beed gym used as **feel reference during Explore spike** — **from spike**

| Observation | Tag |
|-------------|-----|
| Premium dark theme, neon/green accent, glass cards | from spike |
| Long homepage; fixed atmospheric bg; scroll-linked motion (informed spike goal) | from spike |
| Public contact on their site: Mondha Road, Beed; phone +91 92268 07490; email admin@sunfitnessgym.com | from spike (public web; **not** IHC data) |
| Hours listed: Mon–Sat 5AM–10PM | from spike (public web; competitor only) |
| Many sections: programs, trainers, pricing, FAQ, events, nutrition, etc. | from spike — **out of IHC V1 scope** |

**Do not** copy Sun Fitness name, colors, copy, or contact details for IHC — **confirmed** (Saloni + spike brief).

#### Spike placeholder brand (POC only)

- Accent `#00ff88`, dark matte blacks, "GYM POC" nav label — **from spike**
- Mock stats (500+ members, etc.), placeholder phone +91 00000 00000 — **from spike**

#### Market / positioning (working assumptions for discovery)

- Beed local gym market; premium web presence likely differentiator vs basic listings — **assumed**
- Owner eager for website; friend POC reduces sales friction — **confirmed**
- Case-study pricing implies Synctra needs testimonial / before-after permission — **assumed**

### 2026-07-22 — Sun Fitness Beed competitor intel (public / crawl — **not IHC**)

**URL:** https://www.sunfitnessgym.com/  
**Use:** Level and feature awareness only. **Never** reuse name, green brand, copy, or contact info for IHC — **confirmed**.

#### Competitor profile (public)

| Item | Detail | Tag |
|------|--------|-----|
| Name | Sun Fitness / Sun Fitness Gym Beed | from spike |
| Location | Mondha Road, Opp Lokasha Office, Beed, Maharashtra | from spike |
| Positioning | Premium facility — ice bath, steam, imported USA equipment, Zumba, yoga, PT | from spike |
| Built by | PraiseArray (Tanmay Bora) — footer credit | from spike |
| Site age signal | “Building Strong Bodies Since 2026”, © 2026 | from spike |

#### Public contact (competitor only — do not put on IHC site)

| Channel | Detail | Tag |
|---------|--------|-----|
| Phone | +91 92268 07490 (+ others on footer) | from spike |
| Email | admin@sunfitnessgym.com | from spike |
| Hours (contact block) | Mon–Sat 5AM–10PM | from spike |
| Hours (footer) | Mon–Sat split shifts 5–10 AM & 6–10 PM; Sunday closed | from spike |

#### Competitor site map (reference — out of IHC V1 scope unless owner asks)

| Route | Purpose | Tag |
|-------|---------|-----|
| `/` | Long single-page homepage (~15 sections) | from spike |
| `/personal-training`, `/fat-loss`, `/weight-gain`, `/kids-training`, `/group-training` | Program landing pages | from spike |
| `/yoga`, `/zumba`, `/boxing` | Class landing pages | from spike |
| `/ice-bath`, `/steam-bath`, `/equipment` | Facility pages | from spike |
| `/body-composition`, `/diet-planning`, `/supplements` | Health support pages | from spike |
| `/cafeteria` | Menu + “Add to Order” (~35 items, macros) | from spike |
| `/events` | Placeholder “Coming Soon” at time of crawl | from spike |
| `/privacy-policy`, `/terms-of-service` | Legal | from spike |
| `/admin` | Password CMS (“manage content”) | from spike |
| `robots.txt` | Disallows `/admin`, `/api` | from spike |

#### Competitor homepage sections (inventory — not IHC sitemap)

Hero · Fitpass corporate QR · animated stats · About + marquee benefits · body assessment form · before/after transformation · nutrition protocol cards + PDF · “Journey of Power” scroll section · services grid · pricing tabs (6 types) · 11 trainer cards · management · events teaser · reviews · FAQ accordion · multi-step contact (5 steps) · Maps · floating “Ask Me” assistant — **from spike**

#### Competitor membership pricing (public — **competitor data only**)

| Plan | Public price | Tag |
|------|--------------|-----|
| 1 day | ₹300/day | from spike |
| 1 month | ₹2500/mo (struck ₹3000) | from spike |
| 3 months | ₹6000/quarter (popular) | from spike |
| 6 months | ₹8000 | from spike |
| 12 months | ₹12000 (includes bag + classes) | from spike |

**Do not** use these numbers for IHC — confirm IHC pricing with owner — **confirmed**.

#### What makes competitor feel “premium” (technical summary)

- Fixed atmospheric background (video/orbs) + scrolling foreground — **from spike**
- Dark + neon accent + glass cards + hover glows — **from spike**
- Many **small** interactions stacked (reveals, counters, tabs, accordion) — not heavy 3D — **from spike**
- High content volume (trainers, equipment catalog, cafeteria) — **from spike** — likely **not** IHC V1

#### IHC vs competitor (working positioning)

| | Sun Fitness (reference) | Indian Health Club | Tag |
|--|-------------------------|-------------------|-----|
| Brand | Their green / Sun Fitness copy | Logo + photos in `Client 3/assets/` | confirmed |
| Scope | 20+ pages, CMS, cafeteria | V1: few static marketing pages | confirmed |
| Goal | — | Match **quality/feel**, not clone **structure** | confirmed (Saloni) |
| Reference source | — | Owner **sent** Sun Fitness URL as example | confirmed (Saloni 2026-08-01) |
| V1 depth | 20+ pages, CMS, cafeteria | Long homepage + Phase-2 features; not full clone | confirmed |

#### Open research (still needed for IHC)

- [ ] IHC Google Maps / Instagram / existing listing — **open**
- [ ] IHC address, hours — **open** (pricing partially filled from posters)
- [ ] Whether owner names Sun Fitness or others as “what I want it to feel like” — **open**
- [ ] Confirm poster prices + phone still current — **open**
- [ ] Real gym photos / hero video (posters ≠ facility gallery) — **open**

### 2026-08-01 — Asset review (this session; from `Client 3/assets/`)

**Source:** Client-provided logo + three printed rate cards. Tag: **from assets** — treat as draft site content until owner confirms.

#### Logo / brand

| Item | Detail | Tag |
|------|--------|-----|
| Display name on logo | INDIAN HEALTH CLUB BEED | from assets |
| Palette | Orange, black, white | from assets |
| Motif | Muscular bodybuilder silhouette (split orange/black) | from assets |
| Spike accent `#00ff88` | **Wrong for IHC** — replace with orange from logo | from assets |

#### Contact (on all three posters)

| Channel | Detail | Tag |
|---------|--------|-----|
| Phone | 9504414141 | from assets — confirm WhatsApp same? |
| Refund note (Marathi) | एकदा भरलेली फिस परत मिळणार नाही (fees non-refundable) | from assets |

#### General membership (`IMG_8912`)

| Package | General | Tag |
|---------|---------|-----|
| 1 month | ₹1,799 | from assets |
| 3 months | ₹4,999 | from assets |
| 6 months | ₹7,999 | from assets |
| 1 year | ₹10,999 | from assets |

#### Ladies special (`IMG_8913`) — poster says “30% Off” / “Special Price For Ledies”

| Package | General (shown struck) | Ladies | Tag |
|---------|------------------------|--------|-----|
| 1 month | ₹1,799 | ₹1,299 | from assets |
| 3 months | ₹4,999 | ₹3,499 | from assets |
| 6 months | ₹7,999 | ₹5,599 | from assets |
| 1 year | ₹10,999 | ₹7,699 | from assets |

#### Personal training (`IMG_8914`)

| Package | Gold P.T. | Diamond P.T. | Tag |
|---------|-----------|--------------|-----|
| 1 month | ₹5,000 | ₹6,000 | from assets |
| 3 months | ₹14,000 | ₹16,000 | from assets |
| 6 months | ₹26,000 | ₹30,000 | from assets |
| 1 year | — | — | from assets (blank on poster) |

#### Copy quality notes (fix on website; keep posters as source photos if used)

- Posters spell **HELTH** / **Ledies** — site should use **Health** / **Ladies** — **assumed**
- Marathi refund line suggests at least some Marathi on V1 (footer/policy) — **assumed**; full bilingual TBD

**Still missing from assets:** street address, hours, Instagram/Maps, facility photos, hero video, owner name.
