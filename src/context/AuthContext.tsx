import { User } from "@/types/userType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

type TipoUsuario = "cliente" | "profissional";

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

  const generateMockUser = (
    name: string,
    email: string,
    tipo: TipoUsuario,
    categoria: string = "",
    subcategorias: string[] = []
  ): User => {
    return {
      _id: "mock-id",
      username: name.toLowerCase().replace(/\s/g, "."),
      password: "123456",
      email,
      img: "",
      imgValidate: "",
      userInfo: {
        _id: "info-id",
        firstName: name.split(" ")[0],
        lastName: name.split(" ")[1] || "",
        cpf: "000.000.000-00",
        cnpj: "",
        cnae: "",
        cnh: "",
        enterpriseSocial: "",
        personType: "fisica",
        enterpriseName: "",
        neighborhood: "Centro",
        address: "Rua Exemplo",
        number: "123",
        phone: "(11) 99999-9999",
        complement: "",
        birthDate: "2000-01-01",
        country: "Brasil",
        city: "São Paulo",
        state: "SP",
        zipCode: "00000-000",
        email,
        defaultAddress: "",
        userId: "mock-id",
        createdAt: "",
        updatedAt: "",
      },
      favorites: [],
      likes: [],
      storeId: "",
      isActive: true,
      role: tipo,
      status: "ativo",
      company: "",
      categorie: {
        _id: "cat-id",
        name: categoria || "Elétrica",
        icon: "plug",
        description: "Serviços elétricos",
        createdAt: "",
        updatedAt: "",
        subCategorie:
          subcategorias?.map((name, i) => ({
            _id: `sub-${i}`,
            name,
            createdAt: "",
            updatedAt: "",
          })) || [],
      },
      createdAt: "",
      updatedAt: "",
    };
  };

  const login = async (email: string, password: string) => {
    if (password !== "123456") return false;

    const tipo: TipoUsuario = email.includes("cliente")
      ? "cliente"
      : "profissional";

    const userData = generateMockUser(
      tipo === "cliente" ? "João Cliente" : "Maria Profissional",
      email,
      tipo
    );

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
    const userData = generateMockUser(
      name,
      email,
      tipo,
      categoria,
      subcategorias
    );
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
