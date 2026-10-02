# aminarhe.me

Personal site. Astro, static output, deployed to GitHub Pages by GitHub Actions.
The approved design is `reference/design-reference.html`; this is a faithful port
of it (paper palette only, no theme or font switcher).

## Run it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # writes dist/
npm run preview  # serve dist/
```

## Where things live

| What | Where |
| --- | --- |
| Projects | `src/content/projects/<slug>.md` — one file each |
| Photos | `photos/` — see `photos/README.md` |
| Work history | `src/data/work.ts` |
| Research | `src/data/research.ts` |
| Cities | `src/data/cities.ts` |
| Name, links, bio, email | `src/data/site.ts` |
| Styles | `src/styles/global.css` |
| Page sections | `src/components/*.astro` |

## Adding a project

1. `src/content/projects/my-thing.md`:

   ```yaml
   ---
   title: My Thing
   where: SomeHacks, 2nd place, team of 3
   order: 8          # where it sits in the list
   summary: >-
     One paragraph, in your words.
   links:
     - label: devpost
       url: https://...
   stack: []         # e.g. [cudf, cupy] — shown as "stack: cudf cupy"
   captions: {}      # e.g. { "01.jpg": "..." }
   ---
   ```

2. `photos/projects/my-thing/cover.jpg`, `01.jpg`, `02.jpg` … (all optional)
3. Commit and push. The build does the rest.

Anything written under the `---` block in the markdown file shows up inside that
project's "photos and links" section, if you want to say more about one.

## Deploy

Pushing to `main` builds and deploys via `.github/workflows/deploy.yml`.

One-time setup in the GitHub repo:

- **Settings → Pages → Source: GitHub Actions**
- Verify the site works on the `*.github.io` URL first.
- Then add `aminarhe.me` as the custom domain and switch DNS (below).
- Once the certificate is issued, tick **Enforce HTTPS**.

`public/CNAME` already contains `aminarhe.me`, so the custom domain survives
redeploys.

## DNS at Hover

Remove the old mmm.page records, then add:

- `A` on `@` → `185.199.108.153`
- `A` on `@` → `185.199.109.153`
- `A` on `@` → `185.199.110.153`
- `A` on `@` → `185.199.111.153`
- `CNAME` on `www` → `<github-username>.github.io`

Do this before the mmm.page subscription ends so the site is never down.

## Ground rule

Every claim, number, caption, date and link on this site comes from Amina or from
the design reference. Nothing here is invented. Missing things are left as TODOs
rather than filled in — see `CLAUDE.md`.
