import { getPosts } from "@/libs/data/posts";
import { Link } from "react-transition-progress/next";
import PostCard from "./PostCard";

export default async function PostsSection() {
  const posts = (await getPosts()).slice(0, 6);

  return (
    <section className="container mx-auto px-2 py-8">
      <h2 className="font-black text-2xl pb-8">Posts</h2>
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <li key={p.slug}>
            <PostCard post={p} />
          </li>
        ))}
      </ul>
      <Link className="w-full text-center block p-4 mt-4" href="/posts">
        All posts →
      </Link>
    </section>
  );
}
