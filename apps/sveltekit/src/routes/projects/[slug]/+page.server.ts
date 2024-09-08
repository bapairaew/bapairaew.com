import { getProjects } from '$lib/data/data';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const [project] = await getProjects({ slug: params.slug });
	if (project) {
		return { project };
	} else {
		error(404, 'Not found');
	}
};
