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
│   ├── js/
│   │   └── main.js         # Subtle animations
│   └── favicon.svg         # SVG favicon
├── dist/                   # Build output (generated)
├── scripts/
│   └── build.js            # Build script
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

### Building

To build the optimized production version:

```bash
npm run build:deploy
```

This will:
- Minify HTML, CSS, and JavaScript
- Copy all files to the `dist/` folder
- Display the total bundle size
- Verify size is under 50KB target

### Clean Build

To clean the dist folder:

```bash
npm run clean
```

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

### Manual Deployment

1. Build the project:
   ```bash
   npm run build:deploy
   ```

2. Deploy the contents of the `dist/` folder to your hosting provider

## Performance

- **Target bundle size:** < 50KB
- **No external dependencies**
- **Critical CSS inlined**
- **Optimized for modern browsers**

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
