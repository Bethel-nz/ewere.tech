// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
var articles = defineCollection({
  name: "articles",
  directory: "content/articles",
  include: "**/*.md",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    published: z.boolean().default(true),
    tags: z.array(z.string()).optional()
  }),
  transform: (data) => {
    const slug = data._meta.path.replace(/\.md$/, "");
    const formattedDate = new Date(data.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    return {
      ...data,
      slug,
      formattedDate
    };
  }
});
var content_collections_default = defineConfig({
  collections: [articles]
});
export {
  content_collections_default as default
};
