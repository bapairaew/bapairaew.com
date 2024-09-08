export type Options = { slug?: string; count?: number };

export const getURL = (dataset: string, options?: Options) => {
	return `https://data.bapairaew.com/${dataset}?${
		options ? new URLSearchParams(options as Record<string, any>).toString() : ''
	}`;
};

export const revalidate = 60 * 10; // 10 minutes
