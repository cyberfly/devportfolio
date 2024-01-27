import { getAllArticles } from "@/services/ArticleService";
import ArticleCard from "@/components/ArticleCard";

export default async function Contact() {
  const articles = await getAllArticles();

  return (
    <>
      <section>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8">
          <h3 className="text-3xl font-bold mb-8">Contact Me</h3>
          <p>
            I can be contacted via my personal email{" "}
            <span className="font-medium">cyberflyx@gmail.com</span>
          </p>
          <h3 className="text-3xl font-bold my-8">Social</h3>

          <ul className="space-y-2">
            <li>
              <a
                className="underline"
                target="_blank"
                rel="nofollow"
                href="https://github.com/cyberfly"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="underline"
                target="_blank"
                rel="nofollow"
                href="https://stackoverflow.com/users/417899/cyberfly"
              >
                StackOverflow
              </a>
            </li>
            <li>
              <a
                className="underline"
                target="_blank"
                rel="nofollow"
                href="https://www.linkedin.com/in/fathurrahman/"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
