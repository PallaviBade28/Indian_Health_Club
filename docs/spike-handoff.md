# Spike handoff — gym website Explore POC

**Related code:** `prototypes/gym-website-poc/`  
**Mode at time of spike:** Explore — not production-ready  
**Client brand now:** Indian Health Club (Beed) — spike used Sun Fitness–style **vibe reference**, not IHC brand assets

## Purpose of spike

Answer: can we get a cinematic fixed background + readable scrolling foreground for a premium gym marketing site?

## What was validated

- [x] Fixed full-viewport background + scroll-scrub video approach — **from spike**
- [x] Scrolling sections readable over background (desktop + ~375px mobile) — **from spike**
- [x] Mobile scroll behaviour checked (~375px) — **from spike**
- [x] Stack baseline (Next.js 16 App Router, Tailwind 4, Motion, IntersectionObserver) — **from spike**; see POC README + dump below
- [x] `npm run dev` and `npm run build` pass — **from spike**
- [x] No parallax translate on background layer (fixed; scroll drives video time only) — **from spike** (owner feedback during spike)

## Explicitly out of spike scope

- Full multi-page site, CMS, forms backend, SEO beyond basics, deploy/domain
- Real IHC logo, photos, pricing, trainers (now available under `Client 3/assets/` for Deliver)

## Reuse guidance for Client 3

| Option | When |
|--------|------|
| Evolve POC into Deliver codebase | After short SOW; brand kit + copy from IHC; QA before go-live |
| Fresh Deliver scaffold informed by POC | If POC is too spike-shaped / hard to harden |
| Keep POC as demo only | If stack choice changes in discovery |

**Do not** treat spike mock copy or Sun Fitness references as IHC requirements.

## Known follow-ups from POC README

- [x] Re-encode hero video with frequent keyframes for smoother scrub — `Client 3/prototype/public/gym_ai_scrub.mp4` (2026-08-07)
- Self-host video + poster; performance pass
- Real WhatsApp/phone CTAs
- Brand accent from IHC logo (confirm with owner)

## Agent dump zone

### 2026-08-01 — Explore spike agent (gym-website-poc session)

**POC location:** `prototypes/gym-website-poc/` — **do not move or rewrite**; reference only for Client 3 Deliver fit-check.

**Run / demo:** `cd prototypes/gym-website-poc && npm install && npm run dev` → http://localhost:3000 — **from spike**

#### Stack (spike versions)

| Layer | Choice | Tag |
|-------|--------|-----|
| Framework | Next.js **16.2.11** App Router + TypeScript | from spike |
| Styling | Tailwind CSS **4** | from spike |
| Animation | CSS + `IntersectionObserver` (scroll reveal); **Motion** (`motion/react`) hero entrance only | from spike |
| Icons | Lucide React | from spike |
| Font | Geist via `next/font` | from spike |
| **Not used** | WordPress, Three.js, GSAP, Lenis, shadcn, CMS, API routes, forms backend | from spike |

#### Architecture — background (core spike question)

- **Fixed** full-viewport layer (`position: fixed`, `z-0`); foreground scrolls at `z-10` — **from spike**
- **Scroll-scrub video:** page scroll progress (0→1) maps to `video.currentTime`; video **paused**, no autoplay loop — **from spike** (matches competitor *feel*, not a looping bg)
- **No parallax translate** on bg/video — **from spike** (explicit owner feedback; parallax was tried then removed)
- Fallback chain if local video fails: animated gradient orbs + dark overlay — **from spike**
- Video source priority in `lib/theme.ts`: `/gym_ai_2.mp4` → `/gym_ai.mp4` → webm variants → `/hero-loop.mp4` → Mixkit remote URL — **from spike**
- Scrub smoothing: continuous `requestAnimationFrame` + lerp + `fastSeek()` when available (`hooks/useScrollScrubVideo.ts`) — **from spike**

#### Spike page structure (single route — throwaway IA)

`app/page.tsx` only — **from spike**; not IHC sitemap:

| Block | Notes |
|-------|-------|
| Sticky nav | Logo text "GYM POC", anchor links, "Join Now" CTA |
| Hero | Motion stagger entrance; scroll hint |
| About | Glass panel, `#about` |
| Services | 3 glass cards (Personal Training, Group Classes, Recovery) |
| Stats strip | Count-up (`AnimatedStat`) — mock numbers |
| Contact | Placeholder phone + WhatsApp stub `href="#"` |
| Extras | Scroll progress bar, glow dividers, sticky WhatsApp FAB |

