import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 10px 24px 10px 24px;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #c2c2c2 transparent;

  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #c2c2c2;
  }
`;
