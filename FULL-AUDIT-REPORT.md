# SEO Audit Report — portfolio.kondraten.dev/en

**Date:** 2026-05-14
**Target:** https://portfolio.kondraten.dev/en
**Business type:** Personal portfolio / Developer CV (single-page, multi-locale)
**Stack:** Next.js App Router on Vercel
**Locales:** en (canonical), pl, ua

---

## Executive Summary

**SEO Health Score: 68 / 100**

Solid foundation (canonical, hreflang, Person schema, HSTS, Next/Image, semantic headings) but several critical and high-priority issues drag the score down. The biggest blocker is soft-404 behavior: every unknown path 307-redirects to `/en` and returns 200, which can cause index bloat or soft-404 flagging in Search Console. Social/AI sharing is broken because `og:image` is absent. `llms.txt` is missing (request 307s to the home page).

### Top 5 critical issues

1. **Soft-404 on unknown paths** — `/anything-random` → 307 to `/en` (200). Should return 404.
2. **`og:image` missing** — only `twitter:image` exists. Social/Slack/LinkedIn previews break.
3. **`llms.txt` not served** — request redirects to HTML. AI crawlers cannot discover it.
4. **PageSpeed / CrUX not verified** — PSI quota hit. Field CWV unknown.
5. **Security headers missing** — only HSTS. No CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.

### Top 5 quick wins

1. Add `og:image` (1280×640 WebP/PNG with name + title).
2. Add `og:type=profile`, `og:site_name`.
3. Replace `alt="project-thumbnail"` with descriptive alt per project.
4. Serve a real `/llms.txt` (static file in `public/`).
5. Add Next.js `not-found.tsx` with proper 404 status.

---

## Technical SEO

| Check            | Status    | Notes                                                                                                  |
| ---------------- | --------- | ------------------------------------------------------------------------------------------------------ |
| `robots.txt`     | OK        | `Allow: /`, sitemap declared                                                                           |
| `sitemap.xml`    | Thin      | Only 3 root locale URLs, no section/project URLs, `<lastmod>` static                                   |
| Canonical        | OK        | `https://portfolio.kondraten.dev/en`                                                                   |
| hreflang         | Mostly OK | `en`, `pl`, `uk-UA`. Path `/ua` mismatches BCP-47 `uk` — works, but `uk` clearer. `x-default` missing. |
| Robots meta      | OK        | `index, follow` + Googlebot directives                                                                 |
| HTTPS / HSTS     | OK        | `max-age=63072000`                                                                                     |
| 404 handling     | **FAIL**  | Unknown paths 307→`/en`, returns 200. Soft-404 risk.                                                   |
| Root redirect    | OK-ish    | `/` → 307 to `/en`. Use 308 (permanent) for stability.                                                 |
| Security headers | Weak      | No CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.                                   |
| Server           | Vercel    | Prerender hit, cache HIT                                                                               |
| Core Web Vitals  | Unknown   | PSI 429 during audit. Re-run later.                                                                    |

### Crawlability

- All 3 locale URLs reachable, 200.
- Internal hrefs are anchor-only (`#aboutMe`, `#experience`, `#projects`) — flat IA, fine for single-page.
- External: GitHub, LinkedIn (generic /), Cloudinary PDF, mailto.
- **LinkedIn link** points to `https://www.linkedin.com/` not personal profile. Broken UX + lost signal.

### Indexability

- Sitemap lists only 3 URLs; consistent with single-page model.
- No `noindex` on locale roots.
- Soft-404 will cause Google to index junk URLs as duplicates of `/en`.

---

## Content Quality

- **Word count:** ~739 visible words. Adequate for portfolio, below threshold for AI Overviews citation density.
- **E-E-A-T signals:**
  - Experience: roles + dates + companies (Boring Owl, Sola). Good.
  - Expertise: tech stack itemized.
  - Authoritativeness: LinkedIn/GitHub links (LinkedIn broken). No publications/talks.
  - Trust: real email, phone, address in schema. Good. No HTTPS-form/contact issues.
- **Readability:** Short fragments suit portfolio. Headings clear.
- **Thin content:** Single page so N/A.
- **Duplicates:** /en, /pl, /ua handled via hreflang. Confirm pl + ua content is genuinely translated, not English.
- **AI citability:** No FAQ/Q&A blocks. No date stamps on experience-line items beyond ranges. Quote-friendly passages limited.

---

## On-Page SEO

