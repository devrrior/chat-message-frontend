import { useEffect, useState } from 'react';
import { useWebSocket } from '../../../../../hooks/useWebSocket';
import { MyMessage } from './components/MyMessage';
import { TheirMessage } from './components/TheirMessage';
import { Container } from './Messages.style';

export const Messages = () => {
  // const { websocket } = useWebSocket();


  const [messages, setMessages] = useState<Array<string>>([]);

  const { websocket } = useWebSocket();

  useEffect(() => {
    websocket.onopen = () => {
      console.log('connected');
    };

    websocket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setMessages(() => [data.message, ...messages]);
    };


    websocket.onclose = function (e) {
      console.error('Chat socket closed unexpectedly');
    };
  }, [messages]);

  const renderMessages = (messages: Array<string>) => {
    return messages.map((message, id) => {
      return <MyMessage key={id} message={message} time='12:30' />;
    });
  };

  return <Container>{renderMessages(messages)}</Container>;
};
