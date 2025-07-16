import { mongoDB } from "./mongoDB";

export type CategorieType = mongoDB & {
  name: string;
  icon: string;
  description: string;
  subCategorie: SubCategorieType[];
};

export type SubCategorieType = mongoDB & {
  name?: string;
  icon?: string;
  description?: string;
};
