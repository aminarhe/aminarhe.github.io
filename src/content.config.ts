import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    /** Event / award / team size, exactly as Amina gives it. */
    where: z.string().optional(),
    /** Position in the list. */
    order: z.number(),
    /** The one paragraph shown in the list. */
    summary: z.string(),
    /**
     * Folder under `photos/projects/`. Defaults to the file name, so
     * `mars-sous-chef.md` reads `photos/projects/mars-sous-chef/`.
     */
    photoDir: z.string().optional(),
    /**
     * Captions keyed by photo file name, e.g. `{ "01.jpg": "..." }`.
     * Amina writes these; they are never generated.
     */
    captions: z.record(z.string(), z.string()).default({}),
    links: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),
    stack: z.array(z.string()).default([]),
  }),
});

export const collections = { projects };
