import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { WebSocketContext } from './WebSocketContext';

interface WebsocketProviderProps {
  children: JSX.Element | JSX.Element[];
}
export const WebsocketProvider = ({ children }: WebsocketProviderProps) => {
  const { authState } = useAuth();

  const [accessToken, setAccessToken] = useState<string | null>(authState.accessToken);

  const [url, setUrl] = useState<string>('ws://127.0.0.1:8000/ws/chat/test/');

  const [websocket, setWebsocket] = useState<WebSocket>(
    new WebSocket(url + '?token=' + accessToken)
  );
  return (
    <WebSocketContext.Provider value={{ websocket }}>
      {children}
    </WebSocketContext.Provider>
  );
};
