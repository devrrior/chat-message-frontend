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
      return message.contact === authState.user.email ? (
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

  return <Container>{messages && renderMessages(messages)}</Container>;
};
