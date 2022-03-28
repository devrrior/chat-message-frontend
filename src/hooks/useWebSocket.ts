import { useContext } from 'react';
import { WebSocketContext } from '../context/WebSocketContext/WebSocketContext';

export const useWebSocket = () => {
  const { websocket } = useContext(WebSocketContext);
  return { websocket };
};
