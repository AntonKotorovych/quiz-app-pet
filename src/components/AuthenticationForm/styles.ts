import { chakra, Flex } from '@chakra-ui/react';

export const ButtonContainer = chakra(Flex, {
  baseStyle: {
    w: 'full',
    fontSize: 'lg',
    flexDir: 'column',
    justifyContent: 'space-between',
    gap: '1',
  },
});
