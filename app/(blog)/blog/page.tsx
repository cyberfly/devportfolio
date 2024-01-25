import { getAllArticles } from "@/services/ArticleService";
import ArticleCard from "@/components/ArticleCard";

export default async function Blog() {
  const articles = await getAllArticles();

  return (
    <>
      <section>
        <div className="max-w-screen-xl mx-auto px-8 py-8">
          <h3 className="text-3xl text-center font-bold mb-12">
            Fathur Rahman - Blog
          </h3>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-4">
            {articles.map((article) => (
              <ArticleCard article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
