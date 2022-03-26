import { ContactCard } from './components/ContactCard/ContactCard';
import { SearchInput } from './components/SearchInput/SearchInput';
import { Container, ContainerContactCard } from './Sidebar.style';

export const Sidebar = () => {
  return (
    <Container>
      <br />
      <SearchInput />
      <br />
      <ContainerContactCard>
        <ContactCard
          contactName='Linda Keebler'
          urlProfilePic='https://static.intercomassets.com/avatars/435807/square_128/Me_profile_pic-1586948573.png?1586948573'
          lastMessage='Laboris cillum pariatur culpa amet veniam proident id nisi incididunt pariatur dolore.'
          lastMessageTime='13:32'
          infoNotification={null}
        />
        <ContactCard
          contactName='Linda Keebler'
          urlProfilePic='https://static.intercomassets.com/avatars/435807/square_128/Me_profile_pic-1586948573.png?1586948573'
          lastMessage='Laboris cillum pariatur culpa amet veniam proident id nisi incididunt pariatur dolore.'
          lastMessageTime='13:32'
          infoNotification={3}
        />
      </ContainerContactCard>
    </Container>
  );
};
