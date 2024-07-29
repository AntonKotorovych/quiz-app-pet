import { Outlet } from 'react-router-dom';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import Header from 'components/Header';
import { theme } from 'styles/theme';

export default function Layout() {
  return (
    <ChakraProvider theme={theme}>
      <Flex justifyContent="center" maxW="85%" m="auto">
        <Header />
        <Outlet />
      </Flex>
    </ChakraProvider>
  );
}
