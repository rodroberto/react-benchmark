import { Flex } from '@chakra-ui/react';
import { useState } from 'react';

import Filter from '../components/common/Filter';
import Table from '../components/common/Table';
import Modal from '../components/common/modal/Modal';
import EditBoard from '../components/EditBoard';
import { BOARD_TABLE_HEADER } from '../libs/constants';

const Board = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <Flex flexDirection='column'>
      <Filter
        title='Boards'
        createText='Create a board'
        onCreate={() => setIsOpenModal(true)}
        onFilter={() => {}}
      />
      <Table header={BOARD_TABLE_HEADER} data={[]} />
      <Modal
        title='board'
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        size='xl'
      >
        <EditBoard onSave={() => setIsOpenModal(false)} />
      </Modal>
    </Flex>
  );
};

export default Board;
