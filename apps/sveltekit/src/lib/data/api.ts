export const getURL = (dataset: string, slug?: string) => {
  return `https://data.bapairaew.com/${dataset}${slug ? `?slug=${slug}` : ""}`;
};
