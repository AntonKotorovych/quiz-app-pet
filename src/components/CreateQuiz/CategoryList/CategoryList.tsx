import { Box, List, Spinner } from '@chakra-ui/react';
import {
  CREATE_QUIZ_STEPS_CONFIG,
  DEFAULT_CATEGORY_ID,
} from 'constants/config/createQuizStepsConfig';
import { useFetchCategoriesQuery } from 'hooks/useFetchCategoriesQuery';
import { FormPayload, useCreateQuizFormStore } from 'hooks/useCreateQuizFormStore';
import ListItem from '../ListItem';

export default function CategoryList() {
  const { data, isSuccess, isLoading } = useFetchCategoriesQuery();

  const setFormElementValue = useCreateQuizFormStore(state => state.setFormElementValue);

  const handleCategoryClick = (payload: FormPayload) => { 
    setFormElementValue({ key: payload.key, value: payload.value });
  };

  return (
    <Box overflowY="scroll" height="500px" width="full">
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
            <ListItem
              keyType="category"
              id={DEFAULT_CATEGORY_ID}
              name="Any Category"
              icon={CREATE_QUIZ_STEPS_CONFIG.CATEGORIES[DEFAULT_CATEGORY_ID].icon}
              backgroundColor={
               CREATE_QUIZ_STEPS_CONFIG.CATEGORIES[DEFAULT_CATEGORY_ID].backgroundColor
              }
              onClick={() => setFormElementValue({ key: 'category', value: DEFAULT_CATEGORY_ID })}
          />
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
                  onClick={handleCategoryClick}
                />
              );
            })}
            </>
        )}
      </List>
    </Box>
  );
}
