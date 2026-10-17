# Statement of Work — Indian Health Club (Beed)

**Client:** Indian Health Club, Beed (owner name TBD)  
**Project:** V1 marketing website (impressive MVP)  
**Date:** 2026-08-01  
**Prepared by:** Synctra — Saloni Chippa  
**Status:** Confirmed with POC (2026-08-01) — portfolio case-study build; formal owner sign-off optional before go-live  
**Linked docs:** `discovery-notes.md`, `acceptance-criteria.md`, `research-brief.md`

---

## 1. Problem (what we heard)

Indian Health Club wants a strong online presence in Beed. The owner shared Sun Fitness’s site as a **quality/feel reference** (not a request to copy). Today there is little or no web presence equal to that bar. They need a premium, modern site that showcases membership pricing, builds trust, and drives enquiries — delivered ASAP as a Synctra portfolio case study, with the owner covering hosting/domain costs.

---

## 2. Solution (what we will build) — V1 / MVP

**Quality bar:** Impressive site equivalent to planning **Phase 1 + Phase 2** — not a thin brochure demo. Long homepage (similar to or slightly shorter than the reference). English only. Brand: logo + **orange / black / white** from client assets.

| # | Feature | Description |
|---|---------|-------------|
| 1 | Cinematic hero | Scroll-scrub video (or better) — futuristic / aesthetic / techy-AI feel; no static-only hero |
| 2 | Long homepage | Multi-section scroll experience: stats, about/facilities, programs/services, pricing, trainers, before/after, BMI calculator, photo marquee, reviews/FAQ, contact |
| 3 | Supporting pages | About, Programs and/or Pricing, Contact as needed; Privacy & Terms stubs |
| 4 | Pricing | On-site tables from client posters: General, Ladies special, Gold & Diamond P.T. |
| 5 | Enquiry CTAs | Phone **9504414141**; WhatsApp assumed same number (changeable); sticky/floating WhatsApp |
| 6 | Interactive UX | Client-side BMI / goal hint calculator; before/after slider; FAQ accordion; scroll progress; sticky nav |
| 7 | Trainers & gallery | Trainer cards + before/after + marquee — **placeholders OK** until owner media arrives |
| 8 | Brand & motion | Dark luxury + IHC orange; premium with a bit of flash (reference energy); parallax optional later |
| 9 | SEO basics | Titles, meta, OG basics, mobile-first layout |
| 10 | Deploy | Live on owner-paid hosting + domain when registered (Model B — client owns accounts) |

**Stack (intended):** Next.js (App Router) + TypeScript + Tailwind — evolve from `prototypes/gym-website-poc/` scroll-scrub patterns; rebrand and expand. Final hosting choice at deploy (e.g. Vercel Hobby vs paid) — owner pays.

**Content placeholders allowed in V1:** address, hours, Maps, trainer bios/photos, before/after photos, program/facility copy, enquiry form fields, hero video until owner/custom footage is ready.

---

## 3. Out of scope (this phase) — V2 / later

- Marathi (or Hindi) copy  
- WhatsApp **automation** bots / broadcast flows  
- AI chat assistant  
- CMS / admin content panel  
- Cafeteria / menu ordering  
- Member login, payments, booking engine  
- Fitpass-style or other third-party membership widgets  
- Exact clone of Sun Fitness routes, copy, colors, or contact details  
- 15+ long-form program landing pages (unless separately agreed)  
- Synctra public case-study / testimonial use (ask permission separately)

_Future phases require a separate agreement or change request._

---

## 4. Timeline

| Milestone | Target |
|-----------|--------|
| Discovery / scope lock | 2026-08-01 (this SOW) |
| Impressive prototype (staging) | ASAP — target **2–4 weeks** after SOW confirm* |
| Content swap (owner media) | Rolling — when owner sends photos/video/copy |
| UAT | **3–5 days** on staging with owner/POC |
| Go-live | When domain registered + hosting paid by owner |
| Handover | At go-live — how to request content updates |

\*Part-time build estimate for this scope: roughly **60–90 hours** (~5–8 weeks at ~12h/week). “ASAP” prioritizes a strong staging prototype first; public go-live depends on domain/hosting.

**Estimated build duration:** 5–8 weeks part-time to production-ready V1 (faster if full-time focus).

---

## 5. Pricing & payment

| Item | Amount |
|------|--------|
| Synctra setup / development (V1) | **₹0** (case study / portfolio — min or no labour fee) |
| Monthly Synctra retainer | **₹0** unless separately agreed after go-live |
| Per-order commission | N/A |

**Payment terms (Synctra labour):** None for V1 labour under this case-study arrangement.

**Tool / resource costs (paid by client — Model B):**

| Item | Notes |
|------|-------|
| Domain registration | Not registered yet — client owns |
| Hosting | Client pays (Hobby tier may be ~₹0; paid tier if needed) |
| Custom video / paid assets | If used — client pays |
| Future WhatsApp Business API / AI APIs | V2 only — client pays |

No Synctra markup on tool subscriptions.

---

## 6. Support (V1)

- Hours: 9am–7pm, Monday–Saturday  
- Critical live-site issues after go-live: response within 24 hours (best effort during case-study period)  
- Included without retainer: bug fixes for in-scope V1 defects; swapping owner-provided content into existing sections  
- **Not included:** V2 features, new section types beyond SOW, ongoing retainer reporting — unless a new agreement is signed  

---

## 7. Acceptance

Delivery is complete when [`acceptance-criteria.md`](acceptance-criteria.md) items for V1 are met (or exceptions accepted in writing / WhatsApp) and client confirms go-live.

**Client name:** _________________________ (Indian Health Club)  
**Signature / WhatsApp confirmation:** _________________________  
**Date:** _________________________

**Synctra:** Saloni Chippa — _________________________ **Date:** _________________________

---

## Assumptions

- WhatsApp = 9504414141 until client corrects  
- Poster prices remain valid for launch  
- Placeholders are acceptable for launch if owner media is late; swapping media does not reopen full redesign  
- “Match Sun Fitness” means **feel/polish**, not feature-parity with cafeteria/CMS/admin  
- Parallax is optional polish, not a go-live blocker  

If any assumption is wrong, revise this SOW before treating scope as signed.
