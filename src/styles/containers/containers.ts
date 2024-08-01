import { chakra, Container, keyframes } from '@chakra-ui/react';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const AuthContainer = chakra(Container, {
  baseStyle: {
    mt: '2rem',
    border: '4px solid',
    borderColor: 'gray.400',
    borderRadius: '4xl',
    bg: 'whiteAlpha.600',
    width: '45%',
    minW: '35rem',
    p: '4rem',
    fontSize: '2xl',
    fontWeight: 'bold',
    boxShadow: '2xl',
    animation: `${fadeIn} 0.4s ease-in-out forwards`,
  },
});
