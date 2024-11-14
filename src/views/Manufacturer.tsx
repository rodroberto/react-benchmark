import { Flex } from '@chakra-ui/react';
import { useState } from 'react';

import Filter from '../components/common/Filter';
import Table from '../components/common/Table';
import Modal from '../components/common/modal/Modal';
import EditManufacturer from '../components/EditManufacturer';
import { MANUFACTURER_TABLE_HEADER } from '../libs/constants';

const Manufacturer = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <Flex flexDirection='column'>
      <Filter
        title='Manufacturers'
        createText='Create a manufacturer'
        onCreate={() => setIsOpenModal(true)}
      />
      <Table header={MANUFACTURER_TABLE_HEADER} />
      <Modal
        title='manufacturer'
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        size='xl'
      >
        <EditManufacturer onSave={() => setIsOpenModal(false)} />
      </Modal>
    </Flex>
  );
};

export default Manufacturer;