| Element          | Status      | Notes                                                                                                                                           |
| ---------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `<title>`        | Good        | "Davyd Kondratenko - Fullstack Developer \| Davyd Kondratenko" — repeats name. Drop trailing `\| Davyd Kondratenko`, replace with location/USP. |
| meta description | Good        | 155 chars approx. Mentions stack + EV domain.                                                                                                   |
| keywords meta    | Useless     | 30+ comma-separated keywords. Ignored by Google. Remove to reduce noise.                                                                        |
| H1               | Good        | Single H1 "Davyd Kondratenko"                                                                                                                   |
| H2 hierarchy     | Good        | About, Experience, Projects, Let's work together                                                                                                |
| Internal links   | Anchor-only | Fine for one-pager                                                                                                                              |
| Image alt        | Weak        | All `alt="project-thumbnail"`. Replace with project name + context.                                                                             |

---

## Schema / Structured Data

Current: `Person` only.

```json
{ "@type":"Person", "name":"Davyd Kondratenko", ..., "worksFor":{"@type":"Organization","name":"Sola"} }
```

**Issues / opportunities:**

- `Person.worksFor` says Sola but visible content says Boring Owl (current role 9/2025–Present). **Schema/content mismatch — fix.**
- Missing `WebSite` schema with `SearchAction` (N/A for portfolio) → at minimum `WebSite` with `name`, `url`, `inLanguage`.
- Missing `ProfilePage` wrapper (recommended for personal sites).
- Missing `BreadcrumbList` — not critical for one-pager.
- Project list not marked up as `CreativeWork`/`SoftwareSourceCode`. Adding would help AI cite projects.
- `Person.image`, `email`, `telephone`, `sameAs` correctly populated.

---

## Performance (CWV)

PSI returned **429 quota exceeded** during audit. Cannot report lab/field LCP/INP/CLS.

**Signals from HTML:**

- 4 woff/woff2 fonts preloaded — heavy. Audit whether all 4 are used above-the-fold. Each ≥ 20KB.
- Single CSS bundle, deferred JS chunks.
- Vercel cache HIT — good TTFB on cached.
- Next/Image used with `srcSet` 1x/2x — good. `loading="lazy"` on below-fold thumbnails — good.
- No `priority` flag visible on hero/profile image — verify LCP candidate gets `priority`.

**Re-run later:** `https://pagespeed.web.dev/?url=https%3A%2F%2Fportfolio.kondraten.dev%2Fen`

---

## Images

- 4 images on homepage, all `<img>` with `alt`. Pass.
- Alt text generic: `"project-thumbnail"` x4. **Fix:** descriptive alts per project ("Menu Manager admin dashboard screenshot", etc.).
- Cloudinary origin via Next/Image proxy — good.
- No explicit `priority` for above-fold image. Confirm profile-pic.webp gets `<Image priority>`.

---

## AI Search Readiness (GEO)

| Signal                                                           | Status                                                            |
| ---------------------------------------------------------------- | ----------------------------------------------------------------- |
| `llms.txt`                                                       | **Missing** (307 to HTML)                                         |
| Person schema                                                    | Present                                                           |
| FAQ / Q&A markup                                                 | Missing                                                           |
| Crawler access (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot) | Allowed (`robots.txt` is `Allow: /`)                              |
| Citable passages                                                 | Weak — short fragments, no clear quote-blocks with claims + dates |
| Brand entity consistency                                         | Good (name, role, location consistent)                            |
| Last-updated stamp                                               | Missing on page (helpful for AI freshness)                        |

**Recommendation:** add `/llms.txt` with bio, contact, projects list, and link to PDF resume. Add an FAQ section ("What does Davyd do?", "Where is Davyd located?", "Tech stack?") with `FAQPage` schema.

---

## Multilingual

- Three locales declared. Confirm /pl and /ua content is genuinely localized (not English copy).
- `hreflang="uk-UA"` valid but unusual; `uk` is enough.
- `x-default` missing — add pointing to `/en`.
- No locale switcher visible in HTML head (only via hreflang). UI switcher exists? Verify in browser.

---

## Scoring Breakdown

| Category                 | Weight   | Score | Weighted |
| ------------------------ | -------- | ----- | -------- |
| Technical SEO            | 22%      | 60    | 13.2     |
| Content Quality          | 23%      | 72    | 16.6     |
| On-Page SEO              | 20%      | 75    | 15.0     |
| Schema / Structured Data | 10%      | 70    | 7.0      |
| Performance (CWV)        | 10%      | 65\*  | 6.5      |
| AI Search Readiness      | 10%      | 55    | 5.5      |
| Images                   | 5%       | 80    | 4.0      |
| **Total**                | **100%** |       | **~68**  |

_Performance estimated — re-run PSI for confirmed field score._
