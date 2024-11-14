import {
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  SimpleGrid,
  Stack,
  Textarea,
} from '@chakra-ui/react';

import ModalFooter from './common/modal/ModalFooter';

interface EditBenchmarkProps {
  onSave: () => void;
}

const EditBenchmark = ({ onSave }: EditBenchmarkProps) => {
  return (
    <>
      <ModalBody>
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={12}>
          <FormControl>
            <FormLabel>Benchmark Name</FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>Unit (e.g points, MB/s)</FormLabel>
            <Input />
          </FormControl>
        </SimpleGrid>
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={12} marginY='16px'>
          <FormControl>
            <FormLabel>CPU Options</FormLabel>
            <CheckboxGroup colorScheme='green'>
              <Stack spacing={1} direction='column'>
                <Checkbox value='naruto'>Has Single Core Score</Checkbox>
                <Checkbox value='kakashi'>Has Multi Core Score</Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Network Options</FormLabel>
            <CheckboxGroup colorScheme='green'>
              <Stack spacing={1} direction='column'>
                <Checkbox value='naruto'>Has Download Score</Checkbox>
                <Checkbox value='kakashi'>Has Upload Score</Checkbox>
                <Checkbox value='kakashi'>Has Bidirectional Score</Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>
        </SimpleGrid>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea />
        </FormControl>
      </ModalBody>

      <ModalFooter onSave={onSave} />
    </>
  );
};

export default EditBenchmark;
