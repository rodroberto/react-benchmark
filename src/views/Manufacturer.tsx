import { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

import Filter from '../components/common/Filter';
import Table from '../components/common/Table';
import Modal from '../components/common/modal/Modal';
import AlertModal from '../components/common/modal/AlertModal';
import EditManufacturer from '../components/EditManufacturer';
import { MANUFACTURER_TABLE_HEADER } from '../libs/constants';
import { api } from '../libs/api';

const Manufacturer = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);
  const [filteredManufacturers, setFilteredManufacturers] = useState<
    Manufacturer[]
  >([]);
  const [selectedManufacturer, setSelectedManufacturer] =
    useState<Manufacturer>();
  const [isOpenAlert, setIsOpenAlert] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<number>();

  const toast = useToast();

  useEffect(() => {
    fetchManufacturers();
  }, []);

  const fetchManufacturers = async () => {
    const { data } = await api.get('/manufacturer');
    setManufacturers(data);
    setFilteredManufacturers(data);
  };

  const onSave = async (name: string) => {
    setIsOpenModal(false);
    if (selectedManufacturer) {
      const { data } = await api.post('/manufacturer/update', {
        id: selectedManufacturer.id,
        name,
      });
      toast({
        title: data.message,
        status: 'success',
      });
    } else {
      const { data } = await api.post('/manufacturer/create', { name });
      toast({
        title: data.message,
        status: 'success',
      });
    }
    setSelectedManufacturer(undefined);
    fetchManufacturers();
  };

  const onEdit = (manufacturer: Manufacturer) => {
    setIsOpenModal(true);
    setSelectedManufacturer(manufacturer);
  };

  const onDelete = async () => {
    const { data } = await api.post('/manufacturer/delete', { id: deleteId });
    toast({
      title: data.message,
      status: 'success',
    });
    setIsOpenAlert(false);
    fetchManufacturers();
  };

  const onFilter = (value: string) => {
    setFilteredManufacturers(
      manufacturers.filter((manufacturer: Manufacturer) =>
        manufacturer.name.includes(value)
      )
    );
  };

  return (
    <Flex flexDirection='column'>
      <Filter
        title='Manufacturers'
        createText='Create a manufacturer'
        onCreate={() => setIsOpenModal(true)}
        onFilter={onFilter}
      />
      <Table
        header={MANUFACTURER_TABLE_HEADER}
        data={filteredManufacturers}
        onEdit={onEdit}
        onDelete={(id: number) => {
          setDeleteId(id);
          setIsOpenAlert(true);
        }}
      />
      <Modal
        title='manufacturer'
        isOpen={isOpenModal}
        onClose={() => {
          setIsOpenModal(false);
          setSelectedManufacturer(undefined);
        }}
        size='xl'
      >
        <EditManufacturer
          onSave={onSave}
          selectedManufacturer={selectedManufacturer}
        />
      </Modal>
      <AlertModal
        isOpen={isOpenAlert}
        onClose={() => setIsOpenAlert(false)}
        onConfirm={onDelete}
      />
    </Flex>
  );
};

export default Manufacturer;
