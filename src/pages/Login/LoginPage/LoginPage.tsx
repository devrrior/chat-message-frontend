import {
  Container,
  ContainerImg,
  FormSide,
  ImgLogin,
  ImgSide,
  LoginContainer,
  Title,
} from './LoginPage.styles';
import { LoginForm } from '../LoginForm/LoginForm';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { useEffect } from 'react';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { authState } = useAuth();

  useEffect(() => {
    if (authState.isAthenticathed) {
      navigate('/');
    }
  }, []);

  return (
    <Container>
      <ImgSide>
        <ContainerImg>
          <ImgLogin></ImgLogin>
        </ContainerImg>
      </ImgSide>
      <FormSide>
        <LoginContainer>
          <Title>Login</Title>
          <LoginForm></LoginForm>
        </LoginContainer>
      </FormSide>
    </Container>
  );
};
