import {
  Box,
  Card,
  Image,
  ListItem as ChakraListItem,
  Text,
  useTheme,
} from '@chakra-ui/react';
import { get } from '@chakra-ui/utils';
import { ElementId } from 'constants/config/createQuizStepsConfig';
import {
  FormPayload,
  QuizFormKeys,
  useCreateQuizFormStore,
} from 'hooks/useCreateQuizFormStore';

interface Props {
  id: ElementId;
  name: string;
  icon: string;
  backgroundColor: { left: string; right: string };
  keyType: QuizFormKeys;
  onClick: ({ key, value }: FormPayload) => void;
}

export default function ListItem({
  id,
  name,
  icon,
  backgroundColor,
  keyType,
  onClick,
}: Props) {
  const currentElement = useCreateQuizFormStore(state => state[keyType]);

  const theme = useTheme();
  const leftBackgroundColor = get(
    theme.colors,
    backgroundColor.left,
    backgroundColor.left
  );
  const rightBackgroundColor = get(
    theme.colors,
    backgroundColor.right,
    backgroundColor.right
  );

  const handleOnClick = () => onClick({ key: keyType, value: id });

  const isSelected = currentElement === id;

  return (
    <ChakraListItem
      minW={44}
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: 'scale(1.1)' }}
      cursor="pointer"
      userSelect="none"
      borderRadius="xl"
      border="2px"
      transform={isSelected ? 'scale(1.1)' : ''}
      borderColor={isSelected ? 'yellow.600' : 'gray.600'}
      boxShadow={isSelected ? 'lg' : ''}
      overflow="hidden"
      onClick={handleOnClick}
    >
      <Box as="button" w="full" textAlign="left">
        <Card
          direction="row"
          minH={20}
          background={`linear-gradient(to right, ${leftBackgroundColor}, ${rightBackgroundColor})`}
        >
          <Box display="flex" justifyContent="center" p={2} gap={2}>
            <Image src={icon} width={10} height={10} />
            <Text fontSize="sm" fontWeight="bold">
              {name}
            </Text>
          </Box>
        </Card>
      </Box>
    </ChakraListItem>
  );
}
