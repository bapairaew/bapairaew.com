import exifr from "exifr";
import { globby } from "globby";
import path, { parse } from "path";
import sharp from "sharp";

export type Photo = {
  slug: string;
  place: string;
  date: string | null;
  camera: string | null;
  fnumber: number;
  iso: number;
  focalLength: number;
  exposureTime: number;
  width: string | number;
  height: string | number;
  blurDataURL?: string;
};

export const getPhotos = async (slug?: string) => {
  const slugs = await globby(getPhotosPath(slug));
  const data = await Promise.all(slugs.map((slug) => getPhotoData(slug)));
  return data.reverse() as Photo[];
};

const getPhotosPath = (slug = "*") => {
  return path.join(process.cwd(), `public/photos/${slug}.jpeg`);
};

const getPhotoData = async (path: string): Promise<Photo> => {
  const [exifrData, blurDataURL] = await Promise.all([
    exifr.parse(path),
    getBlurDataURL(path),
  ]);
  const slug = parse(path).name;
  const placeParts = exifrData.ImageDescription?.split(", ");

  const data: Photo = {
    slug,
    place: [placeParts[0], placeParts.pop()].join(", "),
    date:
      exifrData.DateTimeOriginal?.toJSON() ||
      exifrData.CreateDate?.toJSON() ||
      null,
    camera: exifrData.Model ? exifrData.Model : null,
    fnumber: exifrData.FNumber,
    iso: exifrData.ISO,
    focalLength: exifrData.FocalLength,
    exposureTime: exifrData.ExposureTime,
    width: exifrData.ExifImageWidth, // Does not provide correct dimension
    height: exifrData.ExifImageHeight, // Does not provide correct dimension
    blurDataURL,
  };

  return data;
};

const getBlurDataURL = async (src: string) => {
  return sharp(src)
    .resize(1)
    .blur(5)
    .jpeg({ mozjpeg: true })
    .toBuffer()
    .then((r) => `data:image/jpeg;base64,${r.toString("base64")}`);
};
