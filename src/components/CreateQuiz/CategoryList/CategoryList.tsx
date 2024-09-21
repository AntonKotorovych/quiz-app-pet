import { Box, List, Spinner } from '@chakra-ui/react';
import {
  CREATE_QUIZ_STEPS_CONFIG,
  DEFAULT_CATEGORY_ID,
} from 'constants/config/createQuizStepsConfig';
import { useFetchCategoriesQuery } from 'hooks/useFetchCategoriesQuery';
import ListItem from '../ListItem';

const ANY_CATEGORY_ITEM = (
  <ListItem
    keyType="category"
    id={DEFAULT_CATEGORY_ID}
    name="Any Category"
    icon={CREATE_QUIZ_STEPS_CONFIG.CATEGORIES[DEFAULT_CATEGORY_ID].icon}
    backgroundColor={
      CREATE_QUIZ_STEPS_CONFIG.CATEGORIES[DEFAULT_CATEGORY_ID].backgroundColor
    }
  />
);

export default function CategoryList() {
  const { data, isSuccess, isLoading } = useFetchCategoriesQuery();

  return (
    <Box overflowY="scroll" height="350px" width="full">
      <List
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        gap={4}
        overflow="hidden"
        p={4}
      >
        {isLoading && <Spinner size="xl" />}
        {isSuccess && (
          <>
            {ANY_CATEGORY_ITEM}
            {data?.map(category => {
              const existingCategory = CREATE_QUIZ_STEPS_CONFIG.CATEGORIES[category.id];

              return (
                <ListItem
                  keyType="category"
                  id={category.id}
                  name={category.name}
                  key={category.id}
                  icon={
                    existingCategory.icon ||
                    CREATE_QUIZ_STEPS_CONFIG.CATEGORIES[DEFAULT_CATEGORY_ID].icon
                  }
                  backgroundColor={
                    existingCategory.backgroundColor ||
                    CREATE_QUIZ_STEPS_CONFIG.CATEGORIES[DEFAULT_CATEGORY_ID].backgroundColor
                  }
                />
              );
            })}
          </>
        )}
      </List>
    </Box>
  );
}
