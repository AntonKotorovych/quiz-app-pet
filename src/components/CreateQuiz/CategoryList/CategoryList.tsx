import { Box, Flex, List, Spinner } from '@chakra-ui/react';
import { useFetchCategoriesQuery } from 'hooks/useFetchCategoriesQuery';
import { FormPayload, useCreateQuizFormStore } from 'hooks/useCreateQuizFormStore';
import { mapCategoryFields } from 'utils/mapCategoryFields';
import ListItem from '../ListItem';

export default function CategoryList() {
  const { data, isSuccess, isLoading } = useFetchCategoriesQuery({
    select: response => mapCategoryFields(response),
  });

  const setFormElementValue = useCreateQuizFormStore(state => state.setFormElementValue);

  const handleCategoryClick = (payload: FormPayload) => {
    setFormElementValue({ key: payload.key, value: payload.value });
  };

  return (
    <Box overflowY={isLoading ? undefined : 'scroll'} height="520px" width="full">
      {isLoading && (
        <Flex height="full" width="full" justifyContent="center" alignItems="center">
          <Spinner size="xl" />
        </Flex>
      )}
      {isSuccess && (
        <List
          display="grid"
          gridTemplateColumns="repeat(4, 1fr)"
          gap={4}
          overflow="hidden"
          p={6}
        >
          {data?.map(category => {
            return (
              <ListItem
                keyType="category"
                id={category.id}
                name={category.name}
                key={category.id}
                icon={category.icon}
                backgroundColor={category.backgroundColor}
                onClick={handleCategoryClick}
              />
            );
          })}
        </List>
      )}
    </Box>
  );
}
