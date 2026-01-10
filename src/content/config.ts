import { defineCollection, z } from 'astro:content';

const coursesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    duration: z.string(),
    level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    fees: z.string(),
    schedule: z.string(),
    technologies: z.array(z.string()),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(999)
  })
});

export const collections = {
  courses: coursesCollection
};
