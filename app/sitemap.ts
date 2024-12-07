import { allArticles } from "content-collections";
import siteConfig from "./metadata";

export default async function sitemap() {
  const articles = allArticles.map((article) => ({
    url: `${siteConfig.url}/articles/${article.slug}`,
    lastModified: new Date(article.date),
  }));

  const routes = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/articles`,
      lastModified: new Date(),
    },
    ...articles,
  ];

  return routes;
} 