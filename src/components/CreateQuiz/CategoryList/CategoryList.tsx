import { Box, Flex, List, Spinner } from '@chakra-ui/react';
import { useFetchCategoriesQuery } from 'hooks/useFetchCategoriesQuery';
import { mapCategoryFields } from 'utils/mapCategoryFields';
import WithQuizStoreFunctionality from 'components/WithQuizStoreFunctionality';

export default function CategoryList() {
  const { data, isSuccess, isLoading } = useFetchCategoriesQuery({
    select: response => mapCategoryFields(response),
  });

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
              <WithQuizStoreFunctionality
                keyType="category"
                id={category.id}
                name={category.name}
                key={category.id}
                icon={category.icon}
                backgroundColor={category.backgroundColor}
              />
            );
          })}
        </List>
      )}
    </Box>
  );
}
