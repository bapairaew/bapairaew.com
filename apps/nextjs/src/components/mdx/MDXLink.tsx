"use client";

import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import { useModalContext } from "@/libs/context/ModalContext";
import { Link } from "react-transition-progress/next";

export function MDXLink({
  href,
  children,
}: DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) {
  const { isInModal } = useModalContext();
  if (!href) return null;
  const isExternal = href.startsWith("http");
  return isExternal || isInModal ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <Link href={href}>{children}</Link>
  );
}
