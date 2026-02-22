# Deployment Guide - Strokes Designs Website

This guide explains how to complete each step in the deployment checklist before launching your website.

---

## 1. ✅ Update Canonical URLs

**What**: Change all references from `vaultdesign.com` to your actual domain name.

**How**:
1. Open each HTML file (index.html, team/index.html, contact/index.html, work/index.html)
2. Find and replace all instances of `https://www.vaultdesign.com` with your actual domain
3. Files to update:
   - All `<link rel="canonical">` tags
   - All Open Graph `og:url` meta tags
   - All Twitter Card `twitter:url` meta tags
   - `sitemap.xml` - all URL entries
   - `robots.txt` - sitemap URL
   - `about.json` - organization URL

**Example**:
```html
<!-- Before -->
<link rel="canonical" href="https://www.vaultdesign.com/">

<!-- After -->
<link rel="canonical" href="https://www.yourdomain.com/">
```

---

## 2. ✅ Add Actual Open Graph Images

**What**: Create and add social media preview images that appear when your site is shared on Facebook, LinkedIn, Twitter, etc.

**How**:

### Step 1: Create OG Images
- **Size**: 1200px × 630px (Facebook/LinkedIn standard)
- **Format**: JPG or PNG
- **Content**: Your logo + tagline + sample project image
- **Tools**: Canva, Figma, or Photoshop

### Step 2: Create Multiple Images
You need different images for different pages:
- `og-image.jpg` - Homepage
- `team-og-image.jpg` - Team page
- `work-og-image.jpg` - Portfolio page
- `contact-og-image.jpg` - Contact page

### Step 3: Upload Images
Place images in: `assets/images/` folder

### Step 4: Update HTML
In each page's `<head>` section:

```html
<!-- Open Graph -->
<meta property="og:image" content="https://www.yourdomain.com/assets/images/og-image.jpg">

<!-- Twitter -->
<meta name="twitter:image" content="https://www.yourdomain.com/assets/images/og-image.jpg">
```

### Step 5: Test Your Images
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator
- LinkedIn: Just share the URL and check the preview

---

## 3. ✅ Configure Google Analytics

**What**: Track website visitors, page views, and user behavior.

**How**:

### Step 1: Create Google Analytics Account
1. Go to https://analytics.google.com/
2. Click "Start measuring"
3. Create an account name (e.g., "Strokes Designs")
4. Create a property name (e.g., "Strokes Designs Website")
5. Select your industry category and time zone
6. Accept terms of service

### Step 2: Set Up Data Stream
1. Choose "Web" platform
2. Enter your website URL
3. Enter stream name (e.g., "Main Website")
4. Click "Create stream"

### Step 3: Get Tracking Code
1. Copy the "Measurement ID" (looks like `G-XXXXXXXXXX`)
2. Copy the Google tag code snippet

### Step 4: Add to Website
Add this code to the `<head>` section of **every page** (index.html, team/index.html, etc.):

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

### Step 5: Verify Installation
1. Visit your website
2. Check Google Analytics "Realtime" report
3. You should see yourself as an active user

---

## 4. ✅ Submit Sitemap to Google Search Console

**What**: Tell Google about all pages on your site so they can be indexed in search results.

**How**:

### Step 1: Verify Website Ownership
1. Go to https://search.google.com/search-console
2. Click "Add property"
3. Enter your domain (e.g., `https://www.yourdomain.com`)
4. Choose verification method:

**Option A: HTML File Upload**
- Download the verification file
- Upload to your website root directory
- Click "Verify"

**Option B: HTML Tag**
- Copy the meta tag
- Add to `<head>` section of index.html
- Click "Verify"

**Option C: Google Analytics**
- If you already added GA, this auto-verifies

### Step 2: Submit Sitemap
1. In Search Console, go to "Sitemaps" (left sidebar)
2. Enter sitemap URL: `https://www.yourdomain.com/sitemap.xml`
3. Click "Submit"
4. Status should show "Success" after a few minutes

### Step 3: Monitor Indexing
- Check "Coverage" report to see indexed pages
- Check "Performance" to see search impressions and clicks
- Wait 1-2 weeks for full indexing

---

## 5. ✅ Test All Contact Forms

**What**: Ensure contact forms work and emails are received.

**How**:

### Current Setup Check
Your website currently has contact information but may not have active forms. Check:

**Contact Page** (`contact/index.html`):
- Are there email links? ✅ (mailto links work automatically)
- Are there phone links? ✅ (tel links work automatically)
- Is there a contact form? (Check if present)

### If You Have Contact Forms:

**Test Each Form Field:**
1. Fill out all required fields
2. Try submitting with missing fields (should show errors)
3. Try invalid email formats (should show errors)
4. Submit a valid test message

**Verify Email Receipt:**
1. Check all email addresses receive the message
2. Check spam/junk folders
3. Verify sender information is correct
4. Test reply functionality

### If You Need to Add Forms:

**Option A: Use FormSpree (Free)**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

**Option B: Use Google Forms**
- Create form at https://forms.google.com
- Embed on your website

**Option C: Backend Solution**
- Requires server-side code (PHP, Node.js, etc.)
- More complex but more customizable

---

## 6. ✅ Verify All Project Links and Images

**What**: Check that all portfolio projects load correctly with working images.

**How**:

### Automated Check (Recommended)
Use a broken link checker:
1. **Online Tool**: https://www.deadlinkchecker.com/
   - Enter your website URL
   - Click "Check"
   - Review any broken links or images

2. **Browser Extension**: "Check My Links" (Chrome)
   - Install extension
   - Visit each page
   - Click extension icon to scan

### Manual Check
Go through each page:

