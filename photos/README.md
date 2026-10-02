# photos/

Drop photos here. Nothing else needs changing — the build picks them up, resizes
them, and converts them to WebP. A slot with no photo yet shows the dashed
placeholder, so the site never breaks because a photo is missing.

```
photos/
  hero/01.jpg 02.jpg 03.jpg 04.jpg   the four-photo strip under `whoami`
                                     (sorted by name, first four are used)
  elsewhere/berlin.jpg               one per city: berlin, buenos-aires,
            buenos-aires.jpg         taipei, seoul, astana
            taipei.jpg
            seoul.jpg
            astana.jpg
  projects/<slug>/cover.jpg          the small square next to a project
  projects/<slug>/01.jpg 02.jpg      the gallery inside "photos and links"
```

`<slug>` is the project's file name in `src/content/projects/`, so
`mars-sous-chef.md` reads from `photos/projects/mars-sous-chef/`.

`.jpg`, `.jpeg`, `.png`, `.webp` and `.avif` all work. Use lowercase extensions —
macOS does not care about case but the Linux machine that builds the site does.

Originals can be full size; they are resized at build time and the originals are
never shipped.

## Captions

Captions are yours to write, and nothing writes them for you. They go in the
project's markdown file, keyed by file name:

```yaml
captions:
  cover.jpg: the arm mid-pour
  01.jpg: 3am, the gripper finally held
```

A photo with no caption is shown without one.
