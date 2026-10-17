# V2 CMS decision — Indian Health Club

**Status:** Direction locked for planning (not built yet)  
**Date:** 2026-08-12  
**Phase:** Still **V1 prototype** in SOW; CMS remains **V2 / change request**  
**Related:** `sow.md` §3 (CMS out of V1), owner feedback 2026-08 (want self-serve edits)

---

## Milestone conclusion

| Decision | Choice |
|----------|--------|
| **Recommended V2 stack** | Keep **Next.js** public site + **Sanity** (headless CMS) for owner edits |
| **Sanity plan to start** | **Free ($0)** — enough for IHC at practical upper load (see stress test) |
| **Not chosen for V2 default** | WordPress/Wix rebuild, Contentful, Strapi, custom `/admin` from scratch, Payload (unless we later want same-domain `/admin` + own DB) |
| **V1 now** | No CMS — Synctra swaps owner content; self-serve sold/scoped as **V2** |

**One-line why:** Owner gets a normal login-and-edit back office; we keep the custom scrub/motion site; Sanity hosts the content DB so we don’t run Neon/Postgres for this.

---

## What the owner asked for

Self-serve: update plans/prices, add trends/offers, change images/videos, other site content — via owner/admin login.  
~**1–2 editors** on the client side.

**Client messaging:** V1 = live impressive site + Synctra content swaps; V2 = owner panel for agreed fields (not full redesign tools).

---

## Options considered (short)

| Option | Verdict |
|--------|---------|
| Synctra-only updates (V1) | Correct **until** go-live / V2 agreement |
| **Sanity + Next.js** | **Recommended V2** |
| Payload (`/admin` in same app) | Good if we want Sun-Fitness-like `/admin` URL and will host DB + file storage |
| WordPress / Wix all-in-one | Only if rebuild / simpler site is acceptable |
| Contentful | Same pattern as Sanity; weaker free fit |
| Strapi / custom `/admin` | More ops or reinventing Sanity |

**Why not “whole site on Sanity”?** Sanity is content + assets only — not a full website builder. Public UI stays Next.js (or another front). Two layers is normal.

**Sun Fitness parallel:** They have password **`/admin` on the same domain** (agency-built). Same *idea* (private back office); not confirmed as Sanity. Matching capability ≠ cloning their stack.

---

## Sanity Free — verified quotas (as of 2026-08-12)

