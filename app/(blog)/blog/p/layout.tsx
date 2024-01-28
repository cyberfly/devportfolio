import { headers } from "next/headers";
import SinglePageMeta from "@/components/SinglePageMeta";
import { getArticleBySlug } from "@/services/ArticleService";

interface IPostLayoutProps {
  children: React.ReactNode;
}

export default async function PostLayout(props: IPostLayoutProps) {
  const { children } = props;

  const slug = headers().get("x-next-article-slug") as string;

  const article = await getArticleBySlug(slug);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 pt-8 pb-20">
        <SinglePageMeta
          metadata={article.metadata}
          extra_classname="mx-auto mb-4 max-w-4xl"
        ></SinglePageMeta>
        <article className="prose md:prose-md lg:prose-lg dark:prose-invert prose-img:rounded-lg mx-auto max-w-4xl">
          {children}
        </article>
      </div>
    </div>
  );
}
