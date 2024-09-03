import { MDXRemote } from "next-mdx-remote/rsc";
import remarkUnwrapImages from "remark-unwrap-images";
import MDXImage from "./MDXImage";
import { MDXLink } from "./MDXLink";

export default function MDX({ content }: { content: string }) {
  return (
    <MDXRemote
      source={content}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkUnwrapImages],
        },
      }}
      components={{
        img: MDXImage,
        a: MDXLink,
      }}
    />
  );
}
