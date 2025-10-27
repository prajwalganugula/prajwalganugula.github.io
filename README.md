# Prajwal Ganugula — Portfolio

A single-page portfolio that showcases both of my career tracks: multimodal AI systems and platform/infrastructure engineering. Built with semantic HTML, custom CSS, and lightweight JavaScript so it stays fast on GitHub Pages.

## Structure

- `index.html` — layout, content, and data-track toggles for AI vs. Platform views
- `styles.css` — design system, responsive layout, cards, timelines, and gallery styling
- `script.js` — mobile navigation toggle, track switching logic, and footer year
- `assets/img/` — research imagery (e.g., MOSAIC figures extracted from ICCV paper)
- `assets/docs/` — drop-in location for downloadable resume PDFs (add manually)

## Local Preview

No build step required. Open `index.html` in a browser or serve the folder:

```bash
python -m http.server 8000
```

Visit `http://localhost:8000/index.html` to browse the site.

## Deploying to GitHub Pages

1. Push the content to the `<username>.github.io` repository’s `main` branch.
2. Ensure Pages is configured for the `main` branch (Settings → Pages).
3. Wait a minute for deployment, then visit `https://<username>.github.io`.
4. Future pushes to `main` redeploy automatically.

## Customization Checklist

- Replace the disabled resume buttons in **Resumes & Artifacts** once PDFs are added to `assets/docs/`.
- Update hero metrics or add new focus tracks to reflect future roles.
- Swap in a headshot or custom illustration by adding an image to `assets/img/` and referencing it from the hero.
- Adjust colors/typography via the CSS variables defined at the top of `styles.css`.
- Extend the research gallery with additional artifacts (drop images into `assets/img/`).

## Next Ideas

- Add case-study pages per project (could be separate HTML files or Markdown-to-HTML via a static generator).
- Layer in a “Latest updates” or blog section.
- Provide a dark mode toggle by extending the CSS custom properties.
- Instrument privacy-friendly analytics such as Plausible or Umami.

Feel free to iterate and grow the site as your portfolio evolves.
