import { getPosts } from '$lib/data/data';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const [post] = await getPosts({ slug: params.slug });
	if (post) {
		return { post };
	} else {
		error(404, 'Not found');
	}
};
