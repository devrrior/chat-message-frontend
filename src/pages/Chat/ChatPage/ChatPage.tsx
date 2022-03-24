import { ChatSide } from '../ChatSide/ChatSide';
import { Sidebar } from '../Sidebar/Sidebar';
import { Container } from './ChatPage.styles';

export const ChatPage = () => {
  return (
    <Container>
      <Sidebar />
      <ChatSide />
    </Container>
  );
};
