import Link from "next/link";
import { Project } from "@/types";

interface IProjectProps {
  project: Project;
}

const ProjectCard = (props: IProjectProps) => {
  const { project } = props;

  return (
    <Link
      href={`/portfolio/p/${project.slug}`}
      className="bg-slate-900 rounded px-4 py-4 border border-slate-800 hover:ring-1 hover:ring-green-600 flex flex-col"
    >
      <h3 className="text-2xl font-medium mb-4">{project.metadata.title}</h3>

      <div className="flex-1">
        <p className="mb-8 text-slate-300">{project.metadata.description}</p>
      </div>

      <div>
        {project.metadata.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-green-500 rounded text-sm text-gray-800 px-1 mr-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default ProjectCard;
