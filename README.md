# Prajwal Ganugula — Portfolio

A single-page portfolio that highlights my AI engineering, deep learning, and MLOps work. Built with semantic HTML, custom CSS, and a sprinkle of vanilla JavaScript so it is lightweight and easy to host on GitHub Pages.

## Structure

- `index.html` — base layout, content sections, internal navigation
- `styles.css` — design system, responsive layout, and component styles
- `script.js` — mobile navigation toggle and dynamic copyright year
- `assets/` — place images, PDFs (e.g., `assets/prajwal-ganugula-resume.pdf`), or other static files here

## Local Preview

No build step required. Open `index.html` directly in a browser or use a static server such as:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000` and navigate to `/index.html`.

## Deploying to GitHub Pages

1. Create a new GitHub repository named `<username>.github.io`.
2. Copy the contents of this folder into the repository and push the `main` branch.
3. Wait 1–2 minutes, then visit `https://<username>.github.io` to see the live site.
4. Any time you push changes to `main`, Pages will redeploy automatically.

## Customization Checklist

- Update the GitHub link inside the **Contact** section (`index.html:260`) with your handle.
- Replace the resume button link in **Contact** once the PDF is added to `assets/`.
- Swap in a personal logo or headshot by adding an image to `assets/img/` and referencing it in the hero section if desired.
- Tailor colors and typography by tweaking the CSS variables at the top of `styles.css`.

## Next Ideas

- Add blog posts or presentation decks as new sections.
- Introduce a dark mode toggle by extending the CSS custom properties.
- Hook up simple analytics (e.g., Plausible) to understand traffic sources.

Feel free to iterate and grow the site as your portfolio evolves.
