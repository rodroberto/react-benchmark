import AppRoutes from './routes';

import './App.css';
import Header from './components/Header';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <div className='App'>
      <Header />
      <Box padding='30px' backgroundColor='gray.50' height='calc(100vh - 84px)'>
        <AppRoutes />
      </Box>
    </div>
  );
}

export default App;
