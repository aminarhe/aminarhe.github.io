# aminarhe.me — build brief

Personal portfolio of Amina Rakhimbergenova. Replaces the old no-code site on mmm.page.
Domain `aminarhe.me` is registered at Hover. Hosting: GitHub Pages, deployed by GitHub Actions.

## Hard rule: do not make anything up

Every claim, number, caption, date, and link on the site must come from Amina or from
`reference/design-reference.html`. Never invent captions, jokes, dates, team sizes, or
descriptions. If something is missing, leave a visible TODO and ask her. Photo captions
stay empty until she writes them.

## Approved design

`reference/design-reference.html` is the approved design. Port its layout, content, and
behavior faithfully. It is one static page; the Astro version should look identical.

- Terminal-style page, read as scrollback: `whoami`, `cat drives.txt`, `cat work.md`,
  `ls projects/`, `cat research/anticlustering.md`, `ls ~/elsewhere`
- Font: **JetBrains Mono** only, all text (self-host it, e.g. via @fontsource, instead of Google Fonts)
- Colors: the **paper** palette only (light). Remove the night and amber themes and the
  preview font/color switcher.
- Keep: subtle grain overlay, tmux-style bottom nav bar with current-section highlight,
  star burst when clicking the name, one-time typing of `whoami`, blinking cursor,
  the interactive prompt at the bottom (help, ls, cd, email, resume, github, stars, clear;
  drop the `theme` command)
- Respect `prefers-reduced-motion`. Keep it accessible (real text, labels, focus states).
- Mobile layout as in the reference.

## Stack

- Astro, static output, content collections
- Images through `astro:assets` so photos are resized and compressed at build time
- No UI framework needed; plain Astro components + a small inline script

## Content model

Projects are one Markdown file each, so adding a hackathon is: new file + photo folder + push.

```
src/content/projects/<slug>.md
src/assets/photos/<slug>/cover.jpg
src/assets/photos/<slug>/01.jpg, 02.jpg, ...
src/assets/photos/hero/*.jpg          (the 4-photo strip under whoami)
src/assets/photos/elsewhere/<city>.jpg
```

Project frontmatter (validate with a schema; all optional fields may be missing):

```yaml
title: MARS Robot Sous Chef
where: RoboHacks            # event / award / team size, exactly as Amina gives it
order: 2                    # position in the list
summary: ...                # the one paragraph shown in the list
cover: ../../assets/photos/mars-sous-chef/cover.jpg
photos:
  - src: ../../assets/photos/mars-sous-chef/01.jpg
    caption: ""             # Amina writes these; never generate
links:
  - label: video
    url: https://...
stack: []
```

Work, research, and the cities list can live in simple data files (`src/data/*.ts` or YAML).
Photo slots with no photo yet should render the dashed placeholder from the reference, not break.

## Deploy

- `astro.config`: `site: 'https://aminarhe.me'`
- `public/CNAME` containing `aminarhe.me`
- `.github/workflows/deploy.yml` using Astro's official GitHub Pages workflow
  (follow the current Astro docs for the action version)
- Repo Settings → Pages → Source: **GitHub Actions**
- First verify the site on the default `*.github.io` URL, then add the custom domain.

## DNS at Hover (Amina does this in Hover's dashboard; guide her through it)

Remove the old mmm.page records, then add:
- `A` records on `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- `CNAME` on `www` → `<github-username>.github.io`
Then enable "Enforce HTTPS" in Pages settings once the certificate is issued.
Do the switch before the mmm.page subscription ends so the site is never down.

## Still missing (ask Amina, don't fill in)

- Photos and their captions
- LinkedIn URL
- Correct link for Sim-Francisco
- Her line for the Elsewhere section
- Whether to add a "Now" section and a Writing section later
