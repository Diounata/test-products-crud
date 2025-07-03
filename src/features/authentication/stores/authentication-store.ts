import { create } from "zustand";

type UserState = {
  user: { id: string; email: string } | null;
  token: string | null;
  setUser: (user: UserState["user"]) => void;
  setToken: (token: string | null) => void;
  logout: () => void;
};

export const useAuthenticationStore = create<UserState>((set) => ({
  user: null,
  token: null,
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  logout: () => set({ user: null, token: null }),
}));
