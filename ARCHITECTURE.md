# Portfolio Architecture Overview

## 🏗 System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                       Browser                                │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              Next.js 15 App Router                    │  │
│  │                                                       │  │
│  │  ┌─────────────────────────────────────────────┐    │  │
│  │  │         app/layout.tsx (Root)               │    │  │
│  │  │  • Font Loading (next/font)                │    │  │
│  │  │  • Global Metadata                         │    │  │
│  │  │  • Theme Provider Context                  │    │  │
│  │  └─────────────────────────────────────────────┘    │  │
│  │                      ↓                               │  │
│  │  ┌─────────────────────────────────────────────┐    │  │
│  │  │         app/page.tsx (Home)                 │    │  │
│  │  │  ┌─────────────────────────────────────┐  │    │  │
│  │  │  │    Preloader (Session-aware)        │  │    │  │
│  │  │  └─────────────────────────────────────┘  │    │  │
│  │  │  ┌─────────────────────────────────────┐  │    │  │
│  │  │  │    CustomCursor (Desktop only)      │  │    │  │
│  │  │  └─────────────────────────────────────┘  │    │  │
│  │  │  ┌─────────────────────────────────────┐  │    │  │
│  │  │  │    CommandPalette (⌘K)              │  │    │  │
│  │  │  └─────────────────────────────────────┘  │    │  │
│  │  │  ┌─────────────────────────────────────┐  │    │  │
│  │  │  │    SmoothScroll (Lenis wrapper)     │  │    │  │
│  │  │  │  ┌──────────────────────────────┐  │  │    │  │
│  │  │  │  │     Navigation               │  │  │    │  │
│  │  │  │  └──────────────────────────────┘  │  │    │  │
│  │  │  │  ┌──────────────────────────────┐  │  │    │  │
│  │  │  │  │     Main Content             │  │  │    │  │
│  │  │  │  │  • Hero + NodeNetwork        │  │  │    │  │
│  │  │  │  │  • TechMarquee               │  │  │    │  │
│  │  │  │  │  • About                     │  │  │    │  │
│  │  │  │  │  • Projects                  │  │  │    │  │
│  │  │  │  │  • Skills                    │  │  │    │  │
│  │  │  │  │  • Experience                │  │  │    │  │
│  │  │  │  │  • Process                   │  │  │    │  │
│  │  │  │  │  • Contact                   │  │  │    │  │
│  │  │  │  └──────────────────────────────┘  │  │    │  │
│  │  │  └─────────────────────────────────────┘  │    │  │
│  │  └─────────────────────────────────────────────┘    │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## 📦 Component Hierarchy

```
App Root
├── ThemeProvider (Context)
│   ├── Preloader (Overlay)
│   ├── CustomCursor (Overlay)
│   ├── CommandPalette (Overlay)
│   └── SmoothScroll (Wrapper)
│       ├── Navigation (Sticky)
│       │   ├── Logo
│       │   ├── Nav Links
│       │   ├── Status Pill
│       │   └── Theme Toggle
│       └── Main Content
│           ├── Hero Section
│           │   ├── NodeNetwork (WebGL)
│           │   ├── Split Text Animation
│           │   ├── Rotating Word
│           │   └── MagneticButton (×2)
│           ├── TechMarquee
│           ├── About Section
│           ├── Projects Section
│           │   └── Project Card (×N)
│           ├── Skills Section
│           ├── Experience Section
│           │   └── Timeline Item (×N)
│           ├── Process Section
│           │   └── Process Step (×4)
│           └── Contact Section
│               ├── Contact Form
│               └── Social Links
```

## 🎨 State Management

```
┌──────────────────────────────────────────────────┐
│           Application State                       │
├──────────────────────────────────────────────────┤
│  Theme (Context + localStorage)                  │
│  • Current theme: "dark" | "light"               │
│  • toggleTheme()                                 │
│                                                   │
│  Preloader (Session + State)                     │
│  • isLoading: boolean                            │
│  • hasVisited: sessionStorage flag               │
│                                                   │
│  Command Palette (State + Keyboard)              │
│  • isOpen: boolean                               │
│  • search: string                                │
│  • ⌘K/Ctrl+K listener                            │
│                                                   │
│  Navigation (Scroll State)                       │
│  • scrollProgress: number (0-100)                │
│  • isScrolled: boolean                           │
│                                                   │
│  Custom Cursor (Mouse State)                     │
│  • mousePosition: {x, y}                         │
│  • isHovering: boolean                           │
│  • cursorLabel: string                           │
│                                                   │
│  Smooth Scroll (Lenis Instance)                  │
│  • lenisInstance                                 │
│  • raf loop                                      │
└──────────────────────────────────────────────────┘
```

