# 🚀 Quick Start Guide

Get your portfolio running in 5 minutes!

## Step 1: Download Fonts (Required)

### Clash Display
1. Visit [https://www.fontshare.com/fonts/clash-display](https://www.fontshare.com/fonts/clash-display)
2. Click **Download family**
3. Extract the ZIP file
4. Copy these files to `public/fonts/`:
   - `ClashDisplay-Semibold.woff2`
   - `ClashDisplay-Bold.woff2`

### General Sans
1. Visit [https://www.fontshare.com/fonts/general-sans](https://www.fontshare.com/fonts/general-sans)
2. Click **Download family**
3. Extract the ZIP file
4. Copy these files to `public/fonts/`:
   - `GeneralSans-Regular.woff2`
   - `GeneralSans-Medium.woff2`

## Step 2: Install Dependencies

```bash
npm install --legacy-peer-deps
```

**Note:** If you get network errors, try:
- Using a VPN
- Using a different network
- Running `npm cache clean --force` first

## Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 4: Test Features

Once the site loads, test these signature features:

### Keyboard Shortcuts
- Press **⌘K** (Mac) or **Ctrl+K** (Windows) to open the command palette
- Press **ESC** to close it
- Press **Tab** to navigate with keyboard

### Interactions
- **Scroll slowly** to see animations trigger
- **Move your mouse** to see the custom cursor (desktop only)
- **Hover over buttons** to see magnetic effect
- **Hover over the marquee** to pause it
- **Click theme toggle** (top right) to switch dark/light mode

### Mobile
- Open DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M)
- Test on different screen sizes
- Note: Custom cursor and WebGL disabled on touch devices

## Step 5: Add Your Content

### Quick Personalizations

1. **Update Your Name**
   - File: `components/sections/Hero.tsx`
   - Line: Find "Karthik" and replace

2. **Update Email**
   - File: `components/sections/Contact.tsx`
   - Line: Find `const email = "karthik@example.com"`
   - Replace with your email

3. **Update Projects**
   - File: `components/sections/Projects.tsx`
   - Find the `projects` array
   - Replace with your actual projects

4. **Update Experience**
   - File: `components/sections/Experience.tsx`
   - Find the `experiences` array
   - Replace with your work history

See `CHECKLIST.md` for the complete personalization list!

## Common Issues

### "Cannot find module" errors
**Fix:** Make sure you installed dependencies:
```bash
npm install --legacy-peer-deps
```

### Fonts not loading
**Fix:** Verify font files are in `public/fonts/` with exact names:
- `ClashDisplay-Semibold.woff2`
- `ClashDisplay-Bold.woff2`
- `GeneralSans-Regular.woff2`
- `GeneralSans-Medium.woff2`

### Page is blank
**Fix:** Check the browser console (F12) for errors. Most likely missing fonts or failed dependency install.

### Animations not working
**Fix:** 
- Check if "Reduce motion" is enabled in your OS accessibility settings
- The site respects this preference and disables animations

### Custom cursor not showing
**Fix:** This is normal on:
- Touch devices (tablets, phones)
- When using a touchpad
- The cursor only appears with a mouse

## Build for Production

```bash
# Type check
npm run type-check

# Lint
npm run lint

# Build
npm run build

# Run production server locally
npm start
```

## Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click **Import Project**
4. Select your repository
5. Vercel auto-detects Next.js and deploys
6. Done! Your site is live

## Next Steps

1. ✅ Site running locally
2. 📝 Add your personal content (use CHECKLIST.md)
3. 🎨 Customize colors/styles if desired
4. 🚀 Deploy to Vercel
5. 📊 Track with Lighthouse audit
6. 🎉 Share with the world!

## Need Help?

- **Setup issues:** See `SETUP.md` for detailed troubleshooting
- **Personalization:** See `CHECKLIST.md` for complete list
- **Features overview:** See `BUILD_SUMMARY.md` for what's included
- **Design decisions:** See `prd.md` for the original vision

## What's Included Out of the Box

✅ Stunning preloader with terminal boot sequence  
✅ Hero with split-text animation + rotating words  
✅ WebGL particle network (interactive with cursor)  
✅ Custom magnetic cursor with labels  
✅ Command palette (⌘K) for quick navigation  
✅ 8 animated sections (Hero, About, Projects, Skills, Experience, Process, Contact)  
✅ Dark/light theme toggle with persistence  
✅ Smooth scrolling (Lenis)  
✅ Tech stack infinite marquee  
✅ Magnetic buttons with spring physics  
✅ Full accessibility (keyboard nav, reduced motion)  
✅ Responsive design (320px to 2560px)  
✅ Blueprint grid aesthetic with registration marks  

## Performance Targets

This portfolio is built for speed:

- **Lighthouse:** 95+ target (will verify after adding content)
- **LCP:** < 2.0s
- **JS Bundle:** < 180KB gzipped
- **Accessibility:** WCAG 2.2 AA

---

**You're all set!** 🎉

The foundation is complete. Now add your content and make it yours!
