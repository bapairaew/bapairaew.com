import { getPhotos } from "./src/lib/data/photos";
import { getPosts } from "./src/lib/data/posts";
import { getProjects } from "./src/lib/data/projects";
import fs from "fs";

const cacheDir = ".cache/";

const genCache = async () => {
  if (fs.existsSync(cacheDir)) {
    await fs.promises.rm(cacheDir, { recursive: true });
  }
  fs.mkdirSync(cacheDir);

  await Promise.all([
    getPhotos().then((p) =>
      fs.promises.writeFile(".cache/photos.json", JSON.stringify(p))
    ),
    getPosts().then((p) =>
      fs.promises.writeFile(".cache/posts.json", JSON.stringify(p))
    ),
    getProjects().then((p) =>
      fs.promises.writeFile(".cache/projects.json", JSON.stringify(p))
    ),
  ]);
};

genCache();
