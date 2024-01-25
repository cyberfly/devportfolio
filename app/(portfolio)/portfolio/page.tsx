import { getAllProjects } from "@/services/ProjectService";
import ProjectCard from "@/components/ProjectCard";

export default async function Blog() {
  const projects = await getAllProjects();

  return (
    <>
      <section>
        <div className="max-w-screen-xl mx-auto px-8 py-8">
          <h3 className="text-3xl text-center font-bold mb-12">
            Fathur Rahman - Portfolio
          </h3>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