Source: [sanity.io/pricing](https://www.sanity.io/pricing) — **recheck before quoting a client in writing.**

| Quota | Free include | Notes |
|-------|--------------|--------|
| Price | **$0 forever** | Growth = ~$15/seat/mo if needed later |
| Seats | Up to 20 | 1–2 owners fine; Free roles = Admin + Viewer |
| Documents | **10,000** | Plans, pages, FAQs, trainers, etc. |
| **Assets storage** | **100 GB** | Photos, audio files, videos stored in Sanity |
| **Bandwidth / month** | **100 GB** | Delivery of those assets via Sanity CDN |
| API CDN requests / mo | 1M | Image/URL fetches |
| API requests / mo | 250k | Studio / non-CDN API |
| Hard caps on Free | Yes | No overages — hitting a cap blocks that usage until reset/upgrade |

**Yes — 100 GB asset storage on Free is real** (same 100 GB include appears on Growth; Growth adds paid overages / collaboration features).

**Storage vs bandwidth:** Storage = how much you *keep*. Bandwidth = how much visitors *download per month* from Sanity’s CDN. Bandwidth is the tighter risk if heavy video/audio is served from Sanity on every visit.

---

## Stress test — upper practical load

**Scenario asked:** ~**200 visits/day** (~6,000/month), many photos & videos, many pages, **page audio** (Sun Fitness–style), richer site than current long homepage.

### A) Documents (DB-like content)

| Item | Upper practical count |
|------|------------------------|
| Marketing pages / sections | 20–40 |
| Plan / price rows | 20–40 |
| Trainers, FAQs, offers, “trends” | 50–150 |
| Review entries (if stored, not embed) | 50–100 |
| **Total documents** | **≪ 500** (vs **10k** Free) |

**Verdict: documents — comfortable.**

### B) Asset storage (100 GB)

| Media | Upper practical library |
|-------|-------------------------|
| Photos (gallery, trainers, before/after, pages) | 300–800 images × ~0.5–1.5 MB ≈ **0.2–1.2 GB** |
| Page ambient audio (compressed) | 20–40 tracks × ~2–5 MB ≈ **0.05–0.2 GB** |
| Short promo / section videos | 15–40 × ~20–50 MB ≈ **0.3–2 GB** |
| Hero scrub / long bg clips | 1–3 × ~15–40 MB ≈ **0.05–0.12 GB** |
| **Total stored (practical max)** | **~1–4 GB** (wild dump still **&lt; ~10–15 GB**) |

**Verdict: 100 GB storage — yes, enough with large headroom.** A gym marketing library hitting even 20 GB would be unusually heavy.

### C) Bandwidth (100 GB/month) @ 200 visits/day

Assume ~6,000 visits/month.

| Delivery mix | Approx. Sanity CDN / visit | Monthly estimate | Free OK? |
|--------------|----------------------------|------------------|----------|
| Images + light audio only (video on site host) | 3–8 MB | ~18–48 GB | **Yes** |
| Images + audio + **one** ~15 MB video from Sanity each visit | ~20–25 MB | ~120–150 GB | **No** — over Free |
| Heavy uncached audio re-download every pageview | Can spike | Risk | Mitigate with cache / shorter loops |

**Verdict: Free stays OK if we follow media rules below.** Bandwidth fails first if hero/section **video** is streamed from Sanity on most visits — not because 100 GB storage is wrong.

### D) API CDN requests (1M/mo)

6,000 visits × ~50–100 asset requests ≈ 0.3–0.6M — usually fine if images are consolidated (srcset, not hundreds of tiny uncached hits per scroll).

---

## Media architecture rules (keep Free viable)

1. **Hero scrub / large bg video** → site hosting (`public/`, Blob, R2, etc.), **not** primary Sanity CDN delivery every visit. CMS may store a URL or we keep deploy-time assets.
2. **Sanity** → text, plans/prices, trainer & transformation **photos**, optional short clips, page audio files if modest.
3. **Instagram / Google reviews** → **embeds/widgets** preferred (near-zero Sanity storage).
4. Compress web images; keep ambient audio short/loopable and cache-friendly.
5. Monitor Sanity usage in Manage before promising “unlimited video hosting.”

---

## Other costs (Model B — client)

| Item | Sanity path |
|------|-------------|
| Sanity Free | $0 (start) |
| Domain + public site hosting | Client (e.g. Vercel Hobby may be $0 at low traffic) |
| Separate Postgres (Neon/Supabase) | **Not required** for Sanity |
| Growth plan | Only if Free caps/features insufficient later (~$15/seat/mo) |

Payload/custom path would add DB + file-bucket ops (Neon Free ~0.5 GB **text DB only**; Supabase Free ~500 MB DB + **1 GB** files, **50 MB** max upload, pause-after-idle risk) — worse fit for this case study than Sanity Free.

---

## Scope fence

- **V1 SOW:** CMS still out of scope; this doc does **not** expand unpaid V1 labour.  
- **V2:** Separate agreement / quote (setup hours + client tool fees).  
- Self-serve fields to confirm with owner: prices, plans, photos, trainers, transformations, contact — **not** full layout/motion redesign in Studio.

---

## Assumptions

- ~1–2 client editors; Beed-scale traffic (~200 visits/day stress case).  
- Media is web-compressed, not multi‑GB camera RAW archives in the CMS.  
- Sanity public Free quotas remain in the same ballpark as 2026-08-12 pricing page.  
- Page audio is optional / V2+ design choice — not committed in V1 SOW.

If traffic, video strategy, or Sanity pricing changes materially, revisit Growth vs moving heavy media off Sanity CDN.
