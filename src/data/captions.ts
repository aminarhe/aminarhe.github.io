/**
 * Photo captions for the hero strip and the cities.
 * (Project photo captions live in that project's markdown file.)
 *
 * Keys are file names inside photos/hero/ and photos/elsewhere/.
 * An empty string or a missing key shows no caption.
 */

export const heroCaptions: Record<string, string> = {
  '01-lucid-datacenter.jpg': 'first time in data center',
  '02-trilo-pcb.jpg': 'a pcb, designed by me [rhyme!]',
  '03-sutro.png': 'Sutro baths, correct amount of cloud',
  '04-patagoniame.jpg': 'hiking in Patagonia'
};

export const cityCaptions: Record<string, string> = {
  // berlin: 'a line from you',
};

/**
 * Photo slots are 4:3, so a portrait photo is cropped to fit. This says which
 * part to keep, as a CSS object-position: `center 30%` keeps the upper third,
 * `center bottom` keeps the bottom, `left center` keeps the left edge.
 * Keys are paths under photos/. Anything not listed is centred.
 */
export const photoFocus: Record<string, string> = {
  'projects/mars-sous-chef/cover.jpg': 'center 38%',
};
