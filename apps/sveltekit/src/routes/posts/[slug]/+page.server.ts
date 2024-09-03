import { getPosts } from '$lib/data/posts';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const [post] = await getPosts(params.slug);
	if (post) {
		return { post };
	} else {
		error(404, 'Not found');
	}
};
