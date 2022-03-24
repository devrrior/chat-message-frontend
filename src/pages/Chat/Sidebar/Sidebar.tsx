import { ContactCard } from './components/ContactCard/ContactCard';
import { SearchInput } from './components/SearchInput/SearchInput';

export const Sidebar = () => {
  return (
    <div>
      <h1>Sidebar</h1>
      <SearchInput />
      <ContactCard />
    </div>
  );
};
