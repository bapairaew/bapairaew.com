import { getPosts } from "@/libs/data/posts";
import PostCard from "./PostCard";

export default async function PostsList() {
  const posts = await getPosts();
  return (
    <>
      <h1 className="text-3xl font-black px-4 py-4">Posts</h1>
      <ul className="grid grid-cols-1 gap-4 px-2 py-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </>
  );
}
