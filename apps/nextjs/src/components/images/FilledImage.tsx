import clsx from "clsx";
import Image, { ImageProps } from "next/image";

export function FilledImage({ className, alt, ...props }: ImageProps) {
  return (
    <div className="aspect-[4/3] relative">
      <Image
        fill
        loading="lazy"
        alt={alt} // Avoid CI warnings
        className={clsx("m-0", className)}
        {...props}
      />
    </div>
  );
}
