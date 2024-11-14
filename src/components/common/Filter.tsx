import { SearchIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';

interface FilterProps {
  title: string;
  createText: string;
  onCreate: () => void;
}

const Filter = ({ title, createText, onCreate }: FilterProps) => {
  return (
    <>
      <Text fontWeight='bold' fontSize='22px' paddingBottom='30px'>
        {title}
      </Text>
      <Flex
        marginBottom='20px'
        alignItems='flex-end'
        justifyContent='space-between'
      >
        <InputGroup maxW='400px'>
          <InputLeftElement pointerEvents='none'>
            <SearchIcon color='gray.300' />
          </InputLeftElement>
          <Input placeholder={`Search for ${title.toLowerCase()}`} />
        </InputGroup>
        <Button colorScheme='teal' onClick={onCreate}>
          {createText}
        </Button>
      </Flex>
    </>
  );
};

export default Filter;
