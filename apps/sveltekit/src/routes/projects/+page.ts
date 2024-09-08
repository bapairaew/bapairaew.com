import { getProjects } from '$lib/data/data';

export const load = async () => {
	return { projects: getProjects() };
};

export const prerender = true;
