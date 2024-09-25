import { Flex, Heading, Text } from '@chakra-ui/react';

interface Props {
  title: string;
  message: string;
}

export default function Error({ title, message }: Props) {
  return (
    <Flex
      minW="300px"
      minH="100px"
      background="gray.600"
      border="2px"
      borderRadius="2xl"
      mt={2}
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading color="red.500">{title}</Heading>
      <Text color="red.500">{message}</Text>
    </Flex>
  );
}
