import fs from "fs";
import { globby } from "globby";
import matter from "gray-matter";

export type GrayMatterFileWithPath = matter.GrayMatterFile<string> & {
  path: string;
};

export const getMarkdownFrontMatter = async (pattern: string) => {
  const data = await Promise.all(
    (
      await globby(pattern)
    ).map((path) =>
      fs.promises.readFile(path, "utf-8").then((source) => ({
        ...matter(source),
        path,
      }))
    )
  );

  return data;
};
