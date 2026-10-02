// Every value here comes from reference/design-reference.html. Do not invent.

export const site = {
  title: 'amina@aminarhe.me',
  description: 'Amina Rakhimbergenova: infrastructure, robotics, and AI safety.',
  host: 'aminarhe.me',
  user: 'amina@aminarhe.me',
  name: 'hey, I’m Amina.',
  heroLine:
    'I’m a software engineer who builds across AI/ML and robotics, from GPU clusters and LLM serving to imitation-learning policies, robot hardware, and optimization engines. I dive into new fields fast, but most of my time goes into the problem itself — getting to its first principles, usually through the math. Then the building is faster and more meaningful. I’m drawn to ambitious problems, like automating synthetic biology or building technology for AI treaties.',
  study:
    'Final year, B.S. Computational Sciences (Math and AI), Minerva University',
  based: 'San Francisco',
  email: 'amina@uni.minerva.edu',
  resume:
    'https://drive.google.com/file/d/1HpgkH0RtOocvGzwOE7oBc-R135cUvxs5/view?usp=sharing',
  github: 'https://github.com/aminarhe',
  githubLabel: 'github.com/aminarhe',
  // TODO(amina): LinkedIn URL — not in the reference, send it and it goes under "links".
  linkedin: null as string | null,
} as const;

/**
 * drives.txt, one string per paragraph. Write {email} where you want your
 * email address linked; it shows as the word "email".
 */
export const drives: string[] = [
  'I grew up in Kazakhstan, where many systems weren’t designed to help you, so you learn to build what you need yourself. It taught me that one person or a small team can make a real difference. That’s still how I work: if a problem frustrates me and I think I can do something about it, I do.',
  'The problem I can’t stop thinking about is AI risk. I’ve been digging into it and starting to work on it, and I want to keep going, in AI safety or adjacent to it.',
  'I’m also into philosophy, history, and art for social change, so I’m always up for a good argument. Hot takes welcome by {email}.',
];

export const sections = [
  { id: 'whoami', label: '0:whoami' },
  { id: 'work', label: '1:work' },
  { id: 'projects', label: '2:projects' },
  { id: 'research', label: '3:research' },
  { id: 'elsewhere', label: '4:elsewhere' },
] as const;

/** Scroll targets for `ls` / `cd` in the interactive prompt. */
export const directories = [
  'whoami',
  'drives',
  'work',
  'projects',
  'research',
  'elsewhere',
] as const;
