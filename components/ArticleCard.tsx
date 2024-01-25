import Link from "next/link";
import { Article } from "@/types";

interface IArticleProps {
  article: Article;
}

const ArticleCard = (props: IArticleProps) => {
  const { article } = props;

  return (
    <Link
      href={`/blog/p/${article.slug}`}
      className="bg-slate-900 rounded px-4 py-4 border border-slate-800 hover:ring-1 hover:ring-green-600 flex flex-col"
    >
      <h3 className="text-2xl font-medium mb-4">{article.metadata.title}</h3>

      <div className="flex-1">
        <p className="mb-8 text-slate-300">{article.metadata.description}</p>
      </div>

      <div></div>
    </Link>
  );
};

export default ArticleCard;
