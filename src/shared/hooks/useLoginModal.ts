import { create } from "zustand";

interface LoginModelState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useLoginModal = create<LoginModelState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
