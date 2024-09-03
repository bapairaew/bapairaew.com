import TextSkeleton from "@/components/skeletons/TextSkeleton";

export default function ProjectContentLoading() {
  return (
    <div className="prose lg:prose-md dark:prose-invert mx-auto">
      <span className="block pt-8 text-sm">
        <TextSkeleton className="w-2/12" />
      </span>
      <h1 className="pt-4 m-0">
        <TextSkeleton />
      </h1>
      <span className="block pt-2 text-lg">
        <TextSkeleton className="w-8/12" />
      </span>
      <span className="block pt-4 text-sm">
        <TextSkeleton className="w-10/12" />
      </span>
      <div className="pt-4">
        <p>
          <TextSkeleton className="w-full" />
        </p>
        <p>
          <TextSkeleton className="w-full" />
        </p>
        <p>
          <TextSkeleton className="w-full" />
        </p>
      </div>
    </div>
  );
}
