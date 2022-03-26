import {
  Container,
  ContainerPicAndName,
  NameContact,
  ProfilePic,
} from './InfoBar.style';
import { HiDotsVertical } from 'react-icons/hi';

interface Props {
  contactName: string;
  urlProfilePic: string;
}
export function InfoBar({ contactName, urlProfilePic }: Props) {
  return (
    <Container>
      <ContainerPicAndName>
        <ProfilePic src={urlProfilePic} />
        <NameContact>{contactName}</NameContact>
      </ContainerPicAndName>
      <div>
        <HiDotsVertical fontSize='22px' cursor='pointer' color='#424242' />
      </div>
    </Container>
  );
}
