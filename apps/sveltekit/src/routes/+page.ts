import { getPhotos } from '$lib/data/photos';
import { getPosts } from '$lib/data/posts';
import { getProjects } from '$lib/data/projects';

export const load = async () => {
	return {
		projects: getProjects().then((projects) => projects.slice(0, 8)),
		posts: getPosts().then((posts) => posts.slice(0, 6)),
		photos: getPhotos().then((photos) => photos.slice(0, 8))
	};
};

export const prerender = true;
