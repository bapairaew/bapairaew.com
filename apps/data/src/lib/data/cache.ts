import fs from "fs";
import path from "path";

export const loadFromCache = <T>(cachePath: string): T[] => {
  const fullCachePath = path.join(process.cwd(), ".cache", cachePath);
  if (fs.existsSync(fullCachePath)) {
    return JSON.parse(fs.readFileSync(fullCachePath, "utf8")) as T[];
  } else {
    throw new Error(`Cache file not found: ${fullCachePath}`);
  }
};
