import { createContext } from "react";

type ModalContextType = {
  isModalVisible: boolean;
  setModalVisibility: (visible: boolean) => void;
};

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);
