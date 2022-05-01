import { useAuth } from '../../../../../hooks/useAuth';
import { Message } from '../../../../../interfaces/chatInterfaces';
import { MyMessage } from './components/MyMessage';
import { TheirMessage } from './components/TheirMessage';
import { Container } from './Messages.style';

type Props = { messages: Message[] };
export const Messages = ({ messages }: Props) => {
  const { authState } = useAuth();

  const renderMessages = (messages: Message[]) => {
    return messages.map((message, id) => {
      const dataTime = new Date(message.created_at);
      return message.contact === authState.user.email ? (
        <MyMessage
          key={id}
          message={message.content}
          time={`${String(dataTime.getHours()).padStart(2, '0')}:${String(dataTime.getMinutes()).padStart(2, '0')}`}
        />
      ) : (
        <TheirMessage
          key={id}
          message={message.content}
          time={`${String(dataTime.getHours()).padStart(2, '0')}:${String(dataTime.getMinutes()).padStart(2, '0')}`}
        />
      );
    });
  };

  return <Container>{messages && renderMessages(messages)}</Container>;
};
