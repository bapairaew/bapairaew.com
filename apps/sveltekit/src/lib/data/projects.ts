import { getURL } from './api';

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
	const res = await fetch(getURL('projects', slug));
	const data: Project[] = await res.json();
	return data;
};
