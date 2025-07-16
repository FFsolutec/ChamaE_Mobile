import { CategorieType } from "./categorieType";
import { mongoDB } from "./mongoDB";

export type UserInfo = mongoDB & {
  firstName: string;
  lastName: string;
  cpf: string;
  cnpj: string;
  cnae: string;
  cnh: string;
  enterpriseSocial: string;
  personType: "juridica" | "fisica";
  enterpriseName: string;
  neighborhood: string;
  address: string;
  number: string;
  phone: string;
  complement: string;
  birthDate: string;
  country: string;
  city: string;
  state: string;
  zipCode: string;
  email: string;
  defaultAddress: string;
  userId: string;
};

// User - Conta do usuário
export type User = mongoDB & {
  username: string;
  password: string;
  email: string;
  img: string;
  imgValidate: string;
  userInfo: UserInfo;
  favorites: string[];
  likes: string[];
  storeId: string;
  isActive: boolean;
  role: string;
  status: string;
  company: string;
  categorie: CategorieType;
};

export interface ProfessionalPublicProfile {
  id: string;
  name: string;
  profession: string;
  location: string;
  distance?: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  image: string;
  tags: string[];
  responseTime?: string;
  description: string;
  availability: string[];
  services: {
    name: string;
    price: string;
  }[];
  reviews: {
    id: number | string;
    user: string;
    rating: number;
    date: string;
    comment: string;
  }[];
  portfolio: {
    title: string;
    description: string;
    imageUrl?: string;
  }[];
}
