// Every value here comes from reference/design-reference.html. Do not invent.

export const site = {
  title: 'amina@aminarhe.me',
  description: 'Amina Rakhimbergenova: infrastructure, robotics, and AI safety.',
  host: 'aminarhe.me',
  user: 'amina@aminarhe.me',
  name: 'hey, I’m Amina.',
  heroLine:
    'I like big problems that need a deep, fundamental understanding, and learning it on the way.',
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

export const drives =
  'I’m, to some extent, a utility-driven person. I want to work on something big, something that changes the way the world works and hopefully makes it better. I like thinking about thinking, and about the world, history, and art. I enjoy new perspectives and diversity of views, and I value a great argument. I like math. I like robotics. I love learning things on the spot. AI fascinates me, but I think AI safety is what we should work on, and it’s where I want to work.';

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
