import { useMemo } from "react";
import ProjectCardLoading from "./ProjectCardLoading";

export default function ProjectsListLoading() {
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
    <>
      <h1 className="text-3xl font-black px-4 py-4">Projects</h1>
      <ul className="grid grid-cols-1 gap-4 px-2 py-4 md:grid-cols-2 lg:grid-cols-4">
        {skeletons}
      </ul>
    </>
  );
}
