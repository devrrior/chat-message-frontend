import { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { useAxiosPrivate } from '../../../hooks/useAxiosPrivate';
import { Chat, Message } from '../../../interfaces/chatInterfaces';
import { ChatSide } from '../ChatSide/ChatSide';
import { Sidebar } from '../Sidebar/Sidebar';
import { Container } from './ChatPage.styles';

export const ChatPage = () => {
  const { logout, authState } = useAuth();
  const [chats, setChats] = useState<Chat[]>([]);
  const [currentChat, setCurrentChat] = useState<Chat | null>(null);
  const { axiosPrivate } = useAxiosPrivate();
  const [websocket, setWebsocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const getChats = async () => {
      try {
        const response = await axiosPrivate.get('api/chat/');
        const chats: Chat[] = response.data;

        chats.map((chat) => {
          console.log(chat);
          setChats((prevChats) => [...prevChats, chat]);
        });
      } catch (error) {
        logout();
      }
    };

    getChats();
  }, []);

  const changeCurrentChat = (chat: Chat) => {
    const newChat = { ...chat, urlProfileImage: '', messages: [] };
    setCurrentChat(newChat);
    setWebsocket(
      new WebSocket(
        `ws://127.0.0.1:8000/ws/chat/${chat.id}/?token=${authState.accessToken}`
      )
    );
  };

  const addMessageToCurrentChat = (
    message: Message,
    fetchMessages: boolean
  ) => {
    setCurrentChat((prevChat) => {
      if (prevChat && fetchMessages) {
        const newMessages = [...prevChat.messages, message];
        return { ...prevChat, messages: newMessages };
      } else if (prevChat && !fetchMessages) {
        const newMessages = [message, ...prevChat.messages];
        return { ...prevChat, messages: newMessages };
      }
      return null;
    });
  };

  return (
    <Container>
      <Sidebar chats={chats} changeCurrentChat={changeCurrentChat} />
      <ChatSide
        currentChat={currentChat}
        websocket={websocket}
        addMessageToCurrentChat={addMessageToCurrentChat}
      />
    </Container>
  );
};
