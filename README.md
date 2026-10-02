# The Living Blueprint — Karthik's Portfolio

A developer portfolio that feels like an engineered system, built with production-grade tools and deployed with real CI/CD.

## 🎯 Vision

"A developer portfolio you navigate like a system diagram, built with the same rigour as production software."

## ✨ Features

- **Distinctive Design**: Ink-dark canvas with acid-lime accent, blueprint grid aesthetic
- **Signature Motion**: Custom cursor, magnetic buttons, smooth scroll, pinned horizontal projects, WebGL node network
- **Performance First**: Lighthouse 95+, LCP < 2.0s, JS < 180KB gzipped
- **Accessible**: WCAG 2.2 AA, full keyboard navigation, reduced-motion support
- **Production Quality**: TypeScript, ESLint, CI/CD pipeline

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **Animation**: GSAP + ScrollTrigger, Framer Motion, Lenis
- **3D**: React Three Fiber + drei
- **Content**: MDX for case studies
- **Deployment**: Vercel + Docker
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
Portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles + design tokens
├── components/
│   ├── layout/            # Navigation, footer
│   ├── sections/          # Page sections (Hero, Projects, etc.)
│   ├── ui/                # Reusable UI components
│   └── providers/         # Context providers
├── lib/                   # Utilities and helpers
├── public/                # Static assets
│   └── fonts/            # Self-hosted fonts
└── prd.md                # Product requirements document
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Download required fonts (see `public/fonts/README.md`)

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
# Type check
npm run type-check

# Lint
npm run lint

# Build
npm run build

# Start production server
npm start
```

## 📋 Development Phases

- [x] **Phase 0**: Setup (Next.js, Tailwind, fonts, tokens)
- [ ] **Phase 1**: Design system components
- [ ] **Phase 2**: Core pages (Hero, About, Projects, Contact)
- [ ] **Phase 3**: Motion layer (animations, cursor, scroll)
- [ ] **Phase 4**: Case studies (MDX)
- [ ] **Phase 5**: Delight (command palette, easter eggs)
- [ ] **Phase 6**: Hardening (A11y, performance, SEO)
- [ ] **Phase 7**: Launch

## 🎨 Design Tokens

### Colors (Dark Mode Default)

| Token | Value | Use |
|-------|-------|-----|
| `--bg` | `#0A0A0B` | Page background |
| `--surface` | `#121214` | Cards, panels |
| `--text` | `#EDEBE4` | Primary text |
| `--accent` | `#C6FF3D` | CTAs, highlights |

### Typography

- **Display**: Clash Display (headings)
- **Serif**: Instrument Serif Italic (accents)
- **Body**: General Sans
- **Mono**: JetBrains Mono (labels, code)

## 📝 Content

Content lives in:
- MDX files for case studies
- Typed data files for projects, skills, experience

## 🎯 Performance Targets

- Lighthouse Score: 95+ (all categories)
- LCP: < 2.0s
- CLS: < 0.05
- INP: < 200ms
- JS Budget: < 180KB gzipped

## ♿ Accessibility

- WCAG 2.2 AA compliant
- Full keyboard navigation
- Screen reader friendly
- Reduced motion support
- Semantic HTML

## 📄 License

© 2026 Karthik. All rights reserved.