## 🔄 Data Flow

```
User Interaction
       ↓
┌──────────────────┐
│  Event Handlers  │
│  • onClick       │
│  • onKeyDown     │
│  • onMouseMove   │
│  • onScroll      │
└────────┬─────────┘
         ↓
┌──────────────────┐
│  State Updates   │
│  • setState      │
│  • Context       │
│  • localStorage  │
└────────┬─────────┘
         ↓
┌──────────────────┐
│   Re-render      │
│  • Framer Motion │
│  • GSAP          │
│  • CSS           │
└────────┬─────────┘
         ↓
┌──────────────────┐
│  Visual Update   │
│  • Animations    │
│  • Transitions   │
│  • Effects       │
└──────────────────┘
```

## 🎭 Animation Layers

```
Layer 5: Overlays (z-index: 100+)
  • CommandPalette (z-101)
  • Preloader (z-100)
  • CustomCursor (z-9999)

Layer 4: Navigation (z-index: 50)
  • Sticky nav
  • Scroll progress bar

Layer 3: Content (z-index: 10)
  • All sections
  • Text, images, cards

Layer 2: Background Effects (z-index: 1)
  • NodeNetwork (WebGL)
  • Gradient overlays

Layer 1: Base (z-index: -1)
  • Blueprint grid
  • Background color
```

## 🚀 Animation Timeline (Page Load)

```
0ms ──────────────────────────────────────────────► 3000ms

├─ 0ms: Preloader starts
│  └─ Counter: 0 → 100% (2200ms)
│  └─ Boot messages appear (300ms intervals)
│  └─ Loading bar fills
│
├─ 2200ms: Preloader exits (wipe up)
│  └─ Exit animation: 800ms
│
├─ 3000ms: Hero reveals
│  └─ Characters rise (staggered, 40ms each)
│  └─ Rotating word starts
│  └─ Buttons fade in
│  └─ Scroll indicator appears
│
├─ 3500ms: NodeNetwork fully interactive
│  └─ Particles drift
│  └─ Mouse tracking active
│
└─ On scroll: Sections reveal
   └─ About: 800ms fade + slide
   └─ Projects: 800ms stagger
   └─ Skills: 800ms stagger
   └─ etc.
```

## 🎯 Performance Strategy

```
┌─────────────────────────────────────────┐
│         Performance Budget               │
├─────────────────────────────────────────┤
│  JavaScript                              │
│  • Main bundle: < 100KB gzipped         │
│  • Animation libs: < 50KB gzipped       │
│  • 3D libs: < 30KB gzipped              │
│  • Total: < 180KB gzipped               │
│                                          │
│  Images                                  │
│  • AVIF/WebP with fallbacks             │
│  • Lazy loading below fold              │
│  • Blur placeholders                    │
│                                          │
│  Fonts                                   │
│  • Self-hosted .woff2                   │
│  • display: swap                        │
│  • Subsetting (Latin only)              │
│                                          │
│  Code Splitting                          │
│  • React Three Fiber: dynamic import    │
│  • Lenis: dynamic import                │
│  • Heavy sections: lazy load            │
└─────────────────────────────────────────┘
```

## 🛡️ Accessibility Architecture

```
┌────────────────────────────────────────┐
│      Accessibility Strategy             │
├────────────────────────────────────────┤
│  Keyboard Navigation                   │
│  • Tab through all interactive        │
│  • Enter to activate                  │
│  • Escape to close modals             │
│  • ⌘K for command palette             │
│                                        │
│  Screen Readers                        │
│  • Semantic HTML landmarks            │
│  • ARIA labels on interactive         │
│  • Alt text on images                 │
│  • Skip to content link               │
│                                        │
│  Visual                                │
│  • Focus indicators (2px accent)      │
│  • WCAG AA contrast (4.5:1)           │
│  • Text resizing support              │
│                                        │
│  Motion                                │
│  • prefers-reduced-motion detection   │
│  • Disable/simplify all animations    │
│  • Static fallbacks for WebGL         │
└────────────────────────────────────────┘
```

