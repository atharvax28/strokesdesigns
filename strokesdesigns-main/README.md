# Strokes Designs - Website Documentation

> Professional interior design portfolio website for a unified 4-person design team specializing in corporate, residential, and commercial projects.

---

## 🎨 Design System

### Color Palette

Our website uses an **Earthen Luxury** color scheme that conveys sophistication, warmth, and professionalism.

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Background** | `#F5EFE6` | Main page background - warm beige |
| **Text Primary** | `#2C2C2C` | Body text - dark charcoal |
| **Accent** | `#334155` | Subtitles, secondary text - slate gray |
| **Signal** | `#0F172A` | Important elements - deep navy |
| **Primary** | `#1E293B` | Headings, CTAs - dark slate |
| **Stone** | `#94A3B8` | Muted elements - blue-gray |
| **Light Gray** | `#E8DFCA` | Borders, dividers - light tan |
| **Border** | `#000000` | Strong borders - black |

### Typography

We use a carefully curated **5-font system** for visual hierarchy and brand distinction:

#### Font Families

1. **Display/Brand Font** - `Cormorant Garamond`
   - **Usage**: Logo, brand name
   - **Style**: Elegant display serif
   - **Weight**: 500-700
   - **Fallback**: Georgia, serif

2. **Heading Font** - `Plus Jakarta Sans`
   - **Usage**: Main headings (H1, H2)
   - **Style**: Modern elegant sans-serif
   - **Weight**: 600
   - **Fallback**: sans-serif

3. **Subheading Font** - `Cormorant Garamond`
   - **Usage**: Subheadings (H3-H6)
   - **Style**: Stylish serif
   - **Weight**: 500
   - **Fallback**: Georgia, serif

4. **Body Font** - `Lora`
   - **Usage**: Body text, paragraphs
   - **Style**: Classic readable serif
   - **Weight**: 400-600
   - **Fallback**: Georgia, serif

5. **UI Font** - `Inter`
   - **Usage**: Buttons, navigation, UI elements
   - **Style**: Clean modern sans-serif
   - **Weight**: 400-700
   - **Fallback**: system-ui, sans-serif

#### Typography Scale

```css
H1: clamp(2.5rem, 5vw, 4.5rem)    /* 40px - 72px */
H2: clamp(2rem, 4vw, 3.5rem)      /* 32px - 56px */
H3: clamp(1.5rem, 3vw, 2.5rem)    /* 24px - 40px */
H4: 1.5rem                         /* 24px */
H5: 1.2rem                         /* 19.2px */
Body: 16px (base)
Subtitle: clamp(1.1rem, 2vw, 1.3rem) /* 17.6px - 20.8px */
```

### Spacing System

Consistent spacing using CSS custom properties:

| Variable | Value | Usage |
|----------|-------|-------|
| `--spacing-xs` | 0.5rem (8px) | Tight spacing |
| `--spacing-sm` | 1rem (16px) | Small gaps |
| `--spacing-md` | 1.5rem (24px) | Medium spacing |
| `--spacing-lg` | 3rem (48px) | Large sections |
| `--spacing-xl` | 5rem (80px) | Major sections |

*Note: Spacing values are responsive and adjust for mobile devices.*

---

## 📁 Site Structure

```
strokes-design/
├── index.html              # Homepage
├── team/
│   └── index.html         # Team profiles page
├── contact/
│   └── index.html         # Contact form & info
├── work/
│   ├── index.html         # Portfolio gallery
│   ├── downloads.html     # Portfolio downloads
│   └── [project].html     # Individual project pages
├── assets/
│   ├── images/            # Team photos, project images
│   ├── icons/             # Favicon, icons
│   └── media/             # Project media files
├── css/
│   ├── core.css          # Variables, reset, typography
│   ├── layout.css        # Grid, containers, sections
│   ├── components.css    # Buttons, cards, UI elements
│   ├── animations.css    # Scroll animations, transitions
│   ├── designfirst.css   # Custom design styles
│   ├── carousel.css      # Image carousel styles
│   └── mobile.css        # Mobile responsive styles
├── js/
│   └── app.js            # Interactive functionality
├── robots.txt            # SEO crawler instructions
├── sitemap.xml           # Site structure for search engines
└── about.json            # Structured data for AI assistants
```

