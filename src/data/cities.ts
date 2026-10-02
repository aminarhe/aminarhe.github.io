// Copied from reference/design-reference.html. Do not invent.

export type City = {
  /** Directory name shown in the listing, and the photo basename in photos/elsewhere/. */
  slug: string;
  tag: string;
};

export const cities: City[] = [
  { slug: 'berlin', tag: 'tennis' },
  { slug: 'buenos-aires', tag: 'fitboxing' },
  { slug: 'taipei', tag: 'surfing' },
  { slug: 'seoul', tag: 'karting' },
  { slug: 'astana', tag: 'yoga' },
];

/**
 * TODO(amina): your line about these cities. Until it is set, the page shows the
 * placeholder comment from the reference. Never written for you.
 */
export const elsewhereNote: string | null = null;
