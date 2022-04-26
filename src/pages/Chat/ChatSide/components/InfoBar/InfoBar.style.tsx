import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 12px 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

export const ContainerPicAndName = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProfilePic = styled.img`
  width: 50px;
  margin: 0px 12px 0px 0px;
  height: auto;
  clip-path: circle();
  pointer-events: none;
`;

export const NameContact = styled.p`
  font-size: 20px;
`;
