# Portfolio Website — Product Requirements Document

**Owner:** Karthik
**Working title:** *The Living Blueprint*
**Version:** 1.0
**Status:** Ready for design and build

---

## 1. Vision

A portfolio that **feels like an engineered system, not a template**. Karthik works across DevOps, cloud infrastructure and backend, so the site is presented as a living architecture blueprint. Every section is a "node" in the system, and scrolling moves data through it. Visitors should remember it for three reasons:

1. **It looks like nothing else:** an editorial type system, a single electric accent colour and an ink-dark canvas.
2. **It moves with intent:** every animation explains something or rewards curiosity.
3. **It proves skill:** the site itself is fast, accessible, and deployed with a real CI/CD pipeline, so the build is part of the portfolio.

**One-line pitch:** *"A developer portfolio you navigate like a system diagram, built with the same rigour as production software."*

---

## 2. Goals and Non-Goals

### Goals
- Get recruiters, internship and hiring managers, and freelance clients to **contact Karthik** within 60 seconds of landing.
- Showcase 4–6 projects as **case studies**, not screenshot grids.
- Show full-stack and DevOps range: Next.js, Supabase, Docker, AWS, CI/CD, computer vision.
- Deliver a distinctive visual identity with signature motion.
- Hit **Lighthouse 95+** across Performance, Accessibility, Best Practices and SEO.

### Non-Goals (v1)
- No full CMS or admin dashboard. Content lives in MDX and a typed data file.
- No user accounts or login.
- No heavy blog engine. A lightweight "Notes" section is v1.1.

---

## 3. Target Audience

| Audience | What they want | What the site must give them |
|---|---|---|
| Recruiters / HR | Quick scan, résumé, contact | Clear hero, downloadable résumé, skills at a glance |
| Engineering managers | Depth, real problems solved | Case studies with architecture, decisions, outcomes |
| Hackathon judges / founders | Initiative and ideas | Project stories, demo links, impact statements |
| Freelance clients | Reliability, speed | Services summary, testimonials, easy booking |

---

## 4. Design Concept: "The Living Blueprint"

**Mood:** precise, confident, slightly playful. Think architectural drawing meets editorial magazine meets terminal.

**Core metaphor:** the page is a system diagram. Sections are nodes, scroll draws the connecting lines, and hovering reveals "metadata" such as stack, latency and status.

**Signature elements**
- A faint **blueprint grid** background with registration marks (+) at the corners of sections.
- **Animated connector lines** (SVG path drawing) that link sections as you scroll.
- Small **mono-font annotations** around the layout, e.g. `// 03 — PROJECTS`, `status: shipping`, `uptime 99.9%`.
- A live **"system status" pill** in the nav, e.g. `● Available for internships`.

---

## 5. Design System

### 5.1 Colour tokens

| Token | Dark (default) | Light | Use |
|---|---|---|---|
| `--bg` | `#0A0A0B` | `#F4F1EA` | Page background |
| `--surface` | `#121214` | `#FFFFFF` | Cards, panels |
| `--surface-2` | `#1A1A1D` | `#ECE8DF` | Hover, nested |
| `--line` | `#26262B` | `#D8D3C7` | Grid, borders |
| `--text` | `#EDEBE4` | `#111111` | Primary text |
| `--muted` | `#8B8B93` | `#6B665B` | Secondary text |
| `--accent` | `#C6FF3D` (acid lime) | `#3A5A00` | CTAs, highlights, live dots |
| `--accent-2` | `#FF6B35` (signal orange) | `#D9480F` | Rare emphasis, errors, "hot" tags |

Rules:
- The accent is used on **under 5% of the screen**. Rarity makes it powerful.
- Dark mode is the default. Light mode follows system preference, with a manual toggle in the nav.
- All text and background pairs must meet **WCAG AA** (4.5:1 for body text).

### 5.2 Typography

Distinctive pairing: **a characterful display face, a refined serif for contrast, and a mono for the system layer.**

| Role | Font | Source | Notes |
|---|---|---|---|
| Display / headings | **Clash Display** (600–700) | Fontshare | Tight tracking (`-0.03em`), huge scale |
| Accent italics | **Instrument Serif Italic** | Google Fonts | One emphasised word per heading, e.g. "I build *systems* that scale" |
| Body | **General Sans** (400/500) | Fontshare | Highly readable, geometric but warm |
| Mono / UI metadata | **JetBrains Mono** (400/500) | Google Fonts | Labels, tags, code, annotations |

**Fluid type scale** (`clamp`):
- Hero: `clamp(3.5rem, 11vw, 11rem)`, line-height 0.9
- H2: `clamp(2.25rem, 6vw, 5rem)`
- H3: `clamp(1.5rem, 3vw, 2.25rem)`
- Body: `1.0625rem` / 1.65
- Mono label: `0.75rem`, uppercase, `0.08em` tracking

