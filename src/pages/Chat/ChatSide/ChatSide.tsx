import { Container } from './ChastSide.style';
import { InfoBar } from './components/InfoBar/InfoBar';
import { MessageBar } from './components/MessageBar/MessageBar';
import { Messages } from './components/Messages/Messages';

export const ChatSide = () => {
  return (
    <Container>
      <InfoBar />
      <Messages />
      <MessageBar />
    </Container>
  );
};
