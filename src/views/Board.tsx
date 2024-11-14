import { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

import Filter from '../components/common/Filter';
import Table from '../components/common/Table';
import Modal from '../components/common/modal/Modal';
import AlertModal from '../components/common/modal/AlertModal';
import EditBoard from '../components/EditBoard';
import { BOARD_TABLE_HEADER } from '../libs/constants';
import { api } from '../libs/api';

const Board = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [boards, setBoards] = useState<Board[]>([]);
  const [filteredBoards, setFilteredBoards] = useState<Board[]>([]);
  const [selectedBoard, setSelectedBoard] = useState<Board>();
  const [isOpenAlert, setIsOpenAlert] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<number>();

  const toast = useToast();

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = async () => {
    const { data } = await api.get('/board');
    setBoards(data);
    setFilteredBoards(data);
  };

  const onSave = async (name: string, manufacturerId: number) => {
    setIsOpenModal(false);
    if (selectedBoard) {
      const { data } = await api.post('/board/update', {
        id: selectedBoard.id,
        name,
        manufacturerId,
      });
      toast({
        title: data.message,
        status: 'success',
      });
    } else {
      const { data } = await api.post('/board/create', {
        name,
        manufacturerId,
      });
      toast({
        title: data.message,
        status: 'success',
      });
    }
    setSelectedBoard(undefined);
    fetchBoards();
  };

  const onEdit = (targetBoard: Board) => {
    setIsOpenModal(true);
    setSelectedBoard(
      boards.find((board: Board) => board.id === targetBoard.id)
    );
  };

  const onDelete = async () => {
    const { data } = await api.post('/board/delete', { id: deleteId });
    toast({
      title: data.message,
      status: 'success',
    });
    setIsOpenAlert(false);
    fetchBoards();
  };

  const onFilter = (value: string) => {
    setFilteredBoards(
      boards.filter((board: Board) =>
        board.name.includes(value)
      )
    );
  };

  return (
    <Flex flexDirection='column'>
      <Filter
        title='Boards'
        createText='Add a board'
        onCreate={() => setIsOpenModal(true)}
        onFilter={onFilter}
      />
      <Table
        header={BOARD_TABLE_HEADER}
        data={filteredBoards.map((board: Board) => {
          const { manufacturerId, ...rest } = board;
          return rest;
        })}
        onEdit={onEdit}
        onDelete={(id: number) => {
          setDeleteId(id);
          setIsOpenAlert(true);
        }}
      />
      <Modal
        title='board'
        isOpen={isOpenModal}
        onClose={() => {
          setIsOpenModal(false);
          setSelectedBoard(undefined);
        }}
        size='xl'
      >
        <EditBoard onSave={onSave} selectedBoard={selectedBoard} />
      </Modal>
      <AlertModal
        isOpen={isOpenAlert}
        onClose={() => setIsOpenAlert(false)}
        onConfirm={onDelete}
      />
    </Flex>
  );
};

export default Board;