Self-host fonts through `next/font` with `display: swap`, and subset to Latin.

### 5.3 Spacing and layout
- 12-column grid, max width 1440px, generous gutters.
- 8px base unit. Section padding `clamp(6rem, 14vw, 12rem)` vertical.
- Deliberate **asymmetry**: oversized headings offset against small mono annotations.
- Radius: `2px` on panels (sharp, blueprint feel) and `999px` on pills only.
- Borders are 1px hairlines in `--line`. Avoid heavy shadows; use glow only on the accent.

### 5.4 Iconography and imagery
- Lucide icons at 1.5px stroke, or custom SVG.
- Project visuals come as **device mockups + architecture diagrams**, with no stock photos.
- Karthik's photo is treated with a duotone (lime on ink) and reveals full colour on hover.

---

## 6. Motion System

**Principles:** purposeful, fast to start and slow to settle, never blocking. Motion always respects `prefers-reduced-motion`.

### 6.1 Timing tokens
| Token | Value |
|---|---|
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` |
| Micro (hover) | 180–240ms |
| Reveal | 700–900ms |
| Page transition | 600–800ms |
| Stagger step | 40–70ms |

### 6.2 Signature animations

1. **Preloader: "Booting system".** A terminal-style counter runs 0→100 with log lines such as `> loading assets…`, `> connecting to supabase…`, `> ready`. The loader splits and wipes upward to reveal the hero. It lasts under 2.2s and is skipped on repeat visits (session flag).
2. **Hero headline.** Split-text reveal, each character rising from a masked line with a stagger. The serif-italic word swaps through a rotating list (*systems / products / pipelines / ideas*) with a vertical slot-machine transition.
3. **Hero background.** A lightweight WebGL **node network** (React Three Fiber or canvas). Particles drift and connect with lines. They **react to cursor proximity**, brightening in the accent colour. It falls back to a static SVG on low-power devices.
4. **Custom cursor.** A small dot plus a trailing ring. The ring grows and shows a label on hover (`VIEW`, `DRAG`, `OPEN`) and inverts over images.
5. **Magnetic buttons.** CTAs pull toward the cursor within a 60px radius, with a spring settle.
6. **Smooth scroll.** Lenis with a custom easing curve. A scroll-progress bar sits in the nav.
7. **Blueprint line drawing.** SVG connector paths between sections animate via `stroke-dashoffset` tied to scroll progress (GSAP ScrollTrigger scrub).
8. **Projects: horizontal pinned showcase.** The section pins and scrolls horizontally. Each project card scales, parallaxes its image, and reveals stack tags in a stagger. Hovering a project opens a **floating preview** that follows the cursor.
9. **Skills: orbit or constellation.** Skills render as nodes in a force layout. Hovering a node highlights related nodes, e.g. *Docker → AWS → CI/CD*.
10. **Counter and stat tickers.** Numbers roll up on enter (projects shipped, commits, deployments).
11. **Marquee.** An infinite tech-stack ticker. It slows on hover and reverses direction with scroll velocity.
12. **Page transitions.** A full-width ink panel with a lime edge sweeps across between routes, using the View Transitions API with a Framer Motion fallback.
13. **Text scramble.** Nav links and labels decode with a mono scramble on hover.
14. **Footer finale.** A huge "Let's build something." headline. Characters tilt toward the cursor. A live local-time and `● online` indicator sits beside it.

### 6.3 Easter eggs (memorable, optional)
- **⌘K / Ctrl+K command palette:** jump to sections, toggle theme, copy email, open GitHub.
- **Hidden terminal:** typing `` ` `` opens a mini shell with commands like `help`, `projects`, `whoami`, `sudo hire karthik`.
- **Konami code** triggers a lime confetti burst of code symbols.

---

## 7. Information Architecture and Sections

```
/                 Home (single-scroll narrative)
/projects         All projects grid + filters
/projects/[slug]  Case study
/about            Extended story, timeline, interests
/notes            (v1.1) Short technical write-ups
/resume           Inline résumé + PDF download
/contact          Contact form + links
```

### 7.1 Home sections (in order)

**00 — Preloader** (see 6.2).

**01 — Hero**
- Headline: *"Karthik — I build [systems/products/pipelines] that scale."*
- Sub: one line on role, e.g. "Full-stack developer focused on DevOps, cloud infrastructure and backend."
- CTAs: **View work** (primary, magnetic) and **Download résumé** (ghost).
- Status pill: `● Open to internships & collaborations`.
- Node-network background, scroll cue.

