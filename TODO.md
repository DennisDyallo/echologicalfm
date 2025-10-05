# TODO - Echological.fm

## Image Optimization

### Hero Image (`assets/hero-echological_ups.png`)

**Current Status:**
- Aspect ratio: 4:4 (square)
- File size: ~9.7MB
- Format: PNG

**Required Changes:**
1. **Crop/resize to better aspect ratio** for hero sections:
   - Recommended: 16:9 (widescreen) - most common for hero sections
   - Alternatives: 21:9 (ultrawide/cinematic), 2:1, or 3:2

2. **Compress image** to reduce file size:
   - Target: Significantly reduce from 9.7MB
   - Consider converting PNG → WebP or optimized JPEG
   - Use tools like: ImageMagick, sharp, squoosh.app, or TinyPNG

3. **Consider responsive images:**
   - Serve different sizes for mobile vs desktop
   - Use `srcset` or CSS media queries with multiple background images

**Priority:** Medium (site functions but loads slowly)

---

## Future Enhancements

- [ ] Add more optimized image formats (WebP with fallbacks)
- [ ] Implement lazy loading for images
- [ ] Consider using a CDN for assets
- [ ] Add preload hints for critical assets
