import { chakra, Flex } from '@chakra-ui/react';

export const ErrorContainer = chakra(Flex, {
  baseStyle: {
    minW: 'full',
    minH: '200px',
    background: 'gray.700',
    border: '2px',
    borderRadius: '2xl',
    mt: 2,
    fontSize: '3xl',
    flexDir: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
