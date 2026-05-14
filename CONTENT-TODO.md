# Content TODO — Strapi sync against current resume

Source of truth: `davyd-kondratenko-fullstack-en.json` (Reactive Resume export, EN).

Strapi content types referenced in code: `general-information`, `social-media-links`, `experiences`, `projects` (with `skills` and `thumbnail`).

Update each item below in Strapi, then trigger an ISR revalidation webhook.

---

## 1. `general-information` (en, pl, ua locales)

| Field                             | Current site value                                                | Resume value           | Action                                                                                         |
| --------------------------------- | ----------------------------------------------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------- |
| `position`                        | "Fullstack Developer"                                             | "Full Stack Developer" | Normalize to **"Full Stack Developer"** across all locales. Mixed casing on page right now.    |
| `mainShortInfo` (About paragraph) | "...CMSdriven solutions..."                                       | "CMS-driven"           | Fix typo: insert hyphen → **"CMS-driven"**.                                                    |
| `placeOfResidence`                | "Polska, Rzeszów" (EN page)                                       | "Poland, Rzeszów"      | EN locale should read **"Poland, Rzeszów"** (currently shows Polish word "Polska" on EN site). |
| `sideShortInfo`                   | "Fullstack Developer with 3.5 years…Next.js, React, and Node.js." | matches summary        | OK (just fix "Fullstack" → "Full Stack" if used).                                              |

## 2. `social-media-links`

| Platform | Site URL                               | Should be                                            |
| -------- | -------------------------------------- | ---------------------------------------------------- |
| linkedin | `https://www.linkedin.com/` (homepage) | **`https://www.linkedin.com/in/davyd-kondratenko/`** |
| github   | `https://github.com/davidko5`          | OK                                                   |
| email    | `mailto:dajan526@gmail.com`            | OK                                                   |

**Critical** — LinkedIn link is broken (lands on LinkedIn home).

## 3. `experiences`

### 3.1 Boring Owl (current)

| Field                                   | Site                                                           | Resume                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyName`                           | "Boring Owl"                                                   | **"Boring Owl Software House"**                                                                                                                                                                                                                                                                                                                                                                                 |
| `position`                              | "Fullstack Developer"                                          | **"Full Stack Developer"**                                                                                                                                                                                                                                                                                                                                                                                      |
| `from`                                  | "9 / 2025"                                                     | **"08/2025"** (Aug, not Sep)                                                                                                                                                                                                                                                                                                                                                                                    |
| `location` (if used in dictionary/site) | missing                                                        | **"Warsaw (Remote)"**                                                                                                                                                                                                                                                                                                                                                                                           |
| `description` bullets                   | rewards platform, hotel-restaurant landing page, B2B loan site | **rewrite** to match resume bullets: <br>- SkinApe Next.js web migration, ~120K MAU, ~20% conversion lift<br>- Internal offer mgmt platform: Next.js + custom Strapi backend with role-based data isolation, lifecycle tracking, real-time status API<br>- Strapi + NestJS REST API backends across projects, DB migrations, Docker via Coolify, technical SEO, multi-platform analytics, device fingerprinting |
| `skills`                                | Shadcn, Firebase, React Query, Nest, Strapi, Next.js           | Add: TypeScript, Coolify, Docker                                                                                                                                                                                                                                                                                                                                                                                |

### 3.2 Sola

| Field                 | Site                                              | Resume                                                                                                                                                                                                                                                                           |
| --------------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `position`            | "Web Developer"                                   | **"Full Stack Developer"**                                                                                                                                                                                                                                                       |
| `till`                | "9/2025"                                          | **"08/2025"**                                                                                                                                                                                                                                                                    |
| `location`            | "Remotely"                                        | **"Kraków (Remote)"**                                                                                                                                                                                                                                                            |
| `description` bullets | mostly fine, but lacks impact numbers             | **Add quantitative metrics from resume**: 500+ active chargers, 100+ operators, daily active use; bulk API endpoints replacing per-charger requests; warranty module with DB migrations + scheduled checks + email notifications; AI-powered assistant for operators/field techs |
| `skills`              | React, Nest, Next.js, MUI, TypeScript, RTK, Redux | Add: Playwright, Flutter (legacy), Angular (legacy), AWS, React Native, NestJS, AI                                                                                                                                                                                               |

### 3.3 Milwes — OK (dates match, position OK)

### 3.4 ND Group — OK (dates match)

### 3.5 Missing: Education entry

Resume has Rzeszow University of Technology (Computer Science and Electrical Engineering, 10/2018 – 02/2023). Currently not surfaced on site.
**Action:** decide if site should expose `education` content type, or fold into JSON-LD only (already added to `alumniOf` in `structured-data.tsx`).

## 4. `projects`

### 4.1 Multi-Tenant Auth Service (MTAS)

Resume has full description. **Check if project exists in Strapi.** If missing, create:

- `name`: "Multi-Tenant Auth Service (MTAS)"
- `date`: "2025-08"
- `projectUrl`: `https://multi-tenant-auth-service-mtas-ui.vercel.app/#about`
- `description`: copy from resume (OAuth2-inspired flow, per-tenant isolation, RS256 + JWKS, HS256 internal, Next.js frontend with rewrite proxy for cookie restrictions)
- `skills`: NestJS, TypeORM, PostgreSQL, Next.js, JWT, OAuth2
- `thumbnail.alternativeText`: "MTAS dashboard screenshot"

