import { Container, ContainerMessage, Message, Time } from './MyMessage.style';

interface Props {
  message: string;
  time: string;
}

export const MyMessage = ({ message, time }: Props) => {
  return (
    <Container>
      <ContainerMessage>
        <Message>{message}</Message>
      </ContainerMessage>
      <Time>{time}</Time>
    </Container>
  );
};