---

## 👥 Team Information

**Strokes Designs** is a unified 4-person interior design team with **57+ years combined experience**.

### Team Members

1. **Vikas Chodankar** - Design Principal
   - 30+ years experience
   - Specialization: Project management, technical detailing, workspace design
   - Contact: chodankar.vikas@gmail.com | +91 98214 24001

2. **Aakanksha Tayade** - Design Lead
   - 16+ years experience
   - Specialization: Conceptual design, client relations, design strategy
   - Contact: 
     - Vikas Chodankar: chodankar.vikas@gmail.com | +91 98214 24001
     - Aakanksha Tayade: tayade.aakanksha@gmail.com | +91 99202 69445

3. **Utkarsha Mhatre** - Concept Lead
   - 8+ years experience
   - Specialization: Spatial narratives, architectural concepts, design storytelling
   - Contact: utkarsha.mhatre@gmail.com

4. **Nupur Meher** - Assistant Design & Design Coordinator
   - 3+ years experience
   - Specialization: 3D visualization, rendering, design coordination
   - Contact: nupurmeher16@gmail.com

---

## 🏢 Services Offered

- **Corporate Office Interior Design** - Fortune 500 workspace solutions
- **Residential Interior Design** - Modern home interiors
- **Commercial Interior Design** - Retail, hospitality, institutional spaces
- **Interior Architecture** - Spatial planning, structural modifications
- **3D Visualization & Rendering** - Photorealistic previews
- **Project Management** - End-to-end execution, vendor coordination
- **Turnkey Execution** - Complete design-to-delivery solutions

---

## 🎯 Notable Clients

- Google
- Ernst & Young (EY)
- Fidelity Investments
- Cargill
- Hitachi
- DNV GL
- Bajaj Financial Centre
- Framestore
- Fractal Analytics
- Axis Bank
- OIC
- Nucleus Office
- Allianz
- JSA Offices

---

## 🌐 SEO & Discoverability

The website is optimized for both traditional search engines and AI assistants (ChatGPT, Claude, Gemini, Perplexity).

### Key Features

- **Comprehensive Meta Tags** - Detailed descriptions with team info, services, clients
- **Structured Data (JSON-LD)** - Organization, team members, FAQs, services
- **AI-Optimized** - Custom meta tags for LLM discovery
- **Robots.txt** - Allows all major search engines and AI crawlers
- **Sitemap.xml** - Complete site structure for indexing
- **about.json** - Machine-readable organization data

### Target Keywords

- Interior design India
- Corporate office interior design
- Fortune 500 office design
- Mumbai interior designers
- Pune interior designers
- Workspace design
- Modern residential interiors
- 3D visualization services

---

## 📱 Responsive Design

The website is fully responsive with breakpoints optimized for:

- **Desktop**: 1920px+ (full experience)
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

### Mobile Optimizations

- Touch-friendly navigation
- Optimized image loading
- Adjusted spacing and typography
- Simplified layouts for small screens
- Mobile-first carousel interactions

---

## ✨ Key Features

### Animations & Interactions

- **Scroll Reveal Animations** - Elements fade in as you scroll
- **Smooth Transitions** - 0.3s ease transitions throughout
- **Hover Effects** - Interactive buttons and links
- **Image Carousels** - Project image galleries
- **Mobile Menu** - Responsive hamburger navigation

### Performance

- **Lazy Loading** - Images load as needed
- **Optimized Fonts** - Google Fonts with preconnect
- **Clean Code** - Semantic HTML5
- **Fast Load Times** - Minimal dependencies

---

## 🎨 Brand Identity

