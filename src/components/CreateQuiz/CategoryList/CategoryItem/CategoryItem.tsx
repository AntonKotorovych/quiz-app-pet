import { Box, Card, Image, ListItem, Text } from '@chakra-ui/react';
import { useCreateQuizFormStore } from 'hooks/useCreateQuizFormStore';

interface Props {
  id: number;
  name: string;
  icon: string;
  backgroundColor: { left: string; right: string };
  isSelected: boolean;
}

export default function CategoryItem({
  id,
  name,
  icon,
  backgroundColor,
  isSelected,
}: Props) {
  const setFormElementValue = useCreateQuizFormStore(
    state => state.setFormElementValue
  );

  const handleCategoryClick = () => {
    setFormElementValue({ key: 'category', value: id });
  };

  return (
    <ListItem
      w={44}
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: 'scale(1.1)' }}
      cursor="pointer"
      userSelect="none"
      borderRadius="xl"
      border={isSelected ? '7px solid' : '2px solid'}
      borderColor={isSelected ? 'teal.400' : 'gray.600'}
      overflow="hidden"
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
    </ListItem>
  );
}
