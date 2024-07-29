import { ButtonProps, Button as ChakraButton } from '@chakra-ui/react';

export default function Button({ children }: ButtonProps) {
  return <ChakraButton colorScheme="yellow">{children}</ChakraButton>;
}
