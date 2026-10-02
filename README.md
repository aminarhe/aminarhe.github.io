# aminarhe.me

Source for [aminarhe.me](https://aminarhe.me), my personal site.

A single static page styled as a terminal session: each section is the output
of a shell command (`whoami`, `cat experience.md`, `ls Projects/`), with a
tmux-style status bar and a small interactive prompt at the bottom.

## Stack

- [Astro](https://astro.build), static output; projects are a content collection
- Images resized and converted to WebP at build time with `astro:assets`
- No client framework, just one small inline script for the prompt and status bar
- Deployed to GitHub Pages by GitHub Actions on every push to `main`

## Development

Requires Node 22.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Layout

```
src/data/              site text, experience, research, cities, captions
src/content/projects/  one Markdown file per project
src/components/        page sections
photos/                source images, picked up by path at build time
public/                static files: resume, icons, link-preview image
```
