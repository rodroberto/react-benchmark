import { Button, ModalFooter as ChakraModalFooter } from '@chakra-ui/react';

interface ModalFooterProps {
  isDisabled: boolean;
  onSave: () => void;
}

const ModalFooter = ({ isDisabled, onSave }: ModalFooterProps) => {
  return (
    <ChakraModalFooter marginTop='16px'>
      <Button isDisabled={isDisabled} colorScheme='teal' onClick={onSave} minWidth='100px'>
        Save
      </Button>
    </ChakraModalFooter>
  );
};

export default ModalFooter;
