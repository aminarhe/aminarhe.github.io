# aminarhe.me

Your personal site. Everything on it is plain text in a few files — this README
is how to change it without touching anything technical.

The golden rule, for you and for anyone (including Claude) helping with it:
**nothing on this site is written for you.** Every sentence, number, date,
caption and link comes from you. If something is unknown it stays blank.

---

## Seeing it before you publish

This project needs **Node 22**. Check with `node -v` — it should start with
`v22`. (On Node 26, Astro takes minutes just to start on this Mac and the dev
server silently gives up. If you ever see that again, it's the Node version.)

```sh
npm install           # once, after cloning
npm run dev           # then open http://localhost:4321
```

The page updates by itself every time you save a file — no need to restart.

`npm run dev` gives you your prompt back after a couple of seconds and keeps
the site running in the background, so **Ctrl-C won't stop it**. These do:

```sh
npx astro dev status  # is it running, and where
npx astro dev stop    # stop it
```

You don't need any of this just to publish; it's only for checking a change
before it goes live.

## Publishing

```sh
git add -A
git commit -m "what you changed"
git push
```

That's it. Pushing to `main` rebuilds and deploys the live site automatically
(takes about a minute). Nothing else to run.

---

## Where every piece of text lives

| What you want to change | File |
| --- | --- |
| Your name, intro line, study/based/contact, resume + github links | `src/data/site.ts` |
| The "drives.txt" text (one string per paragraph; `{email}` becomes a link) | `src/data/site.ts` |
| Jobs and internships | `src/data/work.ts` |
| Research | `src/data/research.ts` |
| Cities in "elsewhere" + your line about them | `src/data/cities.ts` |
| One project | `src/content/projects/<name>.md` |
| Hero + city photo captions | `src/data/captions.ts` |
| Photos themselves | `photos/` |

Quotes matter in these files: text goes `'inside single quotes'`, and lines end
with a comma. If a sentence contains an apostrophe, use the curly one (`'`) so
it doesn't end the quote early — the existing text already does this.

---

## Adding a project

This is the thing you'll do most. Two steps.

**1. Make a file** at `src/content/projects/my-thing.md`. Copy an existing one
and edit it — the file name becomes the project's name in the list.

```yaml
---
title: My Thing
where: SomeHacks 2026, 2nd place, team of 3
order: 8
summary: >-
  One paragraph in your own words. Keep it indented like this; it can run
  over several lines and they'll be joined into one.
links:
  - label: devpost
    url: https://...
stack: []
captions: {}
---
```

- `order` sets position in the list. Lower numbers come first. Current projects
  are 1–7, so `8` puts a new one at the end. To slot it in the middle, give it
  the number you want and bump the ones after it.
- `where` is the event, award, team size — whatever you'd say out loud.
- `links` show under the stack as `links: devpost  github`, visible without
  clicking anything. As many as you like, or `links: []` for none. A YouTube
  video is just another entry:

  ```yaml
  links:
    - label: video
      url: https://www.youtube.com/watch?v=...
  ```
- `stack` is the list of tools, shown under the summary as
  `stack: Python, CuPy` with the tools in pink so they're easy to skim. Leave
  `stack: []` to show nothing. One tool per line, in quotes:

  ```yaml
  stack:
    - "Python"
    - "RAPIDS (cuDF, cuSpatial, CuPy)"
  ```

**2. Put its photos** in `photos/projects/my-thing/` — the folder name must match
the file name. See the photos section below.

Anything you write *below* the closing `---` shows up inside that project's
"photos" section, if you ever want to say more about one.

### Removing or reordering

Delete the `.md` file to remove a project. Reorder by changing `order` numbers.

---

## Editing work

`src/data/work.ts` holds a list of places. Each one looks like:

```ts
{
  company: 'Lucid Computing',
  when: 'Infrastructure and Software Engineer Intern, May to August 2026',
  summary: 'The one paragraph people see without clicking.',
  more: [
    'A bullet point, hidden behind the [+] more toggle.',
    'Another bullet.',
  ],
  stack: ['Kubernetes', 'Slurm', 'FastAPI'],
}
```

`stack` shows under the summary, before the [+] more toggle, comma-separated.
Each role inside Trilobio can have its own `stack` too.

Every field except `company` is optional — drop the line entirely if you don't
want it. Trilobio is the special case: it has a `roles:` list inside it, because
it was three internships under one employer. Copy that shape if you ever have
another repeat employer.

To add a new job, copy an existing block and put it where you want it in the
list — order on the page follows order in the file.

---

## Photos

Drop files in and they appear. Nothing to register anywhere.

```
photos/
  hero/            the strip under your name — first 4, in filename order
  elsewhere/       one per city: berlin.jpg, buenos-aires.jpg, taipei.jpg,
                   seoul.jpg, astana.jpg
  projects/<name>/ cover.jpg  = the small square next to the project
                   01.jpg, 02.jpg, ... = the gallery inside "photos"
  work/            parked for now — not shown anywhere yet
```

- The hero files are numbered (`01-`, `02-`, `03-`, `04-`) purely so you
  control the order, and only the first four are shown. Two files starting
  with the same number (say `04-a.jpg` and `04-b.jpg`) both count, and the one
  that sorts first alphabetically wins. Keep one file per number.
  `photos/unused/` is a good place for spares — nothing there is shown.
- `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif` all work. **Use lowercase
  extensions** — your Mac doesn't care but the machine that builds the site does.
- Originals can be huge; they're resized automatically and the originals never
  ship.
- Any slot with no photo shows a dashed placeholder, so a missing photo never
  breaks the page.
- A project with no gallery photos (only a cover, or nothing) shows no
  `[+] photos` toggle at all. Add `01.jpg` to its folder and the toggle appears.

### Captions

Short, yours, optional. They render as `# like a comment` under the photo.

Hero and city captions go in `src/data/captions.ts`:

```ts
export const heroCaptions: Record<string, string> = {
  '01-lucid-datacenter.jpg': 'nvidia, some assembly required',
};
```

Project photo captions go in that project's `.md`, keyed by file name:

```yaml
captions:
  01.jpg: the team, the robot, and a sign reading rm -rf /legs
```

Set a caption to `''` or leave it out to show none.

### When a photo is cropped badly

Slots are 4:3, so tall photos get trimmed top and bottom. `photoFocus` in
`src/data/captions.ts` picks which part to keep:

```ts
export const photoFocus: Record<string, string> = {
  'projects/mars-sous-chef/cover.jpg': 'center 38%',
};
```

Smaller percentage keeps more of the top, larger keeps more of the bottom.
`center 50%` is the default. Paths start from inside `photos/`.

---

## The terminal at the bottom

Visitors can type into it. It understands:

```
help      ls        cd <section>    clear
email     resume    github          stars
```

Tab completes commands and `cd` arguments; ↑ and ↓ walk back through what's
been typed.

It is **not** a real shell. It runs entirely in the visitor's browser, has no
connection to any server, and can only scroll the page or open your links — so
there's nothing for anyone to break into. Keep it that way: don't let anyone
talk you into wiring it to a backend.

---

## Is this site safe?

Yes, and it's worth knowing why: the site is **static**. It's just HTML, CSS and
a little JavaScript sitting on GitHub's servers. There's no database, no login,
no form that submits anywhere, and no code of yours running on a server. There
is nothing to hack in the usual sense — the worst case is someone getting into
your GitHub account, so keep two-factor on there.

Everything a visitor types into the terminal is escaped before being displayed,
so it's shown as text and never run.

---

## Still blank, waiting on you

- City photos (all five) — `photos/elsewhere/`
- Your LinkedIn URL — `src/data/site.ts`
- A work photo section, once there are more work photos (three are parked in
  `photos/work/`)

---

## The look of it

Colours, spacing and type are all in `src/styles/global.css`. You said you'd
rather not edit that by hand — you don't need to. Describe the change you want
and it can be made for you.

`reference/design-reference.html` is the original approved design, kept for
comparison. Don't edit it; it's a reference, not part of the site.