### Logo

**STROKES Design**
- Primary text: "STROKES" (uppercase, Cormorant Garamond)
- Secondary text: "Design" (Inter, smaller, lighter weight)

### Brand Positioning

**Tagline**: "Plug & Play efficiency. Zero reboot time."

**Unique Value Proposition**: Unlike traditional design firms, Strokes Designs operates as a unified 4-person team providing immediate access to all specialists without onboarding friction.

### Brand Personality

- **Professional** - Fortune 500 expertise
- **Unified** - Synchronized team workflow
- **Efficient** - Plug-and-play solutions
- **Experienced** - 57+ years combined expertise
- **Modern** - Contemporary design approach

---

## 📞 Contact Information

**For Full Team Acquisition:**

- **Primary Contact**: chodankar.vikas@gmail.com | +91 98214 24001
- **Design Lead**: tayade.aakanksha@gmail.com | +91 99202 69445
- **Additional**: utkarsha.mhatre@gmail.com
- **Coordination**: nupurmeher16@gmail.com

**Location**: India (Mumbai, Pune areas)

---

## 📄 Technical Specifications

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Dependencies

- **Google Fonts** - Typography
- **Vanilla JavaScript** - No frameworks
- **Pure CSS** - No preprocessors
- **Semantic HTML5** - Accessible markup

### File Sizes

- **CSS Total**: ~15KB (minified)
- **JavaScript**: ~5KB (minified)
- **Images**: Optimized JPEGs and PNGs
- **Total Page Weight**: ~500KB average per page

---

## 🚀 Deployment Notes

### Before Going Live

1. ✅ Update canonical URLs from `vaultdesign.com` to actual domain
2. ✅ Add actual Open Graph images
3. ✅ Configure Google Analytics (if needed)
4. ✅ Submit sitemap to Google Search Console
5. ✅ Test all contact forms
6. ✅ Verify all project links and images
7. ✅ Add SSL certificate
8. ✅ Test on multiple devices and browsers

### Maintenance

- Update project portfolio regularly
- Keep team information current
- Monitor SEO performance
- Update copyright year annually
- Refresh client list as needed

---

## 📊 Analytics & Tracking

Currently configured for:
- Search engine indexing
- AI assistant discovery
- Social media sharing (Open Graph, Twitter Cards)

**Recommended additions:**
- Google Analytics 4
- Google Search Console
- Hotjar or similar heatmap tool
- Contact form analytics

---

## 📝 Content Guidelines

### Writing Style

- **Professional yet approachable**
- **Concise and clear**
- **Focus on client benefits**
- **Highlight team expertise**
- **Emphasize Fortune 500 experience**

### Image Guidelines

- **Format**: JPEG for photos, PNG for graphics
- **Aspect Ratio**: Consistent within sections
- **Quality**: High-resolution, professionally shot
- **Alt Text**: Descriptive for SEO and accessibility
- **File Naming**: Descriptive, lowercase, hyphens

---

## 🔧 Customization Guide

### Changing Colors

Edit `css/core.css` variables:

```css
:root {
    --color-bg: #F5EFE6;      /* Background */
    --color-text: #2c2c2c;    /* Text */
    --color-accent: #334155;  /* Accents */
    /* ... etc */
}
```

### Changing Fonts

Update Google Fonts link in HTML `<head>` and CSS variables in `core.css`:

```css
:root {
    --font-display: 'Your Font', fallback;
    --font-heading: 'Your Font', fallback;
    /* ... etc */
}
```

### Adding New Pages

1. Copy existing page structure
2. Update navigation links
3. Add to `sitemap.xml`
4. Update breadcrumb structured data
5. Test responsive layout

---

## 📞 Support & Questions

For questions about this website or to discuss design services:

**Email**: athutayade@gmail.com
**Phone**: +91 8369197502

---

**Last Updated**: February 2026  
**Version**: 1.0  
**Built for**: Strokes Designs - Professional Interior Design Team
