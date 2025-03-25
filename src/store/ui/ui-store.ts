import { create } from "zustand";

interface State {
  totalContent: number;

  setTotalContent: (newValue:number) => void;
}

export const useUIStore = create<State>()((set) => ({
  totalContent: 0,
  setTotalContent: (newValue) => set({totalContent: newValue}),
}));
