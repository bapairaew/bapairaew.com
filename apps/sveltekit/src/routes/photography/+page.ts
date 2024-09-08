import { getPhotos } from '$lib/data/data';

export const load = async () => {
	return { photos: getPhotos() };
};

export const prerender = true;
