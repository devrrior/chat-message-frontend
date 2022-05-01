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
          time={`${dataTime.getHours()}:${dataTime.getMinutes()}`}
        />
      ) : (
        <TheirMessage
          key={id}
          message={message.content}
          time={`${dataTime.getHours()}:${dataTime.getMinutes()}`}
        />
      );
    });
  };

  return <Container>{messages && renderMessages(messages)}</Container>;
};
