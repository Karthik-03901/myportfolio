# Setup Guide — The Living Blueprint Portfolio

## 📋 Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** package manager
- **Git** (for version control)

## 🚀 Quick Start

### 1. Install Dependencies

First, try installing dependencies. If you have network issues, skip to step 2.

```bash
npm install
```

### 2. Download Required Fonts

This portfolio uses custom fonts from Fontshare. Download them manually:

#### Clash Display
1. Go to [https://www.fontshare.com/fonts/clash-display](https://www.fontshare.com/fonts/clash-display)
2. Download the font package
3. Extract and copy these files to `public/fonts/`:
   - `ClashDisplay-Semibold.woff2`
   - `ClashDisplay-Bold.woff2`

#### General Sans
1. Go to [https://www.fontshare.com/fonts/general-sans](https://www.fontshare.com/fonts/general-sans)
2. Download the font package
3. Extract and copy these files to `public/fonts/`:
   - `GeneralSans-Regular.woff2`
   - `GeneralSans-Medium.woff2`

**Note:** Google Fonts (Instrument Serif Italic and JetBrains Mono) are loaded automatically via `next/font`.

### 3. Environment Variables (Optional)

Copy the example environment file:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your values (all optional for local development).

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information

Update the following files with your information:

#### `app/layout.tsx`
- Update metadata (title, description, URLs)
- Update Open Graph images
- Update author name

#### `components/sections/Hero.tsx`
- Update name and headline
- Update rotating words array
- Update role description

#### `components/sections/About.tsx`
- Update bio text
- Update fact sheet (role, focus, education, location, stack)

#### `components/sections/Projects.tsx`
- Replace projects array with your actual projects
- Update titles, descriptions, tech stacks
- Add real demo and repo links

#### `components/sections/Experience.tsx`
- Update experiences array with your work history
- Update education details
- Update achievements

#### `components/sections/Contact.tsx`
- Update email address
- Update social links (GitHub, LinkedIn)
- Update location and timezone

#### `components/ui/CommandPalette.tsx`
- Update email in the commands array
- Update social media links

### Colors & Branding

All design tokens are in `app/globals.css`:

```css
:root {
  --bg: #F4F1EA;        /* Light background */
  --accent: #3A5A00;     /* Light accent */
  /* ... */
}

.dark {
  --bg: #0A0A0B;         /* Dark background */
  --accent: #C6FF3D;     /* Acid lime accent */
  /* ... */
}
```

Modify these variables to change the entire color scheme.

### Typography

Font configuration is in `app/layout.tsx`. To change fonts:

1. Update the font imports
2. Update the CSS variables
3. Update Tailwind config if needed

## 🏗 Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx         # Root layout with fonts & metadata
│   ├── page.tsx           # Home page composition
│   └── globals.css        # Global styles & design tokens
├── components/
│   ├── layout/            # Navigation, footer
│   │   └── Navigation.tsx
│   ├── sections/          # Page sections
│   │   ├── Preloader.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Process.tsx
│   │   └── Contact.tsx
│   ├── ui/                # Reusable components
│   │   ├── CustomCursor.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── CommandPalette.tsx
│   │   ├── NodeNetwork.tsx
│   │   └── TechMarquee.tsx
│   └── providers/         # Context providers
│       ├── ThemeProvider.tsx
│       └── SmoothScroll.tsx
├── lib/
│   └── utils.ts           # Utility functions
├── public/
│   └── fonts/             # Self-hosted fonts
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.ts         # Next.js configuration
```

## ⚡ Key Features to Customize

### 1. Preloader
- Edit boot messages in `components/sections/Preloader.tsx`
- Adjust duration and animation timing

### 2. Hero Background
- WebGL node network in `components/ui/NodeNetwork.tsx`
- Adjust particle count for performance
- Falls back to static SVG on low-power devices

### 3. Custom Cursor
- Only shows on devices with fine pointers (mouse/trackpad)
- Automatically disabled on touch devices
- Customize labels via `data-cursor-label` attribute

### 4. Command Palette (⌘K)
- Add/remove commands in `components/ui/CommandPalette.tsx`
- Customize keyboard shortcuts
- Add custom actions

### 5. Tech Stack Marquee
- Update tech stack array in `components/ui/TechMarquee.tsx`
- Adjust speed by changing `baseVelocity`
- Reverses direction based on scroll

## 🎯 Performance Optimization

### Image Optimization
Place images in `public/` folder and use Next.js Image component:

```tsx
import Image from "next/image";

<Image
  src="/project-screenshot.png"
  alt="Project screenshot"
  width={1200}
  height={800}
  quality={90}
/>
```

### Lazy Loading
Heavy components are already lazy-loaded:
- WebGL node network
- Smooth scroll (Lenis)
- React Three Fiber

### Bundle Size
Check bundle size:

```bash
npm run build
```

The build output shows chunk sizes. Keep main bundle < 180KB gzipped.

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js and deploys
4. Add environment variables in Vercel dashboard

### Docker

```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio
```

## 🧪 Testing

```bash
# Type check
npm run type-check

# Lint
npm run lint

# Build (catches errors)
npm run build
```

## ♿ Accessibility

The portfolio is built with accessibility in mind:

- **Keyboard navigation**: All interactive elements are keyboard accessible
- **Focus indicators**: Visible focus rings on all interactive elements
- **Reduced motion**: Animations disabled when user prefers reduced motion
- **Screen readers**: Semantic HTML and ARIA labels
- **Skip to content**: Link at the top for keyboard users

Test accessibility:
- Use keyboard only (Tab, Enter, Esc)
- Test with screen reader (NVDA, JAWS, VoiceOver)
- Run Lighthouse accessibility audit

## 🐛 Troubleshooting

### Fonts not loading
- Verify font files are in `public/fonts/`
- Check file names match exactly (case-sensitive)
- Clear `.next` cache: `rm -rf .next`

### Build errors
- Delete `node_modules` and `.next`
- Run `npm install` again
- Check Node.js version (should be 18+)

### Performance issues
- Reduce particle count in NodeNetwork
- Disable WebGL on lower-end devices (auto-detected)
- Optimize images using `next/image`

### Network issues during install
- Try using a VPN or different network
- Use yarn instead: `yarn install`
- Clear npm cache: `npm cache clean --force`

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://greensock.com/gsap/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)

## 📝 License

© 2026 Karthik. All rights reserved.

This is a personal portfolio. Feel free to use the code structure and techniques, but please don't use the personal content or copy the design verbatim.
