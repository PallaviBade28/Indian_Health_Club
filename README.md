# Client 3 — Indian Health Club (Beed)

**Phase:** Prototype (SOW confirmed with POC 2026-08-01 — portfolio / Explore→Deliver path)  
**Type:** Gym / fitness club, Beed, Maharashtra  
**Relationship:** Warm intro via Saloni’s friend (POC); owner eager for a website  
**Pricing note:** Portfolio / case-study engagement — **min or no Synctra dev fee**; owner pays tool/hosting/domain resources. Still use Deliver process before go-live.

## Confirmed basic facts

| Field | Detail | Certainty |
|-------|--------|-----------|
| Business name | Indian Health Club | Confirmed (Saloni) |
| City | Beed, Maharashtra | Confirmed |
| Decision-maker | Gym owner (name TBD / placeholder OK) | Open |
| Intro / POC | Friend of Saloni | Confirmed |
| Reference site | Owner sent **Sun Fitness** as feel/level example — not exact copy | Confirmed |
| Phone | 9504414141 | Confirmed |
| WhatsApp | Assume same as phone; change later if wrong | Assumed |
| Brand colors | Orange / black / white (from logo) | From assets |
| Pricing on site | Poster rates (General / Ladies / Gold·Diamond P.T.) | Confirmed |
| **V1 / MVP** | Impressive site = old **Phase 1 + Phase 2** (not a thin demo) | Confirmed |
| Homepage | **Long** — similar or slightly shorter than Sun Fitness | Confirmed |
| Hero | Scroll-scrub or better — futuristic / aesthetic / techy-AI; no static hero | Confirmed |
| Motion | Premium + a bit flashy; parallax optional later if it helps | Confirmed |
| V1 features | Pricing, trainers, FAQ, BMI calc, before/after, marquee, WA CTA, etc. | Confirmed |
| Placeholders OK | Trainers, before/after, enquiry form, address/hours until owner sends | Confirmed |
| Language V1 | English only | Confirmed |
| Language V2 | English + some Marathi | Deferred |
| **V2** | WhatsApp automation, AI assistant, CMS, more pages | Deferred |
| **V2 CMS direction** | Next.js + **Sanity Free** (decision doc) | Locked 2026-08-12 — not built yet |
| Domain | Not registered yet | Confirmed |
| Hosting budget | Open | Open |
| Synctra fee | Min / no development cost (case study OK) | Confirmed |
| Logo/poster on web | OK | Confirmed |
| Synctra portfolio | Ask later | Open |
| Timeline | ASAP | Confirmed |
| Brand assets | Logo + pricing posters in [`assets/`](assets/); facility media TBD | On disk |
| IHC prototype | [`prototype/`](prototype/) | Active Explore build — IHC brand |
| Prior Explore spike | [`../prototypes/gym-website-poc/`](../prototypes/gym-website-poc/) | Keep as reusable demo; do not edit for IHC |

## Agent: start here

1. Read [`../operations/CONTEXT.md`](../operations/CONTEXT.md)
2. Read this file
3. Read [`docs/discovery-notes.md`](docs/discovery-notes.md) (V1 = Phase 1+2), then research-brief + spike-handoff
4. **Do not ship production** until short written scope exists — even if Synctra fee is ₹0

```
Client 3/
├── README.md
├── assets/
├── prototype/                 ← IHC-branded Explore site (run npm run dev here)
└── docs/
    ├── research-brief.md
    ├── spike-handoff.md
    ├── discovery-notes.md
    ├── sow.md                 ← confirmed with POC
    ├── acceptance-criteria.md
    ├── cms-v2-decision.md     ← Sanity Free direction + stress test (2026-08-12)
    └── …
```

Enable Cursor rules: `02-prototype-phase` + `07-client-3-gym`.  
Generic demo spike (other clients): `prototypes/gym-website-poc/` — leave untouched.

## Domain notes

- V1 must feel **portfolio-grade / reference-level**, not a minimal brochure
- IHC orange brand — never ship Sun Fitness green or spike `#00ff88` as final
- Placeholders allowed; real trainers/media/forms when owner provides
- Member/enquiry data sensitive — Model B, per-client isolation

## Success metrics

- Owner proud to share URL vs local competitor feel
- Enquiry path clear (WhatsApp/phone)
- Content swaps without redesign

Update [`../operations/CONTEXT.md`](../operations/CONTEXT.md) when phase changes.
