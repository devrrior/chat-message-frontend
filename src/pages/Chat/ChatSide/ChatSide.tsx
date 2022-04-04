import { useEffect } from 'react';
import { axiosInstance } from '../../../api/axios';
import { useAuth } from '../../../hooks/useAuth';
import { Container } from './ChastSide.style';
import { InfoBar } from './components/InfoBar/InfoBar';
import { MessageBar } from './components/MessageBar/MessageBar';
import { Messages } from './components/Messages/Messages';

type responseStructure = { access: string; refresh: string };

export const ChatSide = () => {
  const { authState, newTokens } = useAuth();

  useEffect(() => {
    const refreshToken = async () => {
      const response = await axiosInstance.post<responseStructure>(
        'api/token/refresh/',
        JSON.stringify({ refresh: authState.refreshToken }),
        { headers: { 'Content-Type': 'application/json' } }
      );

      newTokens(response.data.access, response.data.refresh);
    };

    refreshToken();
    console.log('done');
  }, []);
  return (
    <Container>
      <InfoBar
        contactName='Alexa Fernandez'
        urlProfilePic='https://i.pinimg.com/564x/70/76/bc/7076bc3bb5422124f6e946287fc00e41.jpg'
      />
      <Messages />
      <MessageBar />
    </Container>
  );
};
