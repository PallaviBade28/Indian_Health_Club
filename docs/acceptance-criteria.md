# Acceptance Criteria — Indian Health Club V1

**Client:** Indian Health Club, Beed  
**Project:** V1 marketing website (impressive MVP = Phase 1+2)  
**Linked SOW date:** 2026-08-01  
**Language:** English only  

Each item must be **testable**. Placeholders are allowed where noted.

---

## Feature criteria

### F1: Brand & visual identity

| # | Criterion | Pass? | Tested by | Date |
|---|-----------|-------|-----------|------|
| 1 | Site uses IHC logo from `Client 3/assets/Logo.png` (or optimized derivative) | ☐ | | |
| 2 | Accent/brand colors are IHC orange / black / white — not Sun Fitness green or spike `#00ff88` as final theme | ☐ | | |
| 3 | Desktop and mobile (~375px) layouts are usable; no broken overlap of primary CTAs | ☐ | | |

### F2: Cinematic hero

| # | Criterion | Pass? | Tested by | Date |
|---|-----------|-------|-----------|------|
| 1 | Hero is scroll-scrub video (or agreed better motion hero) — not a static image-only hero | ☐ | | |
| 2 | Hero remains readable (headline + CTA visible over media) on desktop and mobile | ☐ | | |
| 3 | Fallback exists if video fails (gradient/orbs or poster) so page never looks empty | ☐ | | |

### F3: Long homepage sections

| # | Criterion | Pass? | Tested by | Date |
|---|-----------|-------|-----------|------|
| 1 | Homepage includes: hero, stats, about/facilities, programs/services, pricing, trainers, before/after, BMI calculator, photo marquee, FAQ and/or reviews, contact | ☐ | | |
| 2 | Sticky nav works; section anchors or clear scroll path to main blocks | ☐ | | |
| 3 | Scroll progress indicator visible | ☐ | | |
| 4 | Overall homepage length feels premium / reference-level (similar or slightly shorter than Sun Fitness) — owner/POC subjective OK | ☐ | | |

### F4: Pricing

| # | Criterion | Pass? | Tested by | Date |
|---|-----------|-------|-----------|------|
| 1 | General membership prices match posters (₹1799 / 4999 / 7999 / 10999) unless owner updates | ☐ | | |
| 2 | Ladies special prices shown (from poster) | ☐ | | |
| 3 | Gold & Diamond P.T. prices shown (from poster; blank 1-year cells handled cleanly) | ☐ | | |
| 4 | Non-refundable fee note present in English (Marathi optional V2) | ☐ | | |

### F5: Enquiry CTAs

| # | Criterion | Pass? | Tested by | Date |
|---|-----------|-------|-----------|------|
| 1 | Click-to-call uses 9504414141 (or updated number) | ☐ | | |
| 2 | WhatsApp deep link opens chat to agreed number (default: same as phone) | ☐ | | |
| 3 | Floating / sticky WhatsApp control present on main pages | ☐ | | |

### F6: Interactive UX

| # | Criterion | Pass? | Tested by | Date |
|---|-----------|-------|-----------|------|
| 1 | BMI (or goal-hint) calculator runs client-side; invalid inputs show a clear message | ☐ | | |
| 2 | Before/after slider works with placeholder or real images | ☐ | | |
| 3 | FAQ accordion expands/collapses without layout break | ☐ | | |

### F7: Placeholders & content swap

| # | Criterion | Pass? | Tested by | Date |
|---|-----------|-------|-----------|------|
| 1 | Trainers, before/after, address/hours, Maps may use placeholders at UAT | ☐ | | |
| 2 | Documented path to replace placeholders with owner assets without redesign | ☐ | | |

### F8: Supporting pages & SEO

| # | Criterion | Pass? | Tested by | Date |
|---|-----------|-------|-----------|------|
| 1 | Contact (and any About/Pricing routes used) load without 404 | ☐ | | |
| 2 | Privacy and Terms stub pages exist | ☐ | | |
| 3 | Unique page title + meta description on homepage | ☐ | | |

### F9: Deploy

| # | Criterion | Pass? | Tested by | Date |
|---|-----------|-------|-----------|------|
| 1 | Staging URL shared with owner/POC for UAT | ☐ | | |
| 2 | Production deploy on client-owned domain/hosting when ready | ☐ | | |
| 3 | `npm run build` (or host equivalent) succeeds before go-live | ☐ | | |

---

## Cross-cutting (adapted for marketing site)

| # | Criterion | Pass? | Notes |
|---|-----------|-------|-------|
| C1 | Forms/calculators handle empty/invalid input with clear message | ☐ | |
| C2 | No secrets in source code; env vars for any keys | ☐ | |
| C3 | No Sun Fitness name, phone, email, or pricing on IHC site | ☐ | |
| C4 | Staging reviewed before go-live (target 3–5 days if timeline allows) | ☐ | |
| C5 | Known limitations documented below | ☐ | |
| C6 | Client/POC WhatsApp or written sign-off on go-live | ☐ | |
| C7 | User guide light notes: how to request content updates | ☐ | N/A if Synctra keeps edit access short-term |

_N/A for this V1 (static site): workflow idempotency, Synctra ops alerts for n8n — mark N/A rather than fail._

---

## Known limitations (document honestly)

- Real gym hero video / facility photos may ship after prototype  
- Trainer bios, before/after, address, hours may be placeholders at launch  
- WhatsApp number assumed = phone until corrected  
- Domain not registered at SOW date — go-live blocked on client registration + hosting  
- Not a CMS — content updates via Synctra (or later V2 CMS)  
- Parallax and Marathi deferred  
- Not a feature clone of Sun Fitness (no cafeteria, admin, AI chat in V1)

---

## Sign-off

All criteria above marked Pass, or exceptions listed and accepted by client:

**Client:** _________________________ **Date:** _________________________  
**Synctra:** _________________________ **Date:** _________________________
