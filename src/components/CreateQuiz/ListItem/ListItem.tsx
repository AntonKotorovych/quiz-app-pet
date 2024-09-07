import {
  Box,
  Card,
  Image,
  ListItem as ChakraListItem,
  Text,
} from '@chakra-ui/react';
import { useCreateQuizFormStore } from 'hooks/useCreateQuizFormStore';

interface Props {
  id: number;
  name: string;
  icon: string;
  backgroundColor: { left: string; right: string };
}

export default function ListItem({ id, name, icon, backgroundColor }: Props) {
  const setFormElementValue = useCreateQuizFormStore(
    state => state.setFormElementValue
  );
  const selectedCategory = useCreateQuizFormStore(state => state.category);

  const handleCategoryClick = () => {
    setFormElementValue({ key: 'category', value: id });
  };

  const isSelected = selectedCategory === id;

  return (
    <ChakraListItem
      w={44}
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: 'scale(1.1)' }}
      cursor="pointer"
      userSelect="none"
      borderRadius="xl"
      border="2px solid"
      transform={isSelected ? 'scale(1.1)' : ''}
      borderColor={isSelected ? 'yellow.400' : 'gray.600'}
      boxShadow={isSelected ? 'dark-lg' : ''}
      overflow="hidden"
      outline={isSelected ? '4px solid' : ''}
      outlineColor={isSelected ? 'orange.300' : ''}
      onClick={handleCategoryClick}
    >
      <Card
        direction="row"
        minH={20}
        background={`linear-gradient(to right, ${backgroundColor.left}, ${backgroundColor.right})`}
      >
        <Box display="flex" justifyContent="center" p={2} gap={2}>
          <Image src={icon} width={10} height={10} />
          <Text fontSize="sm" fontWeight="bold">
            {name}
          </Text>
        </Box>
      </Card>
    </ChakraListItem>
  );
}
