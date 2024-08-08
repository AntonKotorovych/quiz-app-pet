import { chakra, Flex } from '@chakra-ui/react';

export const ButtonContainer = chakra(Flex, {
  baseStyle: {
    mt: '2rem',
    w: 'full',
    justifyContent: 'space-around',
    fontSize: 'lg',
    alignItems: 'center',
  },
});
