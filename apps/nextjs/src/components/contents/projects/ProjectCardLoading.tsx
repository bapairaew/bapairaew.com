import Card, { CardProps } from "@/components/cards/Card";

export default function ProjectCardLoading(props: CardProps) {
  return (
    <Card {...props}>
      <div className="animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-700 aspect-[2/1]"></div>
    </Card>
  );
}
