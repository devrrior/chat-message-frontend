import {
  Container,
  MessageInput,
  SendButtonContainer,
  SendText,
} from './MessageBar.style';
import { AiOutlineSend } from 'react-icons/ai';
import { useWebSocket } from '../../../../../hooks/useWebSocket';

export const MessageBar = () => {

  const { websocket } = useWebSocket();

  const handleSumit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      messageInput: HTMLInputElement;
    };
    const messageText = formElements.messageInput.value;

    websocket.send(JSON.stringify({ message: messageText }));
    formElements.messageInput.value = '';
  };
  return (
    <Container onSubmit={handleSumit}>
      <MessageInput
        id='messageInput'
        type='text'
        placeholder='Write a message'
        autoComplete='off'
      />
      <SendButtonContainer type='submit'>
        <SendText>Send</SendText>
        <AiOutlineSend fontSize='22px' color='#f2f2f2' />
      </SendButtonContainer>
    </Container>
  );
};
