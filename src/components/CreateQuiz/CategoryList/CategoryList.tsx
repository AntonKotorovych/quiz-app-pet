import { List } from '@chakra-ui/react';
import { CATEGORIES_CONFIG } from 'constants/config/categoriesConfig';
import CategoryItem from './CategoryItem';

export default function CategoryList() {
  return (
    <List spacing={5}>
      {CATEGORIES_CONFIG.map(category => (
        <CategoryItem
          name={category.name}
          key={category.id}
          icon={category.icon}
          backgroundColor={category.backgroundColor}
        />
      ))}
    </List>
  );
}
