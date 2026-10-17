# Discovery notes — Indian Health Club

**Phase:** Discovery → Spec (scope revised 2026-08-01)  
**Last updated:** 2026-08-01  
**Contact path:** Saloni ↔ friend (POC) ↔ gym owner

## Engagement snapshot

| Topic | Current understanding | Certainty |
|-------|----------------------|-----------|
| Problem | No (or inadequate) web presence; owner wants a website | Confirmed |
| Quality bar | Match Sun Fitness **level/feel** — owner sent that site as reference (not exact copy) | Confirmed |
| **V1 / MVP** | Former planning **Phase 1 + Phase 2** — impressive, not a thin demo | Confirmed (Saloni) |
| **V2** | Former Phase 3 — Marathi, WhatsApp automation, AI assistant, CMS, etc. | Confirmed |
| Homepage | **Long** homepage — similar or slightly shorter than Sun Fitness | Confirmed (Saloni) |
| Budget (Synctra labour) | Min / no dev fee — case study | Confirmed (Saloni) |
| Budget (resources) | Owner pays hosting/domain/tools | Confirmed |
| Written SOW / payment | `sow.md` + acceptance criteria — **POC confirmed** 2026-08-01 | Confirmed |
| Phone | 9504414141 | Confirmed |
| WhatsApp | Assume same; change later if wrong | Assumed |
| Pricing | Poster rates on site | Confirmed |
| Hero | Scroll-scrub or better — attractive, unique, futuristic, aesthetic, techy-AI; **no static hero** | Confirmed |
| Motion | Premium + a bit flashy (competitor energy); parallax **optional later** if it looks good | Confirmed |
| Language V1 | English only | Confirmed |
| Domain | Not registered yet | Confirmed |
| Timeline | ASAP | Confirmed |

## V1 / MVP scope (locked direction)

**Definition:** Prototype and MVP target the same bar — **impressive Phase 1+2**. Placeholders OK where owner content is pending.

### Long homepage (primary surface)

Sections to aim for (Sun Fitness–inspired depth, IHC brand; slightly shorter OK):

- Cinematic scroll-scrub hero + strong CTAs  
- Stats / social proof  
- About + facilities highlights  
- Services / programs grid  
- Pricing (General, Ladies, Gold/Diamond P.T. from assets)  
- Trainers (placeholders until real bios/headshots)  
- Before/after transformation slider (placeholders OK)  
- BMI / goal hint calculator (client-side)  
- Photo marquee / gallery strip  
- Reviews / FAQ accordion  
- Contact block + Maps placeholder  
- Scroll progress bar, sticky nav, floating WhatsApp CTA  

### Supporting routes (as needed — not 20+ competitor pages)

- About, Programs (or deep-link sections), Pricing, Contact, Privacy/Terms stubs  
- Extra program landing pages only if time — **not** cafeteria/admin/Fitpass clones  

### Visual / motion direction

- Dark luxury + **IHC orange** (not spike green)  
- Scroll-scrub hero **or better** — futuristic / techy-AI / aesthetic  
- Slightly flashy (competitor-like), not gaudy  
- Parallax: not required for V1; **revisit later** if it improves the feel  
- Hero video prompt direction (suggestion for gen/stock): cinematic luxury gym at night, matte black equipment, volumetric lighting, floating chalk dust, warm **orange** rim lights, slow dolly, ultra-realistic, shallow DoF, minimal/no people, premium fitness brand  

## Content status

| Content | Status |
|---------|--------|
| Logo + poster pricing | Ready — use on site |
| Phone / WhatsApp CTA | 9504414141 (WA assumed same) |
| Programs/facilities list | Open — placeholders until owner |
| Trainer bios/photos | Placeholders → swap when owner sends |
| Before/after photos | Placeholders → swap when owner sends |
| Enquiry form vs WA/phone only | Placeholders OK until owner decides |
| Address / hours | Placeholders |
| Real gym video | After prototype / when owner sends |
| Domain / hosting budget | Open — domain not registered |
| Synctra portfolio permission | Open — ask later |

## In scope vs out of scope

**In (V1/MVP):** Long impressive homepage + key pages; scroll-scrub (or better) hero; pricing; trainers; FAQ; BMI calculator; before/after; marquee; WhatsApp/phone CTAs; IHC brand; English; placeholders where needed; deploy when domain ready.

**Out (V1) = V2 / Phase 3:** Marathi copy, WhatsApp **automation** bots, AI chat assistant, CMS/admin, cafeteria ordering, member login, payments, Fitpass-style extras, full 20+ route clone.

## Success metrics (working)

- Owner feels site is **premium / reference-level**, not a basic brochure  
- Clear enquiry path (WhatsApp/phone)  
- Real content swap without redesign when media arrives  

## Gate reminder

Even at ₹0 Synctra fee: short written scope before go-live. Expanded V1 still needs SOW so Phase 3 features don’t sneak in unpaid.

## Agent dump zone

