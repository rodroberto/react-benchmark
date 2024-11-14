import { Flex, Text } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AUTHENTICATED_PATH } from '../libs/constants';

const linkStyle = {
  fontSize: '16px',
  paddingY: 4,
  marginLeft: 30,
  cursor: 'pointer',
  fontWeight: 'semibold',
  transition: 'all 0.3s ease',
  _hover: {
    color: 'blue.500',
    borderBottom: '2px solid blue',
  },
};

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Flex
      padding='12px 30px'
      alignItems='center'
      borderBottom='2px solid #ddd'
      boxShadow='0 2px 10px rgba(0, 0, 0, 0.1)'
      justifyContent='space-between'
    >
      <Text
        fontSize='24px'
        fontWeight='bold'
        paddingBottom='8px'
        color='gray.800'
      >
        Benchmark Admin
      </Text>

      <Flex alignItems='center'>
        {AUTHENTICATED_PATH.map((path: string, index: number) => (
          <Text
            key={index}
            onClick={() => navigate(path)}
            {...linkStyle}
            color={isActive(path) ? 'blue.500' : 'gray.700'}
            borderBottom={
              isActive(path) ? '2px solid blue' : '2px solid transparent'
            }
          >
            {path.split('/').pop()?.replace('-', ' ').toUpperCase()}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};

export default Header;
