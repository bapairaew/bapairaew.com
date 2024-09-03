import PhotoContent from "@/components/contents/photos/PhotoContent";
import { getPhotos } from "@/libs/data/photos";
import dateformat from "dateformat";
import { Metadata } from "next";
import { Link } from "react-transition-progress/next";

type Props = { params: { slug: string } };

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata | null> {
  const [photo] = await getPhotos(slug);

  if (!photo) return null;

  return {
    title: photo.place,
    description: [
      photo.place,
      photo.date && dateformat(new Date(photo.date), "dd mmm yyyy"),
      photo.camera,
    ]
      .filter((x) => x)
      .join(" · "),
  };
}

export async function generateStaticParams() {
  const photos = await getPhotos();

  return photos.map((photo) => ({
    slug: photo.slug,
  }));
}

export default function PhotoPage({ params: { slug } }: Props) {
  return (
    <>
      <Link className="block my-4 text-neutral-500" href="/photography">
        ← Photography
      </Link>
      <PhotoContent slug={slug} />
    </>
  );
}
