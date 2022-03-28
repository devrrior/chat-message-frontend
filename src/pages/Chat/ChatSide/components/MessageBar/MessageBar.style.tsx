import styled from 'styled-components';

export const Container = styled.form`
  display: grid;
  grid-template-columns: 88% 12%;
  padding: 10px 20px;
`;

export const MessageInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 10px 10px 15px;
  background: #f2f2f2;
  border-radius: 18px;
  margin-right: 10px;
`;

export const SendButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 40px;
  background: #2541b2;
  border-radius: 18px;
  padding: 15px;
  margin-left: 10px;
  cursor: pointer;
`;

export const SendText = styled.p`
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
`;
