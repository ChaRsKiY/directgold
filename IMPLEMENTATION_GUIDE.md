# DirectGold - Implementation Guide

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with CSS variables
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page component
├── components/
│   ├── index.ts              # Central export file
│   ├── ui/                   # Reusable UI components
│   │   ├── Button.tsx        # Reusable button with variants
│   │   ├── Container.tsx     # Responsive container wrapper
│   │   └── ImagePlaceholder.tsx # Image placeholder component
│   └── sections/             # Page sections
│       ├── Header.tsx        # Fixed header with navigation
│       ├── HeroSection.tsx   # Hero section with CTA
│       ├── InfoSection.tsx   # Three value propositions
│       ├── GoldBarSection.tsx # Gold bar showcase
│       └── Footer.tsx        # Footer with newsletter
```

## 🎨 Color System

All colors are defined as CSS variables in `globals.css`:

### Primary Colors
- `--color-primary-gold`: #C9A961 (Main gold color)
- `--color-primary-gold-light`: #D4B573
- `--color-primary-gold-dark`: #B39850
- `--color-accent-gold`: #F4E4C1

### Neutral Colors
- `--color-dark-bg`: #0A0A0A (Dark backgrounds)
- `--color-light-bg`: #F5F5F0 (Light backgrounds)

### Usage in Tailwind
```tsx
className="bg-[var(--color-primary-gold)]"
className="text-[var(--color-primary-gold)]"
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive using Tailwind's responsive prefixes:
- `md:` for tablet and above
- `lg:` for desktop and above

## 🖼️ Adding Images

### 1. Hero Section Background
Add your mountain background image to `/public/hero-mountain.jpg` and update:

```tsx
// src/components/sections/HeroSection.tsx
<div className="absolute inset-0 bg-[url('/hero-mountain.jpg')] bg-cover bg-center bg-no-repeat opacity-40" />
```

### 2. Gold Bar Image
Add your gold bar image to `/public/gold-bar.jpg` and update:

```tsx
// src/components/sections/GoldBarSection.tsx
<div className="absolute inset-0 bg-[url('/gold-bar.jpg')] bg-cover bg-center" />
```

### Recommended Image Sizes
- Hero background: 1920x1080px (landscape)
- Gold bar: 1200x900px (4:3 ratio)

## 🧩 Component Usage

### Button Component
```tsx
import { Button } from '@/components/ui/Button';

<Button variant="primary" size="medium">
  Click Me
</Button>

// Variants: 'primary' | 'secondary' | 'outline'
// Sizes: 'small' | 'medium' | 'large'
```

### Container Component
```tsx
import { Container } from '@/components/ui/Container';

<Container maxWidth="xl">
  Your content here
</Container>

// maxWidth: 'sm' | 'md' | 'lg' | 'xl' | 'full'
```

## 🎯 Features Implemented

### ✅ Reusable Components
- All UI components are modular and reusable
- Props-based configuration for flexibility
- TypeScript interfaces for type safety

### ✅ Responsive Design
- Mobile-first approach
- Breakpoints: mobile, tablet, desktop
- Touch-friendly on mobile devices
- Optimized typography scaling

### ✅ Performance Optimizations
- Semantic HTML structure
- CSS variables for theme consistency
- Smooth scroll behavior
- Optimized animations

### ✅ Accessibility
- Semantic HTML tags
- ARIA labels where needed
- Keyboard navigation support
- Focus states on interactive elements

### ✅ Modern Best Practices
- TypeScript for type safety
- Clean code architecture
- Component composition
- Separation of concerns

## 🚀 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Add your images to `/public/` directory

4. Customize colors in `src/app/globals.css`

5. Update content in section components

## 📝 Customization

### Changing Colors
Edit CSS variables in `src/app/globals.css`:
```css
:root {
  --color-primary-gold: #YOUR_COLOR;
}
```

### Adding New Sections
1. Create component in `src/components/sections/`
2. Export from `src/components/index.ts`
3. Import and use in `src/app/page.tsx`

### Modifying Content
All text content is directly in the component files for easy editing:
- Hero text: `src/components/sections/HeroSection.tsx`
- Info cards: `src/components/sections/InfoSection.tsx`
- Footer links: `src/components/sections/Footer.tsx`

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📦 Dependencies

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Biome (linting)

## 🎨 Design Match

The implementation matches the provided design with:
- ✅ Identical color scheme
- ✅ Matching typography hierarchy
- ✅ Same section layout
- ✅ Responsive behavior
- ✅ Clean, modern aesthetic

## 📞 Support

For questions or issues, refer to:
- Next.js documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs

