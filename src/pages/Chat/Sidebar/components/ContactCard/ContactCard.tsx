import { useAuth } from '../../../../../hooks/useAuth';
import {
  ContactMessage,
  ContactName,
  Container,
  ContainerContactInfo,
  ContainerMessageInfo,
  InfoNotification,
  NotificationMessageInfo,
  ProfilePic,
  TimeMessageInfo,
} from './ContactCard.style';

interface Props {
  contactName: string;
  urlProfilePic: string;
  lastMessage: string;
  lastMessageTime: string;
  lastMessageContact: string;
  infoNotification: number;
}

export const ContactCard = ({
  contactName,
  urlProfilePic,
  lastMessage,
  lastMessageTime,
  lastMessageContact,
  infoNotification,
}: Props) => {
  const { authState } = useAuth();

  const renderContactMessage = (
    lastMessage: string,
    infoNotification: number
  ) => {
    if (lastMessage === '') {
      return <ContactMessage unread={0}>''</ContactMessage>;
    } else if (lastMessageContact !== authState.user.email) {
      return (
        <ContactMessage unread={infoNotification}>
          {lastMessage === '' ? '' : `${lastMessage.substring(0, 25)}...`}
        </ContactMessage>
      );
    } else if (lastMessageContact === authState.user.email) {
      return (
        <ContactMessage unread={infoNotification}>
          {lastMessage === '' ? '' : `You: ${lastMessage.substring(0, 25)}...`}
        </ContactMessage>
      );
    }
  };

  return (
    <Container>
      <ProfilePic src={urlProfilePic} />
      <ContainerContactInfo>
        <ContactName>{contactName}</ContactName>
        {renderContactMessage(lastMessage, infoNotification)}
      </ContainerContactInfo>
      <ContainerMessageInfo>
        <TimeMessageInfo>{lastMessageTime}</TimeMessageInfo>
        {infoNotification > 0 ? (
          <NotificationMessageInfo notification={true}>
            <InfoNotification notification={true}>
              {infoNotification > 0 ? infoNotification : ''}
            </InfoNotification>
          </NotificationMessageInfo>
        ) : (
          <NotificationMessageInfo notification={false}>
            <InfoNotification notification={false}></InfoNotification>
          </NotificationMessageInfo>
        )}
      </ContainerMessageInfo>
    </Container>
  );
};
