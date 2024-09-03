import { get } from "@/lib/data/api";
import { loadFromCache } from "@/lib/data/cache";
import { Project } from "@/lib/data/projects";

const data = loadFromCache<Project>("projects.json");

export async function GET(request: Request) {
  return get(request, data);
}
