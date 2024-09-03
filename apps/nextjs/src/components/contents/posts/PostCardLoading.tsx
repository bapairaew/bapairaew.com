import Card, { CardProps } from "@/components/cards/Card";

export default function PostCardLoading(props: CardProps) {
  return (
    <Card {...props}>
      <div className="animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-700 aspect-[3/2]"></div>
    </Card>
  );
}
