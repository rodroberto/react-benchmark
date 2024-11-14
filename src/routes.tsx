import { Route, Routes } from 'react-router-dom';

import Board from './views/Board';
import Login from './views/Login';
import Manufacturer from './views/Manufacturer';
import Benchmark from './views/Benchmark';
import BenchmarkResult from './views/BenchmarkResult';
import { PATH } from './libs/constants';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={PATH.BOARD} element={<Board />} />
      <Route path={PATH.MANUFACTURER} element={<Manufacturer />} />
      <Route path={PATH.BENCHMARK} element={<Benchmark />} />
      <Route path={PATH.BENCHMARK_RESULT} element={<BenchmarkResult />} />
      <Route path={PATH.LOGIN} element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
