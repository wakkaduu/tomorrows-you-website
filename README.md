# TOMORROW'S YOU — Official Game Website

> *"Every failed attempt becomes your teammate."*

Official public website for **TOMORROW'S YOU**, an indie 2D top-down mobile puzzle adventure for Android developed with Godot Engine 4.7.2.

---

## 1. Project Overview

TOMORROW'S YOU is set in a mysterious futuristic temporal research facility. Trapped inside anomalous chambers, the player manipulates time by recording successful runs and replaying them as synchronized holographic teammates called **Echoes**. Active Echoes step on pressure plates, unlock boolean logic doors, and navigate intricate paradoxes before their recorded lifecycles expire.

This website serves as the official public front of the game. It is designed to be cinematic, atmospheric, and authentic to the game's established lore and mechanics without relying on generic templates, bloated frameworks, or fabricated marketing claims.

---

## 2. Technology Stack

- **Structure**: Semantic HTML5 with accessible ARIA landmarks.
- **Styling**: Modern CSS3 using CSS Custom Properties, flexbox, CSS grid, and GPU-accelerated CSS animations.
- **Interactions**: Vanilla ES6 JavaScript (Zero third-party framework dependencies, no React, Vue, Tailwind, or jQuery).
- **Icons & Graphics**: Original SVG vectors and high-resolution procedural in-engine game captures.
- **Typography**: Google Fonts (`Space Grotesk`, `Inter`, `IBM Plex Mono`) with fallback font stacks.
- **Deployment**: Static edge hosting via Netlify.
- **Version Control**: Git & GitHub.

---

## 3. Directory Architecture

```text
tomorrows-you-website/
│
├── index.html                  # Main single-page landing site
├── privacy.html                # Privacy policy & data transparency
├── credits.html                # Engine, asset, and library attributions
├── 404.html                    # In-universe temporal anomaly 404 page
│
├── assets/
│   └── images/
│       ├── branding/           # Game icons (SVG, 192px, 512px, adaptive)
│       └── screenshots/        # 10 genuine 720×699 in-engine captures
│
├── css/
│   ├── style.css               # Core design tokens, layout & section styling
│   ├── animations.css          # Temporal glow, particle drift & reduced-motion
│   └── responsive.css          # Mobile drawer & adaptations (360×640 to 1920×1080)
│
├── js/
│   ├── site-config.js          # Central configuration for release status & data
│   ├── navigation.js           # Header scroll, mobile drawer, scrollspy
│   ├── gallery.js              # Screenshot grid & accessible lightbox modal
│   └── main.js                 # Chamber simulator, particle canvas, FAQ, dev log
│
├── favicon.svg                 # Scalable temporal dual-ring favicon
├── robots.txt                  # Search crawler directives
├── sitemap.xml                 # XML sitemap configuration
├── netlify.toml                # Netlify deployment configuration & CSP headers
├── .gitignore                  # Git ignore rules
└── README.md                   # Project documentation
```

---

## 4. Local Development

Because this is a pure static website with no complex build pipelines or Node.js runtime dependencies, you can run it using any lightweight static web server:

### Option A: Python 3 (Built-in)
```bash
# From the tomorrows-you-website/ directory:
python3 -m http.server 8080
```
Then visit `http://localhost:8080` in your web browser.

### Option B: Node.js (npx serve / http-server)
```bash
npx serve .
# or
npx http-server -p 8080
```

### Option C: VS Code Live Server
Right-click `index.html` and choose **"Open with Live Server"**.

---

## 5. Website Configuration (`js/site-config.js`)

All dynamic game data, release statuses, dev log updates, and FAQs are managed through `js/site-config.js`:

```javascript
const SITE_CONFIG = {
  game: {
    title: "TOMORROW'S YOU",
    tagline: "Every failed attempt becomes your teammate.",
    genre: "2D Puzzle Adventure / Time Manipulation / Strategy",
    platform: "Android (Mobile-First)",
    engine: "Godot Engine 4.7.2",
    license: "MIT License"
  },
  release: {
    // Switch between "in-development" and "available"
    status: "in-development",
    version: "1.3.0",
    apkFileSize: "Approx. 42 MB",
    downloadUrl: null,       // Set to official GitHub Release APK URL
    googlePlayUrl: null      // Set to official Google Play Store URL
  },
  // ...
};
```

