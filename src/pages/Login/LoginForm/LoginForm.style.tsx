import styled from 'styled-components';

export const Form = styled.form`
  width: 70%;
`;

export const Input = styled.input`
  background: #ffffff;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px 10px 10px 20px;
  margin: 22px 0;
  width: 30em;
  height: 3em;
`;

export const Button = styled.button`
  color: #ffffff;
  background: linear-gradient(180deg, #3b74d7 0%, #3362b6 100%);
  border-radius: 10px;
  padding: 10px;
  margin-top: 31px;
  width: 30em;
  height: 3em;
  cursor: pointer;

  &:hover {
  background: linear-gradient(180deg, #245dbf 0%, #3362b6 100%);
  }
`;
