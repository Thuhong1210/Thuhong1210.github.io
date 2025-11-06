<!-- Auto-generated guidance for AI coding agents working on this repo. -->
# Copilot / AI agent instructions — Thuhong1210.github.io

Purpose
- This is a small static website repository used as a personal GitHub Pages site. There is no build system, dependency manager, or automated tests present. Most edits are direct HTML/CSS (and occasional images).

Quick summary the agent should know
- Repo type: plain static site (HTML + CSS, images). Example entry points: `index122.html`, `Week3/index.html`, `Week6/LeftMenu.html`.
- Publishing: hosted on GitHub Pages (push to `main` to publish). No CI/build step is required.

Key files and patterns (examples)
- Top-level pages: `index122.html` (root-level landing page)
- Week folders: `Week3/`, `Week4/`, `Week5/`, `Week6/`, etc. Each usually contains its own HTML and a local `styles.css` or other CSS files.
- Navigation files: `Test/NavBar.html`, `Week 5/Navigation Bar.html` — note there are multiple NavBar variants across folders.
- CSS conventions: files like `styles.css`, `LeftMenu.css`, and `photo-shoot-effect.css` live next to the HTML that uses them.
- Images: e.g. `Week3/images/P01_WelcomeToHTML/` — images are stored in per-week subfolders.

Important project-specific conventions
- No build step: edits are applied directly to HTML/CSS. When adding JS/CSS, keep it co-located with pages unless creating a new top-level `assets/` or `css/` folder (make sure to update relative links accordingly).
- Filenames and folders may contain spaces (e.g., `Week 5/`, `Navigation Bar.html`). If you rename files to remove spaces, update every relative link in the repo — links are often relative and not centralized.
- Relative links: pages use many relative paths (e.g., `../images/...` or local CSS like `styles.css`). Always verify link correctness after moving or renaming files by previewing locally.

Local preview & dev workflow
- There is no npm/webpack/etc. To preview locally, serve from the repo root and open in a browser. Example (for a human):
  - `python3 -m http.server 8000` (run from repo root) and visit `http://localhost:8000/` then open the desired HTML.
- Simple edits: open the target `.html` and `.css` file, update, and test in the browser. For small changes, updating files directly and pushing to `main` will publish via GitHub Pages.

When editing, prefer minimal, safe changes
- Preserve directory structure and filenames unless there's a clear reason to change them. Many links rely on the existing layout.
- If you must change filenames or move files, also update all referencing relative links in the repo (search for filename occurrences).

Examples of useful searches to run before edits
- Search for navigation HTML: `NavBar.html` or `Navigation Bar.html` — there are several copies in different directories.
- Verify references to an image or stylesheet before moving: grep for `photo-shoot-effect.css` or a specific image name.

What not to assume
- There is no automated test or linter configured. Don't add changes that depend on a build pipeline that doesn't exist unless you also add the pipeline files and document them.
- Do not assume a single global stylesheet — multiple local stylesheets are intentionally used per folder.

If you add automation or tests
- Add a short README or a `README.md` at repo root documenting the new steps (build/test/preview). Keep backward compatibility with direct-file edits.

Contact / follow-up
- If anything about the directory layout is unclear, ask the repo owner which pages are primary (they may prefer `index122.html` vs `index.html`).

End of guidance.
