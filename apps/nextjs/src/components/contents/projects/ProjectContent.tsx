import MDXContent from "@/components/mdx/MDXContent";
import { getProjects } from "@/libs/data/projects";
import { notFound } from "next/navigation";

export default async function ProjectContent({ slug }: { slug: string }) {
  const [project] = await getProjects(slug);
  if (!project) return notFound();

  const tagsMap = project.tags.reduce((map, tag) => {
    return { ...map, [tag.type]: [...(map[tag.type] || []), tag.text] };
  }, {} as Record<string, string[]>);

  const techStack = [
    tagsMap["App type"]?.join(" · "),
    tagsMap["Layer"]?.join(" · "),
    [...(tagsMap["Framework"] || []), ...(tagsMap["Database"] || [])].join(
      " · "
    ),
    tagsMap["Platform"]?.join(" · "),
    tagsMap["Language"]?.join(" · "),
    tagsMap["Other"]?.join(" · "),
  ]
    .filter((x) => x)
    .join(" / ");

  return (
    <div className="prose lg:prose-md dark:prose-invert mx-auto">
      <span className="block pt-8 text-sm text-neutral-500 font-normal">
        {[project.year, tagsMap["Company"]?.[0]].filter((x) => x).join(" · ")}
      </span>
      <h1 className="pt-4 m-0">{project.title}</h1>
      <span className="block pt-2 text-lg">{project.subtitle || ""}</span>
      <span className="block pt-4 text-sm text-neutral-500 font-normal">
        {techStack}
      </span>
      <div className="pt-4">
        <MDXContent content={project.content} />
      </div>
    </div>
  );
}
