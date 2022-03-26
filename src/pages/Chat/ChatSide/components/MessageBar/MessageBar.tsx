import {
  Container,
  MessageInput,
  SendButtonContainer,
  SendText,
} from './MessageBar.style';
import { AiOutlineSend } from 'react-icons/ai';

export const MessageBar = () => {
  return (
    <Container>
      <MessageInput type='text' placeholder='Write a message' />
      <SendButtonContainer>
        <SendText>Send</SendText>
        <AiOutlineSend fontSize='22px' color='#f2f2f2' />
      </SendButtonContainer>
    </Container>
  );
};
