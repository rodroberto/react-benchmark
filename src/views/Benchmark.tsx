import { Flex } from '@chakra-ui/react';
import { useState } from 'react';

import Filter from '../components/common/Filter';
import Table from '../components/common/Table';
import Modal from '../components/common/modal/Modal';
import EditBenchmark from '../components/EditBenchmark';
import { BENCHMARK_TABLE_HEADER } from '../libs/constants';

const Benchmark = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <Flex flexDirection='column'>
      <Filter
        title='Benchmark Types'
        createText='Add a benchmark type'
        onCreate={() => setIsOpenModal(true)}
      />
      <Table header={BENCHMARK_TABLE_HEADER} />
      <Modal
        title='benchmark type'
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        size='6xl'
      >
        <EditBenchmark onSave={() => setIsOpenModal(false)} />
      </Modal>
    </Flex>
  );
};

export default Benchmark;
