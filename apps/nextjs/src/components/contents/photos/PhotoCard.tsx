import Card, { CardProps } from "@/components/cards/Card";
import CardOverlayAnchor from "@/components/cards/CardOverlayAnchor";
import { FilledImage } from "@/components/images/FilledImage";
import { getRemoteImagePath } from "@/libs/data/image";
import { Photo } from "@/libs/data/photos";
import dateformat from "dateformat";

type PhotoCardProps = CardProps & {
  photo: Photo;
};

export default function PhotoCard({ photo, ...props }: PhotoCardProps) {
  return (
    <Card {...props}>
      <FilledImage
        placeholder="blur"
        className="object-cover"
        blurDataURL={photo.blurDataURL}
        alt={photo.place}
        src={getRemoteImagePath(`/photos/${photo.slug}.jpeg`)}
      />
      <div className="p-2">
        <CardOverlayAnchor href={`/photography/${photo.slug}`}>
          <h1 className="font-black">{photo.place}</h1>
        </CardOverlayAnchor>
        {photo.date && (
          <p className="text-neutral-500 text-sm">
            {[dateformat(new Date(photo.date), "dd mmm yyyy"), photo.camera]
              .filter((x) => x)
              .join(" · ")}
          </p>
        )}
      </div>
    </Card>
  );
}
