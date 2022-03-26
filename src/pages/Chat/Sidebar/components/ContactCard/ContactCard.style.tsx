import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
  cursor: pointer;

  :hover {
    background: #e6e6e6;
    transition: background 120ms linear;
  }
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
  color: #424242;
  margin: 2.5px 5px;
`;

export const ContactMessage = styled.div`
  font-size: 15px;
  color: #919191;
  margin: 2.5px 5px;
`;

export const ContainerMessageInfo = styled.div`
  width: 15%;
  margin: 0px 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimeMessageInfo = styled.p`
  font-size: 14px;
  color: #919191;
  margin: 3.5px 5px;
`;

export const NotificationMessageInfo = styled.div`
  background: #2541b2;
  border-radius: 50%;
  width: 21px;
  height: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3.5px 5px;
`;

export const InfoNotification = styled.p`
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
`;
