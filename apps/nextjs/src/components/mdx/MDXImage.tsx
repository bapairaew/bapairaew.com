import { FilledImage } from "@/components/images/FilledImage";
import { getRemoteImagePath } from "@/libs/data/image";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

const defaultPlaceholderImage =
  "data:image/jpeg;base64,/9j/2wBDAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKf/2wBDAQYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKf/wgARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/aAAwDAQACEAMQAAAAhioD/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=";

export default async function MDXImage({
  src,
  alt,
}: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) {
  return src && alt ? (
    <figure>
      <FilledImage
        src={getRemoteImagePath(src)}
        alt={alt}
        className="object-contain"
        placeholder={defaultPlaceholderImage}
      />
      <figcaption className="text-center">{alt}</figcaption>
    </figure>
  ) : null;
}
