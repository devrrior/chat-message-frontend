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

export const ContactCard = () => {
  return (
    <Container>
      <ProfilePic src='https://i.pinimg.com/564x/70/76/bc/7076bc3bb5422124f6e946287fc00e41.jpg' />
      <ContainerContactInfo>
        <ContactName>Fernando Guerrero</ContactName>
        <ContactMessage>Lorem impsum</ContactMessage>
      </ContainerContactInfo>
      <ContainerMessageInfo>
        <TimeMessageInfo>19:43</TimeMessageInfo>
        <NotificationMessageInfo>
          <InfoNotification>1</InfoNotification>
        </NotificationMessageInfo>
      </ContainerMessageInfo>
    </Container>
  );
};
