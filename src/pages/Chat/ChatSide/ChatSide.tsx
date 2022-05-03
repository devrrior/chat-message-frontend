import { useEffect } from 'react';
import { Chat, Message } from '../../../interfaces/chatInterfaces';
import { Container } from './ChastSide.style';
import { InfoBar } from './components/InfoBar/InfoBar';
import { MessageBar } from './components/MessageBar/MessageBar';
import { Messages } from './components/Messages/Messages';

type Props = {
  currentChat: Chat | null;
  websocket: WebSocket | null;
  addMessageToCurrentChat: (message: Message, fetchMessages: boolean) => void;
  newNotificationMessage: (message: Message, chat_id: number) => void;
};

export const ChatSide = ({
  currentChat,
  websocket,
  addMessageToCurrentChat,
  newNotificationMessage,
}: Props) => {
  useEffect(() => {
    if (currentChat !== null && websocket !== null) {
      websocket.onopen = () => {
        console.log('connected');
        fetchMessages(websocket);
      };

      websocket.onmessage = (e) => {
        const data = JSON.parse(e.data);
        if (data['command'] === 'messages') {
          data.messages.map((message: Message) =>
            addMessageToCurrentChat(message, true)
          );
        } else if (data['command'] === 'new_message') {
          addMessageToCurrentChat(data.message, false);
        } else if (data['command'] === 'notification_message') {
          newNotificationMessage(data.message, data.message.chat_id);
        }
      };

      websocket.onerror = (e) => {
        console.log(e); //
      };
      websocket.onclose = () => {
        console.error('Chat socket closed unexpectedly');
      };
    } else {
      console.log('no chat');
    }
  }, [currentChat]);

  const fetchMessages = (websocket: WebSocket) => {
    websocket.send(JSON.stringify({ command: 'fetch_messages' }));
  };

  return (
    <Container>
      {currentChat === null ? (
        <h2>Welcome!</h2>
      ) : (
        <>
          <InfoBar
            contactName={`${currentChat.receiver.first_name} ${currentChat.receiver.last_name}`}
            urlProfilePic={'https://i.pravatar.cc/300'}
          />
          <Messages messages={currentChat?.messages} />
          <MessageBar websocket={websocket} />
        </>
      )}
    </Container>
  );
};
