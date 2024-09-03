"use client";

import { ModalContextProvider } from "@/libs/context/ModalContext";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Sheet } from "react-modal-sheet";

export default function ModalLayout({ children }: { children: ReactNode }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleClose = () => setIsOpen(false);
  const handleCloseEnd = () => router.back();

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <ModalContextProvider value={{ isInModal: true }}>
      <Sheet
        className="container mx-auto"
        isOpen={isOpen}
        onClose={handleClose}
        onCloseEnd={handleCloseEnd}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <Sheet.Scroller ref={scrollerRef} className="px-4">
              {children}
            </Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onTap={handleClose} />
      </Sheet>
    </ModalContextProvider>
  );
}
