import { useState } from 'react';
import { WebSocketContext } from './WebSocketContext';

interface WebsocketProviderProps {
  children: JSX.Element | JSX.Element[];
}
export const WebsocketProvider = ({ children }: WebsocketProviderProps) => {
  // const roomName = 'test';
  const [websocket, setWebsocket] = useState(
    new WebSocket(`ws://127.0.0.1:8000/ws/chat/test/`)
  );
  return (
    <WebSocketContext.Provider value={{ websocket }}>
      {children}
    </WebSocketContext.Provider>
  );
};
