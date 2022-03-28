import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 10px 18px 10px 18px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #c2c2c2;
  }
`;