**Homepage** (`index.html`):
- ✓ Hero image loads
- ✓ All project thumbnails load
- ✓ All links work

**Work/Portfolio** (`work/index.html`):
- ✓ All project cards show images
- ✓ Clicking each project opens correct page
- ✓ Download links work (if applicable)

**Individual Project Pages**:
- ✓ All project images load
- ✓ Image carousel works
- ✓ Back/navigation links work
- ✓ No 404 errors

**Team Page** (`team/index.html`):
- ✓ All team member photos load
- ✓ Photos are correct aspect ratio
- ✓ No broken images

### Fix Common Issues:
- **Image not found**: Check file path and filename (case-sensitive!)
- **Slow loading**: Optimize/compress large images
- **Wrong image**: Update `src` attribute in HTML

---

## 7. ✅ Add SSL Certificate

**What**: Enable HTTPS to secure your website (shows padlock in browser).

**How**:

### If Using a Web Hosting Service:

**Most hosts offer free SSL (Let's Encrypt):**

1. **cPanel Hosting**:
   - Log into cPanel
   - Find "SSL/TLS Status" or "Let's Encrypt"
   - Click "Issue" or "Enable" for your domain
   - Wait 5-10 minutes for activation

2. **Plesk Hosting**:
   - Go to "SSL/TLS Certificates"
   - Click "Install" or "Get it free"
   - Select Let's Encrypt
   - Click "Install"

3. **Managed Hosting** (Bluehost, SiteGround, etc.):
   - Usually auto-enabled
   - Check hosting dashboard for "SSL" section
   - Toggle on if not already active

### After SSL is Installed:

**Force HTTPS Redirect**:
Add this to `.htaccess` file (create if doesn't exist):

```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

**Update All URLs**:
- Change `http://` to `https://` in all HTML files
- Update canonical URLs
- Update sitemap.xml
- Update robots.txt

**Test**:
1. Visit `http://yourdomain.com` (should redirect to https)
2. Check for padlock icon in browser
3. Use SSL checker: https://www.sslshopper.com/ssl-checker.html

---

## 8. ✅ Test on Multiple Devices and Browsers

**What**: Ensure website works perfectly everywhere.

**How**:

### Desktop Browsers
Test on:
- ✓ **Chrome** (Windows/Mac)
- ✓ **Firefox** (Windows/Mac)
- ✓ **Safari** (Mac)
- ✓ **Edge** (Windows)

**What to Check**:
- Layout looks correct
- Images load properly
- Navigation works
- Animations are smooth
- Forms submit correctly
- No console errors (F12 → Console tab)

### Mobile Devices
Test on actual devices if possible:
- ✓ **iPhone** (Safari)
- ✓ **Android Phone** (Chrome)
- ✓ **iPad/Tablet**

**What to Check**:
- Mobile menu works (hamburger icon)
- Text is readable (not too small)
- Buttons are tap-friendly
- Images scale properly
- No horizontal scrolling
- Forms work on mobile keyboard

### Browser DevTools Testing
If you don't have physical devices:

**Chrome DevTools**:
1. Press F12
2. Click device icon (top-left)
3. Select device from dropdown:
   - iPhone 12 Pro
   - iPad Pro
   - Samsung Galaxy S20
4. Test at different screen sizes

### Responsive Breakpoints to Test:
- **Mobile**: 375px (iPhone), 360px (Android)
- **Tablet**: 768px (iPad)
- **Laptop**: 1366px
- **Desktop**: 1920px

### Common Issues to Fix:
- Text too small on mobile → Increase font size
- Images overflow → Add `max-width: 100%`
- Buttons too small → Increase padding/size
- Menu doesn't work → Check JavaScript
- Slow loading → Optimize images

---

## Quick Testing Checklist

Use this checklist before launch:

### Functionality
- [ ] All navigation links work
- [ ] All images load correctly
- [ ] Contact forms submit successfully
- [ ] Mobile menu opens/closes
- [ ] All project pages accessible
- [ ] Download links work (if applicable)
- [ ] No broken links (404 errors)
- [ ] No JavaScript errors in console

### SEO & Performance
- [ ] All pages have unique titles
- [ ] All pages have meta descriptions
- [ ] Images have alt text
- [ ] Sitemap submitted to Google
- [ ] Robots.txt is accessible
- [ ] SSL certificate active (HTTPS)
- [ ] Page load time < 3 seconds
- [ ] Mobile-friendly (Google test)

### Content
- [ ] All text is proofread
- [ ] Contact information is correct
- [ ] Team member info is current
- [ ] Portfolio projects are up-to-date
- [ ] Copyright year is current
- [ ] No placeholder text remains

### Cross-Browser
- [ ] Works in Chrome
- [ ] Works in Firefox
- [ ] Works in Safari
- [ ] Works in Edge
- [ ] Works on iPhone
- [ ] Works on Android

---

## Helpful Tools

### Testing Tools:
- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
- **Broken Link Checker**: https://www.deadlinkchecker.com/
- **SSL Checker**: https://www.sslshopper.com/ssl-checker.html
- **HTML Validator**: https://validator.w3.org/

### Image Optimization:
- **TinyPNG**: https://tinypng.com/ (compress images)
- **Squoosh**: https://squoosh.app/ (Google's image optimizer)

### SEO Tools:
- **Google Search Console**: https://search.google.com/search-console
- **Google Analytics**: https://analytics.google.com/

---

## Need Help?

If you encounter issues during deployment:

1. **Check browser console** (F12 → Console) for error messages
2. **Search the error message** on Google or Stack Overflow
3. **Contact your hosting provider** for server-related issues
4. **Reach out to the development team** for code-related problems

---

**Good luck with your launch! 🚀**
