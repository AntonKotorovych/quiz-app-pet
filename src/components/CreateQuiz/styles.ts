import { chakra, Container } from '@chakra-ui/react';

export const CreateQuizContainer = chakra(Container, {
  baseStyle: {
    minW: '900px',
    h: 700,
    bgColor: 'whiteAlpha.500',
    mt: 8,
    border: '4px',
    borderColor: 'blackAlpha.600',
    borderRadius: '4xl',
    boxShadow: '2xl',
    maxW: 'none',
  },
});
