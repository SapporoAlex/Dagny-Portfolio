# Dagny Strand — Portfolio

A React + Vite portfolio site, deployed to GitHub Pages.

- Live site: https://sapporoalex.github.io/Dagny-Portfolio
- Stack: React 19, React Router, Vite 6

## Prerequisites

- Node.js **20+** (required by the image-optimization tooling used in the build)
- npm (comes with Node)

## Local development

```bash
npm install
npm run dev
```

This starts the Vite dev server, printed in the terminal as something like `http://localhost:5173/Dagny-Portfolio/` — note the `/Dagny-Portfolio/` path, it matches the `base` setting in `vite.config.js` and must be included in the URL.

## Building for production

```bash
npm run build
```

Output goes to `dist/`. This also runs the image pipeline automatically (resizing oversized source images and recompressing JPEGs/PNGs), so there's nothing extra to do before deploying.

To sanity-check the actual production build locally before publishing it:

```bash
npm run preview
```

## Deploying to GitHub Pages

Deployment is already wired up via the `gh-pages` npm package. One command does everything:

```bash
npm run deploy
```

This runs `predeploy` first (a fresh `npm run build`), then publishes the contents of `dist/` to the `gh-pages` branch of the repository's `origin` remote. GitHub Pages serves the live site from that branch.

The `homepage` field in `package.json` and the `base` path in `vite.config.js` both encode the repo name (`Dagny-Portfolio`) and must match the actual GitHub repository — if the repo is ever renamed, update both to match.

### First-time setup on a new machine or folder

`npm run deploy` needs a `git` remote to push to. If this folder isn't already a clone of the GitHub repo (for example, if it was downloaded as a zip rather than `git clone`d), connect it before deploying for the first time:

```bash
git init
git remote add origin https://github.com/sapporoalex/Dagny-Portfolio.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

If this folder is already a proper clone with `origin` set correctly, skip straight to the deploy command above.

### Everyday workflow after making changes

Committing your source changes and publishing the live site are two separate steps — pushing to `main` alone does **not** update the deployed site:

```bash
git add .
git commit -m "Describe your changes"
git push          # saves your changes to the main branch's history

npm run deploy    # builds and publishes the live site
```

### What each command is doing, under the hood

1. `npm run deploy` → runs `predeploy` first → `npm run build` → `vite build`, producing a fresh `dist/`.
2. `gh-pages -d dist` then commits `dist/`'s contents to a `gh-pages` branch and pushes it to `origin`, creating that branch automatically the first time.
3. GitHub Pages (configured once in the repo's **Settings → Pages**, source set to the `gh-pages` branch) serves whatever is on that branch — so every `npm run deploy` replaces the live site with the newly built version.
