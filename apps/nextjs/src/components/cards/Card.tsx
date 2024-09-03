import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export type CardProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export default function Card({ className, ...props }: CardProps) {
  return (
    <section
      className={clsx(
        "transition relative flex flex-col justify-start h-full",
        "border border-neutral-900 rounded-sm bg-white dark:bg-neutral-800",
        "shadow-[0_4px] shadow-black dark:shadow-neutral-900",
        "hover:-translate-y-1 hover:shadow-[0_6px]",
        "active:translate-y-1 active:shadow-[0_1px]",
        className
      )}
      {...props}
    />
  );
}
