// Every value here comes from reference/design-reference.html. Do not invent.

export const site = {
  /** Browser tab, search results, and link previews. */
  title: 'Amina Rakhimbergenova',
  /** Search-result snippet and link-preview text, in your own words from the intro. */
  description:
    'Software engineer building across AI/ML and robotics, from GPU clusters and LLM serving to robot learning and hardware.',
  host: 'aminarhe.me',
  user: 'amina@aminarhe.me',
  name: 'hey, I’m Amina Rakhimbergenova.',
  heroLine:
    'I’m a software engineer building across AI/ML and robotics, from GPU clusters and LLM serving to robot learning and hardware. I learn new fields fast, but spend most of my time understanding the problem from first principles, down to the math. I’m drawn to ambitious problems, like automating synthetic biology or building technology for AI treaties.',
  study:
    'B.S. Computational Sciences (Concentrating in Math), Minerva University [Graduating May 2027]',
  seeking: 'Full-time roles',
  based: 'San Francisco',
  email: 'amina@uni.minerva.edu',
  resume:
    'https://drive.google.com/file/d/1HpgkH0RtOocvGzwOE7oBc-R135cUvxs5/view?usp=sharing',
  github: 'https://github.com/aminarhe',
  githubLabel: 'github.com/aminarhe',
  linkedin: 'https://www.linkedin.com/in/aminarhe/' as string | null,
} as const;

/**
 * drives.txt, one string per paragraph. Write {email} where you want your
 * email address linked; it shows as the word "email".
 */
export const drives: string[] = [
  'I grew up in Kazakhstan, where you often have to build what you need yourself. It taught me that an individual or a small team can make a real difference, and it’s still how I work - if a problem frustrates me and I can do something about it, I do it.',
  'The problem I can’t stop thinking about is AI risk, and I want to work on it, in AI safety or adjacent to it.',
  'I’m also into philosophy, history, and art for social change. Hot takes welcome by {email}.',
];

export const sections = [
  { id: 'whoami', label: '0:whoami' },
  { id: 'experience', label: '1:experience' },
  { id: 'projects', label: '2:projects' },
  { id: 'research', label: '3:research' },
  { id: 'elsewhere', label: '4:elsewhere' },
] as const;

/** Scroll targets for `ls` / `cd` in the interactive prompt. */
export const directories = [
  'whoami',
  'drives',
  'experience',
  'projects',
  'research',
  'elsewhere',
] as const;
