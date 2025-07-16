import { mongoDB } from "./mongoDB";
import { User } from "./userType";

// Profissional vinculado a um serviço
export type Professional = {
  id: string;
  name: string;
  accepted: boolean;
};

export type ServiceType = mongoDB & {
  title: string;
  description: string;
  category: string[]; // ou string, se for uma só
  status: "open" | "in_progress" | "completed";
  address: Address;
  typeService?: string[];
  img?: string[]; // URLs
  user: User;
  professionals?: Professional[];
};

// Endereço com deadline e urgência
export type Address = {
  location: string;
  deadline?: string; // ISO date string
  urgency?: "low" | "normal" | "high" | "urgent";
};
export type ServiceRequestStatus =
  | "pending"
  | "accepted"
  | "in_progress"
  | "completed"
  | "cancelled";
