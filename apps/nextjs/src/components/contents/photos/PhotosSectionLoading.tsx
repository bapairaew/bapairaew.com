import { useMemo } from "react";
import { Link } from "react-transition-progress/next";
import PhotoCardLoading from "./PhotoCardLoading";

export default function PhotosSectionLoading() {
  const skeletons = useMemo(() => {
    const skels = [];
    for (let i = 0; i < 8; i++) {
      skels.push(
        <li key={i}>
          <PhotoCardLoading />
        </li>
      );
    }
    return skels;
  }, []);

  return (
    <section className="container mx-auto px-2 py-8">
      <h2 className="font-black text-2xl pb-8">Photography</h2>
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        {skeletons}
      </ul>
      <Link className="w-full text-center block p-4 mt-4" href="/photography">
        All photography →
      </Link>
    </section>
  );
}
