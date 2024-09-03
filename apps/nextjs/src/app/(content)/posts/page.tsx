import PostsList from "@/components/contents/posts/PostsList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description: "Some (random) thoughts on things.",
};

export default function PostsPage() {
  return <PostsList />;
}
