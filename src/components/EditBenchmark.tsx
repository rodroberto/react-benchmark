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
import { useState } from 'react';
import { joinArrayWithCommasNoSpace } from '../libs/utils';

interface EditBenchmarkProps {
  onSave: (benchmark: Omit<Benchmark, 'id'>) => void;
  selectedBenchmark?: Benchmark;
}

const EditBenchmark = ({ onSave, selectedBenchmark }: EditBenchmarkProps) => {
  const [name, setName] = useState<string>(selectedBenchmark?.name ?? '');
  const [unit, setUnit] = useState<string>(selectedBenchmark?.unit ?? '');
  const [description, setDescription] = useState<string>(
    selectedBenchmark?.description ?? ''
  );
  const [cpu, setCpu] = useState<string[]>(selectedBenchmark?.cpu as string[]);
  const [network, setNetwork] = useState<string[]>(
    selectedBenchmark?.network as string[]
  );

  return (
    <>
      <ModalBody>
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={12}>
          <FormControl>
            <FormLabel>Benchmark Name</FormLabel>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Unit (e.g points, MB/s)</FormLabel>
            <Input value={unit} onChange={(e) => setUnit(e.target.value)} />
          </FormControl>
        </SimpleGrid>
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={12} marginY='16px'>
          <FormControl>
            <FormLabel>CPU Options</FormLabel>
            <CheckboxGroup
              colorScheme='green'
              value={cpu}
              onChange={(e: string[]) => setCpu(e)}
            >
              <Stack spacing={1} direction='column'>
                <Checkbox value='Single Core'>Has Single Core Score</Checkbox>
                <Checkbox value='Multi Core'>Has Multi Core Score</Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Network Options</FormLabel>
            <CheckboxGroup
              colorScheme='green'
              value={network}
              onChange={(e: string[]) => setNetwork(e)}
            >
              <Stack spacing={1} direction='column'>
                <Checkbox value='Download'>Has Download Score</Checkbox>
                <Checkbox value='Upload'>Has Upload Score</Checkbox>
                <Checkbox value='Bidrectional'>Has Bidirectional Score</Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>
        </SimpleGrid>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
      </ModalBody>

      <ModalFooter
        isDisabled={!name || !unit}
        onSave={() =>
          onSave({
            name,
            unit,
            cpu: joinArrayWithCommasNoSpace(cpu),
            network: joinArrayWithCommasNoSpace(network),
            description,
          })
        }
      />
    </>
  );
};

export default EditBenchmark;
