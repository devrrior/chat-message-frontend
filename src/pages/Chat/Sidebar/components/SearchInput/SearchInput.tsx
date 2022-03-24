import { Container, Input } from './SearchInput.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
export const SearchInput = () => {
  return (
    <Container className='box'>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        fontSize='12px'
        color='#424242'
      />
      <Input type='text' placeholder='Search' />
    </Container>
  );
};
