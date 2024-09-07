import { Box, Card, Image, ListItem, Text } from '@chakra-ui/react';

interface Props {
  name: string;
  icon: string;
  backgroundColor: { left: string; right: string };
}

export default function CategoryItem({ name, icon, backgroundColor }: Props) {
  return (
    <ListItem
      w={44}
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: 'scale(1.1)' }}
      cursor="pointer"
      userSelect="none"
    >
      <Card
        direction="row"
        minH={20}
        borderRadius="xl"
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
