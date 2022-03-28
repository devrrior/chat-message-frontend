import { createContext } from 'react';

interface WebSocketContextProps {
  websocket: WebSocket;
}

export const WebSocketContext = createContext<WebSocketContextProps>(
  {} as WebSocketContextProps
);
