import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
} from '@chakra-ui/react';

import ModalFooter from './common/modal/ModalFooter';

interface EditManufacturerProps {
  onSave: () => void;
}

const EditManufacturer = ({ onSave }: EditManufacturerProps) => {
  return (
    <>
      <ModalBody>
        <Flex flexDirection='column'>
          <FormControl marginBottom='16px'>
            <FormLabel>Manufacturer Name</FormLabel>
            <Input />
          </FormControl>
        </Flex>
      </ModalBody>

      <ModalFooter onSave={onSave} />
    </>
  );
};

export default EditManufacturer;
