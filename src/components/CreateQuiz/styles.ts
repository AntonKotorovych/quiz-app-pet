import { chakra, Container } from '@chakra-ui/react';

export const CreateQuizContainer = chakra(Container, {
  baseStyle: {
    w: 'full',
    h: 'calc(100vh - 7rem)',
    bgColor: 'whiteAlpha.500',
    mt: 8,
    border: '4px',
    borderColor: 'blackAlpha.600',
    borderRadius: '4xl',
    boxShadow: '2xl',
    maxW: 'none',
  },
});
