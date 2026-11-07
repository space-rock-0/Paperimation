# Paperimation.ai web application

Owned and maintained by **Sagi Siddhartha** · [GitHub](https://github.com/space-rock-0/Paperimation) · [LinkedIn](https://www.linkedin.com/in/siddhartha-sagi/)

## GitHub Pages

Deployment URL: **TODO — add the live GitHub Pages URL after publishing.**

Publish the repository's `docs/` folder through GitHub Pages. Its entry point is `docs/index.html`, with `docs/style.css` and existing relative image/video paths. This site does not require a React build.

In repository Pages settings, select the branch containing the site and `/docs` as the publishing source.

GitHub Pages serves the static documentation and demonstrations. It does not run FastAPI, the Python pipeline, or Manim. Interactive generation needs a separately hosted backend; API keys must stay on the backend.

## Application structure

- `src/main.tsx`: React entry point.
- `src/App.tsx`: application routes.
- `apps/api/main.py`: FastAPI backend.
- `vite.config.ts`: frontend tooling and local API proxy.
- `../docs/index.html`: GitHub Pages entry.
- `../branding-guidelines_ui.html`: design reference.

React, TypeScript, Vite, shadcn/ui, and Tailwind CSS power the frontend. Styling uses Poppins, purple primary actions, pink accents, and light rounded panels.

## Local development

See the [root setup guide](../README.md) for Python dependencies, API credentials, Manim, FFmpeg, and LaTeX.

From `paperimation_website/`, `npm ci` installs the dependencies recorded in `package-lock.json`. `npm run dev` starts the existing frontend and backend commands; `npm run build` regenerates `dist/`. This React output is separate from the `docs/` GitHub Pages site.

npm and `package-lock.json` are the frontend's dependency source of truth.

## License

The [PolyForm Noncommercial License](../LICENSE) remains unchanged.
