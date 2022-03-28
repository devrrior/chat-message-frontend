import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f2f2f2;
  height: 100vh;
`;

export const ContainerContactCard = styled.div`
  overflow-y: scroll;
  width: 90%;

  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #c2c2c2;
  }
`;
