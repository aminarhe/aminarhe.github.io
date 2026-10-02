/**
 * Photo discovery.
 *
 * Everything under `photos/` at the repo root is picked up at build time and run
 * through `astro:assets`, so dropping files in is the whole workflow — no path
 * needs to be listed anywhere.
 *
 *   photos/hero/*                  the 4-photo strip under whoami (sorted by name)
 *   photos/projects/<slug>/cover.* the small cover beside a project
 *   photos/projects/<slug>/01.*    gallery photos, sorted by name
 *   photos/elsewhere/<city>.*      one photo per city
 *
 * A slot with no photo yet renders the dashed placeholder from the reference.
 */

const modules = import.meta.glob<{ default: ImageMetadata }>(
  '../../photos/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true },
);

export type Photo = {
  /** Path relative to `photos/`, e.g. `projects/nab-3d/01.jpg`. */
  path: string;
  /** File name only, e.g. `01.jpg`. Used to look captions up. */
  file: string;
  image: ImageMetadata;
};

const PREFIX = '../../photos/';

const all: Photo[] = Object.entries(modules)
  .map(([key, mod]) => {
    const path = key.startsWith(PREFIX) ? key.slice(PREFIX.length) : key;
    return { path, file: path.split('/').pop() as string, image: mod.default };
  })
  .sort((a, b) => a.path.localeCompare(b.path, 'en'));

/** Photos directly inside `photos/<dir>/`, sorted by file name. */
function inDir(dir: string): Photo[] {
  const prefix = `${dir}/`;
  return all.filter(
    (p) => p.path.startsWith(prefix) && !p.path.slice(prefix.length).includes('/'),
  );
}

function basename(file: string): string {
  const dot = file.lastIndexOf('.');
  return dot === -1 ? file : file.slice(0, dot);
}

/** The strip under `whoami`. */
export function heroPhotos(): Photo[] {
  return inDir('hero');
}

/** `photos/projects/<slug>/cover.*`, if it exists. */
export function projectCover(slug: string): Photo | undefined {
  return inDir(`projects/${slug}`).find(
    (p) => basename(p.file).toLowerCase() === 'cover',
  );
}

/** Everything else in `photos/projects/<slug>/`, sorted by file name. */
export function projectPhotos(slug: string): Photo[] {
  return inDir(`projects/${slug}`).filter(
    (p) => basename(p.file).toLowerCase() !== 'cover',
  );
}

/** `photos/elsewhere/<slug>.*`, if it exists. */
export function cityPhoto(slug: string): Photo | undefined {
  return inDir('elsewhere').find(
    (p) => basename(p.file).toLowerCase() === slug.toLowerCase(),
  );
}
