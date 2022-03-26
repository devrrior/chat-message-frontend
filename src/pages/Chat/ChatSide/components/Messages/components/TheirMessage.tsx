import {
  Container,
  ContainerMessage,
  Message,
  Time,
} from './TheirMessage.style';

interface Props {
  message: string;
  time: string;
}

export const TheirMessage = ({ message, time }: Props) => {
  return (
    <Container>
      <ContainerMessage>
        <Message>{message}</Message>
      </ContainerMessage>
      <Time>{time}</Time>
    </Container>
  );
};
