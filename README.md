# Abhishek Singh Rajawat  — Portfolio

A cinematic, dark-futuristic portfolio built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, **GSAP**, and **Framer Motion**.

## ✦ Features

- **Hero** — GSAP timeline with staggered reveals, floating orbs, and scanline effects
- **About** — Framer Motion scroll-triggered fade-ins with parallax
- **Skills** — Animated cards with per-category filtering and progress bars
- **Experience** — GSAP horizontal scrolling timeline (pinned section)
- **Projects** — Dynamic routing (`/projects/[slug]`), hover effects, filter toggle
- **Contact** — Animated form with social links
- **Custom cursor** — Magnetic, smooth-following cursor with hover states
- **Glitch text** — Scramble animation on hover
- **Magnetic buttons** — Physics-based cursor attraction

## ✦ Folder Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts & cursor
│   ├── page.tsx            # Home page (all sections)
│   ├── globals.css         # Global styles, CSS vars, animations
│   ├── not-found.tsx       # 404 page
│   └── projects/[slug]/    # Dynamic project detail pages
│       └── page.tsx
├── components/
│   ├── Navbar.tsx          # Fixed nav with mobile menu
│   ├── Hero.tsx            # GSAP animated hero
│   ├── About.tsx           # Framer Motion about section
│   ├── Skills.tsx          # Animated skill cards
│   ├── Experience.tsx      # GSAP horizontal scroll
│   ├── Projects.tsx        # Project grid with filters
│   ├── Contact.tsx         # Contact form + social
│   ├── Footer.tsx          # Footer
│   ├── ProjectDetail.tsx   # Project detail view
│   └── ui/
│       ├── CustomCursor.tsx
│       ├── GlitchText.tsx
│       ├── MagneticButton.tsx
│       └── SectionHeader.tsx
├── data/
│   ├── projects.ts         # Project data
│   ├── skills.ts           # Skills data
│   └── experience.ts       # Work history data
└── lib/
    └── utils.ts            # cn(), lerp(), clamp() utilities
```

## ✦ Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## ✦ Customization

1. **Personal info** — Edit `data/projects.ts`, `data/skills.ts`, `data/experience.ts`
2. **Colors** — Modify CSS variables in `app/globals.css` and `tailwind.config.ts`
3. **Fonts** — Update the Google Fonts import in `globals.css` and `--font-*` variables
4. **Sections** — Add/remove sections in `app/page.tsx`

## ✦ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 | Framework (App Router) |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| GSAP + ScrollTrigger | Hero animations, horizontal scroll |
| Framer Motion | Scroll-triggered reveals, transitions |
| Lucide React | Icons |

## ✦ Performance Notes

- All animation components use `'use client'` only where needed
- Static params generated at build time for project detail pages
- GSAP contexts cleaned up in useEffect return functions
- Framer Motion `once: true` for viewport animations to avoid re-triggering

## ✦ Deployment

Optimized for **Vercel** deployment:

```bash
npx vercel deploy
```

Or any Node.js hosting platform via `npm run build && npm start`.
# abhi_dev_lands
