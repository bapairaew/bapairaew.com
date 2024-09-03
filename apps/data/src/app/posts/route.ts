import { get } from "@/lib/data/api";
import { loadFromCache } from "@/lib/data/cache";
import { Post } from "@/lib/data/posts";

const data = loadFromCache<Post>("posts.json");

export async function GET(request: Request) {
  return get(request, data);
}
