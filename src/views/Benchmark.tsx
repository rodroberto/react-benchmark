import { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

import Filter from '../components/common/Filter';
import Table from '../components/common/Table';
import Modal from '../components/common/modal/Modal';
import AlertModal from '../components/common/modal/AlertModal';
import EditBenchmark from '../components/EditBenchmark';
import { BENCHMARK_TABLE_HEADER } from '../libs/constants';
import { api } from '../libs/api';
import { splitStringByCommas } from '../libs/utils';

const Benchmark = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [benchmarks, setBenchmarks] = useState<Benchmark[]>([]);
  const [filteredBenchmarks, setFilteredBenchmarks] = useState<Benchmark[]>([]);
  const [selectedBenchmark, setSelectedBenchmark] = useState<Benchmark>();
  const [isOpenAlert, setIsOpenAlert] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<number>();

  const toast = useToast();

  useEffect(() => {
    fetchBenchmarks();
  }, []);

  const fetchBenchmarks = async () => {
    const { data } = await api.get('/benchmark');
    const mappedData = data.map((item: Benchmark) => ({
      ...item,
      cpu: splitStringByCommas(item?.cpu as string),
      network: splitStringByCommas(item?.network as string),
    }))
    setBenchmarks(mappedData);
    setFilteredBenchmarks(mappedData);
  };

  const onSave = async ({
    name,
    unit,
    cpu,
    network,
    description,
  }: Omit<Benchmark, 'id'>) => {
    setIsOpenModal(false);
    if (selectedBenchmark) {
      const { data } = await api.post('/benchmark/update', {
        id: selectedBenchmark.id,
        name,
        unit,
        cpu,
        network,
        description,
      });
      toast({
        title: data.message,
        status: 'success',
      });
    } else {
      const { data } = await api.post('/benchmark/create', {
        name,
        unit,
        cpu,
        network,
        description,
      });
      toast({
        title: data.message,
        status: 'success',
      });
    }
    setSelectedBenchmark(undefined);
    fetchBenchmarks();
  };

  const onEdit = (benchmark: Benchmark) => {
    setIsOpenModal(true);
    setSelectedBenchmark(benchmark);
  };

  const onDelete = async () => {
    const { data } = await api.post('/benchmark/delete', { id: deleteId });
    toast({
      title: data.message,
      status: 'success',
    });
    setIsOpenAlert(false);
    fetchBenchmarks();
  };

  const onFilter = (value: string) => {
    setFilteredBenchmarks(
      benchmarks.filter((benchmark: Benchmark) =>
        benchmark.name.includes(value)
      )
    );
  };

  return (
    <Flex flexDirection='column'>
      <Filter
        title='Benchmarks'
        createText='Add a benchmark'
        onCreate={() => setIsOpenModal(true)}
        onFilter={onFilter}
      />
      <Table
        header={BENCHMARK_TABLE_HEADER}
        data={filteredBenchmarks.map(
          ({ id, name, unit, cpu, network, description }) => ({
            id,
            name,
            slug: name.toLowerCase(),
            unit,
            cpu,
            network,
            description,
          })
        )}
        onEdit={onEdit}
        onDelete={(id: number) => {
          setDeleteId(id);
          setIsOpenAlert(true);
        }}
      />
      <Modal
        title='benchmark'
        isOpen={isOpenModal}
        onClose={() => {
          setIsOpenModal(false);
          setSelectedBenchmark(undefined);
        }}
        size='5xl'
      >
        <EditBenchmark onSave={onSave} selectedBenchmark={selectedBenchmark} />
      </Modal>
      <AlertModal
        isOpen={isOpenAlert}
        onClose={() => setIsOpenAlert(false)}
        onConfirm={onDelete}
      />
    </Flex>
  );
};

export default Benchmark;
