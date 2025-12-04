# DirectGold Color System Documentation

## Overview

DirectGold uses a **centralized color system** that integrates CSS variables with Tailwind CSS v4. This provides a single source of truth for all colors across the application, making theme customization simple and maintainable.

## Architecture

### 1. CSS Variables (`:root`)
All colors are defined as CSS variables in `src/app/[locale]/globals.css`:

```css
:root {
  --color-primary-gold: #C9A961;
  --color-gold-deep: #B8935A;
  --color-dark-bg: #1a1a1a;
  /* ... and more */
}
```

### 2. Tailwind Integration (`@theme inline`)
Variables are automatically mapped to Tailwind utility classes:

```css
@theme inline {
  --color-gold: var(--color-primary-gold);
  --color-gold-deep: var(--color-gold-deep);
  --color-dark-bg: var(--color-dark-bg);
  /* ... and more */
}
```

### 3. Component Usage
Components use standard Tailwind classes:

```tsx
<div className="bg-gold text-white">
<button className="bg-dark-bg hover:bg-gold">
```

## Complete Color Reference

### Gold Colors
| Variable | Tailwind Class | Hex | Usage |
|----------|---------------|-----|-------|
| `--color-primary-gold` | `bg-gold`, `text-gold` | #C9A961 | Primary brand color |
| `--color-gold-deep` | `bg-gold-deep` | #B8935A | Hover states, accents |
| `--color-primary-gold-light` | `bg-primary-gold-light` | #D4B573 | Light gold accents |
| `--color-primary-gold-dark` | `bg-primary-gold-dark` | #c2a070 | Dark gold accents |

### Background Colors
| Variable | Tailwind Class | Hex/RGBA | Usage |
|----------|---------------|----------|-------|
| `--color-dark-bg` | `bg-dark-bg` | #1a1a1a | Dark backgrounds |
| `--color-light-bg` | `bg-light-bg` | #f5f5f0 | Light backgrounds |
| `--color-dark-secondary` | `bg-dark-secondary` | #2a2a2a | Secondary dark BG |
| `--color-light-bg-darker` | `bg-light-bg-darker` | #DEDBD5 | Darker light BG |
| `--color-bg-cream` | `bg-bg-cream` | #fef4de | Cream backgrounds |
| `--color-bg-light-gray` | `bg-bg-light-gray` | #f5f5f3 | Light gray BG |
| `--color-bg-dark-gray` | `bg-bg-dark-gray` | #cecfd0 | Dark gray BG |

### Text Colors
| Variable | Tailwind Class | Hex/RGBA | Usage |
|----------|---------------|----------|-------|
| `--color-primary-text` | `text-primary-text` | #1a1a1a | Primary text |
| `--color-secondary-text` | `text-secondary-text` | #ffffff | Secondary text |
| `--color-text-dark` | `text-text-dark` | #2c1c12 | Dark text |
| `--color-primary-text-dark` | `text-primary-text-dark` | #1a1a1a | Primary dark text |
| `--color-text-primary-light` | `text-text-primary-light` | #ffffff | Light text |
| `--color-hero-primary` | `text-hero-primary` | #ffffff | Hero section text |

### Accent Colors
| Variable | Tailwind Class | Hex | Usage |
|----------|---------------|-----|-------|
| `--color-blue-light` | `bg-blue-light`, `text-blue-light` | #5D9BC9 | Blue accents |

### Special Purpose Colors
| Variable | Usage |
|----------|-------|
| `--color-quote-mark` | Quote mark backgrounds |
| `--color-shield-icon` | Shield icon color |
| `--color-banner-title` | Banner title text |
| `--color-banner-subtitle` | Banner subtitle text |
| `--color-gold-bar-border` | Gold bar borders |
| `--color-info-eyebrow` | Info section eyebrow text |
| `--color-info-question` | Info section questions |
| `--color-info-answer` | Info section answers |
| `--color-dropdown-bg` | Dropdown backgrounds |
| `--color-header-bg` | Header background |
| `--color-cta-shadow` | CTA button shadows |
| `--color-cta-border` | CTA button borders |
| `--color-product-number` | Product numbers |
| `--color-card-back-bg` | Card back backgrounds |

## Usage Patterns

### Basic Colors
```tsx
// Backgrounds
<div className="bg-gold">
<div className="bg-dark-bg">
<div className="bg-light-bg">

// Text
<p className="text-gold">
<p className="text-primary-text">
<p className="text-secondary-text">

// Borders
<div className="border border-gold">
```

### With Opacity
```tsx
<div className="bg-gold/10">  // 10% opacity
<div className="bg-gold/20">  // 20% opacity
<div className="border-gold/30">  // 30% opacity border
```

### Hover States
```tsx
<button className="bg-gold hover:bg-gold-deep">
<a className="text-primary-text hover:text-gold">
```

### Gradients
```tsx
<div className="bg-gradient-to-r from-light-bg to-light-bg-darker">
<div className="bg-gradient-to-b from-white to-bg-cream">
```

### Complex Cases (CSS Variables)
For cases where Tailwind utilities aren't sufficient:

```tsx
<div style={{ 
  boxShadow: '0 12px 30px var(--color-cta-shadow)' 
}}>

<div style={{
  backgroundImage: 'linear-gradient(140deg, var(--color-sheen-white-60) 0%, var(--color-sheen-gold-65) 100%)'
}}>
```

## Customization Guide

### Changing Brand Colors

1. **Open** `src/app/[locale]/globals.css`
2. **Find** the `:root` section
3. **Update** the color values:

```css
:root {
  --color-primary-gold: #YOUR_NEW_GOLD;
  --color-dark-bg: #YOUR_NEW_DARK;
  /* etc. */
}
```

4. **Save** - All components update automatically!

### Adding New Colors

1. **Add to `:root`:**
```css
:root {
  --color-my-new-color: #123456;
}
```

2. **Add to `@theme inline`:**
```css
@theme inline {
  --color-my-new-color: var(--color-my-new-color);
}
```

3. **Use in components:**
```tsx
<div className="bg-my-new-color">
```

## Benefits

✅ **Single Source of Truth** - All colors in one place  
✅ **Type Safety** - Tailwind classes are validated  
✅ **Easy Theming** - Change one value, update everywhere  
✅ **No Hardcoded Colors** - All components use the system  
✅ **Developer Experience** - Autocomplete for color classes  
✅ **Maintainability** - Easy to update and extend  

## Migration Notes

This project was refactored from hardcoded colors to the centralized system. All components now use:
- Tailwind utility classes (e.g., `bg-gold`, `text-primary-text`)
- CSS variables for complex cases (e.g., shadows, gradients)

**No component files contain hardcoded hex codes or rgba values in className attributes.**
