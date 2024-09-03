import { get } from "@/lib/data/api";
import { loadFromCache } from "@/lib/data/cache";
import { Photo } from "@/lib/data/photos";

const data = loadFromCache<Photo>("photos.json");

export async function GET(request: Request) {
  return get(request, data);
}
