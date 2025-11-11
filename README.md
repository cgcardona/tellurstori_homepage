# TellUrStori Homepage

A professional, responsive landing page for TellUrStori - The Future of Music Creation.

## Features

- 🎨 Modern, professional design with gradient accents
- 📱 Fully responsive (desktop, tablet, mobile)
- ⚡ Fast loading with vanilla HTML, CSS, and JavaScript
- 🎯 Optimized for GitHub Pages hosting
- ♿ Accessible navigation and smooth scrolling
- 🎭 Animated elements on scroll
- 📊 Interactive statistics and visualizations

## Deployment to GitHub Pages

### Option 1: Quick Deploy

1. Create a new repository on GitHub (e.g., `tellurstori-homepage`)
2. Push these files to the repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/tellurstori-homepage.git
git push -u origin main
```

3. Go to your repository settings on GitHub
4. Navigate to **Pages** section
5. Under **Source**, select `main` branch and `/ (root)` folder
6. Click **Save**
7. Your site will be live at `https://YOUR_USERNAME.github.io/tellurstori-homepage/`

### Option 2: Custom Domain

1. Follow steps 1-6 from Option 1
2. Add a `CNAME` file with your custom domain:
```bash
echo "www.tellurstori.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```
3. Configure your DNS provider to point to GitHub Pages
4. In repository settings > Pages, add your custom domain

## File Structure

```
tellurstori_homepage/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── whitepaper.md       # Full whitepaper (linked in site)
└── README.md           # This file
```

## Customization

### Update Contact Information

Edit the contact section in `index.html`:
- Email: Update the `mailto:` link
- Twitter: Update the Twitter handle and URL
- Discord: Add your Discord invite link
- Whitepaper: The link already points to `whitepaper.md`

### Colors and Branding

Customize colors in `styles.css` by modifying CSS variables:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... more variables */
}
```

### Add Logo/Images

To add a logo or images:
1. Create an `images/` folder
2. Add your image files
3. Update the logo in `index.html`:
```html
<div class="logo">
    <img src="images/logo.png" alt="TellUrStori">
</div>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- No external dependencies or frameworks
- Minimal JavaScript for fast load times
- Optimized CSS with minimal animations
- Mobile-first responsive design

## SEO

The page includes:
- Meta descriptions and keywords
- Semantic HTML structure
- Proper heading hierarchy
- Alt text ready for images (when added)

## Future Enhancements

Consider adding:
- Open Graph meta tags for social sharing
- Analytics (Google Analytics, Plausible, etc.)
- Newsletter signup form
- Blog section
- FAQ accordion
- Team photos
- Demo video

## Support

For issues or questions about this homepage, please open an issue in the repository.

## License

© 2025 TellUrStori. All rights reserved.

