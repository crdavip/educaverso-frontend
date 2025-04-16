import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User, UserDetail } from "@/interfaces";

interface Props {
  userData: User;
  userDetailData: UserDetail;
}

interface State {
  isAuth: boolean;
  user: User | null;
  userDetail: UserDetail | null;

  signIn: (props: Props) => void;
  signOut: () => void;
}

export const useAuthStore = create<State>()(
  persist(
    (set) => ({
      isAuth: false,
      user: null,
      userDetail: null,
      signIn: ({ userData, userDetailData }: Props) =>
        set({ isAuth: true, user: userData, userDetail: userDetailData }),
      signOut: () => set({ isAuth: false, user: null, userDetail: null }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        isAuth: state.isAuth,
        user: state.user,
        userDetail: state.userDetail,
      }),
    }
  )
);
