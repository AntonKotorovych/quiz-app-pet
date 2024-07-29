import { ButtonProps, Button as ChakraButton } from '@chakra-ui/react';

export default function Button({ children, colorScheme }: ButtonProps) {
  return <ChakraButton colorScheme={colorScheme}>{children}</ChakraButton>;
}
