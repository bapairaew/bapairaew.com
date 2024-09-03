import PhotoCard from "./PhotoCard";
import { getPhotos } from "@/libs/data/photos";

export default async function PhotosList() {
  const photos = await getPhotos();

  return (
    <>
      <h1 className="text-3xl font-black px-4 py-4">Photography</h1>
      <ul className="grid grid-cols-1 gap-4 px-2 py-4 md:grid-cols-2 lg:grid-cols-4">
        {photos.map((photo) => (
          <li key={photo.slug}>
            <PhotoCard photo={photo} />
          </li>
        ))}
      </ul>
    </>
  );
}
