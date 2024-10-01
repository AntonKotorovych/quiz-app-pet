import { chakra, Flex } from '@chakra-ui/react';

export const ErrorContainer = chakra(Flex, {
  baseStyle: {
    minW: '300px',
    minH: '100px',
    background: 'gray.600',
    border: '2px',
    borderRadius: '2xl',
    mt: 2,
    flexDir: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
