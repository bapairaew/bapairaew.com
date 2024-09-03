import { useMemo } from "react";
import { Link } from "react-transition-progress/next";
import ProjectCardLoading from "./ProjectCardLoading";

export default async function ProjectsSectionLoading() {
  const skeletons = useMemo(() => {
    const skels = [];
    for (let i = 0; i < 8; i++) {
      skels.push(
        <li key={i}>
          <ProjectCardLoading />
        </li>
      );
    }
    return skels;
  }, []);

  return (
    <section className="container mx-auto px-2 py-8">
      <h2 className="font-black text-2xl pb-8">Projects</h2>
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        {skeletons}
      </ul>
      <Link className="w-full text-center block p-4 mt-4" href="/projects">
        All projects →
      </Link>
    </section>
  );
}
