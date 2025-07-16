import { mongoDB } from "./mongoDB";

export type Evaluation = mongoDB & {
  points?: string;
  comment?: string;
  stars?: number;
  count?: number;
  userId?: string;
  referenceId?: string;
};