### 2026-08-01 — Explore spike agent (scope + preferences inferred from spike work)

#### Confirmed before / during Client 3 kickoff

| Topic | Detail | Tag |
|-------|--------|-----|
| Client identity | Indian Health Club, Beed | confirmed |
| V1 | Marketing site, few pages | superseded — see scope revision (long homepage Phase 1+2) |
| V2 deferred | WhatsApp, AI assistant, extra pages | confirmed |
| Commercial | Owner pays resources; Synctra min/no dev fee | confirmed |
| Brand files | Logo + 3 photos in `Client 3/assets/` | confirmed |
| Written SOW still required | Even at ₹0 labour — per README + rule 07 | confirmed |

#### Preferences expressed during Explore spike (Saloni feedback — not formal discovery with owner)

| Preference | Detail | Tag |
|------------|--------|-----|
| Background behaviour | Fixed bg; **scroll scrubs video timeline** (not autoplay loop) | from spike |
| No bg parallax | Background must stay fixed — no translate-on-scroll | from spike |
| Premium feel | Dark luxury, glass cards, glows, scroll reveals, scroll progress | from spike |
| Video visibility | Wanted visible gym footage, not flat dark + text only | from spike |
| Video asset | Switched to `gym_ai_2.mp4` in POC `public/` during spike | from spike |
| Smoothness | Accepted steppy scrub as **spike-OK**; production needs re-encoded video | from spike |

#### Spike proved vs V1 still to confirm with owner

| Spike proved | Still need owner input |
|--------------|------------------------|
| Fixed + scroll-scrub bg technically feasible | Exact V1 page list (Home, About, Programs, Contact — draft only) |
| Mobile-readable overlay | Real WhatsApp / phone for CTAs |
| Next.js + Tailwind stack viable | Marathi/Hindi vs English-only |
| Mock single-page flow | Membership/pricing content — do not invent |
| — | Domain ownership + hosting budget |
| — | Whether scroll-scrub hero is desired for **IHC** or simpler hero with IHC photos |
| — | Go-live date + case-study permission |

#### Working V1 page draft (unchanged — confirm with owner)

1. Home (hero + CTA) — **assumed**
2. About / facilities — **assumed**
3. Programs or memberships (static) — **assumed**
4. Contact (address + WhatsApp/phone) — **assumed**

#### Explicitly out of V1 (reinforced by spike scope)

- Member login, payments, booking — **confirmed** direction
- CMS/admin, form backends, AI assistant — **confirmed** deferred
- Sun Fitness–scale long homepage — **expanded into V1** 2026-08-01 (similar/slightly shorter; skip events/nutrition tabs unless content exists)

#### Gate reminder

POC at `prototypes/gym-website-poc/` remains **Explore** until: discovery answers filled → short SOW (WhatsApp OK) → Deliver rebuild/hardening + QA — **confirmed**

### 2026-07-22 — Scope planning & owner-intent (from Saloni sessions — not owner discovery call)

#### Owner intent (confirmed via Saloni / POC — not direct owner quote)

| Topic | Detail | Tag |
|-------|--------|-----|
| Wants a website | No or weak web presence today | confirmed |
| Quality bar | **Premium** — similar *level* to local competitor Sun Fitness, **not** a copy of their site | confirmed |
| Own data | Custom sections, pricing, trainers for **IHC** — not competitor clone | confirmed |
| Pays resources | Server, domain, APIs/tools as needed | confirmed |
| Synctra dev fee | Min / none — OK as case study | confirmed |
| Relationship | Warm intro via Saloni’s friend (POC) | confirmed |

#### Saloni / spike preferences (inform Deliver — confirm with owner)

| Topic | Detail | Tag |
|-------|--------|-----|
| Hero motion | Scroll-scrub video tied to page scroll (competitor-style “living bg”) | from spike |
| No bg parallax translate | Fixed background layer | from spike |
| Subtle over flashy | Premium = polish, not every effect moving | assumed |
| WordPress | **Not** for this client — custom Next.js only | confirmed |
| V2 explicit defer | WhatsApp automation, AI assistant, extra pages | confirmed |

#### Discovery questions added from competitor / scope analysis

- [ ] Does owner want **scroll-scrub hero** or simpler **static hero** with IHC photos? — **open** (spike assumes scrub)
- [ ] Which programs/facilities does IHC actually offer? (competitor lists ice bath, steam, zumba, etc. — may not apply) — **open**
- [ ] Membership tiers and prices for V1 page? — **open** (do not use Sun Fitness numbers)
- [ ] Trainer/staff bios and headshots available? — **open**
- [ ] Before/after transformation photos for slider? — **open**
- [ ] Languages: English only vs Marathi/Hindi headings? — **open**
- [ ] Enquiry path: WhatsApp only vs phone vs form? — **open**
- [ ] Domain name chosen / registered? Who owns (Model B)? — **open**
- [ ] Monthly budget for hosting (~₹0 Vercel Hobby vs paid tier)? — **open**
- [ ] Permission to use gym photos + logo on web and in Synctra portfolio? — **open**
- [ ] Go-live target date? — **open**
- [ ] Does owner know Sun Fitness site specifically, or only “premium gym website”? — **open**

