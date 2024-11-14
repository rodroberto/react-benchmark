import { useEffect, useState } from 'react';
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
} from '@chakra-ui/react';
import Select from 'react-select';

import ModalFooter from './common/modal/ModalFooter';
import { api } from '../libs/api';

interface EditBoardProps {
  onSave: (name: string, manufacturerId: number) => void;
  selectedBoard?: Board;
}

const EditBoard = ({ onSave, selectedBoard }: EditBoardProps) => {
  const [name, setName] = useState<string>(selectedBoard?.name || '');
  const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);
  const [manufacturer, setManufacturer] = useState<Manufacturer>();

  useEffect(() => {
    fetchManufacturers();
  }, []);

  const fetchManufacturers = async () => {
    const { data } = await api.get('/manufacturer');
    setManufacturers(data);
    setManufacturer(
      data.find(({ id }: Manufacturer) => id === selectedBoard?.manufacturerId)
    );
  };

  return (
    <>
      <ModalBody>
        <Flex flexDirection='column'>
          <FormControl marginBottom='16px'>
            <FormLabel>Board Name</FormLabel>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Manufacturer</FormLabel>
            <Select
              options={manufacturers.map(({ id, name }) => ({
                value: id,
                label: name,
              }))}
              value={{ value: manufacturer?.id, label: manufacturer?.name }}
              onChange={(e) => {
                setManufacturer({ id: e?.value ?? 0, name: e?.label ?? '' });
              }}
            />
          </FormControl>
        </Flex>
      </ModalBody>

      <ModalFooter
        isDisabled={!name || !manufacturer}
        onSave={() => manufacturer && onSave(name, manufacturer.id)}
      />
    </>
  );
};

export default EditBoard;