**02 — About (short)**
- Two-column: large pull-quote on the left, short bio and duotone portrait on the right.
- Mono "fact sheet": `role`, `focus`, `education: B.E. CSE (III year)`, `location: Tamil Nadu, India`, `stack`.

**03 — Selected Projects** (pinned horizontal showcase)
Candidate case studies (confirm details and demo links before launch):
| Project | One-line story | Key tech |
|---|---|---|
| **Asrivo-Tech-Web** | Team-built company web platform with staging and production deployment | Next.js, Supabase, Docker, AWS |
| **ADIIS** | Anti-Doping Information & Intelligence System dashboard | Vite, Vercel |
| **MediQueue** | Hospital queue and management system | Full-stack, project report |
| **RoadConnect** | Highway assistance and emergency services platform | Next.js, Supabase |
| **Pothole Detection** | Passive, crowdsourced pothole detection with CV and geotagging | Computer vision, geodata |
| **Software Marketplace** | Platform where developers sell software, with a full UI/UX design system | Design system, PRD |

Each card: title, one-line outcome, tags, year, `status` tag, and links to live demo and repo.

**04 — Skills / System Map**
- Interactive constellation grouped as **Frontend · Backend · DevOps & Cloud · Tools**.
- Alongside it, a plain accessible list for screen readers and mobile.

**05 — Experience and Timeline**
- Vertical timeline whose line draws on scroll. Entries cover education, team projects, hackathons and certifications.
- Teammate collaboration is credited in case studies, not here.

**06 — Process / How I work**
- Four-step strip: *Understand → Architect → Build → Ship & Monitor*. The DevOps mindset is Karthik's differentiator.

**07 — Testimonials / Proof** (optional until real quotes exist)
- Short quotes from teammates, mentors or clients. Hide the section if none exist. No fake quotes.

**08 — Contact / Footer**
- Giant headline, email copy-to-clipboard button, GitHub and LinkedIn links, contact form (name, email, message) writing to Supabase or sending through Resend, local-time widget, back-to-top.

