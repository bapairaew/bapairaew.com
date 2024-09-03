import clsx from "clsx";
import { baseSkeletonClassName } from "./const";

export default function ImageSkeleton({ className }: { className?: string }) {
  return (
    <div className={clsx("aspect-[4/3] relative", className)}>
      <div className={clsx(baseSkeletonClassName, "w-full h-full")} />
    </div>
  );
}
