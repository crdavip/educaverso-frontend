import { SessionState } from '@/interfaces';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useSessionStore = create<SessionState>()(
  persist(
    (set) => ({
      session: {
        value: {
          isLoggedIn: false,
          identity: null,
          associatedIdentity: null,
          tokens: null,
        },
        isLoading: false,
      },
      setSession: ({ identity, associatedIdentity, tokens }) =>
        set(() => ({
          session: {
            value: {
              isLoggedIn: true,
              identity,
              associatedIdentity,
              tokens,
            },
            isLoading: false,
          },
        })),
    }),
    {
      name: 'persistedState',
      partialize: (state) => ({ session: state.session })
    }
  )
);