### 7.2 Case study template (`/projects/[slug]`)
1. Hero: title, role, year, stack tags, links
2. **Problem:** who and why
3. **Solution:** key features with short looping videos or GIFs
4. **Architecture:** diagram (SVG), with a note on key decisions and trade-offs
5. **DevOps and deployment:** CI/CD, environments, hosting (Karthik's strength)
6. **Challenges and what I learned**
7. **Outcome:** metrics where real
8. Next project link (large, with hover preview)

---

## 8. Functional Requirements

| ID | Requirement | Priority |
|---|---|---|
| F1 | Responsive layout from 320px to 2560px | P0 |
| F2 | Dark and light theme with system default and manual toggle, persisted | P0 |
| F3 | Project data driven from typed MDX/JSON content | P0 |
| F4 | Contact form with validation, spam protection (honeypot + rate limit) and success state | P0 |
| F5 | Résumé PDF download and inline view | P0 |
| F6 | Command palette (⌘K) | P1 |
| F7 | Custom cursor (desktop and pointer-fine devices only) | P1 |
| F8 | Page transitions between routes | P1 |
| F9 | Hidden terminal and easter eggs | P2 |
| F10 | Notes/blog section with MDX | P2 |
| F11 | Privacy-friendly analytics (Vercel Analytics or Plausible) | P1 |
| F12 | Dynamic Open Graph images per project | P1 |

---

## 9. Non-Functional Requirements

### Performance
- LCP < 2.0s, CLS < 0.05, INP < 200ms on a mid-range mobile device over 4G.
- JS budget: < 180KB gzipped on initial load. Lazy-load WebGL and heavy sections.
- Images: AVIF/WebP via `next/image`, with blur placeholders.
- Disable heavy effects (WebGL, cursor, scrub animations) on low-power devices and when `prefers-reduced-motion` is set.

### Accessibility
- WCAG 2.2 AA. Full keyboard navigation with visible focus rings, in the accent colour.
- Semantic HTML landmarks. Skip-to-content link.
- Reduced-motion mode replaces all animation with simple fades.
- Every interactive canvas or graph has an equivalent text alternative.

### SEO
- Metadata, canonical URLs, sitemap, `robots.txt`, JSON-LD `Person` schema.
- Descriptive titles and OG/Twitter cards for each page.

### Security
- Security headers (CSP, HSTS, X-Content-Type-Options).
- Contact form server-side validation. Secrets only in environment variables.

---

## 10. Recommended Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js (App Router) + TypeScript** | Matches existing skills, SEO, image optimisation |
| Styling | **Tailwind CSS** + CSS variables for tokens | Fast, consistent theming |
| Animation | **GSAP + ScrollTrigger**, **Framer Motion** for UI and route transitions | Best-in-class scroll and timeline control |
| Smooth scroll | **Lenis** | Buttery scroll that works with ScrollTrigger |
| 3D / canvas | **React Three Fiber + drei** (or raw canvas) | Hero node network |
| Content | **MDX** (`contentlayer` or `next-mdx-remote`) | Case studies as files |
| Forms/backend | **Supabase** or **Resend** + Route Handler | Familiar stack |
| Hosting | **Vercel** (primary), Docker image as a showcase of portability | Zero-config previews |
| CI/CD | **GitHub Actions**: lint, type-check, Lighthouse CI, preview deploys | Demonstrates DevOps skill |
| Quality | ESLint, Prettier, Playwright smoke tests | Production-grade habits |

---

## 11. Content Checklist (needed from Karthik)

- [ ] Final headline, bio (short and long) and a clear role title
- [ ] Professional photo (high resolution)
- [ ] Résumé PDF
- [ ] For each project: problem, solution, stack, screenshots or screen-recording, architecture diagram, live and repo links, real metrics
- [ ] Skills list with honest proficiency groups
- [ ] Education, certifications and hackathon history with dates
- [ ] Any real testimonials (skip if none)
- [ ] Preferred public contact email, and which social links to show
- [ ] Domain name

---

## 12. Milestones

| Phase | Scope | Duration |
|---|---|---|
| **0. Setup** | Repo, Next.js, Tailwind tokens, fonts, CI, preview deploys | 1 day |
| **1. Design system** | Tokens, components, theme toggle, grid and layout primitives | 2 days |
| **2. Core pages** | Hero, About, Projects, Contact, responsive | 4 days |
| **3. Motion layer** | Preloader, split text, Lenis, ScrollTrigger sections, cursor, transitions | 4 days |
| **4. Case studies** | MDX template, 3–4 detailed projects | 3 days |
| **5. Delight** | Command palette, terminal, easter eggs, node-network hero | 2 days |
| **6. Hardening** | A11y audit, performance tuning, SEO, analytics, OG images | 2 days |
| **7. Launch** | Domain, final QA, share on LinkedIn/GitHub | 1 day |

Target: **~3 weeks part-time** (the MVP of Phases 0–2 is ready in about a week).

---

## 13. Success Metrics

- Lighthouse ≥ 95 in all four categories (mobile).
- Average session > 90s, with > 40% scrolling to Projects.
- Contact form conversion or email clicks ≥ 3% of visitors.
- At least 1 recruiter or collaborator response within the first month of launch.
- Zero critical axe-core accessibility violations.

---

## 14. Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Too much animation hurts performance and usability | Motion budget, lazy loading, reduced-motion mode, test on real mid-range phones |
| Style over substance | Case studies with real architecture and outcomes are mandatory for launch |
| Scope creep | Strict P0/P1/P2 ordering. Ship MVP, then layer delight |
| Fonts or WebGL failing on old devices | Fallback stacks, static SVG fallback |
| Stale content | Single typed data file, so updates take minutes |

---

## 15. Acceptance Criteria (Definition of Done)

- [ ] All P0 and P1 requirements implemented and verified on Chrome, Safari, Firefox and mobile browsers
- [ ] Lighthouse and accessibility targets met
- [ ] Reduced-motion and keyboard-only paths tested
- [ ] All project links, résumé and contact form work in production
- [ ] OG images and SEO metadata verified with a share preview
- [ ] CI pipeline green; production deployed on the custom domain

---

## Appendix A — Build Prompt for the AI IDE

Paste this into Antigravity or any AI coding assistant to start the build:

> Build a personal portfolio website in **Next.js (App Router) + TypeScript + Tailwind**, following `PRD.md` exactly. Theme: "The Living Blueprint": ink-dark background `#0A0A0B`, acid-lime accent `#C6FF3D`, hairline blueprint grid, mono annotations. Fonts: Clash Display (headings), Instrument Serif Italic (accent word), General Sans (body), JetBrains Mono (labels). Implement tokens as CSS variables with a dark/light toggle. Use Lenis for smooth scroll, GSAP ScrollTrigger for pinned horizontal projects and SVG line-drawing, and Framer Motion for route transitions. Build, in order: preloader, hero with split-text and rotating word, custom cursor and magnetic buttons, projects showcase, skills constellation, timeline, contact footer, then MDX case study pages and the ⌘K command palette. Respect `prefers-reduced-motion`, keep initial JS under 180KB gzipped, and target Lighthouse 95+. Start with the setup and design-system phase and ask before moving to the next phase.

## Appendix B — Inspiration Directions (study, don't copy)
- Editorial type-led studio sites with oversized headings
- Architectural blueprints and engineering drawings
- Terminal UIs and developer tooling aesthetics
- Award-winning portfolios on Awwwards and Godly, for motion pacing