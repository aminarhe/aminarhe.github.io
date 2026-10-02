export type City = {
  /** Directory name shown in the listing, and the photo basename in photos/elsewhere/. */
  slug: string;
  tag: string;
  /** Two-letter country code (DE, AR, ...). Shown as that country's flag. */
  country: string;
};

/** 'DE' -> the German flag emoji. Windows shows the letters instead. */
export const flag = (code: string) =>
  String.fromCodePoint(...[...code.toUpperCase()].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));

export const cities: City[] = [
  { slug: 'berlin', tag: 'tennis', country: 'DE' },
  { slug: 'buenos-aires', tag: 'fitboxing', country: 'AR' },
  { slug: 'seoul', tag: 'karting', country: 'KR' },
  { slug: 'taipei', tag: 'surfing', country: 'TW' },
  { slug: 'san-francisco', tag: 'pilates', country: 'US' },
  { slug: 'astana', tag: 'yoga', country: 'KZ' },
];

/** Intro line above the city grid. `null` shows a placeholder comment. */
export const elsewhereNote: string | null =
  'I lived in six countries, four continents, mostly through Minerva. Each one stretched my thinking, challenged my biases, and sharpened my non-verbal communication and survival skills. Each also taught me a sport.';
