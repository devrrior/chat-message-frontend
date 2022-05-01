export interface User {
  first_name: string;
  last_name: string;
}

export interface LastMessage {
  content: string;
  contact: string;
  created_at: string;
}

export interface Message {
  contact: string;
  content: string;
  created_at: string;
}

export interface Chat {
  // fields for sidebar
  id: number;
  last_message: LastMessage;
  receiver: User;
  unread: number;

  // fields for chat side
  urlProfileImage: string;
  messages: Message[];
}
