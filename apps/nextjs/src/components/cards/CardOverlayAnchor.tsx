import clsx from "clsx";
import { Link } from "react-transition-progress/next";
import { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof Link>;

export default function CardOverlayAnchor({ ...props }: LinkProps) {
  return (
    <Link
      {...props}
      className={clsx(
        `before:content-[''] before:top-0 before:left-0 before:z-0 before:h-full before:w-full before:absolute no-underline`,
        props.className
      )}
      scroll={false}
    />
  );
}
