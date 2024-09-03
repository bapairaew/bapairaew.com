import { FilledImage } from "@/components/images/FilledImage";
import { getRemoteImagePath } from "@/libs/data/image";
import { getPhotos } from "@/libs/data/photos";
import dateformat from "dateformat";
import { notFound } from "next/navigation";

export default async function PhotoContent({ slug }: { slug: string }) {
  const [photo] = await getPhotos(slug);
  if (!photo) return notFound();

  return (
    <>
      <FilledImage
        placeholder="blur"
        className="object-cover"
        blurDataURL={photo.blurDataURL}
        alt={photo.place}
        src={getRemoteImagePath(`/photos/${photo.slug}.jpeg`)}
      />
      <h1 className="mt-8 text-xl font-black">{photo.place}</h1>
      <dl className="grid grid-cols-2 gap-2 mt-4">
        {photo.date && (
          <div>
            <dt className="text-sm text-neutral-500">Date</dt>
            <dd>{dateformat(new Date(photo.date), "dd mmm yyyy")}</dd>
          </div>
        )}
        <div>
          <dt className="text-sm text-neutral-500">Camera</dt>
          <dd>{photo.camera}</dd>
        </div>
        <div>
          <dt className="text-sm text-neutral-500">Aperture</dt>
          <dd>ƒ / {photo.fnumber}</dd>
        </div>
        <div>
          <dt className="text-sm text-neutral-500">Exposure Time</dt>
          <dd>1 / {(1 / photo.exposureTime).toFixed(0)}</dd>
        </div>
        <div>
          <dt className="text-sm text-neutral-500">Focal Length</dt>
          <dd>{photo.focalLength.toFixed(1)} mm</dd>
        </div>
        <div>
          <dt className="text-sm text-neutral-500">ISO</dt>
          <dd>{photo.iso}</dd>
        </div>
      </dl>
    </>
  );
}
