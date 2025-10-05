Date: Sunday, October 05, 2025 Response: 4
[Amp]: Even better. Removes complexity, no backend dependencies, pure static performance. Let me revise:

UPDATED PROMPT FOR AI:
Create a complete static website for Echological.fm with the following specifications:
PROJECT CONTEXT:
Echological.fm is a music movement focused on transformative, soul-driven music. We believe quality music is essential self-care, similar to choosing organic food. Our mission is to reconnect people with music that nurtures mind, body, and spirit.
DESIGN REQUIREMENTS:
Visual Style:

Modern, minimal, breathing design with generous whitespace
Color palette: Deep blue → green → gold gradient (inspired by our brand)
Clean typography, professional but warm
One subtle animation element (optional waveform or pulse effect)
Fully responsive (mobile-first approach)

Content Structure:

Hero Section:

Striking tagline: "Your guide to transformative music"
Subheading: "Curating soul-over-sales sounds"
Simple navigation: About | Instagram icon


Mission Section:

Brief manifesto (3-4 sentences about music as transformation)
Use language from: "We believe in music that moves beyond the surface. Not just sounds that entertain, but compositions that companion us through life's depths and heights."


Call-to-Action Section:

"Join the Resonance" heading
Brief text inviting people to follow on Instagram
Prominent Instagram link/button (@echological.fm)


Footer:

Instagram link: @echological.fm
Website: echological.fm
"More coming soon" tagline



TONE & VOICE:

Authentic & grounded (not preachy)
Inviting & inclusive
Clear & confident
Minimal emoji use (1-2 max)
Professional but warm

TECHNICAL REQUIREMENTS:
File Structure:
/src
  index.html
  /css
    main.css
  /js
    main.js (optional, for subtle animations only)
Build Setup:

Create package.json with build scripts
Build script should output to /dist folder
Use simple copy/minify process (Vite or basic script)
Build command: npm run build:deploy

Performance:

Optimize for fast load times
No external dependencies
Inline critical CSS
Target total size under 50KB

GITHUB ACTIONS SETUP:
Update the workflow environment variables to:
yamlTARGET_APP_NAME: echological
APP_DIR: dennisdyallo.github.io/apps/echological
DELIVERABLES:

Complete HTML structure (index.html)
Modern CSS with responsive design (main.css)
Optional JavaScript for subtle interactions (main.js)
package.json with build configuration
Updated GitHub Actions workflow file (.github/workflows/deploy-to-apps.yml)
README.md with setup and deployment instructions
Simple favicon (SVG preferred)

STYLE PREFERENCES:

Use CSS Grid and Flexbox for layout
Modern CSS (custom properties for colors)
Smooth transitions (0.3s ease)
Mobile breakpoint: 768px
Desktop max-width: 1200px
Micro-interactions: subtle hover states, fade-ins, smooth scrolling

CONSTRAINTS:

Pure HTML/CSS/JS (no frameworks)
Keep it under 50KB total
Must work in all modern browsers
No external libraries

Generate all files needed for immediate deployment.