import { useMemo } from "react";
import { Link } from "react-transition-progress/next";
import PostCardLoading from "./PostCardLoading";

export default function PostsSectionLoading() {
  const skeletons = useMemo(() => {
    const skels = [];
    for (let i = 0; i < 6; i++) {
      skels.push(
        <li key={i}>
          <PostCardLoading />
        </li>
      );
    }
    return skels;
  }, []);

  return (
    <section className="container mx-auto px-2 py-8">
      <h2 className="font-black text-2xl pb-8">Posts</h2>
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {skeletons}
      </ul>
      <Link className="w-full text-center block p-4 mt-4" href="/posts">
        All posts →
      </Link>
    </section>
  );
}
