import { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { useAxiosPrivate } from '../../../hooks/useAxiosPrivate';
import { Chat, Message } from '../../../interfaces/chatInterfaces';
import { ChatSide } from '../ChatSide/ChatSide';
import { Sidebar } from '../Sidebar/Sidebar';
import { Container } from './ChatPage.styles';

export const ChatPage = () => {
  const { logout, authState } = useAuth();
  const [chats, setChats] = useState<{ [key: number]: Chat }>({});
  const [currentChat, setCurrentChat] = useState<Chat | null>(null);
  const { axiosPrivate } = useAxiosPrivate();
  const [websocket, setWebsocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const getChats = async () => {
      try {
        const response = await axiosPrivate.get('api/chat/');
        const chats: Chat[] = response.data;

        chats.map((chat) => {
          chat['unread'] = 0;
          setChats((prevChats) => ({ ...prevChats, [chat.id]: chat }));
        });
      } catch (error) {
        logout();
      }
    };

    getChats();
  }, []);

  const changeCurrentChat = (chat: Chat) => {
    chat.unread = 0;
    const newChat = { ...chat, urlProfileImage: '', messages: [] };
    setCurrentChat(newChat);
    websocket?.close();
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

  const newNotificationMessage = (message: Message, chatId: number) => {
    setChats((prevChats) => {
      const newChats = { ...prevChats };
      newChats[chatId].last_message = message;
      if (message.contact !== authState.user.email) {
        newChats[chatId].unread += 1/2; // idk why set 2
      }
      return newChats;
    });
  };

  return (
    <Container>
      <Sidebar chats={chats} changeCurrentChat={changeCurrentChat} />
      <ChatSide
        currentChat={currentChat}
        websocket={websocket}
        addMessageToCurrentChat={addMessageToCurrentChat}
        newNotificationMessage={newNotificationMessage}
      />
    </Container>
  );
};
