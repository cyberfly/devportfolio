import { Article } from "@/types";

const importAllArticles = (r: any): Promise<Article[]> => {
  return Promise.all(
    r.keys().map(async (fileName: string) => {
      const module = r(fileName);

      const slug = fileName.substring(2).replace(/\/page\.mdx$/, "");

      return {
        slug,
        metadata: module?.metadata,
        component: module?.default,
        readingTime: module?.metadata_readingTime,
      } satisfies Article;
    })
  );
};

export const getAllArticles = async (): Promise<Article[]> => {
  const import_articles = await importAllArticles(
    //@ts-ignore
    require.context("@/app/(blog)/blog/p/", true, /^\.\/[^\/]+\/page\.mdx$/)
  );

  // sort by metadata.date

  import_articles.sort((a, b) => {
    if (a.metadata.date && b.metadata.date) {
      if (a.metadata.date < b.metadata.date) {
        return 1;
      }
      if (a.metadata.date > b.metadata.date) {
        return -1;
      }
    }

    return 0;
  });

  return import_articles;
};

export const getArticleBySlug = async (slug: string): Promise<Article> => {
  const module = require(`@/app/(blog)/blog/p/${slug}/page.mdx`);

  return {
    slug,
    component: module?.default,
    metadata: module?.metadata,
    readingTime: module?.metadata_readingTime,
  };
};
