import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Container, Input, TableContainer } from './SearchInput.style';
export const SearchInput = () => {
  return (
    <Container>
      <TableContainer>
        <tr>
          <td>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              fontSize='14px'
              color='#424242'
            />
          </td>
          <td>
            <Input type='text' placeholder='Search' />
          </td>
        </tr>
      </TableContainer>
    </Container>
  );
};
