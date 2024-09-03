import { getPhotos } from '$lib/data/photos';

export const load = async () => {
	return { photos: getPhotos() };
};

export const prerender = true;