#### Key file paths (reusable patterns)

| Path | Reuse for Deliver? |
|------|-------------------|
| `components/BackgroundLayer.tsx` | **Pattern reusable** — rewire to IHC video + brand |
| `hooks/useScrollScrubVideo.ts` | **Reusable** — may need tuning per video encode |
| `hooks/useScrollY.ts` | **Reusable** (scroll progress bar) |
| `components/SectionReveal.tsx` | **Reusable** — adapted from Synctra `website/components/SectionReveal.tsx` |
| `components/AnimatedStat.tsx` | **Optional** — adapted from Synctra `website/components/AnimatedStat.tsx` |
| `components/Navbar.tsx`, `Hero.tsx`, section components | **Throwaway** — mock copy/structure |
| `lib/theme.ts` | **Throwaway** — placeholder accent `#00ff88`, not IHC |
| `app/globals.css` | **Partial reuse** — glass-card, orb animations; colors must change for IHC |
| `public/gym_ai_2.mp4`, `public/gym_ai.mp4` | **Spike-only placeholders** — not IHC brand footage; do not ship as client assets |

#### Visual design (spike placeholder — not IHC brand)

- Dark luxury theme: `#020202`–`#0a0a0a` — **from spike**
- Placeholder accent: electric green `#00ff88` — **from spike**; **must replace** with colors from `Client 3/assets/Logo.png` after owner confirm — **assumed**
- Glass cards: `backdrop-blur`, `border-white/10`, hover glow — **from spike**
- Film grain overlay, drifting accent orbs — **from spike**

#### Gotchas / lessons

| Issue | Mitigation | Tag |
|-------|------------|-----|
| React hydration error when browser extensions inject attrs on `<video>` (e.g. "webboost") | Client-only video mount after hydration; `suppressHydrationWarning` | from spike |
| Scroll-scrub feels **steppy** on AI-exported MP4s | Sparse keyframes — acceptable for spike; **re-encode for Deliver**: `ffmpeg -i in.mp4 -c:v libx264 -g 15 -keyint_min 15 -crf 23 out.mp4` | from spike |
| Wrong video path (`hero-loop.mp4`) caused invisible video | Candidate list + error fallback chain | from spike |
| Heavy overlay hides video | Lighter overlay when video ready (`bg-black/25–30`) | from spike |
| Static files added while dev server running | Restart `npm run dev` after dropping new video in `public/` | from spike |

#### Reuse vs throwaway (Deliver decision)

| Reuse | Throwaway / rebuild |
|-------|---------------------|
| Scroll-scrub + fixed bg pattern | All mock copy, "GYM POC" branding |
| SectionReveal, scrub hook, glass CSS patterns | Single-page IA — IHC needs multi-page V1 |
| Sticky nav / WhatsApp FAB **pattern** | Placeholder phone/WhatsApp links |
| Synctra-adapted animation approach | Spike accent color and dark theme as-is |

**Recommendation:** Treat POC as **UX/tech proof**, not production codebase — evolve or fresh-scaffold under Client 3 after SOW; run QA matrix before go-live — **assumed** (matches `07-client-3-gym` rule).

#### Spike status

- Spike marked **done** 2026-07-24 in `operations/CONTEXT.md` — **confirmed**
- Tied to **Client 3 — Indian Health Club** 2026-08-01 — **confirmed**

### 2026-07-22 — Competitor analysis & Deliver scope planning (pre-/parallel spike)

**Context:** Sun Fitness Beed (sunfitnessgym.com) analyzed as **vibe/level reference only** — not IHC brand, copy, or feature checklist. **WordPress is not in scope for Client 3** (that stack belongs to other clients only) — **confirmed**.

#### What “match competitor level” means for IHC Deliver

| Dimension | Sun Fitness (reference) | IHC V1 target | Tag |
|-----------|----------------------|---------------|-----|
| Visual polish | Dark luxury, glass, glow, scroll motion | Same *feel*, IHC colors from `assets/` | assumed |
| Homepage depth | ~15 sections, long scroll | Shorter — **few pages** per kickoff | confirmed |
| Route count | 20+ URLs | **4–8 pages** MVP | assumed |
| Scroll-scrub hero | Competitor uses fixed bg + motion | **Spike validated** scroll-scrub video | from spike |
| Backend | `/api`, password `/admin` CMS | **Skip V1** — static/config or simple forms | confirmed |
| Cafeteria ordering | Full menu + cart | **Skip** | assumed |

