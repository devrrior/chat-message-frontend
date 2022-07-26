import { useAuth } from '../../../../../hooks/useAuth';
import {
  ContactName,
  Container,
  ContainerContactInfo,
  LogoutButton,
  ProfilePic,
  Status,
} from './PersonalContactCard.style';

import { BiLogOut } from 'react-icons/bi';

interface Props {
  contactName: string;
  urlProfilePic: string;
}

export const PersonalContactCard = ({ contactName, urlProfilePic }: Props) => {
  const { authState, logout } = useAuth();

  return (
    <Container>
      <ProfilePic src={urlProfilePic} />
      <ContainerContactInfo>
        <ContactName>
          {authState.user.firstName} {authState.user.lastName}
        </ContactName>
        <Status>Online</Status>
      </ContainerContactInfo>
      <div>
        <BiLogOut
          color='#eb5757'
          fontSize='18px'
          onClick={logout}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </Container>
  );
};
