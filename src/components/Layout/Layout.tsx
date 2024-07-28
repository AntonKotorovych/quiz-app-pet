import { Outlet } from 'react-router-dom';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Header from 'components/Header';
import { theme } from 'styles/theme';

export default function Layout() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Header />
        <Outlet />
      </Box>
    </ChakraProvider>
  );
}
