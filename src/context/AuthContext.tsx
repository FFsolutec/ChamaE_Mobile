import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

type TipoUsuario = "cliente" | "profissional";

type User = {
  name: string;
  email: string;
  tipo: TipoUsuario;
  categoria: string;
  subcategorias: string[];
};

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (
    name: string,
    email: string,
    password: string,
    tipo?: TipoUsuario,
    categoria?: string,
    subcategorias?: string[]
  ) => Promise<boolean>;

  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => false,
  logout: () => {},
  loading: true,
  register: async () => false,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const value = await AsyncStorage.getItem("user");
      if (value) setUser(JSON.parse(value));
      setLoading(false);
    };
    loadUser();
  }, []);

  const login = async (email: string, password: string) => {
    // Aqui você simula ou chama sua API
    if (password !== "123456") return false;

    const tipo: TipoUsuario = email.includes("cliente")
      ? "cliente"
      : "profissional";

    const userData: User = {
      name: tipo === "cliente" ? "João Cliente" : "Maria Profissional",
      email,
      tipo,
    };

    setUser(userData);
    await AsyncStorage.setItem("user", JSON.stringify(userData));
    return true;
  };
  const register = async (
    name: string,
    email: string,
    password: string,
    tipo: TipoUsuario = "cliente",
    categoria: string = "",
    subcategorias: string[] = []
  ) => {
    const userData: User = {
      name,
      email,
      tipo,
      categoria,
      subcategorias,
    };

    setUser(userData);
    await AsyncStorage.setItem("user", JSON.stringify(userData));
    return true;
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
