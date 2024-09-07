import { Box, List } from '@chakra-ui/react';
import { CATEGORIES_CONFIG } from 'constants/config/categoriesConfig';
import CategoryItem from './CategoryItem';

export default function CategoryList() {
  return (
    <Box overflowY="scroll" height="350px" width="full">
      <List
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        gap={4}
        overflow="hidden"
        p={4}
      >
        {CATEGORIES_CONFIG.map(category => (
          <CategoryItem
            id={category.id}
            name={category.name}
            key={category.id}
            icon={category.icon}
            backgroundColor={category.backgroundColor}
            isSelected={true}
          />
        ))}
      </List>
    </Box>
  );
}
