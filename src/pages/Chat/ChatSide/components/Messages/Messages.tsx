import { useEffect, useState } from 'react';
import { useAuth } from '../../../../../hooks/useAuth';
import { useWebSocket } from '../../../../../hooks/useWebSocket';
import { MyMessage } from './components/MyMessage';
import { TheirMessage } from './components/TheirMessage';
import { Container } from './Messages.style';

export const Messages = () => {
  // const { websocket } = useWebSocket();

  interface Message {
    author: string;
    content: string;
    createdAt: string;
  }

  const [messages, setMessages] = useState<Array<Message>>([]);

  const { authState } = useAuth();
  const { websocket } = useWebSocket();

  useEffect(() => {
    websocket.onopen = () => {
      console.log('connected');
      fetchMessages();
    };

    websocket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (data['command'] === 'messages') {
        data.messages.map((message:Message) => setMessages(messages => [...messages, message]));
      } else if (data['command'] === 'new_message') {
        setMessages(messages => [data.message, ...messages]);
      }
    };

    websocket.onclose = function (e) {
      console.error('Chat socket closed unexpectedly');
    };
  }, [messages]);

  const fetchMessages = () => {
    websocket.send(JSON.stringify({ command: 'fetch_messages' }));
  };

  const renderMessages = (messages: Array<Message>) => {
    return messages.map((message, id) => {
      return message.author === authState.user.email ? (
        <MyMessage
          key={id}
          message={message.content}
          time={message.createdAt}
        />
      ) : (
        <TheirMessage
          key={id}
          message={message.content}
          time={message.createdAt}
        />
      );
    });
  };

  return <Container>{renderMessages(messages)}</Container>;
};
