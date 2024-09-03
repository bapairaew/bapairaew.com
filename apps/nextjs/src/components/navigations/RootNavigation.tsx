"use client";

import { usePathname } from "next/navigation";
import useIsAtTop from "@/libs/hooks/useIsAtTop";
import { useState } from "react";
import { Sheet } from "react-modal-sheet";
import clsx from "clsx";
import { Link } from "react-transition-progress/next";
import HamburgurIcon from "@/components/icons/HamburgerIcon";

const navs = [
  {
    name: "About",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Posts",
    href: "/posts",
  },
  {
    name: "Photography",
    href: "/photography",
  },
];

const navsReversed = [...navs].reverse();

export default function Navigation() {
  const isAtTop = useIsAtTop();
  const pathname = usePathname();
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const activeLinkClassName = "no-underline text-neutral-900 dark:text-white";

  return (
    <>
      <nav
        className={clsx("p-4 sticky top-0 z-10", {
          "backdrop-blur-md": !isAtTop,
        })}
      >
        <div
          className={clsx(
            "absolute top-0 left-0 w-full h-full transition-opacity opacity-0 bg-white dark:bg-black",
            isAtTop ? "opacity-0" : "opacity-60"
          )}
        />

        <div className="flex container mx-auto sticky">
          <div>
            <div className=" text-2xl font-bold not-sr-only">
              <Link className="no-underline" href="/">
                D:
              </Link>
            </div>
            <div className="sr-only">
              <Link className="no-underline" href="/">
                {`Dom's website`}
              </Link>
            </div>
          </div>
          <ul className="flex-1 hidden justify-end items-center md:flex gap-4 no-underline text-neutral-500">
            {navsReversed.map((nav) => (
              <li key={nav.href}>
                <Link
                  href={nav.href}
                  className={clsx(pathname === nav.href && activeLinkClassName)}
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex-1 flex justify-end md:hidden">
            <button
              onClick={() => setBottomSheetOpen(true)}
              aria-label="open menu"
            >
              <HamburgurIcon />
            </button>
          </div>
        </div>
      </nav>
      <Sheet
        detent="content-height"
        isOpen={bottomSheetOpen}
        onClose={() => setBottomSheetOpen(false)}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <nav>
              <ul
                className="px-4 py-6 flex flex-col gap-4 text-lg  no-underline text-neutral-500"
                onClick={() => setBottomSheetOpen(false)}
              >
                {navs.map((nav) => (
                  <li key={nav.href}>
                    <Link
                      href={nav.href}
                      className={clsx(
                        pathname === nav.href && activeLinkClassName
                      )}
                    >
                      {nav.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onTap={() => setBottomSheetOpen(false)} />
      </Sheet>
    </>
  );
}
