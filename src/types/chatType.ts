import { ServiceRequestStatus } from "./serviceType";

export interface ChatConversation {
  id: string;
  professional: {
    id: string;
    name: string;
    profession: string;
    image: string;
    online: boolean;
  };
  lastMessage: {
    text: string;
    time: string;
    isRead: boolean;
    isFromUser: boolean;
  };
  serviceRequest?: {
    id: string;
    title: string;
    status: ServiceRequestStatus;
  };
}

export interface ChatMessage {
  id: string;
  text: string;
  time: string; // poderia ser Date | string se tiver timestamps reais
  isFromUser: boolean;
  isRead?: boolean;
}