### 4.2 Personal Portfolio Powered by Strapi

- Verify `description` matches resume (Next.js + Strapi, SSG + ISR via webhooks, Tailwind, shadcn, Framer Motion).
- `thumbnail.alternativeText`: replace empty/`"project-thumbnail"` fallback with **"Davyd Kondratenko portfolio site screenshot"**.

### 4.3 Poster

Resume description mentions "Full-stack application and production client for MTAS". Site mirror is fine but **shorten or rephrase**: "React + Redux + Express + MongoDB, full CRUD with nested comments + ratings, Playwright e2e, automated CI/CD."

- `thumbnail.alternativeText`: **"Poster blog app screenshot"**.

## 5. Image `alternativeText` (all projects)

Every project on the site renders `alt="project-thumbnail"` because Strapi `alternativeText` is empty or missing. **Set descriptive `alternativeText` per Strapi Media asset**:

| Project            | Suggested alt                                 |
| ------------------ | --------------------------------------------- |
| MTAS               | "Multi-Tenant Auth Service dashboard"         |
| Personal Portfolio | "Davyd Kondratenko portfolio site screenshot" |
| Poster             | "Poster blog app screenshot"                  |
| (any others)       | descriptive of UI content                     |

## 6. Localization parity (pl, ua)

Verify `/pl` and `/ua` actually serve translated copy in `generalInformation.mainDetailsInfo`, `mainShortInfo`, experience `description`, project `description`. If they fall back to EN, either:

- translate, or
- temporarily `noindex` the locale until ready.

## 7. Nice-to-have content additions

- Section: "Open to" tags (Remote, Hybrid, EU timezone, etc.) — boosts recruiter scanning.
- Section: "Languages spoken" (EN C1, PL C1, UA Native).
- FAQ block (drives AI Overviews / ChatGPT citation):
  - Q: What does Davyd Kondratenko do?
  - Q: Where is Davyd located?
  - Q: What is Davyd's tech stack?
  - Q: Is Davyd open to remote work?
  - Mark up with `FAQPage` JSON-LD once content exists.
- Date stamp ("Last updated: YYYY-MM") near hero — AI freshness signal.

---

## 8. Resume PDF metadata (Cloudinary)

The PDF at `https://res.cloudinary.com/dj5h7oym9/image/upload/v1772397769/Davyd_Kondratenko_EN_10b097d4c1.pdf` has no embedded Title/Author/Subject/Keywords. PDFs surface in Google Search and AI tools — metadata helps citation.

Manual steps (one-off):

```bash
# 1. Download
curl -sL "https://res.cloudinary.com/dj5h7oym9/image/upload/v1772397769/Davyd_Kondratenko_EN_10b097d4c1.pdf" -o resume.pdf

# 2. Inject metadata (requires `exiftool` — brew install exiftool)
exiftool -overwrite_original \
  -Title="Davyd Kondratenko — Full Stack Developer Resume" \
  -Author="Davyd Kondratenko" \
  -Subject="Full Stack Developer CV — React, Next.js, NestJS, Node.js" \
  -Keywords="Full Stack Developer, Next.js, React, NestJS, TypeScript, NodeJS, Strapi, Rzeszów, Poland" \
  -Creator="Davyd Kondratenko" \
  resume.pdf

# 3. Re-upload to Cloudinary (or via Strapi if you swap the asset there)
# 4. Replace the URL in Strapi `general-information.resumeLink`
```

## Summary of critical content fixes

1. **LinkedIn URL** in `social-media-links` is wrong (homepage instead of profile).
2. **Boring Owl** company name + position + start month mismatch resume.
3. **Sola** position label ("Web Developer" vs "Full Stack Developer") + end month.
4. **"CMSdriven" typo** in About.
5. **"Polska"** appears on EN-locale site (should be "Poland").
6. **All image alt** texts are generic placeholder.
7. **MTAS** project likely missing.
8. **Quantitative impact metrics** (~120K MAU, 500+ chargers, 100+ operators, ~20% conversion lift) missing from experience descriptions.
