import { ContactCard } from './components/ContactCard/ContactCard';
import { SearchInput } from './components/SearchInput/SearchInput';
import { Container } from './Sidebar.style';

export const Sidebar = () => {
  return (
    <Container>
      <br />
      <SearchInput />
      <br />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </Container>
  );
};
