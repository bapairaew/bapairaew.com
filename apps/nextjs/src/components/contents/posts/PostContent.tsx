import MDXContent from "@/components/mdx/MDXContent";
import { getPosts } from "@/libs/data/posts";
import dateformat from "dateformat";
import { notFound } from "next/navigation";

export default async function PostContent({ slug }: { slug: string }) {
  const [post] = await getPosts(slug);
  if (!post) return notFound();
  return (
    <div className="prose lg:prose-md dark:prose-invert mx-auto">
      <h1 className="pt-8 m-0">{post.title}</h1>
      <span className="block pt-8 text-md text-neutral-500">
        {dateformat(new Date(post.publishedTime), "dd mmm yyyy")} ·{" "}
        {post.keywords || ""}
      </span>
      <div className="pt-4">
        <MDXContent content={post.content} />
      </div>
    </div>
  );
}
