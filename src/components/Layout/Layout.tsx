import { Outlet } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import Header from 'components/Header';

export default function Layout() {
  return (
    <Container centerContent maxW="85%" m="auto">
      <Header />
      <Outlet />
    </Container>
  );
}
