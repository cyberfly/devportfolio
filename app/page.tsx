import Image from "next/image";
import Link from "next/link";
import { getSkills } from "@/services/SkillService";
import { getAllProjects } from "@/services/ProjectService";
import { getAllArticles } from "@/services/ArticleService";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import ArticleCard from "@/components/ArticleCard";

export default async function Home() {
  const skills = getSkills();
  const projects = await getAllProjects();

  const articles = await getAllArticles();

  return (
    <>
      <section className="bg-slate-800">
        <div className="max-w-screen-xl mx-auto flex flex-row justify-between px-4 md:px-8 pb-10 md:py-20">
          <div className="pr-4 md:pr-0">
            <h3 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I am <span className="block md:inline">Fathur Rahman</span>
            </h3>
            <p className="text-2xl md:text-4xl mb-4 text-slate-200">
              Software Engineer at LaLoka Labs Co
            </p>
            <p className="text-2xl md:text-4xl mb-12 font-semibold">
              i Code. i Lead. i Manage. i Teach.
            </p>
            <div>
              <a
                className="rounded text-2xl text-slate-800 bg-green-600 hover:bg-green-700 px-4 py-2"
                href="/contact"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div>
            <Image
              src="/profile.jpg"
              width={200}
              height={200}
              className="rounded-lg h-auto ring-4 ring-slate-900"
              alt="Profile picture"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-20">
          <h3 className="text-3xl font-bold mb-8">A little bit about me</h3>

          <p className="text-xl mb-8 text-slate-200">
            Experienced Software Engineer with more than 10 years professional
            experience. Equipped with a diverse skill set to efficiently deliver
            software solutions to any organization.
          </p>

          <h3 className="text-3xl font-bold mb-8">Skills</h3>

          <p className="text-xl mb-8 text-slate-200">
            Here are some of my skills that I have acquired over the years
          </p>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-4">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-800">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-20">
          <h3 className="text-3xl font-bold mb-8">Portfolio</h3>

          <p className="text-xl mb-8">
            Here are some of my recent works that I have done
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-20">
          <h3 className="text-3xl font-bold mb-8">Latest from Blog</h3>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-4">
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
