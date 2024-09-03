import { getProjects } from '$lib/data/projects';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const [project] = await getProjects(params.slug);
	if (project) {
		return { project };
	} else {
		error(404, 'Not found');
	}
};
