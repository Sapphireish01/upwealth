# UpWealth Magazine — Next.js Website

## Stack
- **Next.js 14** (App Router) — SSG / ISR ready
- **TypeScript** — full type coverage
- **Tailwind CSS** — brand tokens in `tailwind.config.ts`
- **Framer Motion** — orbital animation, fade-up reveals
- **React Hook Form + Zod** — validated contact form
- **Lucide React** — icons

## Project Structure

```
upwealth-magazine/
├── app/
│   ├── layout.tsx           # Root layout + metadata
│   ├── page.tsx             # Home page
│   ├── globals.css          # Tailwind + brand CSS
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   └── api/
│       └── contact/
│           └── route.ts     # POST /api/contact (wire email here)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── HeroSection.tsx      # Headline + fanned covers
│   │   ├── RadialShowcase.tsx   # Orbital magazine display ⭐
│   │   └── AboutSection.tsx
│   └── contact/
│       ├── ContactForm.tsx      # RHF + Zod validated
│       └── ContactMethods.tsx   # Chat / Call / Email cards
├── data/
│   └── index.ts             # Magazine issues, nav, social, contact methods
├── lib/
│   ├── schemas.ts           # Zod schemas
│   └── utils.ts             # polarToCartesian, evenAngles, cn()
├── types/
│   └── index.ts             # TypeScript interfaces
└── public/
    └── images/
        └── covers/          # Drop issue cover images here (issue-001.jpg …)
```

## Getting Started

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run start        # serve production build
```