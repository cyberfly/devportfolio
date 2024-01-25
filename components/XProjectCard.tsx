import Link from "next/link";

interface IProjectProps {
  project: {
    name: string;
    slug: string;
    description: string;
    tags: string[];
  };
}

const XProjectCard = (props: IProjectProps) => {
  const { project } = props;

  return (
    <Link
      href={`/project/${project.slug}`}
      className="bg-slate-900 rounded px-4 py-4 border border-slate-800 hover:ring-1 hover:ring-green-600 flex flex-col"
    >
      <h3 className="text-2xl font-medium mb-4">{project.name}</h3>

      <div className="flex-1">
        <p className="mb-8 text-slate-300">{project.description}</p>
      </div>

      <div>
        {project.tags.map((stack) => (
          <span className="bg-green-500 rounded text-sm text-green-900 px-1 mr-2">
            {stack}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default XProjectCard;
