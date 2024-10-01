import { Heading, Text } from '@chakra-ui/react';
import { ErrorContainer } from './styles';

interface Props {
  title: string;
  message: string;
}

export default function Error({ title, message }: Props) {
  return (
    <ErrorContainer>
      <Heading color="red.500">{title}</Heading>
      <Text color="red.500">{message}</Text>
    </ErrorContainer>
  );
}