#### Recommended phased delivery — **UPDATED 2026-08-01**

| Phase | Deliverable | Tag |
|-------|-------------|-----|
| **V1 / MVP (= old Phase 1+2)** | Long homepage + key routes; Tier-1 polish + Tier-2 features (pricing, trainers, FAQ, BMI, before/after, marquee, WA CTA) | confirmed |
| **V2 (= old Phase 3)** | Marathi, WhatsApp automation, AI assistant, CMS, more pages — separate agreement | confirmed |

#### UX ideas — **in V1 prototype** (confirmed Saloni)

- Before/after drag slider (placeholders OK) — **confirmed**
- Client-side BMI / goal hint calculator — **confirmed**
- Infinite gym photo marquee — **confirmed**
- Scroll progress bar, floating WhatsApp — **confirmed**

**Still skip V1:** cafeteria menu, admin CMS, AI chat bot, Fitpass, 360 tour — **confirmed**

#### Commercial reminder

Even at ₹0 Synctra labour: written scope before Deliver; owner still pays domain/hosting; case-study permission for testimonial — **confirmed**

### 2026-08-01 — Saloni discovery answers (earlier this chat)

| Topic | Answer | Tag |
|-------|--------|-----|
| Phone | 9504414141 yes | confirmed |
| WhatsApp | Assume same; change later if wrong | assumed |
| Prices | Poster rates still current; show on site | confirmed |
| Language | V1 English only; V2 + some Marathi | confirmed |
| Timeline | ASAP | confirmed |

### 2026-08-01 — Scope revision (impressive MVP = Phase 1+2)

| Topic | Answer | Tag |
|-------|--------|-----|
| Homepage length | Long — similar or slightly shorter than Sun Fitness | confirmed |
| Reference | Owner **sent** Sun Fitness site as example — feel/level, not clone | confirmed |
| Hero | No static; scroll-scrub or similar — unique, futuristic, aesthetic, techy-AI | confirmed |
| Flashiness | A bit flashy like competitor; still polished | confirmed |
| Parallax | Not rejected — can add later if it looks good | confirmed |
| V1 = Phase 1+2 | Pricing, trainers, FAQ, BMI, before/after, marquee, WhatsApp CTA, etc. | confirmed |
| V2 = Phase 3 | WhatsApp automation, AI assistant, CMS, Marathi, etc. | confirmed |
| UX pitch list | Yes for prototype (BMI, before/after, marquee, scroll progress, WA FAB) | confirmed |
| Programs/facilities | Open | open |
| Trainers / before-after / enquiry form | Placeholders until owner content | confirmed |
| Domain | Not registered yet | confirmed |
| Hosting budget | Open | open |
| Portfolio permission | Open | open |
| Hero video vibe | Cinematic night gym, orange rim light, volumetric, techy-premium (prompt in V1 scope) | confirmed |

**POC → Deliver:** Evolve spike for scroll-scrub core; expand to long homepage + Phase-2 sections; IHC orange; impressive MVP bar — **confirmed**.

### 2026-08-01 — Asset review (posters are content, not gym photos)

| Finding | Implication | Tag |
|---------|-------------|-----|
| `IMG_8912–14` are **rate cards**, not ambience photos | Hero video + gallery still needed; placeholders OK in prototype | from assets |
| Phone **9504414141** on all posters | V1 CTA; WA assumed same | confirmed |
| Full General + Ladies + P.T. price tables readable | On-site pricing — confirmed current | confirmed |
| Logo palette orange/black/white | Drop spike electric green for Deliver | from assets |
| Marathi refund note on posters | At least policy/footer Marathi is natural; full bilingual still open | from assets |

**Updated open questions (priority):**

1. Confirm phone/WhatsApp + that poster prices are current  
2. Hero approach + whether owner can supply gym photos/video  
3. Exact V1 pages + how much Marathi  
4. Address, hours, domain/hosting

### 2026-08-12 — Owner feedback: self-serve CMS (V2 direction)

| Finding | Implication | Tag |
|---------|-------------|-----|
| Owner wants login to edit plans, prices, media, trends themselves | Valid; matches Sun Fitness `/admin` *capability* | from owner |
| CMS still out of V1 SOW | Sell/scope as **V2**; V1 = Synctra content swaps | confirmed |
| Direction: **Next.js + Sanity Free** | See `cms-v2-decision.md` — stress-tested ~200 visits/day, heavy media + page audio | assumed → planning lock |
| 100 GB Sanity Free assets | Verified on pricing page 2026-08-12; storage OK; watch **bandwidth** if video served from Sanity CDN | confirmed |
| Hero/large video | Keep on site hosting, not primary Sanity CDN delivery | assumed |

**Open for V2 quote later:** exact editable fields; whether page audio is in scope; Growth only if Free caps hit.