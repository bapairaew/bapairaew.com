import { getURL, revalidate } from "./api";

export type Post = {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  publishedTime: string;
  modifiedTime: string;
  content: string;
};

export const getPosts = async (slug?: string) => {
  const res = await fetch(getURL("posts", slug), { next: { revalidate } });
  if (!res.ok) return [];
  const data: Post[] = await res.json();
  return data;
};
