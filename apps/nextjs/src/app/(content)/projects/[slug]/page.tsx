import ProjectContent from "@/components/contents/projects/ProjectContent";
import { getProjects } from "@/libs/data/projects";
import { Metadata } from "next";
import { Link } from "react-transition-progress/next";

type Props = { params: { slug: string } };

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata | null> {
  const [project] = await getProjects(slug);

  if (!project) return null;

  return {
    title: project?.title,
    description: project?.description,
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params: { slug } }: Props) {
  return (
    <>
      <Link
        className="block mt-4 text-neutral-500 max-w-prose mx-auto"
        href="/projects"
      >
        ← Projects
      </Link>
      <ProjectContent slug={slug} />
    </>
  );
}
