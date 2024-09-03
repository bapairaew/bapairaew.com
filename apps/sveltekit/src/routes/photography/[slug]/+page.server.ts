import { getPhotos } from '$lib/data/photos';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const [photo] = await getPhotos(params.slug);
	if (photo) {
		return { photo };
	} else {
		error(404, 'Not found');
	}
};