### Transitioning to Public Release
When the public Android APK is ready for distribution:
1. Open `js/site-config.js`.
2. Change `release.status` from `"in-development"` to `"available"`.
3. Provide the direct APK download URL in `release.downloadUrl`.
4. (Optional) Provide the Google Play Store URL in `release.googlePlayUrl`.
5. Save and commit. The website will automatically update the download badge, activate the primary download button, and display file specifications.

---

## 6. Updating Assets & Content

### Adding or Updating Screenshots
1. Save high-resolution PNG screen captures (recommended resolution: `720×1280` or `720×699`) into `assets/images/screenshots/`.
2. Open `js/gallery.js` and add or modify items in the `GALLERY_ITEMS` array:
```javascript
{
  id: "11",
  src: "assets/images/screenshots/11_new_chamber.png",
  thumb: "assets/images/screenshots/11_new_chamber.png",
  title: "Chamber Name",
  tag: "Gameplay",
  caption: "Detailed description of the tactical puzzle situation."
}
```

### Adding Development Announcements
1. Open `js/site-config.js`.
2. Add a new entry to `SITE_CONFIG.updates`:
```javascript
{
  version: "v1.4.0",
  date: "2026-11-15",
  category: "New Feature",
  badgeClass: "badge-cyan", // 'badge-cyan', 'badge-violet', 'badge-amber', 'badge-green'
  title: "Sector 4 Expansion & Cloud Sync",
  summary: "Brief description of the changes shipped in this version."
}
```

---

## 7. Connecting to GitHub

To push this website to a new GitHub repository:

```bash
# 1. Initialize Git (if not already done)
git init

# 2. Stage and commit all files
git add .
git commit -m "feat: initial release of Tomorrow's You official game website"

# 3. Add your GitHub remote repository
git remote add origin https://github.com/<your-username>/tomorrows-you-website.git

# 4. Push to main branch
git branch -M main
git push -u origin main
```

---

## 8. Netlify Deployment Instructions

This project is pre-configured with `netlify.toml` for zero-configuration static deployment:

1. Log into your [Netlify Dashboard](https://app.netlify.com).
2. Click **"Add new site"** &rarr; **"Import an existing project"**.
3. Choose **GitHub** and authorize access to your `tomorrows-you-website` repository.
4. Deployment settings:
   - **Branch to deploy**: `main`
   - **Base directory**: Leave blank (root)
   - **Build command**: Leave blank (Static site, no build step required)
   - **Publish directory**: `.`
5. Click **"Deploy site"**.
6. (Optional) Set up your custom domain (e.g., `tomorrowsyou.com`) under **Domain management**.
7. Update `robots.txt` and `sitemap.xml` with your custom production domain.

---

## 9. Launch Readiness Checklist

Before public launch:
- [x] Responsive layout validated across mobile, tablet, and desktop viewports.
- [x] Genuine in-engine screenshots mounted with accessible lightbox navigation.
- [x] Interactive Echo mechanic visualizer illustrating fixed lifecycles and WAIT actions.
- [x] 5-tier difficulty progression presented with unique atmospheric treatments.
- [x] Verified development log entries synchronized with `CHANGELOG.md`.
- [x] Static 404 page and Netlify routing rule tested.
- [x] Privacy policy and MIT License attribution documents complete.
- [ ] Review maintainer contact details in `privacy.html` (Section 7).
- [ ] Update `downloadUrl` in `js/site-config.js` once APK package is built.
- [ ] Replace `https://tomorrowsyou.example.com/` in `robots.txt` and `sitemap.xml` with live domain.

---

## 10. License

Website content and source code are released under the [MIT License](LICENSE).
Copyright &copy; 2026 TOMORROW'S YOU. All rights reserved.
