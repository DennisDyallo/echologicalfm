# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Echological.fm is a minimal, static website for a transformative music curation movement. The project uses pure HTML/CSS/JS with Parcel as a bundler, emphasizing ultra-lightweight delivery (< 50KB total) and zero frameworks.

**Key philosophy**: Soul-over-sales music curation with minimal, elegant design.

## Development Commands

```bash
# Local development server (hot reload enabled)
npm run dev

# Production build
npm run build

# Deployment build (same as build, used by GitHub Actions)
npm run build:deploy
```

The dev server runs on Parcel's default port and serves from `src/`. Build outputs go to `dist/`.

## Architecture

### File Structure
- **src/index.html**: Single-page site structure (hero, mission, CTA, footer)
- **src/css/main.css**: CSS custom properties-based design system, mobile-first responsive
- **src/js/main.js**: Vanilla JS for intersection observer animations and smooth scrolling
- **src/assets/**: Static assets (icon.webp, favicon.svg, hero.png)

### Design System
The site uses CSS custom properties defined in `:root`:
- **Color gradient**: Deep blue (#1a2f4a) → Teal (#3a7d7c) → Green (#4a9d7e) → Gold (#d4af37)
- **Typography**: System font stack for performance
- **Spacing scale**: --spacing-xs through --spacing-xl
- **Breakpoint**: 768px for mobile/desktop

### JavaScript Patterns
- Uses Intersection Observer API for fade-in animations on scroll
- Implements requestAnimationFrame for parallax scrolling (performance-optimized)
- Minimal DOM manipulation; observers are disconnected after first trigger
- All code is vanilla JS - no dependencies

## Deployment

Automated via GitHub Actions (`.github/workflows/deploy-to-apps.yml`):
- Triggers on push to `main` branch
- Builds with `npm run build:deploy`
- Deploys to `dennisdyallo.github.io/apps/echological`
- Requires `TARGET_REPO_PAT` secret with repo permissions

The workflow clones the target repo, replaces the `apps/echological` directory with fresh build output, and commits changes.

## Content & Brand

The site promotes Echological.fm's music philosophy:
- **Tagline**: "Your guide to transformative music"
- **Message**: Music as essential self-care, quality over entertainment
- **CTA**: Instagram follow (@echological.fm)

Planning documents in `resources/` contain brand messaging and implementation plans (not used by build process).

## Key Constraints

1. **No frameworks**: Pure HTML/CSS/JS only
2. **Size budget**: Target < 50KB total
3. **Mobile-first**: All styles start mobile, scale up at 768px
4. **Performance**: Use system fonts, optimize images (webp), minimize JS
5. **Accessibility**: Semantic HTML, proper ARIA labels, rel attributes on external links

## Making Changes

When modifying:
- **CSS**: Edit CSS custom properties in `:root` for design system changes
- **Content**: Single source of truth is `src/index.html`
- **Assets**: Use optimized formats (webp for images, svg for icons)
- **Animations**: Keep JavaScript minimal; prefer CSS transitions
- **Testing**: Run `npm run dev` and verify at all viewport sizes (mobile-first)