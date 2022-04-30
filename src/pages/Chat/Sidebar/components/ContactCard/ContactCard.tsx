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
  infoNotification: number | null;
}

export const ContactCard = ({
  contactName,
  urlProfilePic,
  lastMessage,
  lastMessageTime,
  infoNotification,
}: Props) => {
  return (
    <Container>
      <ProfilePic src={urlProfilePic} />
      <ContainerContactInfo>
        <ContactName>{contactName}</ContactName>
        <ContactMessage>
          {lastMessage === '' ? '' : `${lastMessage.substring(0, 25)}...`}
        </ContactMessage>
      </ContainerContactInfo>
      <ContainerMessageInfo>
        <TimeMessageInfo>{lastMessageTime}</TimeMessageInfo>
        {infoNotification ? (
          <NotificationMessageInfo notification={true}>
            <InfoNotification notification={true}>
              {infoNotification}
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
