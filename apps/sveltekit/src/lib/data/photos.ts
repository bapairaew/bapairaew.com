import { getURL } from './api';

export type Photo = {
	slug: string;
	place: string;
	date: string | null;
	camera: string | null;
	fnumber: number;
	iso: number;
	focalLength: number;
	exposureTime: number;
	width: string;
	height: string;
	blurDataURL?: string;
};

export const getPhotos = async (slug?: string) => {
	const res = await fetch(getURL('photos', slug));
	const data: Photo[] = await res.json();
	return data;
};