#### Competitor tech (informed spike — not copied verbatim)

| Observation | Tag |
|-------------|-----|
| Next.js App Router + Turbopack (from HTML crawl) | from spike |
| Tailwind-style utility classes, Lucide icons, `next/image` | from spike |
| Motion mostly via CSS transitions + IntersectionObserver — **no GSAP/Three.js found in homepage HTML** | from spike |
| Footer credits **PraiseArray (Tanmay Bora)** — agency-built custom site | from spike |
| PWA manifest, JSON-LD, OG tags | from spike |

#### Recommended Deliver stack (post–fit-check)

| Layer | Choice | Tag |
|-------|--------|-----|
| Framework | Next.js 16 App Router + TypeScript | from spike |
| Styling | Tailwind CSS 4 | from spike |
| Animation | IntersectionObserver reveals + Motion for hero; scroll-scrub optional per owner | from spike |
| Forms | Formspree or Resend + API route (V1 contact only) | assumed |
| Hosting | Vercel Hobby — client owns domain (Model B) | assumed |
| Content V1 | TS/JSON config files — no CMS unless discovery demands | assumed |
| Database | None for V1 | confirmed |

**Cross-repo patterns (read-only):** Synctra `website/components/SectionReveal.tsx`, `AnimatedStat.tsx`, `StickyWhatsApp.tsx` — same patterns adapted in POC — **from spike**.

#### Scope tiers for IHC Deliver (after spike)

**V1 / MVP (= Tier 1 + Tier 2) — locked 2026-08-01**

- Custom dark theme with **IHC** orange/black/white from `Client 3/assets/`
- **Long homepage** (Sun Fitness–similar depth or slightly shorter)
- Scroll-scrub hero **or better** — futuristic / techy-AI / aesthetic (no static hero)
- Sticky nav, glass cards, scroll reveals, accent glow, a bit flashy
- Pricing tabs (poster rates), FAQ, trainer cards (placeholders OK), before/after slider
- BMI calculator, photo marquee, reviews strip, scroll progress, floating WhatsApp
- Supporting routes as needed (About / Pricing / Contact / legal stubs)
- Mobile-first QA — **confirmed**

**V2 (= old Tier 3) — skip until later**

- Cafeteria/menu ordering, admin CMS, AI chatbot, WhatsApp automation, Marathi, Fitpass, 15+ long-form program pages — **confirmed**

#### Effort estimates (Saloni + AI; owner provides copy/photos)

| Scope | Hours | Calendar (part-time ~12h/wk) | Tag |
|-------|-------|-------------------------------|-----|
| Spike (bg scroll only) | 3–5 | Half day | from spike |
| Thin brochure (old Tier 1 only) | 35–55 | 3–4 weeks | superseded — not V1 target |
| **V1 / MVP (Tier 1+2)** | **60–90** | **5–8 weeks** part-time | confirmed target |
| Full Sun Fitness clone | 120–180+ | Agency-scale — still avoid exact clone | assumed |

#### POC → Deliver decision tree

| Path | When | Tag |
|------|------|-----|
| Evolve `prototypes/gym-website-poc/` | Owner wants scroll-scrub hero; SOW signed; video re-encoded | from spike |
| Fresh scaffold under `Client 3/` | POC too spike-shaped or stack changes | assumed |
| POC = demo only | Owner prefers simpler hero with static IHC photos | assumed |

#### Production hardening checklist (from spike + planning)

- [ ] Re-encode hero video: frequent keyframes (FFmpeg `-g 15 -keyint_min 15`) — **from spike**
- [ ] Self-host video + poster; lighter overlay tuned for IHC footage — **from spike**
- [ ] Replace `#00ff88` accent with palette from `Logo.png` — **assumed**
- [ ] Real WhatsApp deep link + phone — **open**
- [ ] `operations/templates/qa-test-matrix.md` before go-live — **confirmed**
- [ ] Short written SOW even at ₹0 Synctra labour — **confirmed**

#### Libraries explicitly deferred (not needed to match competitor feel)

Lenis, GSAP, Three.js, Spline, shadcn (until FAQ/forms need), CMS, WordPress — **from spike** / **assumed**
