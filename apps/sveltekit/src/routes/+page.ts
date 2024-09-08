import { getPhotos } from '$lib/data/data';
import { getPosts } from '$lib/data/data';
import { getProjects } from '$lib/data/data';

export const load = async () => {
	return {
		projects: getProjects({ count: 8 }),
		posts: getPosts({ count: 6 }),
		photos: getPhotos({ count: 8 })
	};
};

export const prerender = true;
