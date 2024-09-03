import ProjectCard from "./ProjectCard";
import { getProjects } from "@/libs/data/projects";
import { Link } from "react-transition-progress/next";

export default async function ProjectsSection() {
  const projects = (await getProjects()).slice(0, 8);

  return (
    <section className="container mx-auto px-2 py-8">
      <h2 className="font-black text-2xl pb-8">Projects</h2>
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((p) => (
          <li key={p.slug}>
            <ProjectCard key={p.slug} project={p} />
          </li>
        ))}
      </ul>
      <Link className="w-full text-center block p-4 mt-4" href="/projects">
        All projects →
      </Link>
    </section>
  );
}
