import { getProjects } from '$lib/data/projects';

export const load = async () => {
	return { projects: getProjects() };
};

export const prerender = true;
