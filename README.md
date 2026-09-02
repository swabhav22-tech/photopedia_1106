# Wilder Ground — Photography Portfolio

A simple, fast, no-build website for showcasing your Instagram photography. Plain HTML/CSS/JS — no frameworks, no build step, works straight on GitHub Pages.

## What's inside

```
index.html       the whole page
css/style.css     all styling
js/script.js      gallery filter buttons
images/           put your own photos here (currently empty — the site uses placeholder Unsplash photos)
```

## 1. Swap in your own content

Open `index.html` in any text editor and update:

- **Site title & Instagram handle** — search for `@yourhandle` and `instagram.com/yourhandle`, replace with yours (appears in the nav, About section, and footer).
- **Your name** — search for `Your Name` in the footer.
- **Email** — search for `you@example.com` (appears twice: About/CTA button and footer).
- **Hero headline & intro text** — near the top of `<body>`, in `.hero__title`, `.hero__sub`, and the `.intro` paragraph.
- **About text** — in the `#about` section.

## 2. Replace the placeholder photos

The demo uses hotlinked Unsplash photos so you can see the layout immediately. To use your own:

1. Save your photos into the `images/` folder (JPG or WebP, ideally under ~500KB each — compress with [Squoosh](https://squoosh.app) if needed).
2. In `index.html`, each photo lives inside a `<figure class="tile">` block. Replace the `src="https://images.unsplash.com/..."` with `src="images/your-photo.jpg"`.
3. Update the `alt` text to describe the photo, and the two `<span>` values in `<figcaption>` (title + category).
4. Each tile has `data-cat="peaks|water|forest|sky"` — this drives the filter buttons. Use your own categories if you'd like, just keep the filter buttons in the gallery header matching.
5. The hero image and About photo work the same way — just swap their `src`.

Tip: mix a couple of `tile--tall` and `tile--wide` classes among plain tiles (see existing examples) to keep the grid from feeling too uniform — that's what gives it the collage feel rather than a flat grid.

## 3. Preview it locally

No build tools needed. Easiest option:

```bash
cd photography-site
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser. (Or just double-click `index.html` — most things will work, though `loading="lazy"` and fonts behave slightly better served over http.)

## 4. Publish on GitHub Pages

1. Create a new repository on GitHub (e.g. `photography-portfolio`).
2. Push this folder's contents to it:
   ```bash
   cd photography-site
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
5. Wait a minute or two — your site will be live at:
   ```
   https://YOUR-USERNAME.github.io/YOUR-REPO/
   ```

If you want it at the root of `YOUR-USERNAME.github.io` (no repo name in the URL), name the repository exactly `YOUR-USERNAME.github.io`.

## 5. Optional: custom domain

In **Settings → Pages → Custom domain**, add your domain and follow GitHub's DNS instructions (usually a `CNAME` record pointing to `YOUR-USERNAME.github.io`).

## Notes on design

- Palette: warm near-black background, warm off-white text, a burnt-ochre accent for interactive moments, and a muted sage band for the contact section — built to let colorful landscape photos stay the loudest thing on the page.
- Typography: Fraunces (serif, for headlines and the italic intro line) + Work Sans (body/UI).
- The gallery is a CSS grid masonry with a few tall/wide tiles for rhythm, filterable by category with vanilla JS — no libraries required.
- Fully responsive down to small phones; respects `prefers-reduced-motion`; visible focus states for keyboard navigation.
