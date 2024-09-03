"use client";

import { useContext, createContext } from "react";

const ModalContext = createContext<{ isInModal: boolean }>({
  isInModal: false,
});
export const useModalContext = () => useContext(ModalContext);
export const ModalContextProvider = ModalContext.Provider;
