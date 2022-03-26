import { Container, Input, TableContainer } from './SearchInput.style';
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchInput = () => {
  return (
    <Container>
      <TableContainer>
        <tr>
          <td style={{ width: '30px', paddingTop: '6px' }}>
            <AiOutlineSearch fontSize='18px' color='#424242' />
          </td>
          <td>
            <Input type='text' placeholder='Search' />
          </td>
        </tr>
      </TableContainer>
    </Container>
  );
};
