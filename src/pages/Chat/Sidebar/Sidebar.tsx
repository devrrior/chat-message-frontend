import { Chat } from '../../../interfaces/chatInterfaces';
import { ContactCard } from './components/ContactCard/ContactCard';
import { PersonalContactCard } from './components/PersonalContactCard/PersonalContactCard';
import { SearchInput } from './components/SearchInput/SearchInput';
import {
  Container,
  ContainerContactCard,
  ContainerPersonalCard,
} from './Sidebar.style';

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
                : `${String(dataTime.getHours()).padStart(2, '0')}:${String(
                    dataTime.getMinutes()
                  ).padStart(2, '0')}`
            }
            lastMessageContact={chat.last_message.contact}
            infoNotification={chat.unread}
          />
        </div>
      );
    });
  };

  return (
    <Container>
      <div style={{ width: '100%' }}>
        <SearchInput />
        <ContainerContactCard>
          {chats && renderChats(chats)}
        </ContainerContactCard>
      </div>
      <ContainerPersonalCard>
        <PersonalContactCard
          contactName='Fernando Guerrero'
          urlProfilePic='https://static.intercomassets.com/avatars/435807/square_128/Me_profile_pic-1586948573.png?1586948573'
        />
      </ContainerPersonalCard>
    </Container>
  );
};
