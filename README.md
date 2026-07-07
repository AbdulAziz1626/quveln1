# Quvel — AI Receptionist Website

Production Next.js site for Quvel, an AI receptionist for service businesses.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- Statically generated — deploys anywhere, optimized for Vercel

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build and run production locally:

```bash
npm run build
npm run start
```

Lint:

```bash
npm run lint
```

## Configuration — the one file you edit

All business values live in **`src/config/site.ts`**. Change them there and they update everywhere on the site:

| Field          | What it controls                                             |
| -------------- | ----------------------------------------------------------- |
| `liveAiTel`    | The number every "Call the AI Live" button dials            |
| `demoUrl`      | The Cal.com link every "Book a Demo" button opens (new tab) |
| `contactEmail` | Where the contact form sends, shown on Contact/Privacy/Terms|
| `url`          | Your production domain (used for canonical URLs + sitemap)  |

Nothing is hardcoded elsewhere — search the repo and the phone number appears only in this file.

## Project structure

```
src/
  app/
    layout.tsx              Root layout: fonts, metadata, nav, footer
    page.tsx                Homepage
    globals.css             Tailwind + animations
    sitemap.ts              Auto-generated sitemap (all routes + industries)
    robots.ts               robots.txt
    not-found.tsx           404 page
    contact/page.tsx        Contact page
    privacy/page.tsx        Privacy Policy
    terms/page.tsx          Terms of Service
    industries/[slug]/page.tsx   6 industry pages (statically generated)
  components/
    Navbar.tsx  Footer.tsx  Hero.tsx  CallCard.tsx  Faq.tsx
    ContactForm.tsx  ScrollReveal.tsx  LegalLayout.tsx
    Icon.tsx    ui.tsx      sections.tsx
  config/
    site.ts                 SINGLE SOURCE OF TRUTH
  data/
    industries.ts           All industry + FAQ content, typed
```

## Industry pages

The six industry pages (`auto-repair`, `hvac`, `plumbing`, `electrical`, `roofing`, `dental`) are generated from `src/data/industries.ts` via `generateStaticParams`. To add another industry, add one object to that array — its page, sitemap entry, and homepage card appear automatically.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), **Add New → Project**, and import the repo.
3. Vercel auto-detects Next.js. No settings to change. Click **Deploy**.
4. To use your domain: Project → **Settings → Domains** → add your domain, then add the DNS records Vercel shows you at your registrar.

Before going live, update `src/config/site.ts`:

- Confirm `liveAiTel` is correct.
- Set `url` to your real domain.
- Create the `contactEmail` inbox (`hello@getquvel.com`) so form messages don't bounce.

## Notes

- **Fonts:** the project uses `next/font` (Inter + Space Grotesk), which downloads and self-hosts the fonts at build time. This requires network access to Google Fonts *during `npm run build`*. On Vercel this is automatic. If you ever build in a locked-down offline environment and it fails on "Failed to fetch font," that's the only cause — swap the `next/font` import in `src/app/layout.tsx` for a `<link>` to Google Fonts in the `<head>` and it builds offline.
- The contact form uses `mailto:` (opens the visitor's email app). To capture submissions server-side later, swap `ContactForm.tsx` to POST to a form endpoint (Formspree, Resend, or a Next.js route handler).
- Privacy and Terms are general starting templates — have them reviewed by a professional before relying on them.
