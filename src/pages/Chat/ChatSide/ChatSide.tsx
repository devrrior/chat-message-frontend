import { Container } from './ChastSide.style';
import { InfoBar } from './components/InfoBar/InfoBar';
import { MessageBar } from './components/MessageBar/MessageBar';
import { Messages } from './components/Messages/Messages';

export const ChatSide = () => {
  return (
    <Container>
      <InfoBar
        contactName='Alexa Fernandez'
        urlProfilePic='https://i.pinimg.com/564x/70/76/bc/7076bc3bb5422124f6e946287fc00e41.jpg'
      />
      <Messages />
      <MessageBar />
    </Container>
  );
};
