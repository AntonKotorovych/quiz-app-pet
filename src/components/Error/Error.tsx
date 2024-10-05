import { Heading, Text } from '@chakra-ui/react';
import { ErrorContainer } from './styles';

interface Props {
  title: string;
  message: string;
}

export default function Error({ title, message }: Props) {
  return (
    <ErrorContainer>
      <Heading color="red" size="2xl">
        {title}
      </Heading>
      <Text color="red">{message}</Text>
    </ErrorContainer>
  );
}
