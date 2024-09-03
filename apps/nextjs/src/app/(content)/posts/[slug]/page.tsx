import PostContent from "@/components/contents/posts/PostContent";
import { getPosts } from "@/libs/data/posts";
import { Metadata } from "next";
import { Link } from "react-transition-progress/next";

type Props = { params: { slug: string } };

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata | null> {
  const [post] = await getPosts(slug);

  if (!post) return null;

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params: { slug } }: Props) {
  return (
    <>
      <Link
        className="block mt-4 text-neutral-500 max-w-prose mx-auto"
        href="/posts"
      >
        ← Posts
      </Link>
      <PostContent slug={slug} />
    </>
  );
}
