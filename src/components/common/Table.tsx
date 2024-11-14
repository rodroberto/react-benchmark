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

interface TableProps<T> {
  header: string[];
  data: T[];
  onEdit?: (item: T) => void;
  onDelete?: (item: number) => void;
}

const Table = <T extends { id: number }>({
  header,
  data,
  onEdit,
  onDelete,
}: TableProps<T>) => {
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
              {data.map((row) => (
                <Tr key={row.id}>
                  {Object.values(row).map((value, index) => (
                    <Td key={index}>{value}</Td>
                  ))}
                  <Td>
                    {/* Action buttons */}
                    {onEdit && (
                      <IconButton
                        variant='outline'
                        colorScheme='teal'
                        aria-label='Edit'
                        icon={<EditIcon />}
                        marginRight='10px'
                        size='sm'
                        onClick={() => onEdit(row)}
                      />
                    )}
                    {onDelete && (
                      <IconButton
                        variant='outline'
                        colorScheme='red'
                        aria-label='Delete'
                        icon={<DeleteIcon />}
                        size='sm'
                        onClick={() => onDelete(row.id)}
                      />
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </ChakraTable>
        </TableContainer>
      </CardBody>
    </Card>
  );
};

export default Table;
