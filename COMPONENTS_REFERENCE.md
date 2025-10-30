# DirectGold Components Reference

## 🧩 UI Components

### Button
**Location**: `src/components/ui/Button.tsx`

Reusable button component with multiple variants and sizes.

**Props**:
```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}
```

**Usage**:
```tsx
<Button variant="primary" size="medium" onClick={handleClick}>
  Click Me
</Button>
```

**Variants**:
- `primary`: Gold background with dark text
- `secondary`: Transparent with gold border
- `outline`: White border for dark backgrounds

---

### Container
**Location**: `src/components/ui/Container.tsx`

Responsive container with max-width constraints and horizontal padding.

**Props**:
```typescript
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}
```

**Usage**:
```tsx
<Container maxWidth="xl">
  <YourContent />
</Container>
```

**Max Widths**:
- `sm`: 768px
- `md`: 896px
- `lg`: 1024px
- `xl`: 1280px
- `full`: 100%

---

### ImagePlaceholder
**Location**: `src/components/ui/ImagePlaceholder.tsx`

Placeholder component for images with gradient backgrounds.

**Props**:
```typescript
interface ImagePlaceholderProps {
  className?: string;
  alt?: string;
  gradient?: 'gold' | 'dark' | 'mountain';
}
```

**Usage**:
```tsx
<ImagePlaceholder gradient="gold" className="w-full h-64" alt="Gold bar" />
```

---

## 📑 Section Components

### Header
**Location**: `src/components/sections/Header.tsx`

Fixed header with responsive navigation and mobile menu.

**Features**:
- Sticky header with scroll effect
- Mobile hamburger menu
- Smooth scroll to sections
- Responsive navigation links

**Navigation Links**:
```typescript
const navigationLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT US', href: '#contact' },
];
```

**Customization**:
Edit the `navigationLinks` array to add/remove navigation items.

---

### HeroSection
**Location**: `src/components/sections/HeroSection.tsx`

Full-screen hero section with background image overlay.

**Features**:
- Full viewport height
- Background image support
- Centered content
- CTA button
- Scroll indicator

**Image Setup**:
Add your background image to `/public/hero-mountain.jpg` and uncomment:
```tsx
bg-[url('/hero-mountain.jpg')]
```

**Content**:
- Main logo/title: "▷IRECTGOLD"
- Heading: "Dein Gold. Neu definiert."
- Subtext: Value proposition
- CTA: "Mehr Infos" button

---

### InfoSection
**Location**: `src/components/sections/InfoSection.tsx`

Three value proposition cards with questions and answers.

**Features**:
- Responsive grid layout
- Color-coded cards
- Centered text
- Maximum width constraints

**Info Cards**:
1. **Transparency**: Price information
2. **Registration**: Gold bar ownership
3. **Quality**: 24/7 verification

**Customization**:
Edit the `InfoCard` components to change questions and answers.

---

### GoldBarSection
**Location**: `src/components/sections/GoldBarSection.tsx`

Two-column section with image and text.

**Features**:
- Responsive two-column layout
- Image on left (desktop) / top (mobile)
- Text with CTA on right
- Shadow effects

**Image Setup**:
Add your gold bar image to `/public/gold-bar.jpg` and uncomment:
```tsx
bg-[url('/gold-bar.jpg')]
```

---

### Footer
**Location**: `src/components/sections/Footer.tsx`

Multi-column footer with newsletter signup.

**Features**:
- Four-column layout (responsive)
- Newsletter subscription form
- Social media links
- Copyright information
- Multiple link sections

**Sections**:
1. **About Us**: Company information
2. **Contact Info**: Email, phone, address
3. **Important Links**: Policies and info
4. **Newsletter**: Email subscription

**Social Links**:
- Facebook
- Twitter
- Instagram
- LinkedIn

**Customization**:
Edit the `footerLinks` and `socialLinks` objects to modify content.

---

## 🎨 Styling System

### CSS Variables

All colors are defined in `src/app/globals.css`:

```css
--color-primary-gold: #C9A961
--color-primary-gold-light: #D4B573
--color-primary-gold-dark: #B39850
--color-accent-gold: #F4E4C1

--color-dark-bg: #0A0A0A
--color-light-bg: #F5F5F0

--spacing-xs: 0.5rem
--spacing-sm: 1rem
--spacing-md: 2rem
--spacing-lg: 4rem
--spacing-xl: 6rem
--spacing-2xl: 8rem
```

### Using CSS Variables in Tailwind

```tsx
className="bg-[var(--color-primary-gold)]"
className="text-[var(--color-primary-gold)]"
className="p-[var(--spacing-md)]"
```

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: Default (< 768px)
- **Tablet**: `md:` (768px - 1024px)
- **Desktop**: `lg:` (> 1024px)

### Common Patterns

**Typography**:
```tsx
className="text-2xl md:text-3xl lg:text-4xl"
```

**Spacing**:
```tsx
className="p-4 md:p-8 lg:p-12"
```

**Grid**:
```tsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
```

---

## 🎯 Best Practices

### Component Structure
1. Import dependencies
2. Define TypeScript interfaces
3. Implement component logic
4. Return JSX with proper className structure

### Styling
1. Use CSS variables for colors
2. Use Tailwind utilities for spacing
3. Mobile-first responsive design
4. Consistent spacing scale

### Accessibility
1. Use semantic HTML
2. Add ARIA labels
3. Ensure keyboard navigation
4. Maintain color contrast

---

## 🔄 Component Updates

### Adding New Sections
1. Create component in `src/components/sections/`
2. Export from `src/components/index.ts`
3. Import in `src/app/page.tsx`
4. Add to page layout

### Modifying Existing Components
1. Locate component file
2. Update props/content
3. Test responsive behavior
4. Check linting with `npm run lint`

---

## 📦 Import Patterns

### Individual Imports
```tsx
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/sections/Header';
```

### Centralized Imports
```tsx
import { Button, Container, Header } from '@/components';
```

---

## 🐛 Troubleshooting

### Images Not Showing
- Check file exists in `/public/` directory
- Verify file extension matches import
- Clear Next.js cache: `rm -rf .next`

### Styling Issues
- Check CSS variable names
- Verify Tailwind classes are valid
- Check responsive breakpoint syntax

### TypeScript Errors
- Ensure props match interface
- Check import paths
- Run `npm run build` to see all errors

