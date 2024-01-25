import { headers } from "next/headers";
import SinglePageMeta from "@/components/SinglePageMeta";
import { getProjectBySlug } from "@/services/ProjectService";

interface IProjectLayoutProps {
  children: React.ReactNode;
}

export default async function ProjectLayout(props: IProjectLayoutProps) {
  const { children } = props;

  const slug = headers().get("x-next-project-slug") as string;

  const project = await getProjectBySlug(slug);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <SinglePageMeta
          metadata={project.metadata}
          extra_classname="mx-auto mb-4 max-w-4xl"
        ></SinglePageMeta>
        <article className="prose prose-lg dark:prose-invert mx-auto max-w-4xl">
          {children}
        </article>
      </div>
    </div>
  );
}
