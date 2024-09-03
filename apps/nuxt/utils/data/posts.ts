import { getURL } from "./api";

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
  const data: Post[] = await $fetch(getURL("posts", slug));
  return data;
};
