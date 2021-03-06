import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #f2f2f2;
  height: 100vh;
`;

export const ContainerContactCard = styled.div`
  overflow-y: scroll;
  width: 90%;
  scrollbar-width: auto;
  scrollbar-color: #c2c2c2 transparent;
  margin: 0 auto;

  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #c2c2c2;
  }
`;

export const ContainerPersonalCard = styled.div`
  width: 90%;
`;
