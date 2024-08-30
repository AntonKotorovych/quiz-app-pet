import { chakra, Container, Flex, Text } from '@chakra-ui/react';

export const HeaderContainer = chakra(Container, {
  baseStyle: {
    w: '100%',
    background: 'green.400',
    border: '2px',
    borderColor: 'gray.500',
    borderRadius: '2xl',
    mt: 1,
    boxShadow: '2xl',
  },
});

export const NavBar = chakra(Flex, {
  baseStyle: {
    w: '95%',
    m: 'auto',
    p: '5px 0',
    alignItems: 'center',
  },
});

export const StyledText = chakra(Text, {
  baseStyle: {
    fontWeight: 'bold',
    transition: 'color 0.15s ease',
    _hover: { color: 'white', cursor: 'pointer' },
  },
});
