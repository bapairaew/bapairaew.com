import PhotoContent from "@/components/contents/photos/PhotoContent";

type Props = { params: { slug: string } };

export default function PhotoModal({ params: { slug } }: Props) {
  return <PhotoContent slug={slug} />;
}
