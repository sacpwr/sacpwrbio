# Sachin Pawar — Engineering Portfolio

A professional portfolio for a Technical Lead and Full-Stack Engineer with 11+ years of experience across React, Node.js, AWS, solution architecture, and engineering leadership.

**Expected GitHub Pages URL:** https://sacpwr.github.io/sacpwrbio/

The URL serves this portfolio after the implementation is merged into `master`, GitHub Pages is configured for Actions, and the deployment succeeds. Creating a pull request does not publish the site.

## Stack

React, TypeScript, Vite, plain CSS, Lucide icons, and locally served Manrope / DM Sans fonts. This is a static site with anchor navigation; no backend, API keys, or router are required.

## Local development

Requires Node.js 22.12+ (Node 24 recommended) and npm.

```bash
npm install
npm run dev
```

Open http://localhost:4173/sacpwrbio/.

```bash
npm run lint
npm run build
npm run preview
```

The production build is written to `dist/`. The committed lockfile makes `npm ci` reproducible in CI. There was no existing test suite; requested checks cover compilation, linting, responsive layouts, navigation, and static assets.

## Enable GitHub Pages

1. Merge the portfolio pull request into `master`.
2. Open [Settings → Pages](https://github.com/sacpwr/sacpwrbio/settings/pages).
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open [Actions](https://github.com/sacpwr/sacpwrbio/actions), select **Build and deploy portfolio**, and run it on `master` if the initial push ran before Pages was enabled.
5. Wait for the `build` and `deploy` jobs to finish. Visit https://sacpwr.github.io/sacpwrbio/.

The workflow lints and builds pull requests without publishing them. Pushes to `master` and manual runs on `master` deploy after a successful build. Deployment uses minimal job-level `pages: write` and `id-token: write` permissions. Actions are pinned to immutable commit SHAs from Vite's published deployment example.

Vite's `base` is `/sacpwrbio/`, including the trailing slash. Public assets such as the resume use `import.meta.env.BASE_URL`, so links work at the repository subpath. If the repository or custom domain changes, update `vite.config.ts`, canonical/OG/JSON-LD URLs in `index.html`, `public/sitemap.xml`, and `public/robots.txt` together.

Official references: [Vite GitHub Pages deployment](https://vite.dev/guide/static-deploy.html#github-pages) · [GitHub custom Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Structure

```text
src/
  components/     Reusable links, icons, section headings, navigation
  data/           Resume-derived content and completed learning entries
  sections/       Hero section
  styles/         Theme, layout, responsive and reduced-motion styles
  App.tsx         Portfolio sections
  main.tsx        React entry and local fonts
public/
  Sachin-Pawar-Resume.pdf
  favicon.svg
  robots.txt
  sitemap.xml
.github/workflows/deploy.yml
```

## Content and maintenance

Edit `src/data/portfolio.ts` to update experience, skills, engineering highlights, awards, education, and learning. The source of truth is the supplied September 2, 2026 resume and LinkedIn certificate screenshot.

- The title, team size (10+), experience (11+ years), and approximate 30% query-load reduction come from the resume.
- The downloadable PDF is a public copy with the phone number and client/project identifiers removed. The original upload is unchanged.
- Professional work is summarized without client identifiers, internal links, or proprietary source. The other accessible public project repositories had README files but no inspectable implementation; no demos or repository capabilities were invented.
- 24 completed courses/credentials are listed, including six selected highlights. Training is not presented as production experience or professional licensure. Unreadable dates, credential IDs, and individual verification URLs are omitted.
- No AWS certification is claimed: the supplied evidence does not establish a completed AWS certificate or current enrolment status.
- AI workflows are described with their guardrails. Broad 80% / near-100% automation claims from the resume are not promoted as independently verified portfolio metrics.
- The page publishes the professional email, LinkedIn URL, and GitHub profile. It does not show a phone number or personal address.

To improve the portfolio further, add a professional portrait, exact credential URLs, and a public project with an architecture write-up and working demo. Add dates/status for future certifications only when confirmed. No placeholder photo, fake project links, or empty contact form is included.

## Accessibility and performance

Semantic sections, skip navigation, keyboard-visible focus, an accessible mobile menu, reduced-motion support, native certificate disclosure, local fonts, SVG icons, and no third-party trackers. All email/resume links work without a server. The interface supports desktop, laptop, tablet, and mobile layouts.

The default branch originally contained a Jekyll README and theme configuration. The obsolete `_config.yml` is removed because Actions now builds the React application; source history remains intact.
