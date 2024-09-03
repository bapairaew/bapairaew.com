export const getURL = (dataset: string, slug?: string) => {
  return `https://data.bapairaew.com/${dataset}${slug ? `?slug=${slug}` : ""}`;
};

export const revalidate = 60 * 10; // 10 minutes
