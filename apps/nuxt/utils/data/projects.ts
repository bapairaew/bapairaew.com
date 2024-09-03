import { getURL } from "./api";

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
  const data: Project[] = await $fetch(getURL("projects", slug));
  return data;
};
