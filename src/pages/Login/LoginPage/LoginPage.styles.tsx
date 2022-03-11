import styled from 'styled-components';
import imgLogin from '../../../assets/img/login-img.svg';

export const Container = styled.div`
  background-color: #f2f2f2;
  display: grid;
  grid-template-columns: 58% 42%;
`;

export const ImgSide = styled.div`
  height: 100vh;
  background: linear-gradient(180deg, #3362b6 0%, #3b74d7 100%);
`;

export const ContainerImg = styled.div`
  height: 60%;
  margin: 15% auto;
`;

export const ImgLogin = styled.img`
  content: url(${imgLogin});
  height: 100%;
  width: 100%;
`;
export const FormSide = styled.div`
  height: 100vh;
  background: linear-gradient(180deg, #fdfbfb 0%, #f1f1f1 100%);
  padding-top: 30%;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 2.5em;
  line-height: 41px;
  color: #424242;
  margin-bottom: 5%;
`;
