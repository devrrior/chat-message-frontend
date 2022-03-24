import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  background: #f2f2f2;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 20px;
  border: 1px solid rgba(0, 0, 0, 0.15);
`;

export const Input = styled.input`
  flex: 1;
  background: #f2f2f2;
  height: 47px;
  font-size: 16px;
  padding-left: 10px;
  border-radius: 20px;

  ::placeholder {
    color: #424242;
    font-size: 16px;
  }
`;
