# DirectGold - Quick Start Guide

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📸 Adding Your Images

### Step 1: Prepare Your Images
You'll need:
1. **Hero Background** - Mountain landscape (1920x1080px recommended)
2. **Gold Bar** - Close-up of gold bar (1200x900px recommended)

### Step 2: Add Images to Public Folder
```bash
# Copy your images to the public folder
cp /path/to/your/mountain-image.jpg public/hero-mountain.jpg
cp /path/to/your/goldbar-image.jpg public/gold-bar.jpg
```

### Step 3: Update Hero Section
Open `src/components/sections/HeroSection.tsx` and update line 14:

**Before**:
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 opacity-60" />
{/* Add your mountain background image here: bg-[url('/hero-mountain.jpg')] */}
```

**After**:
```tsx
<div className="absolute inset-0 bg-[url('/hero-mountain.jpg')] bg-cover bg-center opacity-60" />
```

### Step 4: Update Gold Bar Section
Open `src/components/sections/GoldBarSection.tsx` and update around line 15:

**Before**:
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-gold)] to-[var(--color-primary-gold-dark)]">
  <div className="absolute inset-0 flex items-center justify-center">
    {/* SVG icon here */}
  </div>
</div>
{/* Add your gold bar image here: bg-[url('/gold-bar.jpg')] */}
```

**After**:
```tsx
<div className="absolute inset-0 bg-[url('/gold-bar.jpg')] bg-cover bg-center" />
```

---

## 🎨 Customizing Colors

### Option 1: Edit CSS Variables (Recommended)
Open `src/app/globals.css` and modify:

```css
:root {
  --color-primary-gold: #C9A961;  /* Change to your gold color */
  --color-dark-bg: #0A0A0A;       /* Change to your dark color */
  --color-light-bg: #F5F5F0;      /* Change to your light color */
}
```

### Option 2: Use Tailwind Classes
Replace `bg-[var(--color-primary-gold)]` with `bg-amber-600` or any Tailwind color.

---

## ✏️ Editing Content

### Hero Section Text
**File**: `src/components/sections/HeroSection.tsx`

```tsx
{/* Line ~22 - Main Logo */}
<h1>▷IRECTGOLD</h1>

{/* Line ~29 - Main Heading */}
<h2>
  Dein Gold.
  <br />
  Neu definiert.
</h2>

{/* Line ~35 - Subheading */}
<p>
  Begnüge Dich nur mit exakten Antworten.
  <br />
  Alles andere ist Spekulation.
</p>
```

### Info Cards
**File**: `src/components/sections/InfoSection.tsx`

```tsx
{/* Line ~54-58 - First Card */}
<InfoCard
  question="Your question here?"
  mainText="Your answer here."
  colorScheme="beige"
/>
```

### Footer Links
**File**: `src/components/sections/Footer.tsx`

```tsx
{/* Line ~11-17 - About Us Links */}
aboutUs: {
  title: 'About Us',
  links: [
    { label: 'Our Story', href: '#story' },
    // Add more links...
  ],
}
```

---

## 🔧 Common Tasks

### Change Navigation Menu
**File**: `src/components/sections/Header.tsx`

```tsx
const navigationLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT US', href: '#contact' },
  // Add new links here
];
```

### Add New Section
1. Create file: `src/components/sections/MySection.tsx`
2. Copy structure from existing section
3. Export in `src/components/index.ts`
4. Import and use in `src/app/page.tsx`

### Change Fonts
**File**: `src/app/layout.tsx`

The project uses Google Fonts (Geist Sans & Geist Mono). To change:

```tsx
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  variable: "--font-your-font",
  subsets: ["latin"],
});
```

---

## 📱 Testing Responsiveness

### Desktop (> 1024px)
- Full navigation in header
- Two-column layouts
- Large typography

### Tablet (768px - 1024px)
- Condensed navigation
- Some single-column layouts
- Medium typography

### Mobile (< 768px)
- Hamburger menu
- All single-column
- Smaller typography

### Test in Browser
```bash
# Chrome DevTools
1. Press F12
2. Click responsive design icon
3. Test different devices
```

---

## 🏗️ Build for Production

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run start
```

### Deploy
The app is ready to deploy to:
- Vercel (recommended for Next.js)
- Netlify
- Your own server

```bash
# For Vercel
npm install -g vercel
vercel
```

---

## 📋 Checklist Before Going Live

- [ ] All images added and optimized
- [ ] Content reviewed and finalized
- [ ] Colors match brand guidelines
- [ ] Tested on mobile, tablet, desktop
- [ ] All links work correctly
- [ ] Newsletter form connected to backend
- [ ] Social media links updated
- [ ] SEO metadata updated
- [ ] Favicon added
- [ ] Analytics integrated

---

## 🎯 Key Files to Customize

| File | What to Change |
|------|----------------|
| `src/components/sections/HeroSection.tsx` | Hero text, background image |
| `src/components/sections/InfoSection.tsx` | Value propositions |
| `src/components/sections/GoldBarSection.tsx` | Gold bar image, CTA |
| `src/components/sections/Footer.tsx` | Footer links, newsletter |
| `src/app/globals.css` | Colors, fonts, spacing |
| `src/app/layout.tsx` | Page title, description |

---

## 💡 Tips

1. **Image Optimization**: Use WebP format for better performance
2. **Lazy Loading**: Images load as needed automatically
3. **SEO**: Update metadata in `layout.tsx`
4. **Performance**: Run `npm run build` to check bundle size
5. **Accessibility**: Test with keyboard navigation

---

## 🆘 Need Help?

### Documentation
- [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md) - Detailed project info
- [COMPONENTS_REFERENCE.md](./COMPONENTS_REFERENCE.md) - Component docs

### Resources
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

### Common Commands
```bash
npm run dev          # Start development
npm run build        # Build production
npm run lint         # Check code quality
npm run start        # Run production build
```

---

## ✨ What's Included

✅ Fully responsive layout (mobile, tablet, desktop)
✅ Reusable component architecture
✅ TypeScript for type safety
✅ CSS variables for easy theming
✅ Smooth scroll navigation
✅ Mobile-friendly hamburger menu
✅ Newsletter subscription form
✅ Social media integration
✅ SEO-ready metadata
✅ Clean, modern design
✅ Performance optimized
✅ Accessibility best practices

---

## 🎉 You're All Set!

Your DirectGold website is ready to go. Just add your images and customize the content to match your brand!

For detailed information, check the other documentation files included in this project.

