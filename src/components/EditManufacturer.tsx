import { useState } from 'react';

import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
} from '@chakra-ui/react';

import ModalFooter from './common/modal/ModalFooter';

interface EditManufacturerProps {
  onSave: (name: string) => void;
  selectedManufacturer?: Manufacturer;
}

const EditManufacturer = ({
  onSave,
  selectedManufacturer,
}: EditManufacturerProps) => {
  const [name, setName] = useState<string>(selectedManufacturer?.name || '');

  return (
    <>
      <ModalBody>
        <Flex flexDirection='column'>
          <FormControl marginBottom='16px'>
            <FormLabel>Manufacturer Name</FormLabel>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
        </Flex>
      </ModalBody>

      <ModalFooter isDisabled={!name} onSave={() => onSave(name)} />
    </>
  );
};

export default EditManufacturer;
