import Card, { CardProps } from "@/components/cards/Card";
import CardOverlayAnchor from "@/components/cards/CardOverlayAnchor";
import { Post } from "@/libs/data/posts";
import dateformat from "dateformat";

type PostCardProps = CardProps & {
  post: Post;
};

export default function PostCard({ post, ...props }: PostCardProps) {
  return (
    <Card {...props}>
      <div className="p-4 flex flex-col h-full">
        <CardOverlayAnchor href={`/posts/${post.slug}`}>
          <h1 className="text-xl font-black pb-4">{post.title}</h1>
        </CardOverlayAnchor>
        <p className="pb-4 flex-grow">{post.description || ""}</p>
        <div className="flex justify-between w-full text-neutral-500 text-sm">
          <p>{dateformat(new Date(post.publishedTime), "dd mmm yyyy")}</p>
          <span>Read more →</span>
        </div>
      </div>
    </Card>
  );
}
