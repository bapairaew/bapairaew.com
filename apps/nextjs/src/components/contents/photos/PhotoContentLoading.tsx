import TextSkeleton from "@/components/skeletons/TextSkeleton";
import ImageSkeleton from "@/components/skeletons/ImageSkeleton";

export default function PhotoContentLoading() {
  return (
    <>
      <ImageSkeleton />
      <h1 className="mt-8 text-xl font-black">
        <TextSkeleton />
      </h1>
      <dl className="grid grid-cols-2 gap-2 mt-4">
        <div>
          <dt className="text-sm text-neutral-500">Date</dt>
          <dd>
            <TextSkeleton />
          </dd>
        </div>
        <div>
          <dt className="text-sm text-neutral-500">Camera</dt>
          <dd>
            <TextSkeleton />
          </dd>
        </div>
        <div>
          <dt className="text-sm text-neutral-500">Aperture</dt>
          <dd>
            <TextSkeleton />
          </dd>
        </div>
        <div>
          <dt className="text-sm text-neutral-500">Exposure Time</dt>
          <dd>
            <TextSkeleton />
          </dd>
        </div>
        <div>
          <dt className="text-sm text-neutral-500">Focal Length</dt>
          <dd>
            <TextSkeleton />
          </dd>
        </div>
        <div>
          <dt className="text-sm text-neutral-500">ISO</dt>
          <dd>
            <TextSkeleton />
          </dd>
        </div>
      </dl>
    </>
  );
}
