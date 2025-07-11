// src/store/user.ts
import { create } from "zustand";

type TipoUsuario = "cliente" | "profissional" | null;

type UserStore = {
  tipo: TipoUsuario;
  setTipo: (tipo: TipoUsuario) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  tipo: null,
  setTipo: (tipo) => set({ tipo }),
}));
