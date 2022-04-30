export interface User {
  first_name: string;
  last_name: string;
}

export interface LastMessage {
  content: string;
  created_at: string;
}

export interface Message {
  contact: string;
  content: string;
  createdAt: string;
}

export interface Chat {
  // fields for sidebar
  id: number;
  last_message: LastMessage;
  receiver: User;

  // fields for chat side
  urlProfileImage: string;
  messages: Message[];
}
