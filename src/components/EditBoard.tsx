import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  Select,
} from '@chakra-ui/react';

import ModalFooter from './common/modal/ModalFooter';

interface EditBoardProps {
  onSave: () => void;
}

const EditBoard = ({ onSave }: EditBoardProps) => {
  return (
    <>
      <ModalBody>
        <Flex flexDirection='column'>
          <FormControl marginBottom='16px'>
            <FormLabel>Board Name</FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>Manufacturer</FormLabel>
            <Select>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </FormControl>
        </Flex>
      </ModalBody>

      <ModalFooter isDisabled onSave={onSave} />
    </>
  );
};

export default EditBoard;
