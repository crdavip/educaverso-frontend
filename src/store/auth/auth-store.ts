import { create } from "zustand";

interface State {
  isAuth: boolean;

  signIn: () => void;
  signOut: () => void;
}

export const useAuthStore = create<State>()((set) => ({
  isAuth: false,
  signIn: () => set({ isAuth: true }),
  signOut: () => set({ isAuth: false }),
}));
