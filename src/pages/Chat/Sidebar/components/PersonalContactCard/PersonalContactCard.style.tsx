import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
`;

export const ProfilePic = styled.img`
  width: 50px;
  height: auto;
  clip-path: circle();
  pointer-events: none;
`;

export const ContainerContactInfo = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 0px 13px;
`;

export const ContactName = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #424242;
  margin: 2.5px 5px;
`;

export const Status = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #424242;
  margin: 2.5px 5px;
`;

export const LogoutButton = styled.a`
  font-size: 14px;
  font-weight: 400;
  color: #eb5757;
  margin: 2.5px 5px;
  cursor: pointer;
`;