## 🌐 Deployment Architecture

```
GitHub Repository
       ↓
┌──────────────────┐
│  Vercel          │
│  ┌────────────┐ │
│  │   Build    │ │
│  │   • Next   │ │
│  │   • TypeSc │ │
│  │   • Tailwd │ │
│  └──────┬─────┘ │
│         ↓       │
│  ┌────────────┐ │
│  │  Optimize  │ │
│  │  • Images  │ │
│  │  • Fonts   │ │
│  │  • Bundle  │ │
│  └──────┬─────┘ │
│         ↓       │
│  ┌────────────┐ │
│  │   Deploy   │ │
│  │  • CDN     │ │
│  │  • Edge    │ │
│  └────────────┘ │
└──────────────────┘
       ↓
   Production
   (Global CDN)
```

## 📊 File Size Breakdown (Estimated)

```
Portfolio Bundle Analysis
═══════════════════════════════════

Core App:
├─ Next.js runtime:      ~50KB (gzipped)
├─ React + React-DOM:    ~40KB (gzipped)
├─ Tailwind CSS:         ~8KB (gzipped)
└─ App code:             ~15KB (gzipped)
                        ─────────
                         ~113KB

Animation Libraries (lazy):
├─ Framer Motion:        ~30KB (gzipped)
├─ GSAP:                 ~20KB (gzipped)
├─ Lenis:                ~3KB (gzipped)
└─ React Three Fiber:    ~25KB (gzipped)
                        ─────────
                         ~78KB

Total Initial Load:      ~113KB ✅
Total with animations:   ~191KB (under budget if lazy loaded)
```

## 🔧 Tech Stack Layers

```
┌─────────────────────────────────────────┐
│           Frontend Stack                 │
├─────────────────────────────────────────┤
│  Framework Layer                         │
│  • Next.js 15 (App Router)              │
│  • React 19                              │
│  • TypeScript 5.7                        │
│                                          │
│  Styling Layer                           │
│  • Tailwind CSS 3.4                     │
│  • CSS Variables (design tokens)        │
│  • CSS Modules (scoped)                 │
│                                          │
│  Animation Layer                         │
│  • Framer Motion (UI animations)        │
│  • GSAP + ScrollTrigger (scroll)        │
│  • Lenis (smooth scroll)                │
│  • React Three Fiber (WebGL)            │
│                                          │
│  Icon Layer                              │
│  • Lucide React (SVG icons)             │
│                                          │
│  Utility Layer                           │
│  • clsx (conditional classes)           │
│  • tailwind-merge (class merging)       │
│                                          │
│  Font Layer                              │
│  • next/font/google (Google Fonts)      │
│  • next/font/local (Fontshare fonts)    │
└─────────────────────────────────────────┘
```

---

## 🎯 Key Architectural Decisions

### Why Next.js 15 App Router?
- Server Components for better performance
- Built-in image & font optimization
- Streaming & Suspense support
- SEO-friendly with great DX

### Why Tailwind + CSS Variables?
- Utility-first for rapid development
- CSS variables for dynamic theming
- Best of both worlds

### Why Multiple Animation Libraries?
- Framer Motion: Best for declarative UI animations
- GSAP: Unmatched timeline control for complex scroll animations
- Lenis: Smoothest scroll experience
- Each library excels at different things

### Why React Three Fiber over vanilla Three.js?
- Declarative API (easier to maintain)
- Better integration with React lifecycle
- Smaller bundle when tree-shaken

### Why Lazy Loading?
- Keep initial bundle small (< 180KB)
- Progressive enhancement
- Faster Time to Interactive

---

This architecture is designed for:
✅ **Performance** — Fast loads, smooth interactions  
✅ **Maintainability** — Clear separation of concerns  
✅ **Scalability** — Easy to add new sections/features  
✅ **Accessibility** — Built-in from the start  
✅ **Developer Experience** — TypeScript, clear structure, good DX
