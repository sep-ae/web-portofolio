import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    github: z.string().url(),
    demo: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
