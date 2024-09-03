import { Project } from "@/libs/data/projects";
import Card, { CardProps } from "@/components/cards/Card";
import CardOverlayAnchor from "@/components/cards/CardOverlayAnchor";

type ProjectCardProps = CardProps & {
  project: Project;
};

export default function ProjectCard({ project, ...props }: ProjectCardProps) {
  return (
    <Card {...props}>
      <div className="p-4">
        <CardOverlayAnchor href={`/projects/${project.slug}`}>
          <h1 className="text-xl font-black pb-2">{project.title}</h1>
        </CardOverlayAnchor>
        <p className="pb-2 text-sm text-neutral-500">
          {project.subtitle || ""}
        </p>
        <p className="truncate text-sm text-neutral-500">
          {project.tags.map((t) => t.text).join(" · ")}
        </p>
      </div>
    </Card>
  );
}
