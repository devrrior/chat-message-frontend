import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  height: 47px;
  padding: 0px 10px;
  margin: 24px 0px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 50px;
  background: #f2f2f2;
`;

export const TableContainer = styled.table`
  width: 100%;
  height: 100%;
  vertical-align: middle;
  padding-left: 10px;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  font-size: 14px;
  color: #424242;
  background: #f2f2f2;
  border-radius: 20px;

  ::placeholder {
    color: #424242;
  }
`;
