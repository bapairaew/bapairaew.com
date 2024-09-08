import { getPosts } from '$lib/data/data';

export const load = async () => {
	return { posts: getPosts() };
};

export const prerender = true;
