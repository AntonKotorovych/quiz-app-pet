import { Box, Flex, List, Spinner } from '@chakra-ui/react';
import { useFetchCategoriesQuery } from 'hooks/useFetchCategoriesQuery';
import { mapCategoryFields } from 'utils/mapCategoryFields';
import CreateQuizListItem from 'components/CreateQuizListItem';

export default function CategoryList() {
  const { data, isSuccess, isLoading } = useFetchCategoriesQuery({
    select: mapCategoryFields,
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
              <CreateQuizListItem keyType="category" key={category.id} {...category} />
            );
          })}
        </List>
      )}
    </Box>
  );
}
