import { getURL, Options, revalidate } from "./api";

export type Photo = {
  slug: string;
  place: string;
  date: string | null;
  camera: string | null;
  fnumber: number;
  iso: number;
  focalLength: number;
  exposureTime: number;
  width: string;
  height: string;
  blurDataURL?: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string | null;
  description: string;
  keywords: string;
  year: string | null;
  tags: {
    text: string;
    type: string;
  }[];
  content: string;
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  publishedTime: string;
  modifiedTime: string;
  content: string;
};

export const getPhotos = async (options?: Options) => {
  const res = await fetch(getURL("photos", options), { next: { revalidate } });
  if (!res.ok) return [];
  const data: Photo[] = await res.json();
  return data;
};

export const getPosts = async (options?: Options) => {
  const res = await fetch(getURL("posts", options), { next: { revalidate } });
  if (!res.ok) return [];
  const data: Post[] = await res.json();
  return data;
};

export const getProjects = async (options?: Options) => {
  const res = await fetch(getURL("projects", options), {
    next: { revalidate },
  });
  if (!res.ok) return [];
  const data: Project[] = await res.json();
  return data;
};
