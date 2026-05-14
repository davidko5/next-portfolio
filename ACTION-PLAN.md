 # Action Plan — portfolio.kondraten.dev

Prioritized fixes. Effort: S = <1h, M = 1–4h, L = >4h.

## Critical (fix now)

### C1. Fix soft-404 — return real 404 for unknown paths

- **Problem:** `/anything` → 307 → `/en` (200). Google sees infinite duplicates of homepage.
- **Fix:** Add `app/[lang]/not-found.tsx` AND `app/not-found.tsx`. Ensure middleware doesn't rewrite unknown paths to default locale. In `middleware.ts` only handle locale-prefixed paths, let unknown 404.
- **Verify:** `curl -I https://portfolio.kondraten.dev/foo` → `404`.
- Effort: M

### C2. Add `og:image`

- **Problem:** No `og:image`. LinkedIn/Slack/Discord/X previews degraded.
- **Fix:** Add to `metadata.openGraph.images` in root layout. Use 1200×630 PNG/WebP, < 300KB. Next.js `opengraph-image.tsx` (route handler) works well.
- Effort: S

### C3. Schema content drift — `worksFor` wrong

- **Problem:** JSON-LD says `worksFor: Sola` but visible content shows current job = Boring Owl (9/2025–Present).
- **Fix:** Update `Person.worksFor.name` to `"Boring Owl"` or make it dynamic from data source.
- Effort: S

## High (fix within 1 week)

### H1. Serve real `/llms.txt`

- **Fix:** Add `public/llms.txt` (Next.js serves `public/` as static). Include name, role, contact, projects, PDF resume URL.
- **Verify:** `curl -I /llms.txt` → 200 `text/plain`.
- Effort: S

### H2. Security headers

- **Fix:** Add to `next.config.js` headers():
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - `Content-Security-Policy` (start with `default-src 'self' https:; img-src 'self' data: https://res.cloudinary.com https://portfolio.kondraten.dev; script-src 'self' 'unsafe-inline' https://vercel.live` — tune from real load).
- Effort: M

### H3. Descriptive image alt

- **Fix:** Replace all `alt="project-thumbnail"` with project-specific text (e.g. `alt="Menu Manager admin dashboard"`). Data lives in projects array.
- Effort: S

### H4. Fix LinkedIn link

- **Problem:** Footer links to `https://www.linkedin.com/` (homepage).
- **Fix:** Use `https://www.linkedin.com/in/davyd-kondratenko/`.
- Effort: S

### H5. Re-run PageSpeed Insights

- **Fix:** Run mobile + desktop. Target LCP < 2.5s, INP < 200ms, CLS < 0.1. Validate hero image has `priority`.
- Effort: S

## Medium (fix within 1 month)

### M1. Expand `og` / metadata

- Add `og:type=profile`, `og:site_name="Davyd Kondratenko"`, `og:image` (see C2), `twitter:site`, `twitter:creator`.
- Effort: S

### M2. Sitemap hygiene

- Use Next.js `app/sitemap.ts` to make `<lastmod>` dynamic (file mtime or build time).
- Add `x-default` hreflang in HTML head pointing to `/en`.
- Effort: S

### M3. Add FAQPage schema

- 3–5 Q&A: "What does Davyd do?", "Where is Davyd located?", "What tech stack?", "Open to remote work?".
- Helps AI Overviews + ChatGPT citation.
- Effort: M

### M4. Add `ProfilePage` + `WebSite` schema

- Wrap existing `Person` in `ProfilePage.mainEntity`. Add `WebSite` with `inLanguage`.
- Mark project list as `ItemList` of `CreativeWork`/`SoftwareSourceCode` with `codeRepository`.
- Effort: M

### M5. Title tag cleanup

- Current: `Davyd Kondratenko - Fullstack Developer | Davyd Kondratenko` (duplicates name).
- Suggest: `Davyd Kondratenko — Fullstack Developer (React, Next.js, NestJS) | Rzeszów, Poland`.
- Effort: S

### M6. Remove `<meta name="keywords">`

- Ignored by Google, leaks intent signals, makes scraping easier.
- Effort: S

### M7. Localize pl + ua content

- Verify `/pl` and `/ua` are not English fallback. If they are, translate or `noindex` until ready.
- Effort: L

### M8. Add date stamps

- Show "Updated: 2026-05" near hero. Boosts AI freshness signal + user trust.
- Effort: S

## Low (backlog)

### L1. Add blog/posts section

- Even 3–5 articles on niche topics (EV charger UI patterns, Next.js + NestJS auth) → long-tail traffic + topical authority.
- Effort: L

### L2. Root redirect → 308

- `/` 307 → `/en`. Change middleware to 308 (permanent) so engines pass equity.
- Effort: S

### L3. PDF resume metadata

- Cloudinary-hosted PDF has no Title/Author metadata in PDF. Add via pdftk/pikepdf.
- Effort: S

### L4. JSON-LD typo prevention

- Add a build-time JSON-LD validator (e.g. `schema-dts` types or `@schemaorg/schema-types`).
- Effort: M

### L5. Use `priority` on hero image

- Confirm/add `<Image priority />` on the profile pic to lock LCP.
- Effort: S

---

## Implementation roadmap

**Week 1:** C1, C2, C3, H1, H4, H3, M5, M6, L5
**Week 2:** H2, H5, M1, M2
**Month 1:** M3, M4, M8, L2, L3
**Backlog:** M7, L1, L4
