import { getURL, revalidate } from "./api";

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

export const getProjects = async (slug?: string) => {
  const res = await fetch(getURL("projects", slug), { next: { revalidate } });
  if (!res.ok) return [];
  const data: Project[] = await res.json();
  return data;
};
