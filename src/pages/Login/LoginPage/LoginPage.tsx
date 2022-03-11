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

export const LoginPage = () => {
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
