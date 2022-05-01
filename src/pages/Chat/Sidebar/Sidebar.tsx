import { Chat } from '../../../interfaces/chatInterfaces';
import { ContactCard } from './components/ContactCard/ContactCard';
import { SearchInput } from './components/SearchInput/SearchInput';
import { Container, ContainerContactCard } from './Sidebar.style';

type Props = {
  chats: { [key: number]: Chat };
  changeCurrentChat: (chat: Chat) => void;
};

export const Sidebar = ({ chats, changeCurrentChat }: Props) => {
  const renderChats = (chats: { [key: number]: Chat }) => {
    return Object.values(chats).map((chat) => {
      // format time
      const dataTime = new Date(chat.last_message.created_at);
      return (
        <div key={chat.id} onClick={() => changeCurrentChat(chat)}>
          <ContactCard
            contactName={`${chat.receiver.first_name} ${chat.receiver.last_name}`}
            urlProfilePic='https://static.intercomassets.com/avatars/435807/square_128/Me_profile_pic-1586948573.png?1586948573'
            lastMessage={chat.last_message.content}
            lastMessageTime={
              chat.last_message.created_at === undefined
                ? ''
                : `${dataTime.getHours()}:${dataTime.getMinutes()}`
            }
            infoNotification={null}
          />
        </div>
      );
    });
  };

  return (
    <Container>
      <SearchInput />
      <ContainerContactCard>{chats && renderChats(chats)}</ContainerContactCard>
    </Container>
  );
};
