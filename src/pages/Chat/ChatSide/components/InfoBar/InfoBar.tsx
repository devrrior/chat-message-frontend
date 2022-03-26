import {
  Container,
  ContainerPicAndName,
  NameContact,
  ProfilePic,
} from './InfoBar.style';
import { HiDotsVertical } from 'react-icons/hi';

export const InfoBar = () => {
  return (
    <Container>
      <ContainerPicAndName>
        <ProfilePic src='https://i.pinimg.com/564x/70/76/bc/7076bc3bb5422124f6e946287fc00e41.jpg' />
        <NameContact>Leslie Alexander</NameContact>
      </ContainerPicAndName>
      <div>
        <HiDotsVertical fontSize='22px' cursor='pointer' color='#424242' />
      </div>
    </Container>
  );
};
