import { Project } from "@/types";

const importAllProjects = (r: any): Promise<Project[]> =>
  Promise.all(
    r.keys().map(async (fileName: string) => {
      const module = r(fileName);

      const slug = fileName.substring(2).replace(/\/page\.mdx$/, "");

      return {
        slug,
        metadata: module?.metadata,
        component: module?.default,
        readingTime: module?.metadata_readingTime,
      } satisfies Project;
    })
  );

export const getAllProjects = async (): Promise<Project[]> => {
  const import_projects = await importAllProjects(
    //@ts-ignore
    require.context(
      "@/app/(portfolio)/portfolio/p/",
      true,
      /^\.\/[^\/]+\/page\.mdx$/
    )
  );

  // sort by metadata.date

  import_projects.sort((a, b) => {
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

  return import_projects;
};

export const getProjectBySlug = async (slug: string): Promise<Project> => {
  const module = require(`@/app/(portfolio)/portfolio/p/${slug}/page.mdx`);

  return {
    slug,
    component: module?.default,
    metadata: module?.metadata,
    readingTime: module?.metadata_readingTime,
  };
};
