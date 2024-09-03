import PostContent from "@/components/contents/posts/PostContent";

type Props = { params: { slug: string } };

export default function PostModal({ params: { slug } }: Props) {
  return <PostContent slug={slug} />;
}
