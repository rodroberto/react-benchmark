import {
  Card,
  CardBody,
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

interface TableProps {
  header: string[];
}

const Table = ({ header }: TableProps) => {
  return (
    <Card>
      <CardBody>
        <TableContainer>
          <ChakraTable variant='simple'>
            <Thead>
              <Tr>
                {header.map((item: string) => (
                  <Th key={item}>{item}</Th>
                ))}
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>
                  <IconButton
                    variant='outline'
                    colorScheme='teal'
                    aria-label='Edit'
                    icon={<EditIcon />}
                    marginRight='10px'
                    size='sm'
                  />
                  <IconButton
                    variant='outline'
                    colorScheme='red'
                    aria-label='Delete'
                    icon={<DeleteIcon />}
                    size='sm'
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td>
                  <IconButton
                    variant='outline'
                    colorScheme='teal'
                    aria-label='Edit'
                    icon={<EditIcon />}
                    marginRight='10px'
                    size='sm'
                  />
                  <IconButton
                    variant='outline'
                    colorScheme='red'
                    aria-label='Delete'
                    icon={<DeleteIcon />}
                    size='sm'
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td>
                  <IconButton
                    variant='outline'
                    colorScheme='teal'
                    aria-label='Edit'
                    icon={<EditIcon />}
                    marginRight='10px'
                    size='sm'
                  />
                  <IconButton
                    variant='outline'
                    colorScheme='red'
                    aria-label='Delete'
                    icon={<DeleteIcon />}
                    size='sm'
                  />
                </Td>
              </Tr>
            </Tbody>
          </ChakraTable>
        </TableContainer>
      </CardBody>
    </Card>
  );
};

export default Table;
