import ProjectCard from "@/components/contents/projects/ProjectCard";
import { getProjects } from "@/libs/data/projects";

export default async function ProjectsList() {
  const projects = await getProjects();
  return (
    <>
      <h1 className="text-3xl font-black px-4 py-4">Projects</h1>
      <ul className="grid grid-cols-1 gap-4 px-2 py-4 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </>
  );
}
