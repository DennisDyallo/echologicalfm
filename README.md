# Echological.fm

**Your guide to transformative music**

A minimal, elegant static website for Echological.fm - a music movement focused on soul-driven, transformative music curation.

## Features

- 🎨 Modern, minimal design with deep blue → green → gold gradient
- 📱 Fully responsive (mobile-first approach)
- ⚡ Ultra-lightweight (< 50KB total)
- 🚀 Pure HTML/CSS/JS (no frameworks)
- ✨ Subtle animations and smooth interactions
- 🎯 Optimized for fast loading

## Project Structure

```
echologicalfm/
├── src/
│   ├── index.html          # Main HTML file
│   ├── css/
│   │   └── main.css        # Styles with responsive design
│   ├── assets/
│   │   ├── icon.webp       # Simple, clean icon for favicon
│   │   ├── favicon.svg     # Optional vector icon
│   │   └── hero.png        # Hero image
│   ├── js/
│   │   └── main.js         # Subtle animations
│   └── favicon.svg         # SVG favicon
├── dist/                   # Build output (generated)
├── .github/
│   └── workflows/
│       └── deploy-to-apps.yml  # GitHub Actions deployment
└── package.json
```

## Setup

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

```bash
# Install dependencies (none required for production)
npm install
```

## Development

### Local Development

To preview the site locally:

```bash
npm run dev
```

This will serve the `src/` directory using a local server. Open the URL shown in your terminal.

## Deployment

### Automatic Deployment (GitHub Actions)

The site is configured to automatically deploy to `dennisdyallo.github.io/apps/echological` when changes are pushed to the `main` branch.

**Requirements:**
- A Personal Access Token (PAT) stored as `TARGET_REPO_PAT` in repository secrets
- Push access to the `main` branch

**Deployment Flow:**
1. Push to `main` branch triggers GitHub Actions
2. Workflow runs `npm run build:deploy`
3. Built files from `dist/` are copied to `dennisdyallo.github.io/apps/echological`
4. Changes are committed and pushed automatically

## Design Specifications

### Color Palette
- Deep Blue: `#1a2f4a`
- Teal: `#3a7d7c`
- Green: `#4a9d7e`
- Gold: `#d4af37`

### Typography
- System font stack for optimal performance
- Mobile breakpoint: 768px
- Desktop max-width: 1200px

### Animations
- Fade-in on scroll for sections
- Smooth scroll for anchor links
- Subtle parallax effect on hero
- Hover states with 0.3s transitions

## Content

The site includes:
- **Hero Section:** Tagline and navigation
- **Mission Section:** Brand manifesto
- **CTA Section:** Instagram call-to-action
- **Footer:** Links and "More coming soon"

## Browser Support

Supports all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

MIT

## Contact

- Instagram: [@echological.fm](https://instagram.com/echological.fm)
- Website: [echological.fm](https://echological.fm)
