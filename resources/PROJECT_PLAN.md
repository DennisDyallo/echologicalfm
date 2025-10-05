# Echological.fm Project Plan

**Date**: October 5, 2025
**Status**: Complete ✓

## Project Overview

Echological.fm is a music movement focused on transformative, soul-driven music. We believe quality music is essential self-care, similar to choosing organic food. Our mission is to reconnect people with music that nurtures mind, body, and spirit.

## Design Specifications

### Visual Style
- Modern, minimal, breathing design with generous whitespace
- Color palette: Deep blue → green → gold gradient
  - Deep Blue: `#1a2f4a`
  - Teal: `#3a7d7c`
  - Green: `#4a9d7e`
  - Gold: `#d4af37`
- Clean typography, professional but warm
- Subtle animations (fade-ins, parallax, smooth scrolling)
- Fully responsive (mobile-first approach)

### Content Structure

**Hero Section:**
- Tagline: "Your guide to transformative music"
- Subheading: "Curating soul-over-sales sounds"
- Navigation: About | Instagram icon

**Mission Section:**
- Brief manifesto using language: "We believe in music that moves beyond the surface. Not just sounds that entertain, but compositions that companion us through life's depths and heights."

**Call-to-Action Section:**
- "Join the Resonance" heading
- Instagram follow invitation
- Prominent link: @echological.fm

**Footer:**
- Instagram: @echological.fm
- Website: echological.fm
- "More coming soon" tagline

### Tone & Voice
- Authentic & grounded (not preachy)
- Inviting & inclusive
- Clear & confident
- Minimal emoji use (1-2 max)
- Professional but warm

## Technical Requirements

### File Structure
```
/src
  index.html
  /assets
    icon.webp
    favicon.svg
    hero.png
  /css
    main.css
  /js
    main.js
```

### Build Setup
- Package manager: npm
- Bundler: Parcel
- Output: `/dist` folder
- Commands:
  - `npm run dev` - Local development
  - `npm run build` - Standard build
  - `npm run build:deploy` - Production build with `/apps/echological/` path prefix

### Performance
- No external dependencies
- Optimized images (webp format)
- System font stack

### Style Specifications
- CSS Grid and Flexbox for layout
- CSS custom properties for design tokens
- Smooth transitions (0.3s ease)
- Mobile breakpoint: 768px
- Desktop max-width: 1200px
- Micro-interactions: hover states, fade-ins, smooth scrolling

### Constraints
- Pure HTML/CSS/JS (no frameworks)
- Must work in all modern browsers
- No external libraries
- Mobile-first responsive design

## Deployment

### GitHub Actions Workflow
- File: `.github/workflows/deploy-to-apps.yml`
- Trigger: Push to `main` branch
- Target: `dennisdyallo.github.io/apps/echological`
- Environment variables:
  - `TARGET_APP_NAME: echological`
  - `APP_DIR: dennisdyallo.github.io/apps/echological`
- Requires: `TARGET_REPO_PAT` secret with repo permissions

## Implementation Checklist

### Setup ✓
- [x] Project structure
- [x] package.json configuration
- [x] GitHub Actions workflow

### HTML ✓
- [x] Semantic HTML5 structure
- [x] Hero section with tagline and navigation
- [x] Mission section with manifesto
- [x] Call-to-Action section for Instagram
- [x] Footer with links

### CSS ✓
- [x] Deep blue → green → gold gradient
- [x] CSS custom properties
- [x] Mobile-first responsive design (768px breakpoint)
- [x] CSS Grid and Flexbox layouts
- [x] Desktop max-width: 1200px
- [x] Smooth transitions (0.3s ease)
- [x] Generous whitespace, modern minimal design

### JavaScript ✓
- [x] Intersection Observer for fade-in animations
- [x] Smooth scrolling interactions
- [x] Parallax effect on hero
- [x] Minimal JavaScript footprint

### Assets ✓
- [x] SVG favicon
- [x] WebP icon
- [x] Hero image

### Documentation ✓
- [x] README.md with setup and deployment instructions
- [x] CLAUDE.md for AI assistance context
