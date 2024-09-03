import clsx from "clsx";
import { baseSkeletonClassName } from "./const";

export default function TextSkeleton({ className }: { className?: string }) {
  return (
    <span className={clsx(baseSkeletonClassName, "block w-3/6", className)}>
      <span aria-hidden="true" className="invisible">
        Loading
      </span>
    </span>
  );
}
