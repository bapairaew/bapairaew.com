import TextSkeleton from "@/components/skeletons/TextSkeleton";

export default function PostContentLoading() {
  return (
    <div className="prose lg:prose-md dark:prose-invert mx-auto">
      <h1 className="pt-8 m-0">
        <TextSkeleton className="w-10/12" />
      </h1>
      <span className="block pt-8 text-md">
        <TextSkeleton className="w-9/12" />
      </span>
      <div className="pt-4">
        <p>
          <TextSkeleton className="w-8/12" />
        </p>
        <p>
          <TextSkeleton className="w-10/12" />
        </p>
        <p>
          <TextSkeleton className="w-8/12" />
        </p>
        <p>
          <TextSkeleton className="w-11/12" />
        </p>
        <p>
          <TextSkeleton className="w-6/12" />
        </p>
        <p>
          <TextSkeleton className="w-9/12" />
        </p>
      </div>
    </div>
  );
}
