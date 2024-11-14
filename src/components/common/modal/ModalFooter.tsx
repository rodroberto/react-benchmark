import { Button, ModalFooter as ChakraModalFooter } from '@chakra-ui/react';

interface ModalFooterProps {
  onSave: () => void;
}

const ModalFooter = ({ onSave }: ModalFooterProps) => {
  return (
    <ChakraModalFooter marginTop='16px'>
      <Button colorScheme='teal' onClick={onSave} minWidth='100px'>
        Save
      </Button>
    </ChakraModalFooter>
  );
};

export default ModalFooter;
